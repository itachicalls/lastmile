import { GAME_TOKEN_MINT, MIN_HOLDING_USD } from './config';
import type { VerifyHoldingResult } from './gateTypes';

const RPC_URLS = [
  'https://solana-rpc.publicnode.com',
  'https://api.mainnet-beta.solana.com',
];

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

async function rpcCall<T>(method: string, params: unknown[]): Promise<T> {
  let lastError: Error | null = null;

  for (const endpoint of RPC_URLS) {
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

  throw lastError ?? new Error('Could not reach Solana network. Try again.');
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

export async function verifyHoldingClient(wallet: string): Promise<VerifyHoldingResult> {
  const [quote, balance] = await Promise.all([
    fetchTokenQuote(GAME_TOKEN_MINT),
    getSplTokenBalance(wallet, GAME_TOKEN_MINT),
  ]);

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
      message: 'Could not fetch token price. Try again in a moment.',
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
