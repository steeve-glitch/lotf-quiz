import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { students } from "@/lib/db/schema";
import { getEnv } from "@/lib/env";
import {
  exchangeCodeForIdToken,
  decodeIdToken,
  validateIdClaims,
} from "@/lib/oauth/google";
import {
  resolveRole,
  createSessionToken,
  sessionCookieOptions,
  SESSION_COOKIE,
  type Session,
} from "@/lib/auth";

export const dynamic = "force-dynamic";

const OAUTH_COOKIE = "lotf_oauth";

function getOrigin(req: NextRequest): string {
  const url = new URL(req.url);
  const proto = req.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? url.host;
  return `${proto}://${host}`;
}

function fail(origin: string, reason: string): NextResponse {
  const res = NextResponse.redirect(`${origin}/?auth_error=${reason}`);
  res.cookies.delete(OAUTH_COOKIE);
  return res;
}

export async function GET(req: NextRequest) {
  const origin = getOrigin(req);
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const returnedState = url.searchParams.get("state");

  if (url.searchParams.get("error") || !code || !returnedState) {
    return fail(origin, "cancelled");
  }

  // Validate CSRF state + recover nonce/next from the cookie set at login.
  const raw = req.cookies.get(OAUTH_COOKIE)?.value;
  if (!raw) return fail(origin, "expired");
  let stored: { state: string; nonce: string; next: string };
  try {
    stored = JSON.parse(raw);
  } catch {
    return fail(origin, "expired");
  }
  if (stored.state !== returnedState) return fail(origin, "state");

  const env = getEnv();
  const redirectUri = `${origin}/api/auth/google/callback`;

  let email: string;
  let name: string;
  try {
    const idToken = await exchangeCodeForIdToken({
      code,
      clientId: env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: env.GOOGLE_OAUTH_CLIENT_SECRET,
      redirectUri,
    });
    const claims = decodeIdToken(idToken);
    ({ email, name } = validateIdClaims(claims, {
      clientId: env.GOOGLE_OAUTH_CLIENT_ID,
      nonce: stored.nonce,
    }));
  } catch (err) {
    console.error("[auth/callback] token validation failed:", err);
    return fail(origin, "token");
  }

  const role = resolveRole(email);
  if (!role) return fail(origin, "domain");

  // Upsert the student/staff record keyed by verified email.
  const db = getDb();
  const isStaff = role === "teacher";
  const now = new Date().toISOString().replace("T", " ").slice(0, 19);

  const [existing] = await db
    .select()
    .from(students)
    .where(eq(students.email, email.toLowerCase()))
    .limit(1);

  let studentId: string;
  if (existing) {
    studentId = existing.id;
    await db
      .update(students)
      .set({ name, isStaff, lastSeenAt: now })
      .where(eq(students.id, existing.id));
  } else {
    const [created] = await db
      .insert(students)
      .values({ email: email.toLowerCase(), name, isStaff, lastSeenAt: now })
      .returning();
    studentId = created.id;
  }

  const session: Session = { studentId, email: email.toLowerCase(), name, role };
  const token = await createSessionToken(session);

  // Teachers land on the dashboard; students go to their intended page.
  const dest = role === "teacher" ? "/admin" : stored.next || "/";
  const res = NextResponse.redirect(`${origin}${dest}`);
  res.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  res.cookies.delete(OAUTH_COOKIE);
  return res;
}
