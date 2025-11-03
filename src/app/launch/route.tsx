// src/app/launch/route.ts
import { NextRequest, NextResponse } from "next/server";

function isMacOS(ua: string) { return /\bMacintosh;/.test(ua); }

export async function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const url = new URL(req.url);

  const fragment = url.hash || ""; // like "#code=...&verify=..."
  // set up Mac compatibility

  // if (isMacOS(ua)) {
  //   // macOS: Universal Link path your app claims via AASA
  //   return NextResponse.redirect(`https://markittrade.com/ulink/auth${fragment}`, 302);
  // }
  // Windows/Linux: custom scheme
  return NextResponse.redirect(`markit://auth${fragment}`, 302);
}
