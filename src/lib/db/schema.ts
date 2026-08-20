import { sql } from "drizzle-orm";
import { sqliteTable, text, integer, index, uniqueIndex } from "drizzle-orm/sqlite-core";

export const students = sqliteTable(
  "students",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    email: text("email").notNull(),
    name: text("name").notNull(),
    // True for staff/teacher accounts previewing the student experience. Their
    // progress is excluded from the class view by default.
    isStaff: integer("is_staff", { mode: "boolean" }).notNull().default(false),
    createdAt: text("created_at")
      .notNull()
      .default(sql`(datetime('now'))`),
    lastSeenAt: text("last_seen_at")
      .notNull()
      .default(sql`(datetime('now'))`),
  },
  (t) => [uniqueIndex("students_email_idx").on(t.email)],
);

// One row per completed unit. Presence = completion — no boolean flag to get
// out of sync. unitId is a content-module id: "pre-reading", "ch-01".."ch-12",
// "checkpoint-1".."checkpoint-3". Content itself lives in src/content/, not
// the DB — this table only tracks which units a student has finished.
export const progress = sqliteTable(
  "progress",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    studentId: text("student_id")
      .notNull()
      .references(() => students.id, { onDelete: "cascade" }),
    unitId: text("unit_id").notNull(),
    completedAt: text("completed_at")
      .notNull()
      .default(sql`(datetime('now'))`),
  },
  (t) => [
    index("progress_student_idx").on(t.studentId),
    uniqueIndex("progress_student_unit_idx").on(t.studentId, t.unitId),
  ],
);

export type Student = typeof students.$inferSelect;
export type Progress = typeof progress.$inferSelect;
