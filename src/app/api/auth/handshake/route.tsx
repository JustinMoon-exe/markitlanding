// src/app/api/auth/handshake/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { randomBytes } from "crypto";
import { jwtVerify } from "jose";
import { putCode } from "@/lib/otcStore";

const ALLOW_ORIGIN = "https://markit-aff0e.web.app";
function withCORS(res: NextResponse) {
  res.headers.set("Access-Control-Allow-Origin", ALLOW_ORIGIN);
  res.headers.set("Vary", "Origin");
  res.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "content-type");
  res.headers.set("Access-Control-Max-Age", "600");
  return res;
}
export async function OPTIONS() { return withCORS(new NextResponse(null, { status: 204 })); }

function getSecret() {
  const s = process.env.AUTH_VERIFY_SECRET;
  if (!s) throw new Error("AUTH_VERIFY_SECRET missing");
  return new TextEncoder().encode(s);
}

function getAdminApp(): App {
  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_B64!;
  const json = JSON.parse(Buffer.from(b64, "base64").toString("utf8"));
  if (!getApps().length) return initializeApp({ credential: cert(json) });
  return getApps()[0]!;
}

export async function POST(req: NextRequest) {
  try {
    const { idToken, verify } = await req.json();
    if (!idToken || !verify) {
      return withCORS(NextResponse.json({ error: "bad_request" }, { status: 400 }));
    }

    // Verify signed JWT
    await jwtVerify(verify, getSecret(), {
      issuer: "markit:desktop",
      audience: "markit:sso-hosted",
      algorithms: ["HS256"],
    });
    // Verify Firebase ID token from SSO
    const auth = getAuth(getAdminApp());
    const decoded = await auth.verifyIdToken(idToken, true);
    const uid = decoded.uid;

    // Mint one-time code bound to uid
    const code = randomBytes(24).toString("base64url");
    putCode(code, uid);

    return withCORS(NextResponse.json({ code }));
  } catch (e: any) {
    return withCORS(NextResponse.json({ error: e?.message ?? "error" }, { status: 400 }));
  }
}
