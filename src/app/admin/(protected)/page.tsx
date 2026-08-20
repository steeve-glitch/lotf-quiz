import { eq } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { students, progress } from "@/lib/db/schema";
import { getOrderedUnitIds } from "@/lib/sequence";
import { unitLabel } from "@/lib/unitLinks";

export default async function AdminDashboardPage() {
  const db = getDb();
  const roster = await db.select().from(students).where(eq(students.isStaff, false));
  const allProgress = await db.select().from(progress);

  const units = getOrderedUnitIds();
  const byStudent = new Map<string, Set<string>>();
  for (const row of allProgress) {
    if (!byStudent.has(row.studentId)) byStudent.set(row.studentId, new Set());
    byStudent.get(row.studentId)!.add(row.unitId);
  }

  const sorted = [...roster].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1 className="font-display text-2xl text-[var(--color-part1-ink)] mb-1">Class progress</h1>
      <p className="text-sm text-[var(--color-muted)] mb-6">
        {sorted.length} student{sorted.length === 1 ? "" : "s"} signed in so far.
      </p>

      {sorted.length === 0 ? (
        <p className="text-sm text-[var(--color-muted)]">No students have signed in yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[var(--color-border)] bg-white">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-neutral-50">
                <th className="text-left px-4 py-2.5 font-semibold sticky left-0 bg-neutral-50">Student</th>
                {units.map((u) => (
                  <th key={u} className="px-3 py-2.5 font-semibold text-center whitespace-nowrap text-xs">
                    {unitLabel(u)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((s) => {
                const done = byStudent.get(s.id) ?? new Set<string>();
                return (
                  <tr key={s.id} className="border-b border-[var(--color-border)] last:border-0">
                    <td className="px-4 py-2.5 font-medium sticky left-0 bg-white whitespace-nowrap">
                      {s.name}
                      <span className="block text-xs text-[var(--color-muted)] font-normal">{s.email}</span>
                    </td>
                    {units.map((u) => (
                      <td key={u} className="px-3 py-2.5 text-center">
                        {done.has(u) ? "✅" : "—"}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
