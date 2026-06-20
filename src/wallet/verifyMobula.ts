import {
  GAME_TOKEN_MINT,
  MIN_HOLDING_USD,
  WALLET_RE,
  type VerifyHoldingResult,
} from '../../lib/gateShared';

const MOBULA_PORTFOLIO_URL = 'https://demo-api.mobula.io/api/1/wallet/portfolio';

interface MobulaContractBalance {
  address: string;
  chainId: string;
}

interface MobulaAsset {
  price: number;
  token_balance: number;
  estimated_balance: number;
  contracts_balances: MobulaContractBalance[];
  asset: { symbol: string; contracts: string[] };
}

function assetMatchesMint(asset: MobulaAsset, mint: string): boolean {
  if (asset.asset?.contracts?.includes(mint)) return true;
  return asset.contracts_balances?.some(
    (entry) => entry.address === mint && entry.chainId.toLowerCase().includes('solana')
  );
}

export async function verifyHoldingMobulaClient(wallet: string): Promise<VerifyHoldingResult> {
  if (!WALLET_RE.test(wallet)) {
    throw new Error('Invalid Solana wallet address');
  }

  const params = new URLSearchParams({
    wallet,
    blockchains: 'solana',
    minliq: '0',
    filterSpam: 'false',
    unlistedAssets: 'true',
    cache: 'true',
    stale: '60',
  });

  const res = await fetch(`${MOBULA_PORTFOLIO_URL}?${params}`);
  if (!res.ok) {
    throw new Error(`Balance lookup failed (HTTP ${res.status}). Tap Recheck.`);
  }

  const json = (await res.json()) as { data?: { assets?: MobulaAsset[] } };
  const match = json.data?.assets?.find((asset) => assetMatchesMint(asset, GAME_TOKEN_MINT));

  if (!match) {
    return {
      granted: false,
      wallet,
      mint: GAME_TOKEN_MINT,
      tokenSymbol: 'Mailrun',
      tokenBalance: 0,
      tokenPriceUsd: null,
      holdingUsd: 0,
      minHoldingUsd: MIN_HOLDING_USD,
      message: `Hold at least $${MIN_HOLDING_USD} of $Mailrun to play.`,
    };
  }

  const symbol = match.asset?.symbol?.trim() || 'Mailrun';
  const priceUsd = Number.isFinite(match.price) && match.price > 0 ? match.price : null;
  const balance = match.token_balance ?? 0;
  const holdingUsd =
    priceUsd != null
      ? balance * priceUsd
      : Number.isFinite(match.estimated_balance)
        ? match.estimated_balance
        : 0;
  const granted = holdingUsd >= MIN_HOLDING_USD;

  if (granted) {
    return {
      granted: true,
      wallet,
      mint: GAME_TOKEN_MINT,
      tokenSymbol: symbol,
      tokenBalance: balance,
      tokenPriceUsd: priceUsd,
      holdingUsd,
      minHoldingUsd: MIN_HOLDING_USD,
      message: `Access granted · ~$${holdingUsd.toFixed(2)} of $${symbol}`,
    };
  }

  const needMore = Math.max(0, MIN_HOLDING_USD - holdingUsd);
  return {
    granted: false,
    wallet,
    mint: GAME_TOKEN_MINT,
    tokenSymbol: symbol,
    tokenBalance: balance,
    tokenPriceUsd: priceUsd,
    holdingUsd,
    minHoldingUsd: MIN_HOLDING_USD,
    message:
      balance > 0
        ? `Need ~$${needMore.toFixed(2)} more of $${symbol} (~$${MIN_HOLDING_USD} total).`
        : `Hold at least $${MIN_HOLDING_USD} of $${symbol} to play.`,
  };
}
