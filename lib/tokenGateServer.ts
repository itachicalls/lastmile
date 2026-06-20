export const GAME_TOKEN_MINT = 'BzStxA5qec2FurM26CjuFcGQ1en9uKTQd2D1eiVJpump';
export const MIN_HOLDING_USD = 3;

const WALLET_RE = /^[1-9A-HJ-NP-Za-km-z]{32,44}$/;

function rpcEndpoints(): string[] {
  return [
    'https://solana-rpc.publicnode.com',
    'https://rpc.ankr.com/solana',
    'https://api.mainnet-beta.solana.com',
  ];
}

function rpcErrorMessage(error: unknown): string {
  if (typeof error === 'string') return error;
  if (error && typeof error === 'object') {
    const record = error as { message?: unknown; code?: unknown };
    if (typeof record.message === 'string') return record.message;
    if (record.message != null) return JSON.stringify(record.message);
    return JSON.stringify(error);
  }
  return 'RPC request failed';
}

async function rpcCall<T>(method: string, params: unknown[]): Promise<T> {
  let lastError: Error | null = null;

  for (const endpoint of rpcEndpoints()) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
      });
      if (!res.ok) {
        lastError = new Error(`RPC HTTP ${res.status}`);
        continue;
      }

      const json = (await res.json()) as { result?: T; error?: unknown };
      if (json.error) {
        lastError = new Error(rpcErrorMessage(json.error));
        continue;
      }
      if (json.result === undefined) {
        lastError = new Error('RPC returned no result');
        continue;
      }
      return json.result;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
    }
  }

  throw lastError ?? new Error('All Solana RPC endpoints failed');
}

interface ParsedTokenAmount {
  uiAmount: number | null;
}

interface ParsedTokenAccount {
  account: {
    data: {
      parsed: {
        info: {
          tokenAmount: ParsedTokenAmount;
        };
      };
    };
  };
}

async function getSplTokenBalance(owner: string, mint: string): Promise<number> {
  const result = await rpcCall<{ value: ParsedTokenAccount[] }>('getTokenAccountsByOwner', [
    owner,
    { mint },
    { encoding: 'jsonParsed' },
  ]);

  return result.value.reduce((sum, entry) => {
    return sum + (entry.account.data.parsed.info.tokenAmount.uiAmount ?? 0);
  }, 0);
}

interface DexLiquidity {
  usd?: number;
}

interface DexPair {
  priceUsd?: string;
  liquidity?: DexLiquidity;
  baseToken?: { symbol?: string };
}

async function fetchTokenQuote(mint: string): Promise<{ priceUsd: number; symbol: string } | null> {
  const res = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${mint}`);
  if (!res.ok) return null;

  const data = (await res.json()) as { pairs?: DexPair[] | null };
  const pairs = [...(data.pairs ?? [])].sort(
    (a, b) => (b.liquidity?.usd ?? 0) - (a.liquidity?.usd ?? 0)
  );
  const best = pairs[0];
  if (!best?.priceUsd) return null;

  const priceUsd = Number.parseFloat(best.priceUsd);
  if (!Number.isFinite(priceUsd) || priceUsd <= 0) return null;

  return {
    priceUsd,
    symbol: best.baseToken?.symbol?.trim() || 'GAME',
  };
}

export interface VerifyHoldingResult {
  granted: boolean;
  wallet: string;
  mint: string;
  tokenSymbol: string;
  tokenBalance: number;
  tokenPriceUsd: number | null;
  holdingUsd: number | null;
  minHoldingUsd: number;
  message: string;
}

export async function verifyWalletHolding(
  wallet: string,
  mint = GAME_TOKEN_MINT,
  minUsd = MIN_HOLDING_USD
): Promise<VerifyHoldingResult> {
  if (!WALLET_RE.test(wallet)) {
    throw new Error('Invalid Solana wallet address');
  }

  const [quote, balance] = await Promise.all([
    fetchTokenQuote(mint),
    getSplTokenBalance(wallet, mint),
  ]);

  if (!quote) {
    return {
      granted: false,
      wallet,
      mint,
      tokenSymbol: 'GAME',
      tokenBalance: balance,
      tokenPriceUsd: null,
      holdingUsd: null,
      minHoldingUsd: minUsd,
      message: 'Could not fetch token price. Try again in a moment.',
    };
  }

  const holdingUsd = balance * quote.priceUsd;
  const granted = holdingUsd >= minUsd;

  if (granted) {
    return {
      granted: true,
      wallet,
      mint,
      tokenSymbol: quote.symbol,
      tokenBalance: balance,
      tokenPriceUsd: quote.priceUsd,
      holdingUsd,
      minHoldingUsd: minUsd,
      message: `Access granted · ~$${holdingUsd.toFixed(2)} of $${quote.symbol}`,
    };
  }

  const needMore = Math.max(0, minUsd - holdingUsd);
  return {
    granted: false,
    wallet,
    mint,
    tokenSymbol: quote.symbol,
    tokenBalance: balance,
    tokenPriceUsd: quote.priceUsd,
    holdingUsd,
    minHoldingUsd: minUsd,
    message:
      balance > 0
        ? `Need ~$${needMore.toFixed(2)} more of $${quote.symbol} (~$${minUsd} total).`
        : `Hold at least $${minUsd} of $${quote.symbol} to play.`,
  };
}
