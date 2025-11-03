// src/app/launch/route.ts
import { NextRequest, NextResponse } from "next/server";

// function isMacOS(ua: string) { return /\bMacintosh;/.test(ua); }

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const fragment = url.hash || ""; // like "#code=...&verify=..."

  // set up Mac compatibility
  // const ua = req.headers.get("user-agent") || "";
  // if (isMacOS(ua)) {
  //   // macOS: Universal Link path your app claims via AASA
  //   return NextResponse.redirect(`https://markittrade.com/ulink/auth${fragment}`, 302);
  // }
  // Windows/Linux: custom scheme
  return NextResponse.redirect(`markit://auth${fragment}`, 302);
}
