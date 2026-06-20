import { TOKEN_GATE_ENABLED } from './config';
import { needsPhantomMobileApp, openPhantomMobileBrowser, mobileWalletHint } from './mobileWallet';
import { verifyHoldingApi } from './verifyApi';
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

export class TokenGate {
  private snapshot: GateSnapshot = { ...INITIAL_SNAPSHOT };
  private listeners = new Set<GateListener>();
  private provider: SolanaWalletProvider | null = null;
  private signedWallet: string | null = null;
  private verifySeq = 0;
  private verifyPromise: Promise<boolean> | null = null;
  private boundOnWalletChange = () => {
    this.signedWallet = null;
    this.verifySeq += 1;
    void this.verify();
  };

  constructor() {
    if (!TOKEN_GATE_ENABLED) return;
    this.provider = getWalletProvider();
    this.attachWalletListeners();
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

    const provider = getWalletProvider();
    if (!provider) {
      if (needsPhantomMobileApp()) {
        this.setSnapshot({
          status: 'connecting',
          walletAddress: null,
          message: 'Opening Phantom… once the game loads there, tap Connect Phantom again.',
        });
        openPhantomMobileBrowser();
        return;
      }

      this.setSnapshot({
        status: 'error',
        walletAddress: null,
        message: 'Phantom not found. Install the extension, refresh, then connect.',
      });
      window.open('https://phantom.app/download', '_blank', 'noopener,noreferrer');
      return;
    }

    this.provider = provider;
    this.signedWallet = null;
    this.verifySeq += 1;
    this.attachWalletListeners();

    try {
      this.setSnapshot({
        status: 'connecting',
        walletAddress: null,
        message: 'Approve the connection in Phantom…',
      });

      await provider.connect({ onlyIfTrusted: false });
      const address = walletAddress(provider);
      if (!address) {
        throw new Error('Wallet connected but no address was returned.');
      }

      this.setSnapshot({
        status: 'signing',
        walletAddress: address,
        message: 'Approve the signature in Phantom…',
      });

      await signAccessMessage(provider, address);
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

  private async runVerify(): Promise<boolean> {
    if (!TOKEN_GATE_ENABLED) return true;

    const provider = this.provider ?? getWalletProvider();
    if (!provider) {
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

    const address = walletAddress(provider);
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

    if (this.signedWallet !== address) {
      this.setSnapshot({
        status: 'disconnected',
        walletAddress: address,
        message: 'Tap Connect Phantom and approve both prompts.',
      });
      return false;
    }

    const seq = ++this.verifySeq;
    this.setSnapshot({
      status: 'checking',
      walletAddress: address,
      message: 'Checking token balance…',
    });

    try {
      const result = await verifyHoldingApi(address);
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
    this.verifySeq += 1;
    const provider = this.provider ?? getWalletProvider();
    this.signedWallet = null;
    try {
      await provider?.disconnect();
    } catch {
      /* wallet may already be disconnected */
    }
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

  private setSnapshot(patch: Partial<GateSnapshot>): void {
    this.snapshot = { ...this.snapshot, ...patch };
    for (const listener of this.listeners) listener(this.snapshot);
  }
}
