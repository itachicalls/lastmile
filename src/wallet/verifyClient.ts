import { GAME_TOKEN_MINT, MIN_HOLDING_USD } from './config';
import type { VerifyHoldingResult } from './gateTypes';
import { fetchWithTimeout, withTimeout } from './fetchUtils';

const RPC_URLS = [
  'https://solana-rpc.publicnode.com',
  'https://api.mainnet-beta.solana.com',
  'https://rpc.ankr.com/solana',
];

const RPC_TIMEOUT_MS = 6500;
const QUOTE_TIMEOUT_MS = 6500;
const VERIFY_TIMEOUT_MS = 16000;
const QUOTE_CACHE_MS = 45_000;

let quoteCache: {
  mint: string;
  quote: { priceUsd: number; symbol: string };
  at: number;
} | null = null;

function rpcErrorMessage(error: unknown): string {
  if (typeof error === 'string') return error;
  if (error && typeof error === 'object') {
    const record = error as { message?: unknown };
    if (typeof record.message === 'string') return record.message;
    if (record.message != null) return JSON.stringify(record.message);
    return JSON.stringify(error);
  }
  return 'RPC request failed';
}

async function rpcCallOnce<T>(endpoint: string, method: string, params: unknown[]): Promise<T> {
  const res = await fetchWithTimeout(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params }),
    timeoutMs: RPC_TIMEOUT_MS,
  });
  if (!res.ok) throw new Error(`RPC HTTP ${res.status}`);

  const json = (await res.json()) as { result?: T; error?: unknown };
  if (json.error) throw new Error(rpcErrorMessage(json.error));
  if (json.result === undefined) throw new Error('RPC returned no result');
  return json.result;
}

async function rpcCall<T>(method: string, params: unknown[]): Promise<T> {
  const attempts = RPC_URLS.map((endpoint) => rpcCallOnce<T>(endpoint, method, params));
  const results = await Promise.allSettled(attempts);

  for (const result of results) {
    if (result.status === 'fulfilled') return result.value;
  }

  const firstError = results.find((r) => r.status === 'rejected') as
    | PromiseRejectedResult
    | undefined;
  throw firstError?.reason instanceof Error
    ? firstError.reason
    : new Error('Could not reach Solana network. Tap Recheck.');
}

interface ParsedTokenAccount {
  account: {
    data: {
      parsed: {
        info: {
          tokenAmount: { uiAmount: number | null };
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

interface DexPair {
  priceUsd?: string;
  liquidity?: { usd?: number };
  baseToken?: { symbol?: string };
}

async function fetchTokenQuoteDex(mint: string): Promise<{ priceUsd: number; symbol: string } | null> {
  const res = await fetchWithTimeout(`https://api.dexscreener.com/latest/dex/tokens/${mint}`, {
    timeoutMs: QUOTE_TIMEOUT_MS,
  });
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

async function fetchTokenQuoteJupiter(mint: string): Promise<{ priceUsd: number; symbol: string } | null> {
  const res = await fetchWithTimeout(`https://api.jup.ag/price/v2?ids=${mint}`, {
    timeoutMs: QUOTE_TIMEOUT_MS,
  });
  if (!res.ok) return null;

  const data = (await res.json()) as {
    data?: Record<string, { price?: number | string; symbol?: string } | undefined>;
  };
  const entry = data.data?.[mint];
  if (!entry?.price) return null;

  const priceUsd = typeof entry.price === 'string' ? Number.parseFloat(entry.price) : entry.price;
  if (!Number.isFinite(priceUsd) || priceUsd <= 0) return null;

  return {
    priceUsd,
    symbol: entry.symbol?.trim() || 'GAME',
  };
}

async function fetchTokenQuote(mint: string): Promise<{ priceUsd: number; symbol: string } | null> {
  const cached = quoteCache;
  if (cached && cached.mint === mint && Date.now() - cached.at < QUOTE_CACHE_MS) {
    return cached.quote;
  }

  const quote =
    (await fetchTokenQuoteDex(mint)) ?? (await fetchTokenQuoteJupiter(mint));
  if (quote) quoteCache = { mint, quote, at: Date.now() };
  return quote;
}

function buildResult(
  wallet: string,
  quote: { priceUsd: number; symbol: string } | null,
  balance: number
): VerifyHoldingResult {
  if (!quote) {
    return {
      granted: false,
      wallet,
      mint: GAME_TOKEN_MINT,
      tokenSymbol: 'GAME',
      tokenBalance: balance,
      tokenPriceUsd: null,
      holdingUsd: null,
      minHoldingUsd: MIN_HOLDING_USD,
      message: 'Could not fetch token price. Tap Recheck.',
    };
  }

  const holdingUsd = balance * quote.priceUsd;
  const granted = holdingUsd >= MIN_HOLDING_USD;

  if (granted) {
    return {
      granted: true,
      wallet,
      mint: GAME_TOKEN_MINT,
      tokenSymbol: quote.symbol,
      tokenBalance: balance,
      tokenPriceUsd: quote.priceUsd,
      holdingUsd,
      minHoldingUsd: MIN_HOLDING_USD,
      message: `Access granted · ~$${holdingUsd.toFixed(2)} of $${quote.symbol}`,
    };
  }

  const needMore = Math.max(0, MIN_HOLDING_USD - holdingUsd);
  return {
    granted: false,
    wallet,
    mint: GAME_TOKEN_MINT,
    tokenSymbol: quote.symbol,
    tokenBalance: balance,
    tokenPriceUsd: quote.priceUsd,
    holdingUsd,
    minHoldingUsd: MIN_HOLDING_USD,
    message:
      balance > 0
        ? `Need ~$${needMore.toFixed(2)} more of $${quote.symbol} (~$${MIN_HOLDING_USD} total).`
        : `Hold at least $${MIN_HOLDING_USD} of $${quote.symbol} to play.`,
  };
}

async function verifyHoldingClientInner(wallet: string): Promise<VerifyHoldingResult> {
  const [quoteResult, balanceResult] = await Promise.allSettled([
    fetchTokenQuote(GAME_TOKEN_MINT),
    getSplTokenBalance(wallet, GAME_TOKEN_MINT),
  ]);

  const quote = quoteResult.status === 'fulfilled' ? quoteResult.value : null;
  const balance = balanceResult.status === 'fulfilled' ? balanceResult.value : 0;

  if (balanceResult.status === 'rejected' && quoteResult.status === 'rejected') {
    throw balanceResult.reason instanceof Error
      ? balanceResult.reason
      : new Error('Balance check failed. Tap Recheck.');
  }

  if (balanceResult.status === 'rejected') {
    throw balanceResult.reason instanceof Error
      ? balanceResult.reason
      : new Error('Could not read wallet balance. Tap Recheck.');
  }

  return buildResult(wallet, quote, balance);
}

export async function verifyHoldingClient(wallet: string): Promise<VerifyHoldingResult> {
  return withTimeout(
    verifyHoldingClientInner(wallet),
    VERIFY_TIMEOUT_MS,
    'Balance check timed out. Tap Recheck.'
  );
}
