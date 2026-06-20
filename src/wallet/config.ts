/** SPL mint for Mail Run holder access. */
export const GAME_TOKEN_MINT = 'BzStxA5qec2FurM26CjuFcGQ1en9uKTQd2D1eiVJpump';

/** Minimum USD value of token holdings required to play. */
export const MIN_HOLDING_USD = 3;

export const PUMP_FUN_URL = `https://pump.fun/coin/${GAME_TOKEN_MINT}`;

/** Set VITE_SKIP_TOKEN_GATE=true in .env.local to bypass during development. */
export const TOKEN_GATE_ENABLED = import.meta.env.VITE_SKIP_TOKEN_GATE !== 'true';

export function shortMint(mint = GAME_TOKEN_MINT): string {
  return `${mint.slice(0, 4)}…${mint.slice(-4)}`;
}

/** Server verify endpoint — set VITE_VERIFY_API_URL at build time (see GitHub VERIFY_API_URL var). */
export const VERIFY_API_URLS: string[] = [
  import.meta.env.VITE_VERIFY_API_URL?.trim(),
].filter((url): url is string => Boolean(url));
