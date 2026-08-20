import { getStudentSession } from "@/lib/auth";
import { getCompletedUnitIds } from "@/lib/progressServer";
import { PRE_READING_SECTIONS, ORTHODOXY_CHECK_QUESTION } from "@/content/preReading";
import { MarkCompleteButton } from "@/components/student/MarkCompleteButton";
import { SetChatContext } from "@/components/chat/SetChatContext";

export default async function PreReadingPage() {
  const session = await getStudentSession();
  if (!session) return null;
  const completed = await getCompletedUnitIds(session.studentId);

  return (
    <main className="flex-1 grain" style={{ background: "var(--color-part1-bg)" }}>
      <SetChatContext unitId="pre-reading" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-part1-accent)] mb-2">
            Before Chapter 1
          </p>
          <h1 className="font-display text-3xl text-[var(--color-part1-ink)]">Pre-Reading Hub</h1>
        </div>

        {PRE_READING_SECTIONS.map((s) => (
          <section key={s.id} className="rounded-xl border border-[var(--color-border)] bg-white p-5">
            <h2 className="font-display text-lg mb-2" style={{ color: "var(--color-part1-accent)" }}>
              {s.title}
            </h2>
            <p className="text-sm leading-relaxed">{s.body}</p>
          </section>
        ))}

        <section className="rounded-xl border border-[var(--color-border)] bg-white p-5">
          <h2 className="font-display text-lg mb-2" style={{ color: "var(--color-part1-accent)" }}>
            One question before you start
          </h2>
          <p className="text-sm font-semibold mb-2">{ORTHODOXY_CHECK_QUESTION.question}</p>
          <p className="text-xs text-[var(--color-muted)] mb-3">{ORTHODOXY_CHECK_QUESTION.note}</p>
          <textarea
            rows={3}
            placeholder="Write a sentence or two — you'll compare this to how you feel after Chapter 12."
            className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm focus:outline-none focus:ring-2"
          />
        </section>

        <div className="pt-2">
          <MarkCompleteButton
            unitId="pre-reading"
            alreadyComplete={completed.has("pre-reading")}
            nextHref="/chapter/ch-01"
            nextLabel="Go to Chapter 1 →"
          />
        </div>
      </div>
    </main>
  );
}
