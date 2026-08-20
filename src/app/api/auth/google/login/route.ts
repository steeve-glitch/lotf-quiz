import { NextRequest, NextResponse } from "next/server";
import { getEnv } from "@/lib/env";
import { buildGoogleAuthUrl } from "@/lib/oauth/google";

export const dynamic = "force-dynamic";

const OAUTH_COOKIE = "lotf_oauth";

function getOrigin(req: NextRequest): string {
  const url = new URL(req.url);
  const proto = req.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? url.host;
  return `${proto}://${host}`;
}

function randomToken(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function GET(req: NextRequest) {
  const env = getEnv();
  const state = randomToken();
  const nonce = randomToken();

  // Only allow same-site relative paths as the post-login destination.
  const nextParam = new URL(req.url).searchParams.get("next") ?? "/";
  const next = nextParam.startsWith("/") && !nextParam.startsWith("//") ? nextParam : "/";

  const redirectUri = `${getOrigin(req)}/api/auth/google/callback`;
  const authUrl = buildGoogleAuthUrl({
    clientId: env.GOOGLE_OAUTH_CLIENT_ID,
    redirectUri,
    state,
    nonce,
  });

  const res = NextResponse.redirect(authUrl);
  res.cookies.set(OAUTH_COOKIE, JSON.stringify({ state, nonce, next }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 600, // 10 minutes to complete the round-trip
    path: "/",
  });
  return res;
}
