import type { VerifyHoldingResult } from './gateTypes';
import { VERIFY_API_URLS } from './config';
import { verifyHoldingClient } from './verifyClient';
import { getCachedVerify, setCachedVerify } from './verifyCache';
import { fetchWithTimeout } from './fetchUtils';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function collectVerifyApiUrls(): string[] {
  const urls = [...VERIFY_API_URLS];

  if (typeof window !== 'undefined') {
    const { hostname, origin } = window.location;
    if (hostname.includes('vercel.app') || hostname === 'localhost') {
      urls.push(`${origin}/api/verify-holding`);
    }
  }

  return [...new Set(urls.map((url) => url.replace(/\/$/, '')))];
}

async function verifyHoldingServer(wallet: string, apiBase: string): Promise<VerifyHoldingResult> {
  const url = `${apiBase}?wallet=${encodeURIComponent(wallet)}`;
  const res = await fetchWithTimeout(url, { timeoutMs: 12_000 });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(body || `Verify API HTTP ${res.status}`);
  }

  const data = (await res.json()) as VerifyHoldingResult & { error?: string };
  if (data.error) throw new Error(data.error);
  if (typeof data.granted !== 'boolean') throw new Error('Invalid verify response');
  return data;
}

async function verifyHoldingOnce(wallet: string): Promise<VerifyHoldingResult> {
  const apiUrls = collectVerifyApiUrls();
  for (const apiUrl of apiUrls) {
    try {
      return await verifyHoldingServer(wallet, apiUrl);
    } catch {
      // Try next endpoint, then browser fallback.
    }
  }

  return verifyHoldingClient(wallet);
}

export async function verifyHoldingApi(wallet: string): Promise<VerifyHoldingResult> {
  const cached = getCachedVerify(wallet);
  if (cached) return cached;

  try {
    const result = await verifyHoldingOnce(wallet);
    if (result.granted) setCachedVerify(wallet, result);
    return result;
  } catch (firstErr) {
    await sleep(350);
    try {
      const result = await verifyHoldingOnce(wallet);
      if (result.granted) setCachedVerify(wallet, result);
      return result;
    } catch {
      throw firstErr instanceof Error ? firstErr : new Error('Verification failed');
    }
  }
}
