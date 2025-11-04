// src/app/api/auth/handshake/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase_init";
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

export async function POST(req: NextRequest) {
  try {
    const { idToken, verify } = await req.json();
    if (!idToken || !verify) {
      return withCORS(NextResponse.json({ error: "bad_request" }, { status: 400 }));
    }

    // Verify signed JWT
    await jwtVerify(verify, new TextEncoder().encode(process.env.AUTH_VERIFY_SECRET), {
      issuer: "markit:desktop",
      audience: "markit:sso-hosted",
      algorithms: ["HS256"],
    });
    // Verify Firebase ID token from SSO
    const auth = adminAuth();
    const decoded = await auth.verifyIdToken(idToken, true);
    const uid = decoded.uid;

    // Mint one-time code bound to uid
    const code = randomBytes(24).toString("base64url");
    putCode(code, uid);

    return withCORS(NextResponse.json({ code }));
  } catch (e) {
    const message = e instanceof Error ? e.message : "error";
    return withCORS(NextResponse.json({ error: message }, { status: 400 }));
  }
}
