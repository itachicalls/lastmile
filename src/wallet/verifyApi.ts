import type { VerifyHoldingResult } from './gateTypes';
import { verifyHoldingClient } from './verifyClient';
import { getCachedVerify, setCachedVerify } from './verifyCache';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Direct browser verification — no Vercel/server required. */
export async function verifyHoldingApi(wallet: string): Promise<VerifyHoldingResult> {
  const cached = getCachedVerify(wallet);
  if (cached) return cached;

  try {
    const result = await verifyHoldingClient(wallet);
    if (result.granted) setCachedVerify(wallet, result);
    return result;
  } catch (firstErr) {
    await sleep(350);
    try {
      const result = await verifyHoldingClient(wallet);
      if (result.granted) setCachedVerify(wallet, result);
      return result;
    } catch {
      throw firstErr instanceof Error ? firstErr : new Error('Verification failed');
    }
  }
}
