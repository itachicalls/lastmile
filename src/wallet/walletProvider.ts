export interface WalletPublicKey {
  toBase58(): string;
  toString(): string;
}

export interface SignMessageResult {
  signature: Uint8Array;
  publicKey: WalletPublicKey;
}

export interface SolanaWalletProvider {
  isPhantom?: boolean;
  isSolflare?: boolean;
  isConnected?: boolean;
  publicKey: WalletPublicKey | null;
  connect(opts?: { onlyIfTrusted?: boolean }): Promise<{ publicKey: WalletPublicKey }>;
  disconnect(): Promise<void>;
  signMessage?(
    message: Uint8Array,
    display?: 'utf8' | 'hex'
  ): Promise<SignMessageResult>;
  on?(event: 'disconnect' | 'accountChanged', handler: (...args: unknown[]) => void): void;
  removeListener?(
    event: 'disconnect' | 'accountChanged',
    handler: (...args: unknown[]) => void
  ): void;
}

declare global {
  interface Window {
    solana?: SolanaWalletProvider;
    solflare?: SolanaWalletProvider;
  }
}

export function getWalletProvider(): SolanaWalletProvider | null {
  const solana = window.solana;
  if (solana?.isPhantom) return solana;
  const solflare = window.solflare;
  if (solflare?.isSolflare) return solflare;
  if (solana?.connect) return solana;
  if (solflare?.connect) return solflare;
  return null;
}

export function walletAddress(provider: SolanaWalletProvider): string | null {
  const key = provider.publicKey;
  if (!key) return null;
  return typeof key.toBase58 === 'function' ? key.toBase58() : key.toString();
}

export function walletErrorMessage(err: unknown): string {
  if (err && typeof err === 'object') {
    const record = err as { message?: unknown; code?: unknown };
    if (record.code === 4001) return 'Request rejected in wallet.';
    if (typeof record.message === 'string' && record.message.trim()) {
      return record.message;
    }
  }
  if (err instanceof Error && err.message.trim()) return err.message;
  return 'Wallet request failed.';
}

export async function signAccessMessage(
  provider: SolanaWalletProvider,
  address: string
): Promise<void> {
  if (!provider.signMessage) {
    throw new Error('This wallet cannot sign messages. Use Phantom or Solflare.');
  }

  const text = [
    'Sign in to Mail Run',
    '',
    'This proves you own the wallet. No transaction or fee.',
    `Site: ${window.location.host}`,
    `Wallet: ${address}`,
    `Time: ${new Date().toISOString()}`,
  ].join('\n');

  const encoded = new TextEncoder().encode(text);
  const result = await provider.signMessage(encoded, 'utf8');
  const signedAddress = walletAddress({ publicKey: result.publicKey } as SolanaWalletProvider);
  if (signedAddress && signedAddress !== address) {
    throw new Error('Signed wallet does not match the connected wallet.');
  }
}
