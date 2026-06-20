import { IS_MOBILE } from '../game/platform';
import { getWalletProvider } from './walletProvider';

export function isInsidePhantomBrowser(): boolean {
  return Boolean(window.solana?.isPhantom);
}

/** Mobile Safari/Chrome — Phantom is not injected until opened in the Phantom app. */
export function needsPhantomMobileApp(): boolean {
  return IS_MOBILE && !getWalletProvider();
}

export function openPhantomMobileBrowser(): void {
  const pageUrl = window.location.href;
  const ref = window.location.origin;
  const link = `https://phantom.app/ul/browse/${encodeURIComponent(pageUrl)}?ref=${encodeURIComponent(ref)}`;
  window.location.assign(link);
}

export function mobileWalletHint(): string {
  if (!IS_MOBILE) {
    return 'Install the Phantom extension, refresh, then connect.';
  }
  if (isInsidePhantomBrowser()) {
    return 'Tap Connect Phantom and approve both prompts.';
  }
  return 'Tap Open in Phantom — the app will load this site with your wallet ready.';
}
