/** SPL mint for Mail Run holder access. */
export const GAME_TOKEN_MINT = 'BzStxA5qec2FurM26CjuFcGQ1en9uKTQd2D1eiVJpump';

/** Minimum USD value of token holdings required to play. */
export const MIN_HOLDING_USD = 3;

export const PUMP_FUN_URL = `https://pump.fun/coin/${GAME_TOKEN_MINT}`;

/** Production builds set VITE_SKIP_TOKEN_GATE=true (.env.production / CI). Local: .env.local */
export const TOKEN_GATE_ENABLED = import.meta.env.VITE_SKIP_TOKEN_GATE !== 'true';

export function shortMint(mint = GAME_TOKEN_MINT): string {
  return `${mint.slice(0, 4)}…${mint.slice(-4)}`;
}

/** Mobula verify API on Vercel — never hit public RPC from the browser. */
export const DEFAULT_VERIFY_API_URL = 'https://lastmile-ten.vercel.app/api/verify-holding';

/** Server verify endpoint — override with VITE_VERIFY_API_URL at build time. */
export const VERIFY_API_URLS: string[] = [
  import.meta.env.VITE_VERIFY_API_URL?.trim(),
  DEFAULT_VERIFY_API_URL,
].filter((url): url is string => Boolean(url));
