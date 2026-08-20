import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { getStudentSession } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { progress } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

const bodySchema = z.object({ unitId: z.string().min(1) });

export async function GET() {
  const session = await getStudentSession();
  if (!session) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  const db = getDb();
  const rows = await db
    .select({ unitId: progress.unitId })
    .from(progress)
    .where(eq(progress.studentId, session.studentId));

  return NextResponse.json({ completedUnitIds: rows.map((r) => r.unitId) });
}

export async function POST(req: NextRequest) {
  const session = await getStudentSession();
  if (!session) return NextResponse.json({ error: "Not signed in" }, { status: 401 });

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const parsed = bodySchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "Invalid input" }, { status: 422 });

  const db = getDb();
  // Idempotent — a student re-completing a unit (e.g. revisiting) just no-ops
  // on the unique (student_id, unit_id) index rather than erroring.
  await db
    .insert(progress)
    .values({ studentId: session.studentId, unitId: parsed.data.unitId })
    .onConflictDoNothing();

  return NextResponse.json({ ok: true });
}
