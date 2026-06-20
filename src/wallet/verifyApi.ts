import type { VerifyHoldingResult } from './gateTypes';
import { VERIFY_API_URLS } from './config';
import { verifyHoldingMobulaClient } from './verifyMobula';
import { getCachedVerify, setCachedVerify } from './verifyCache';
import { fetchWithTimeout } from './fetchUtils';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function collectVerifyApiUrls(): string[] {
  const urls = [...VERIFY_API_URLS];
  if (typeof window !== 'undefined') {
    const { hostname, origin } = window.location;
    if (hostname.includes('vercel.app') || hostname === 'localhost') {
      urls.unshift(`${origin}/api/verify-holding`);
    }
  }
  return [...new Set(urls.map((url) => url.replace(/\/$/, '')))];
}

async function verifyHoldingServer(wallet: string, apiBase: string): Promise<VerifyHoldingResult> {
  const url = `${apiBase}?wallet=${encodeURIComponent(wallet)}`;
  const res = await fetchWithTimeout(url, { timeoutMs: 5000 });
  const body = await res.text();
  if (!res.ok) {
    throw new Error(body.includes('error') ? body : `Verify API HTTP ${res.status}`);
  }
  const data = JSON.parse(body) as VerifyHoldingResult & { error?: string };
  if (data.error) throw new Error(data.error);
  if (typeof data.granted !== 'boolean') throw new Error('Invalid verify response');
  return data;
}

async function verifyHoldingOnce(wallet: string): Promise<VerifyHoldingResult> {
  for (const apiUrl of collectVerifyApiUrls()) {
    try {
      return await verifyHoldingServer(wallet, apiUrl);
    } catch {
      /* try Mobula next */
    }
  }
  return verifyHoldingMobulaClient(wallet);
}

export async function verifyHoldingApi(wallet: string): Promise<VerifyHoldingResult> {
  const cached = getCachedVerify(wallet);
  if (cached) return cached;

  try {
    const result = await verifyHoldingOnce(wallet);
    if (result.granted) setCachedVerify(wallet, result);
    return result;
  } catch (firstErr) {
    await sleep(400);
    try {
      const result = await verifyHoldingOnce(wallet);
      if (result.granted) setCachedVerify(wallet, result);
      return result;
    } catch {
      throw firstErr instanceof Error ? firstErr : new Error('Verification failed');
    }
  }
}
