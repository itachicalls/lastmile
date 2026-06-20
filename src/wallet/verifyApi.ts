import type { VerifyHoldingResult } from './gateTypes';
import { verifyHoldingClient } from './verifyClient';

/** Balance + price check. Always runs client-side (works on GitHub Pages). */
export async function verifyHoldingApi(wallet: string): Promise<VerifyHoldingResult> {
  return verifyHoldingClient(wallet);
}
