import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  verifyAdminPassword,
  createSessionToken,
  sessionCookieOptions,
  SESSION_COOKIE,
  type Session,
} from "@/lib/auth";

export const dynamic = "force-dynamic";

const bodySchema = z.object({
  password: z.string().min(1),
});

/**
 * Break-glass superuser login. The primary path is Google SSO; this exists so
 * the teacher can still reach the dashboard if SSO is unavailable. Grants a
 * teacher session with no studentId (cannot act as a student).
 */
export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 422 });
  }

  const ok = await verifyAdminPassword(parsed.data.password);
  if (!ok) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const session: Session = { studentId: null, email: "superuser", name: "Superuser", role: "teacher" };
  const token = await createSessionToken(session);

  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, token, sessionCookieOptions());
  return response;
}
