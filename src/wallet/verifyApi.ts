import type { VerifyHoldingResult } from './gateTypes';

function verifyApiUrl(wallet: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}api/verify-holding?wallet=${encodeURIComponent(wallet)}`;
}

function readApiError(body: unknown, status: number): string {
  if (body && typeof body === 'object' && 'error' in body) {
    const err = (body as { error?: unknown }).error;
    if (typeof err === 'string' && err.trim()) return err;
    if (err && typeof err === 'object' && 'message' in err) {
      const message = (err as { message?: unknown }).message;
      if (typeof message === 'string' && message.trim()) return message;
    }
  }
  if (status === 404) {
    return 'Verification service unavailable. Redeploy with API routes enabled.';
  }
  return `Verification API HTTP ${status}`;
}

export async function verifyHoldingApi(wallet: string): Promise<VerifyHoldingResult> {
  const res = await fetch(verifyApiUrl(wallet), {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });

  const raw = await res.text();
  let body: VerifyHoldingResult & { error?: unknown } = {} as VerifyHoldingResult & { error?: unknown };
  if (raw) {
    try {
      body = JSON.parse(raw) as VerifyHoldingResult & { error?: unknown };
    } catch {
      throw new Error(
        res.ok
          ? 'Verification service returned invalid data.'
          : readApiError(null, res.status)
      );
    }
  }

  if (!res.ok) {
    throw new Error(readApiError(body, res.status));
  }

  if (typeof body.message !== 'string') {
    throw new Error('Verification service returned invalid data.');
  }

  return body;
}
