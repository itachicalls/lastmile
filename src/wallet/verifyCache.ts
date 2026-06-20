import type { VerifyHoldingResult } from './gateTypes';

const CACHE_KEY = 'mailrun_verify_v1';
const CACHE_TTL_MS = 90_000;

interface CachedEntry {
  wallet: string;
  at: number;
  result: VerifyHoldingResult;
}

export function getCachedVerify(wallet: string): VerifyHoldingResult | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CachedEntry;
    if (entry.wallet !== wallet) return null;
    if (Date.now() - entry.at > CACHE_TTL_MS) return null;
    if (!entry.result.granted) return null;
    return entry.result;
  } catch {
    return null;
  }
}

export function setCachedVerify(wallet: string, result: VerifyHoldingResult): void {
  if (!result.granted) return;
  try {
    const entry: CachedEntry = { wallet, at: Date.now(), result };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(entry));
  } catch {
    /* quota / private mode */
  }
}

export function clearCachedVerify(): void {
  try {
    sessionStorage.removeItem(CACHE_KEY);
  } catch {
    /* ignore */
  }
}
