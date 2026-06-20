import { TOKEN_GATE_ENABLED } from './config';
import { verifyHoldingApi } from './verifyApi';
import {
  getWalletProvider,
  walletAddress,
  type SolanaWalletProvider,
} from './walletProvider';

function gateMessage(value: unknown, fallback: string): string {
  if (typeof value === 'string' && value.trim()) return value;
  return fallback;
}

function gateErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    const msg = err.message?.trim();
    if (msg && msg !== '[object Object]') return msg;
  }
  return 'Could not verify wallet. Tap Recheck.';
}

export type GateStatus =
  | 'bypassed'
  | 'disconnected'
  | 'connecting'
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
    ? 'Connect a Solana wallet holding at least $3 of the game token to play.'
    : 'Token gate bypassed for local development.',
};

export class TokenGate {
  private snapshot: GateSnapshot = { ...INITIAL_SNAPSHOT };
  private listeners = new Set<GateListener>();
  private provider: SolanaWalletProvider | null = null;
  private boundOnWalletChange = () => {
    void this.verify();
  };

  constructor() {
    if (!TOKEN_GATE_ENABLED) return;
    this.provider = getWalletProvider();
    this.attachWalletListeners();
    void this.tryRestoreSession();
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
      this.setSnapshot({
        status: 'error',
        message: 'No Solana wallet found. Install Phantom or Solflare, then refresh.',
      });
      window.open('https://phantom.app/', '_blank', 'noopener,noreferrer');
      return;
    }

    this.provider = provider;
    this.attachWalletListeners();
    this.setSnapshot({ status: 'connecting', message: 'Connecting wallet…' });

    try {
      await provider.connect();
      await this.verify();
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Wallet connection failed';
      this.setSnapshot({
        status: 'error',
        walletAddress: walletAddress(provider),
        message: msg,
      });
    }
  }

  async verify(): Promise<boolean> {
    if (!TOKEN_GATE_ENABLED) return true;

    const provider = this.provider ?? getWalletProvider();
    if (!provider) {
      this.setSnapshot({
        status: 'disconnected',
        walletAddress: null,
        tokenBalance: null,
        tokenPriceUsd: null,
        holdingUsd: null,
        message: 'Connect a Solana wallet holding at least $3 of the game token to play.',
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
        message: 'Connect a Solana wallet holding at least $3 of the game token to play.',
      });
      return false;
    }

    this.setSnapshot({
      status: 'checking',
      walletAddress: address,
      message: 'Checking token balance…',
    });

    try {
      const result = await verifyHoldingApi(address);

      if (!result.tokenPriceUsd) {
        this.setSnapshot({
          status: 'error',
          walletAddress: address,
          tokenBalance: result.tokenBalance,
          tokenPriceUsd: null,
          holdingUsd: null,
          message: gateMessage(result.message, 'Could not fetch token price. Try again in a moment.'),
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
      const msg = gateErrorMessage(err);
      this.setSnapshot({
        status: 'error',
        walletAddress: address,
        message: msg,
      });
      return false;
    }
  }

  async disconnect(): Promise<void> {
    if (!TOKEN_GATE_ENABLED) return;
    const provider = this.provider ?? getWalletProvider();
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
      message: 'Connect a Solana wallet holding at least $3 of the game token to play.',
    });
  }

  private async tryRestoreSession(): Promise<void> {
    const provider = this.provider ?? getWalletProvider();
    if (!provider?.publicKey) return;
    this.provider = provider;
    await this.verify();
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
