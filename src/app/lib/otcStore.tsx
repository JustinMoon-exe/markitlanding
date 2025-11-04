// src/lib/otcStore.ts
// in memory storage for single use codes (maybe swap to Redis later)

type CodeEntry = { uid: string; exp: number; used: boolean };
const CODES = new Map<string, CodeEntry>();

export function putCode(code: string, uid: string, ttlMs = 5 * 60 * 1000): void {
  CODES.set(code, { uid, exp: Date.now() + ttlMs, used: false });
}

export function takeCode(code: string): string | null {
  const row = CODES.get(code);
  if (!row) return null;
  CODES.delete(code); // single-use
  if (row.used) return null;
  if (Date.now() > row.exp) return null;
  row.used = true;
  return row.uid;
}
