import Link from "next/link";
import { getStudentSession } from "@/lib/auth";
import { getCompletedUnitIds } from "@/lib/progressServer";
import { isUnitUnlocked, nextUnitId } from "@/lib/sequence";
import { unitHref, unitLabel } from "@/lib/unitLinks";
import { CHAPTER_MAP } from "@/content/chapters";
import { getPartTheme, partBackgroundStyle } from "@/lib/partTheme";
import { ChapterFlow } from "@/components/chapter/ChapterFlow";

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getStudentSession();
  if (!session) return null;

  const chapter = CHAPTER_MAP[id];
  const completed = await getCompletedUnitIds(session.studentId);
  const unlocked = isUnitUnlocked(id, completed);
  const theme = getPartTheme(chapter?.part ?? 1);
  const bgStyle = partBackgroundStyle(chapter?.part ?? 1);

  if (!unlocked) {
    return (
      <main className="flex-1 grain flex items-center justify-center px-4" style={bgStyle}>
        <div className="text-center max-w-sm">
          <p className="text-4xl mb-3">🔒</p>
          <p className="font-semibold text-lg" style={{ color: theme.ink }}>
            This chapter isn&apos;t unlocked yet.
          </p>
          <p className="text-base text-[var(--color-muted)] mt-1 mb-4">
            Finish the previous chapter first.
          </p>
          <Link href="/" className="text-base font-semibold underline" style={{ color: theme.accent }}>
            ← Back to your reading path
          </Link>
        </div>
      </main>
    );
  }

  if (!chapter) {
    return (
      <main className="flex-1 grain flex items-center justify-center px-4" style={bgStyle}>
        <div className="text-center max-w-sm">
          <p className="font-display text-2xl mb-2" style={{ color: theme.ink }}>
            Coming soon
          </p>
          <p className="text-base text-[var(--color-muted)] mb-4">
            This chapter is still being written. Check back soon, or ask your teacher.
          </p>
          <Link href="/" className="text-base font-semibold underline" style={{ color: theme.accent }}>
            ← Back to your reading path
          </Link>
        </div>
      </main>
    );
  }

  const next = nextUnitId(chapter.id);
  const alreadyComplete = completed.has(chapter.id);

  return (
    <main className="flex-1 grain" style={bgStyle}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: theme.accent }}>
            {theme.label} · Chapter {chapter.number}
          </p>
          <h1 className="font-display text-3xl" style={{ color: theme.ink }}>
            {chapter.title}
          </h1>
        </div>

        <ChapterFlow
          chapter={chapter}
          theme={theme}
          alreadyComplete={alreadyComplete}
          nextHref={next ? unitHref(next) : "/"}
          nextLabel={next ? `Continue to ${unitLabel(next)} →` : "Back to your reading path →"}
        />
      </div>
    </main>
  );
}
