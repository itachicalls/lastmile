import {
  verifyHolding,
  GAME_TOKEN_MINT,
  MIN_HOLDING_USD,
  type VerifyHoldingResult,
} from './verifyCore';
import { verifyHoldingMobula } from './mobulaVerify';

export { GAME_TOKEN_MINT, MIN_HOLDING_USD, type VerifyHoldingResult };

function serverRpcUrls(): string[] {
  return [
    process.env.SOLANA_RPC_URL,
    process.env.HELIUS_RPC_URL,
    'https://solana-rpc.publicnode.com',
    'https://api.mainnet-beta.solana.com',
  ].filter((url): url is string => Boolean(url));
}

export async function verifyWalletHolding(
  wallet: string,
  mint = GAME_TOKEN_MINT,
  minUsd = MIN_HOLDING_USD
): Promise<VerifyHoldingResult> {
  const mobulaKey = process.env.MOBULA_API_KEY?.trim();
  if (mobulaKey) {
    try {
      return await verifyHoldingMobula(wallet, mobulaKey, mint, minUsd);
    } catch {
      // Fall back to RPC when Mobula is down or misconfigured.
    }
  }

  return verifyHolding(wallet, serverRpcUrls(), mint, minUsd);
}
