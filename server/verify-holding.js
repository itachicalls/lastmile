const GAME_TOKEN_MINT = 'BzStxA5qec2FurM26CjuFcGQ1en9uKTQd2D1eiVJpump';
const MIN_HOLDING_USD = 3;
const WALLET_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;
const MOBULA_PORTFOLIO_URL = 'https://api.mobula.io/api/1/wallet/portfolio';

function assetMatchesMint(asset, mint) {
  if (asset.asset?.contracts?.includes(mint)) return true;
  return asset.contracts_balances?.some(
    (entry) => entry.address === mint && entry.chainId.toLowerCase().includes('solana')
  );
}

async function verifyWithMobula(wallet, apiKey) {
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
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(`${MOBULA_PORTFOLIO_URL}?${params}`, {
      headers: { Authorization: apiKey },
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`Mobula HTTP ${res.status}`);
    }

    const json = await res.json();
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
  } finally {
    clearTimeout(timer);
  }
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') {
    res.status(204).end();
    return;
  }

  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const wallet = typeof req.query.wallet === 'string' ? req.query.wallet.trim() : '';
  if (!wallet) {
    res.status(400).json({ error: 'Missing wallet query parameter' });
    return;
  }
  if (!WALLET_RE.test(wallet)) {
    res.status(400).json({ error: 'Invalid Solana wallet address' });
    return;
  }

  const apiKey = process.env.MOBULA_API_KEY?.trim();
  if (!apiKey) {
    res.status(503).json({ error: 'MOBULA_API_KEY is not configured on the server' });
    return;
  }

  try {
    const result = await verifyWithMobula(wallet, apiKey);
    res.status(200).json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Verification failed';
    res.status(500).json({ error: message });
  }
};
