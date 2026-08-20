import Link from "next/link";
import { RopeDivider } from "@/components/RopeDivider";
import { getStudentSession } from "@/lib/auth";
import { getCompletedUnitIds } from "@/lib/progressServer";
import { isUnitUnlocked } from "@/lib/sequence";
import { PARTS, CHECKPOINTS } from "@/content/parts";
import { CHAPTER_MAP } from "@/content/chapters";
import { getPartTheme, partBackgroundStyle } from "@/lib/partTheme";

export default async function DashboardPage() {
  const session = await getStudentSession();
  if (!session) return null; // SessionGate handles sign-in

  const completed = await getCompletedUnitIds(session.studentId);
  const preReadingUnlocked = true;
  const preReadingDone = completed.has("pre-reading");

  return (
    <main className="flex-1 grain" style={partBackgroundStyle(1)}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 relative">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-part1-accent)] mb-2">
          🐚 Welcome back, {session.name.split(" ")[0]}
        </p>
        <h1 className="font-display text-3xl text-[var(--color-part1-ink)] mb-2">
          Your reading path
        </h1>
        <p className="text-base text-[var(--color-muted)] mb-8 max-w-xl leading-relaxed">
          Work through this at your own pace alongside class reading. Each chapter unlocks the next —
          finish one before moving on.
        </p>

        <UnitRow
          href="/pre-reading"
          title="Pre-Reading Hub"
          subtitle="Golding, context, and how to read this book"
          unlocked={preReadingUnlocked}
          done={preReadingDone}
        />

        {PARTS.map((part, partIndex) => {
          const theme = getPartTheme(part.id);
          const checkpoint = CHECKPOINTS.find((c) => c.afterPart === part.id);
          return (
            <div key={part.id} className="mt-8">
              {partIndex > 0 && <RopeDivider />}
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full" style={{ background: theme.accent }} />
                <h2 className="font-display text-lg" style={{ color: theme.ink }}>
                  {part.title}
                </h2>
              </div>
              <div className="space-y-2">
                {part.chapterIds.map((id) => {
                  const chapter = CHAPTER_MAP[id];
                  const unlocked = isUnitUnlocked(id, completed);
                  const done = completed.has(id);
                  const num = id.replace("ch-", "");
                  return (
                    <UnitRow
                      key={id}
                      href={`/chapter/${id}`}
                      title={chapter ? `Ch ${chapter.number}: ${chapter.title}` : `Chapter ${Number(num)}`}
                      subtitle={chapter ? undefined : "Coming soon"}
                      unlocked={unlocked}
                      done={done}
                      disabled={!chapter}
                    />
                  );
                })}
                {checkpoint && (
                  <UnitRow
                    href={`/checkpoint/${checkpoint.id}`}
                    title={checkpoint.title}
                    subtitle="Synthesis checkpoint — required to move on"
                    unlocked={isUnitUnlocked(checkpoint.id, completed)}
                    done={completed.has(checkpoint.id)}
                    emphasized
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

function UnitRow({
  href,
  title,
  subtitle,
  unlocked,
  done,
  disabled,
  emphasized,
}: {
  href: string;
  title: string;
  subtitle?: string;
  unlocked: boolean;
  done: boolean;
  disabled?: boolean;
  emphasized?: boolean;
}) {
  const content = (
    <div
      className={`flex items-center justify-between rounded-xl border px-4 py-3.5 transition ${
        unlocked && !disabled
          ? "bg-white border-[var(--color-border)] hover:border-[var(--color-part1-accent)] cursor-pointer"
          : "bg-neutral-50 border-[var(--color-border)] opacity-60 cursor-not-allowed"
      } ${emphasized ? "ring-1 ring-[var(--color-part1-accent)]" : ""}`}
    >
      <div>
        <p className="text-base font-semibold text-[var(--color-ink)]">{title}</p>
        {subtitle && <p className="text-sm text-[var(--color-muted)] mt-0.5">{subtitle}</p>}
      </div>
      <span className="text-lg">{done ? "✅" : unlocked && !disabled ? "→" : "🔒"}</span>
    </div>
  );

  if (!unlocked || disabled) return <div>{content}</div>;
  return <Link href={href}>{content}</Link>;
}
