import { TOKEN_GATE_ENABLED } from './config';
import {
  mobileWalletHint,
  usesMobileWalletBridge,
  isMobileWalletSigned,
  getMobileWalletAddress,
} from './mobileWallet';
import {
  consumePhantomRejectMessage,
  handlePhantomCallback,
  startPhantomConnect,
  startPhantomSign,
  clearMobileWalletSession,
} from './phantomMobile';
import { clearCachedVerify } from './verifyCache';
import { verifyHoldingApi } from './verifyApi';
import { withTimeout } from './fetchUtils';
import {
  getWalletProvider,
  signAccessMessage,
  walletAddress,
  walletErrorMessage,
  type SolanaWalletProvider,
} from './walletProvider';

function gateMessage(value: unknown, fallback: string): string {
  if (typeof value === 'string' && value.trim()) return value;
  return fallback;
}

export type GateStatus =
  | 'bypassed'
  | 'disconnected'
  | 'connecting'
  | 'signing'
  | 'checking'
  | 'granted'
  | 'denied'
  | 'error';

export interface GateSnapshot {
  status: GateStatus;
  walletAddress: string | null;
  tokenSymbol: string;
  tokenBalance: number | null;
  tokenPriceUsd: number | null;
  holdingUsd: number | null;
  message: string;
}

type GateListener = (snapshot: GateSnapshot) => void;

const INITIAL_SNAPSHOT: GateSnapshot = {
  status: TOKEN_GATE_ENABLED ? 'disconnected' : 'bypassed',
  walletAddress: null,
  tokenSymbol: 'GAME',
  tokenBalance: null,
  tokenPriceUsd: null,
  holdingUsd: null,
  message: TOKEN_GATE_ENABLED
    ? mobileWalletHint()
    : 'Token gate bypassed for local development.',
};

const CHECKING_WATCHDOG_MS = 10000;
const WALLET_ACTION_TIMEOUT_MS = 120_000;

export class TokenGate {
  private snapshot: GateSnapshot = { ...INITIAL_SNAPSHOT };
  private listeners = new Set<GateListener>();
  private provider: SolanaWalletProvider | null = null;
  private signedWallet: string | null = null;
  private verifySeq = 0;
  private verifyPromise: Promise<boolean> | null = null;
  private checkingWatchdog: ReturnType<typeof setTimeout> | null = null;
  private disconnecting = false;
  private boundOnWalletChange = () => {
    if (this.disconnecting) return;
    this.signedWallet = null;
    this.verifySeq += 1;
    void this.verify();
  };

  constructor() {
    if (!TOKEN_GATE_ENABLED) return;
    this.provider = getWalletProvider();
    if (this.provider) {
      this.attachWalletListeners();
    } else {
      void this.resumeMobileFlow();
    }
  }

  /** Clear stale connect/sign UI if user bailed out of the wallet app. */
  onPageVisible(): void {
    if (!TOKEN_GATE_ENABLED) return;
    const params = new URLSearchParams(window.location.search);
    if (params.has('phantom') || params.has('phantom_encryption_public_key')) return;
    if (this.snapshot.status !== 'connecting' && this.snapshot.status !== 'signing') return;
    this.verifyPromise = null;
    this.setSnapshot({
      status: 'disconnected',
      walletAddress: null,
      message: mobileWalletHint(),
    });
  }

  subscribe(listener: GateListener): () => void {
    this.listeners.add(listener);
    listener(this.snapshot);
    return () => this.listeners.delete(listener);
  }

  getSnapshot(): GateSnapshot {
    return this.snapshot;
  }

  hasAccess(): boolean {
    return !TOKEN_GATE_ENABLED || this.snapshot.status === 'granted';
  }

  async connect(): Promise<void> {
    if (!TOKEN_GATE_ENABLED) return;

    this.verifyPromise = null;
    this.clearCheckingWatchdog();
    this.verifySeq += 1;
    this.signedWallet = null;
    clearCachedVerify();

    if (usesMobileWalletBridge()) {
      clearMobileWalletSession();
      this.setSnapshot({
        status: 'connecting',
        walletAddress: null,
        message: 'Opening your wallet… approve connect, then sign. You return here to play.',
      });
      startPhantomConnect();
      return;
    }

    const provider = getWalletProvider();
    if (!provider) {
      this.setSnapshot({
        status: 'error',
        walletAddress: null,
        message: 'No wallet found. Install Phantom or Solflare, then refresh.',
      });
      return;
    }

    await this.connectInjected(provider);
  }

  private async connectInjected(provider: SolanaWalletProvider): Promise<void> {
    this.detachWalletListeners();
    try {
      if (provider.isConnected || provider.publicKey) {
        await withTimeout(provider.disconnect(), 8000, 'Disconnect timed out').catch(() => undefined);
      }
    } catch {
      /* fresh connect */
    }

    this.provider = provider;
    this.attachWalletListeners();

    try {
      this.setSnapshot({
        status: 'connecting',
        walletAddress: null,
        message: 'Approve the connection in your wallet…',
      });

      await withTimeout(
        provider.connect({ onlyIfTrusted: false }),
        WALLET_ACTION_TIMEOUT_MS,
        'Connection timed out. Tap Connect again.'
      );
      const address = walletAddress(provider);
      if (!address) {
        throw new Error('Wallet connected but no address was returned.');
      }

      this.setSnapshot({
        status: 'signing',
        walletAddress: address,
        message: 'Approve the signature in your wallet…',
      });

      await withTimeout(
        signAccessMessage(provider, address),
        WALLET_ACTION_TIMEOUT_MS,
        'Signature timed out. Tap Connect again.'
      );
      this.signedWallet = address;

      await this.verify();
    } catch (err) {
      this.signedWallet = null;
      this.setSnapshot({
        status: 'error',
        walletAddress: walletAddress(provider),
        message: walletErrorMessage(err),
      });
    }
  }

  async verify(): Promise<boolean> {
    if (!TOKEN_GATE_ENABLED) return true;
    if (this.verifyPromise) return this.verifyPromise;

    this.verifyPromise = this.runVerify().finally(() => {
      this.verifyPromise = null;
    });
    return this.verifyPromise;
  }

  private async resumeMobileFlow(): Promise<void> {
    const rejectMsg = consumePhantomRejectMessage();
    if (rejectMsg) {
      this.setSnapshot({
        status: 'error',
        walletAddress: getMobileWalletAddress(),
        message: rejectMsg,
      });
      return;
    }

    try {
      const result = handlePhantomCallback();
      if (result === 'connect_ok') {
        const address = getMobileWalletAddress();
        this.setSnapshot({
          status: 'signing',
          walletAddress: address,
          message: 'Connected. Approve the signature in your wallet…',
        });
        startPhantomSign();
        return;
      }

      if (result === 'sign_ok') {
        const address = getMobileWalletAddress();
        if (!address) return;
        this.signedWallet = address;
        await this.verify();
        return;
      }
    } catch (err) {
      this.setSnapshot({
        status: 'error',
        walletAddress: getMobileWalletAddress(),
        message: walletErrorMessage(err),
      });
      return;
    }

    if (isMobileWalletSigned()) {
      const address = getMobileWalletAddress();
      if (address) {
        this.signedWallet = address;
      }
    }
  }

  private async runVerify(): Promise<boolean> {
    if (!TOKEN_GATE_ENABLED) return true;

    const mobileSigned = isMobileWalletSigned();
    const mobileAddress = mobileSigned ? getMobileWalletAddress() : null;
    const provider = this.provider ?? getWalletProvider();
    const injectedAddress = provider ? walletAddress(provider) : null;
    const address = mobileAddress ?? injectedAddress;

    if (!address) {
      this.setSnapshot({
        status: 'disconnected',
        walletAddress: null,
        tokenBalance: null,
        tokenPriceUsd: null,
        holdingUsd: null,
        message: mobileWalletHint(),
      });
      return false;
    }

    if (mobileSigned) {
      this.signedWallet = address;
    } else if (this.signedWallet !== address) {
      this.setSnapshot({
        status: 'disconnected',
        walletAddress: address,
        message: 'Tap Connect and approve both wallet prompts.',
      });
      return false;
    }

    const seq = ++this.verifySeq;
    this.setSnapshot({
      status: 'checking',
      walletAddress: address,
      message: 'Checking token balance…',
    });
    this.armCheckingWatchdog(seq, address);

    try {
      const result = await verifyHoldingApi(address);
      this.clearCheckingWatchdog();
      if (seq !== this.verifySeq) return this.snapshot.status === 'granted';

      if (!result.tokenPriceUsd) {
        this.setSnapshot({
          status: 'error',
          walletAddress: address,
          tokenBalance: result.tokenBalance,
          tokenPriceUsd: null,
          holdingUsd: null,
          message: gateMessage(result.message, 'Could not fetch token price. Tap Recheck.'),
        });
        return false;
      }

      if (result.granted) {
        this.setSnapshot({
          status: 'granted',
          walletAddress: address,
          tokenSymbol: result.tokenSymbol,
          tokenBalance: result.tokenBalance,
          tokenPriceUsd: result.tokenPriceUsd,
          holdingUsd: result.holdingUsd,
          message: gateMessage(result.message, 'Access granted.'),
        });
        return true;
      }

      this.setSnapshot({
        status: 'denied',
        walletAddress: address,
        tokenSymbol: result.tokenSymbol,
        tokenBalance: result.tokenBalance,
        tokenPriceUsd: result.tokenPriceUsd,
        holdingUsd: result.holdingUsd,
        message: gateMessage(result.message, 'Insufficient token balance.'),
      });
      return false;
    } catch (err) {
      this.clearCheckingWatchdog();
      if (seq !== this.verifySeq) return this.snapshot.status === 'granted';
      this.setSnapshot({
        status: 'error',
        walletAddress: address,
        message: walletErrorMessage(err),
      });
      return false;
    }
  }

  async disconnect(): Promise<void> {
    if (!TOKEN_GATE_ENABLED) return;

    this.disconnecting = true;
    this.verifySeq += 1;
    this.verifyPromise = null;
    this.clearCheckingWatchdog();
    this.detachWalletListeners();
    clearMobileWalletSession();
    clearCachedVerify();
    this.signedWallet = null;

    const provider = this.provider ?? getWalletProvider();
    this.provider = null;

    try {
      await withTimeout(provider?.disconnect() ?? Promise.resolve(), 8000, 'Disconnect timed out').catch(
        () => undefined
      );
    } catch {
      /* wallet may already be disconnected */
    }

    this.disconnecting = false;
    this.setSnapshot({
      status: 'disconnected',
      walletAddress: null,
      tokenBalance: null,
      tokenPriceUsd: null,
      holdingUsd: null,
      message: mobileWalletHint(),
    });
  }

  private attachWalletListeners(): void {
    const provider = this.provider;
    if (!provider?.on || !provider.removeListener) return;

    provider.removeListener('disconnect', this.boundOnWalletChange);
    provider.removeListener('accountChanged', this.boundOnWalletChange);
    provider.on('disconnect', this.boundOnWalletChange);
    provider.on('accountChanged', this.boundOnWalletChange);
  }

  private detachWalletListeners(): void {
    const provider = this.provider;
    if (!provider?.removeListener) return;

    provider.removeListener('disconnect', this.boundOnWalletChange);
    provider.removeListener('accountChanged', this.boundOnWalletChange);
  }

  private armCheckingWatchdog(seq: number, address: string): void {
    this.clearCheckingWatchdog();
    this.checkingWatchdog = setTimeout(() => {
      if (seq !== this.verifySeq || this.snapshot.status !== 'checking') return;
      this.verifySeq += 1;
      this.verifyPromise = null;
      this.setSnapshot({
        status: 'error',
        walletAddress: address,
        message: 'Balance check timed out. Tap Recheck.',
      });
    }, CHECKING_WATCHDOG_MS);
  }

  private clearCheckingWatchdog(): void {
    if (this.checkingWatchdog) {
      clearTimeout(this.checkingWatchdog);
      this.checkingWatchdog = null;
    }
  }

  private setSnapshot(patch: Partial<GateSnapshot>): void {
    this.snapshot = { ...this.snapshot, ...patch };
    for (const listener of this.listeners) listener(this.snapshot);
  }
}
