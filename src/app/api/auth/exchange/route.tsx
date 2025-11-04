// src/app/api/auth/exchange/route.ts
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase_init";
import { takeCode } from "@/lib/otcStore";

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();
    if (!code) {
      return NextResponse.json({ error: "bad_request" }, { status: 400 });
    }

    const uid = await takeCode(code);
    if (!uid) {
      return NextResponse.json({ error: "invalid_code" }, { status: 400 });
    }

    const auth = adminAuth();
    const customToken = await auth.createCustomToken(uid, { source: "desktop" });

    return NextResponse.json({ uid, customToken });
  } catch (e) {
    const message = e instanceof Error ? e.message : "error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
