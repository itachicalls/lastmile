import nacl from 'tweetnacl';
import bs58 from 'bs58';
import { IS_MOBILE } from '../game/platform';
import { getWalletProvider } from './walletProvider';
import { buildAccessMessageText } from './walletProvider';

const STORAGE_KEY = 'mailrun_phantom_mobile';

export interface PhantomMobileSession {
  dappSecretKey: string;
  dappPublicKey: string;
  sharedSecret?: string;
  phantomSession?: string;
  walletAddress?: string;
  signed?: boolean;
}

function appOrigin(): string {
  return window.location.origin;
}

function redirectLink(step: 'connect' | 'sign'): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const url = new URL(base, appOrigin());
  url.searchParams.set('phantom', step);
  return url.toString();
}

function loadSession(): PhantomMobileSession | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as PhantomMobileSession;
  } catch {
    return null;
  }
}

function saveSession(session: PhantomMobileSession): void {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

function clearPhantomQueryParams(): void {
  const url = new URL(window.location.href);
  url.searchParams.delete('phantom');
  url.searchParams.delete('phantom_encryption_public_key');
  url.searchParams.delete('nonce');
  url.searchParams.delete('data');
  url.searchParams.delete('errorCode');
  url.searchParams.delete('errorMessage');
  window.history.replaceState({}, document.title, url.pathname + url.search + url.hash);
}

function decryptPayload(data: string, nonce: string, secret: Uint8Array): unknown {
  const decrypted = nacl.box.open.after(bs58.decode(data), bs58.decode(nonce), secret);
  if (!decrypted) throw new Error('Unable to decrypt Phantom response');
  return JSON.parse(new TextDecoder().decode(decrypted));
}

function encryptPayload(payload: unknown, secret: Uint8Array): [Uint8Array, Uint8Array] {
  const nonce = nacl.randomBytes(24);
  const encrypted = nacl.box.after(
    new TextEncoder().encode(JSON.stringify(payload)),
    nonce,
    secret
  );
  return [nonce, encrypted];
}

/** Mobile Safari/Chrome — no injected wallet; use Phantom app deeplinks and return here. */
export function usesMobileWalletBridge(): boolean {
  return IS_MOBILE && !getWalletProvider();
}

export function getMobileWalletAddress(): string | null {
  const session = loadSession();
  if (!session?.walletAddress) return null;
  return session.walletAddress;
}

export function isMobileWalletSigned(): boolean {
  const session = loadSession();
  return Boolean(session?.signed && session.walletAddress);
}

export function clearMobileWalletSession(): void {
  sessionStorage.removeItem(STORAGE_KEY);
}

export function startPhantomConnect(): void {
  const keyPair = nacl.box.keyPair();
  saveSession({
    dappSecretKey: bs58.encode(keyPair.secretKey),
    dappPublicKey: bs58.encode(keyPair.publicKey),
  });

  const params = new URLSearchParams({
    app_url: appOrigin(),
    dapp_encryption_public_key: bs58.encode(keyPair.publicKey),
    redirect_link: redirectLink('connect'),
    cluster: 'mainnet-beta',
  });

  window.location.assign(`https://phantom.app/ul/v1/connect?${params.toString()}`);
}

export function startPhantomSign(): void {
  const session = loadSession();
  if (!session?.sharedSecret || !session.phantomSession || !session.walletAddress) {
    throw new Error('Wallet session expired. Tap Connect again.');
  }

  const secret = bs58.decode(session.sharedSecret);
  const message = bs58.encode(new TextEncoder().encode(buildAccessMessageText(session.walletAddress)));
  const [nonce, encrypted] = encryptPayload(
    {
      session: session.phantomSession,
      message,
      display: 'utf8',
    },
    secret
  );

  const params = new URLSearchParams({
    dapp_encryption_public_key: session.dappPublicKey,
    nonce: bs58.encode(nonce),
    redirect_link: redirectLink('sign'),
    payload: bs58.encode(encrypted),
  });

  window.location.assign(`https://phantom.app/ul/v1/signMessage?${params.toString()}`);
}

export function consumePhantomRejectMessage(): string | null {
  const params = new URLSearchParams(window.location.search);
  if (!params.get('errorCode')) return null;
  const msg = params.get('errorMessage') || 'Request rejected in Phantom.';
  clearPhantomQueryParams();
  return msg;
}

export type PhantomCallbackResult = 'none' | 'connect_ok' | 'sign_ok' | 'rejected';

export function handlePhantomCallback(): PhantomCallbackResult {
  const params = new URLSearchParams(window.location.search);
  const step = params.get('phantom');
  if (!step) return 'none';

  if (params.get('errorCode')) {
    clearPhantomQueryParams();
    return 'rejected';
  }

  const stored = loadSession();
  if (!stored?.dappSecretKey) {
    clearPhantomQueryParams();
    throw new Error('Wallet session expired. Tap Connect again.');
  }

  const dappSecret = bs58.decode(stored.dappSecretKey);

  if (step === 'connect') {
    const phantomKey = params.get('phantom_encryption_public_key');
    const nonce = params.get('nonce');
    const data = params.get('data');
    if (!phantomKey || !nonce || !data) return 'none';

    const shared = nacl.box.before(bs58.decode(phantomKey), dappSecret);
    const payload = decryptPayload(data, nonce, shared) as {
      public_key: string;
      session: string;
    };

    saveSession({
      ...stored,
      sharedSecret: bs58.encode(shared),
      phantomSession: payload.session,
      walletAddress: payload.public_key,
      signed: false,
    });
    clearPhantomQueryParams();
    return 'connect_ok';
  }

  if (step === 'sign') {
    const nonce = params.get('nonce');
    const data = params.get('data');
    if (!nonce || !data || !stored.sharedSecret) return 'none';

    decryptPayload(data, nonce, bs58.decode(stored.sharedSecret));
    saveSession({ ...stored, signed: true });
    clearPhantomQueryParams();
    return 'sign_ok';
  }

  return 'none';
}

export function mobileWalletHint(): string {
  if (!IS_MOBILE) {
    return 'Install Phantom or Solflare, refresh, then connect.';
  }
  if (getWalletProvider()) {
    return 'Tap Connect and approve both prompts in your wallet.';
  }
  return 'Tap Connect — approve in the Phantom app, then you return here to play.';
}
