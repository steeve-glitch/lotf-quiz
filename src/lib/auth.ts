import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getEnv } from "@/lib/env";
import type { Role, ClientSession } from "@/lib/session-types";

// "lotf_" prefix so cookies never collide with io-app's "io_" or
// paragraph-app's "ps_" if all three are ever inspected on the same device.
export const SESSION_COOKIE = "lotf_session";
const SESSION_DURATION_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

export type { Role, ClientSession };

export interface Session {
  /** students row id. Null only for the password break-glass superuser. */
  studentId: string | null;
  email: string;
  name: string;
  role: Role;
}

interface TokenPayload extends Session {
  exp: number;
}

// ───────────────────────── base64url + HMAC ─────────────────────────

function b64urlEncode(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecodeToString(s: string): string {
  const pad = s.length % 4 === 0 ? "" : "=".repeat(4 - (s.length % 4));
  const b64 = s.replace(/-/g, "+").replace(/_/g, "/") + pad;
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

async function hmacSign(data: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return b64urlEncode(new Uint8Array(sig));
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// ───────────────────────── session tokens ─────────────────────────

export async function createSessionToken(session: Session): Promise<string> {
  const payload: TokenPayload = { ...session, exp: Date.now() + SESSION_DURATION_MS };
  const body = b64urlEncode(new TextEncoder().encode(JSON.stringify(payload)));
  const sig = await hmacSign(body, getEnv().AUTH_SECRET);
  return `${body}.${sig}`;
}

export async function verifySessionToken(token: string): Promise<Session | null> {
  const parts = token.split(".");
  if (parts.length !== 2) return null;
  const [body, sig] = parts;
  const expected = await hmacSign(body, getEnv().AUTH_SECRET);
  if (!timingSafeEqual(sig, expected)) return null;
  let payload: TokenPayload;
  try {
    payload = JSON.parse(b64urlDecodeToString(body)) as TokenPayload;
  } catch {
    return null;
  }
  if (!payload.exp || Date.now() > payload.exp) return null;
  return {
    studentId: payload.studentId ?? null,
    email: payload.email,
    name: payload.name,
    role: payload.role,
  };
}

/** Cookie options for the session cookie. */
export function sessionCookieOptions(maxAgeMs: number = SESSION_DURATION_MS) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    maxAge: Math.floor(maxAgeMs / 1000),
    path: "/",
  };
}

// ───────────────────────── reading the session ─────────────────────────

/** Reads and validates the session cookie. Returns null if absent/invalid/expired. */
export async function getSession(): Promise<Session | null> {
  const jar = await cookies();
  const token = jar.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  return verifySessionToken(token);
}

/** Session that is guaranteed to have a studentId (i.e. can act as a student). */
export async function getStudentSession(): Promise<(Session & { studentId: string }) | null> {
  const s = await getSession();
  if (!s || !s.studentId) return null;
  return s as Session & { studentId: string };
}

/** Strips the studentId before handing the session to client components. */
export function toClientSession(s: Session): ClientSession {
  return { role: s.role, name: s.name, email: s.email };
}

// ───────────────────────── role resolution ─────────────────────────

/**
 * Maps a verified Google email to a role, or null if the account isn't allowed.
 * Allowlist wins (break-glass / teacher outside the staff domain); then the
 * student domain; then the staff domain → teacher; then the test-email
 * bypass; otherwise rejected.
 */
export function resolveRole(email: string): Role | null {
  const e = email.trim().toLowerCase();
  const env = getEnv();
  const admins = env.ADMIN_EMAILS.split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  if (admins.includes(e)) return "teacher";
  // Student domain is a subdomain of the staff domain; the leading "@" anchor
  // keeps the two checks disjoint, so check students first to be safe.
  const studentDomain = env.STUDENT_EMAIL_DOMAIN.trim().toLowerCase();
  if (e.endsWith(`@${studentDomain}`)) return "student";
  const staffDomain = env.STAFF_EMAIL_DOMAIN.trim().toLowerCase();
  if (staffDomain && e.endsWith(`@${staffDomain}`)) return "teacher";
  const testEmails = env.TEST_EMAILS.split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  if (testEmails.includes(e)) return "student";
  return null;
}

// ───────────────────────── guards (pages) ─────────────────────────

/** Server guard for admin pages: must be a teacher, else redirect to the landing sign-in. */
export async function requireTeacher(): Promise<Session> {
  const s = await getSession();
  if (!s || s.role !== "teacher") redirect("/");
  return s;
}

// ───────────────────────── password fallback ─────────────────────────

/** Break-glass superuser check, constant-time. Used by the password login form. */
export async function verifyAdminPassword(password: string): Promise<boolean> {
  const expected = getEnv().ADMIN_PASSWORD;
  const secret = getEnv().AUTH_SECRET;
  const [a, b] = await Promise.all([hmacSign(password, secret), hmacSign(expected, secret)]);
  return timingSafeEqual(a, b);
}
