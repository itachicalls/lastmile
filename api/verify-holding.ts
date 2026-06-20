export const config = { runtime: 'edge' };

import { verifyWalletHolding } from '../lib/tokenGateServer';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS,
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: CORS });
  }

  if (request.method !== 'GET') {
    return json({ error: 'Method not allowed' }, 405);
  }

  const wallet = new URL(request.url).searchParams.get('wallet')?.trim() ?? '';
  if (!wallet) {
    return json({ error: 'Missing wallet query parameter' }, 400);
  }

  try {
    const result = await verifyWalletHolding(wallet);
    return json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Verification failed';
    return json({ error: message }, 500);
  }
}
