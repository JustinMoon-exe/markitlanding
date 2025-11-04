export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { randomUUID, timingSafeEqual } from "crypto";

function isAuthorized(req: NextRequest): boolean {
  const sent = req.headers.get("x-app-start-secret") || "";
  const expected = process.env.APP_START_SECRET || "";
  if (!expected || sent.length !== expected.length) return false;
  const a = Buffer.from(sent, "utf8");
  const b = Buffer.from(expected, "utf8");
  return timingSafeEqual(a, b);
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const now = Math.floor(Date.now() / 1000);
  const verify = await new SignJWT({ typ: "verify", jti: randomUUID() })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt(now)
    .setIssuer("markit:desktop")
    .setAudience("markit:sso-hosted")
    .setExpirationTime("2m")
    .sign(new TextEncoder().encode(process.env.AUTH_VERIFY_SECRET));

  return NextResponse.json({ verify });
}
