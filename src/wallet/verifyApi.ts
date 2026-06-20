import type { VerifyHoldingResult } from './gateTypes';
import { verifyHoldingClient } from './verifyClient';

function configuredApiBase(): string | null {
  const url = import.meta.env.VITE_VERIFY_API_URL?.trim();
  return url || null;
}

function relativeApiUrl(wallet: string): string {
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
    return 'Verification API not found';
  }
  return `Verification API HTTP ${status}`;
}

function looksLikeHtml(raw: string): boolean {
  const sample = raw.trim().slice(0, 64).toLowerCase();
  return sample.startsWith('<!doctype') || sample.startsWith('<html') || sample.includes('<head');
}

function isValidResult(body: unknown): body is VerifyHoldingResult {
  return (
    body != null &&
    typeof body === 'object' &&
    typeof (body as VerifyHoldingResult).message === 'string' &&
    typeof (body as VerifyHoldingResult).granted === 'boolean'
  );
}

async function verifyViaApi(url: string): Promise<VerifyHoldingResult | null> {
  const res = await fetch(url, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });

  const raw = await res.text();
  if (!raw || looksLikeHtml(raw)) return null;

  let body: VerifyHoldingResult & { error?: unknown };
  try {
    body = JSON.parse(raw) as VerifyHoldingResult & { error?: unknown };
  } catch {
    return null;
  }

  if (!res.ok) {
    throw new Error(readApiError(body, res.status));
  }

  if (!isValidResult(body)) return null;
  return body;
}

export async function verifyHoldingApi(wallet: string): Promise<VerifyHoldingResult> {
  const apiUrls = [
    configuredApiBase()
      ? `${configuredApiBase()!.replace(/\/$/, '')}?wallet=${encodeURIComponent(wallet)}`
      : null,
    relativeApiUrl(wallet),
  ].filter((url): url is string => Boolean(url));

  for (const url of apiUrls) {
    try {
      const result = await verifyViaApi(url);
      if (result) return result;
    } catch (err) {
      if (err instanceof Error && err.message.startsWith('Verification API HTTP')) {
        continue;
      }
      throw err;
    }
  }

  return verifyHoldingClient(wallet);
}
