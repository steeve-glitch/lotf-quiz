/**
 * Minimal, dependency-free Google OAuth 2.0 Authorization Code flow.
 *
 * The ID token is received directly from Google's token endpoint over TLS, so
 * per Google's own guidance we validate its claims but skip JWKS signature
 * verification — there is no untrusted hop to defend against.
 * https://developers.google.com/identity/openid-connect/openid-connect#obtainuserinfo
 */

const AUTH_ENDPOINT = "https://accounts.google.com/o/oauth2/v2/auth";
const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const VALID_ISSUERS = ["accounts.google.com", "https://accounts.google.com"];

export interface GoogleIdClaims {
  iss: string;
  aud: string;
  sub: string;
  email?: string;
  email_verified?: boolean | string;
  name?: string;
  hd?: string;
  nonce?: string;
  exp: number;
}

export function buildGoogleAuthUrl(opts: {
  clientId: string;
  redirectUri: string;
  state: string;
  nonce: string;
}): string {
  const params = new URLSearchParams({
    client_id: opts.clientId,
    redirect_uri: opts.redirectUri,
    response_type: "code",
    scope: "openid email profile",
    state: opts.state,
    nonce: opts.nonce,
    // Always let the user pick which school account to use.
    prompt: "select_account",
    access_type: "online",
  });
  return `${AUTH_ENDPOINT}?${params.toString()}`;
}

export async function exchangeCodeForIdToken(opts: {
  code: string;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}): Promise<string> {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code: opts.code,
      client_id: opts.clientId,
      client_secret: opts.clientSecret,
      redirect_uri: opts.redirectUri,
      grant_type: "authorization_code",
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Token exchange failed (${res.status}): ${detail.slice(0, 300)}`);
  }
  const data = (await res.json()) as { id_token?: string };
  if (!data.id_token) throw new Error("Token response missing id_token");
  return data.id_token;
}

function b64urlDecodeToString(s: string): string {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + pad;
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

export function decodeIdToken(idToken: string): GoogleIdClaims {
  const parts = idToken.split(".");
  if (parts.length !== 3) throw new Error("Malformed id_token");
  return JSON.parse(b64urlDecodeToString(parts[1])) as GoogleIdClaims;
}

/** Validates issuer, audience, expiry, nonce, and verified email. Returns the email or throws. */
export function validateIdClaims(
  claims: GoogleIdClaims,
  opts: { clientId: string; nonce: string },
): { email: string; name: string } {
  if (!VALID_ISSUERS.includes(claims.iss)) throw new Error("Bad issuer");
  if (claims.aud !== opts.clientId) throw new Error("Audience mismatch");
  if (!claims.exp || Date.now() / 1000 > claims.exp) throw new Error("Token expired");
  if (claims.nonce !== opts.nonce) throw new Error("Nonce mismatch");
  const verified = claims.email_verified === true || claims.email_verified === "true";
  if (!claims.email || !verified) throw new Error("Email not verified");
  return { email: claims.email, name: claims.name || claims.email.split("@")[0] };
}
