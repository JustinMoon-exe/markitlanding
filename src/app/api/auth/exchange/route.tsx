// src/app/api/auth/exchange/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { takeCode } from "@/lib/otcStore";

function getAdminApp(): App {
  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_B64;
  if (!b64) throw new Error("FIREBASE_SERVICE_ACCOUNT_B64 is not set");
  const json = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
  if (!getApps().length) {
    return initializeApp({ credential: cert(json) });
  }
  return getApps()[0]!;
}


export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();
    if (!code) {
      return NextResponse.json({ error: "bad_request" }, { status: 400 });
    }

    const uid = takeCode(code);
    if (!uid) {
      return NextResponse.json({ error: "invalid_code" }, { status: 400 });
    }

    const auth = getAuth(getAdminApp());
    const customToken = await auth.createCustomToken(uid, { source: "desktop" });

    return NextResponse.json({ uid, customToken });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "error" }, { status: 500 });
  }
}
