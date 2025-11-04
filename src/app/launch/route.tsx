// src/app/launch/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const fragment = url.hash || ""; // like "#code=...&verify=..."

  // implement macOS compatibility if we need to

  // Windows/Linux
  return NextResponse.redirect(`markit://auth${fragment}`, 302);
}
