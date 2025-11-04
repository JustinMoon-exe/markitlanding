// use firebase for one-time codes
import { adminDb } from "@/lib/firebase_init";

export async function putCode(code: string, uid: string, ttlMs = 2 * 60 * 1000): Promise<void> {
  const exp = Date.now() + ttlMs;
  await adminDb().doc(`otc_codes/${code}`).set({ uid, exp, used: false });
}

export async function takeCode(code: string): Promise<string | null> {
  const ref = adminDb().doc(`otc_codes/${code}`);
  return adminDb().runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    if (!snap.exists) return null;
    const data = snap.data() as { uid: string; exp: number; used?: boolean };
    if (!data || data.used) return null;
    if (Date.now() > data.exp) return null;
    tx.delete(ref); // claim single-use
    return data.uid;
  });
}