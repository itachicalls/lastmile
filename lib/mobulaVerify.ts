import {
  buildResult,
  GAME_TOKEN_MINT,
  MIN_HOLDING_USD,
  type VerifyHoldingResult,
} from './verifyCore';

const MOBULA_PORTFOLIO_URL = 'https://api.mobula.io/api/1/wallet/portfolio';
const MOBULA_TIMEOUT_MS = 8000;

interface MobulaContractBalance {
  address: string;
  balance: number;
  chainId: string;
}

interface MobulaAsset {
  price: number;
  token_balance: number;
  estimated_balance: number;
  contracts_balances: MobulaContractBalance[];
  asset: { symbol: string; contracts: string[] };
}

interface MobulaPortfolioResponse {
  data?: { assets?: MobulaAsset[] };
}

function assetMatchesMint(asset: MobulaAsset, mint: string): boolean {
  if (asset.asset?.contracts?.includes(mint)) return true;
  return asset.contracts_balances?.some(
    (entry) => entry.address === mint && entry.chainId.toLowerCase().includes('solana')
  );
}

export async function verifyHoldingMobula(
  wallet: string,
  apiKey: string,
  mint = GAME_TOKEN_MINT,
  minUsd = MIN_HOLDING_USD
): Promise<VerifyHoldingResult> {
  const params = new URLSearchParams({
    wallet,
    blockchains: 'solana',
    minliq: '0',
    filterSpam: 'false',
    unlistedAssets: 'true',
    cache: 'true',
    stale: '60',
  });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), MOBULA_TIMEOUT_MS);

  try {
    const res = await fetch(`${MOBULA_PORTFOLIO_URL}?${params}`, {
      headers: { Authorization: apiKey },
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`Mobula HTTP ${res.status}`);
    }

    const json = (await res.json()) as MobulaPortfolioResponse;
    const match = json.data?.assets?.find((asset) => assetMatchesMint(asset, mint));

    if (!match) {
      return {
        granted: false,
        wallet,
        mint,
        tokenSymbol: 'Mailrun',
        tokenBalance: 0,
        tokenPriceUsd: null,
        holdingUsd: 0,
        minHoldingUsd: minUsd,
        message: `Hold at least $${minUsd} of $Mailrun to play.`,
      };
    }

    const symbol = match.asset?.symbol?.trim() || 'Mailrun';
    const priceUsd = Number.isFinite(match.price) && match.price > 0 ? match.price : null;
    const balance = match.token_balance ?? 0;

    if (priceUsd) {
      return buildResult(wallet, mint, minUsd, { priceUsd, symbol }, balance);
    }

    const holdingUsd =
      Number.isFinite(match.estimated_balance) && match.estimated_balance >= 0
        ? match.estimated_balance
        : 0;
    const granted = holdingUsd >= minUsd;

    if (granted) {
      return {
        granted: true,
        wallet,
        mint,
        tokenSymbol: symbol,
        tokenBalance: balance,
        tokenPriceUsd: null,
        holdingUsd,
        minHoldingUsd: minUsd,
        message: `Access granted · ~$${holdingUsd.toFixed(2)} of $${symbol}`,
      };
    }

    const needMore = Math.max(0, minUsd - holdingUsd);
    return {
      granted: false,
      wallet,
      mint,
      tokenSymbol: symbol,
      tokenBalance: balance,
      tokenPriceUsd: null,
      holdingUsd,
      minHoldingUsd: minUsd,
      message:
        balance > 0
          ? `Need ~$${needMore.toFixed(2)} more of $${symbol} (~$${minUsd} total).`
          : `Hold at least $${minUsd} of $${symbol} to play.`,
    };
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new Error('Balance check timed out. Tap Recheck.');
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}
