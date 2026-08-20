import "server-only";
import { eq } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { progress } from "@/lib/db/schema";

export async function getCompletedUnitIds(studentId: string): Promise<Set<string>> {
  const db = getDb();
  const rows = await db
    .select({ unitId: progress.unitId })
    .from(progress)
    .where(eq(progress.studentId, studentId));
  return new Set(rows.map((r) => r.unitId));
}
