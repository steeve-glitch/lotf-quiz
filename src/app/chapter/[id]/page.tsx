import Link from "next/link";
import { getStudentSession } from "@/lib/auth";
import { getCompletedUnitIds } from "@/lib/progressServer";
import { isUnitUnlocked, nextUnitId } from "@/lib/sequence";
import { unitHref, unitLabel } from "@/lib/unitLinks";
import { CHAPTER_MAP } from "@/content/chapters";
import { getPartTheme } from "@/lib/partTheme";
import { MarkCompleteButton } from "@/components/student/MarkCompleteButton";
import { SetChatContext } from "@/components/chat/SetChatContext";
import { VocabularyActivity } from "@/components/activities/VocabularyActivity";
import { CloseReadingActivity } from "@/components/activities/CloseReadingActivity";
import { SymbolTracker } from "@/components/activities/SymbolTracker";
import { CharacterArcTracker } from "@/components/activities/CharacterArcTracker";
import { ParagraphBuilder } from "@/components/activities/ParagraphBuilder";
import { ReflectionActivity } from "@/components/activities/ReflectionActivity";
import { TriviaChallenge } from "@/components/activities/TriviaChallenge";

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getStudentSession();
  if (!session) return null;

  const chapter = CHAPTER_MAP[id];
  const completed = await getCompletedUnitIds(session.studentId);
  const unlocked = isUnitUnlocked(id, completed);
  const theme = getPartTheme(chapter?.part ?? 1);

  if (!unlocked) {
    return (
      <main className="flex-1 flex items-center justify-center px-4" style={{ background: theme.bg }}>
        <div className="text-center max-w-sm">
          <p className="text-4xl mb-3">🔒</p>
          <p className="font-semibold" style={{ color: theme.ink }}>
            This chapter isn&apos;t unlocked yet.
          </p>
          <p className="text-sm text-[var(--color-muted)] mt-1 mb-4">
            Finish the previous chapter first.
          </p>
          <Link href="/" className="text-sm font-semibold underline" style={{ color: theme.accent }}>
            ← Back to your reading path
          </Link>
        </div>
      </main>
    );
  }

  if (!chapter) {
    return (
      <main className="flex-1 flex items-center justify-center px-4" style={{ background: theme.bg }}>
        <div className="text-center max-w-sm">
          <p className="font-display text-2xl mb-2" style={{ color: theme.ink }}>
            Coming soon
          </p>
          <p className="text-sm text-[var(--color-muted)] mb-4">
            This chapter is still being written. Check back soon, or ask your teacher.
          </p>
          <Link href="/" className="text-sm font-semibold underline" style={{ color: theme.accent }}>
            ← Back to your reading path
          </Link>
        </div>
      </main>
    );
  }

  const next = nextUnitId(chapter.id);
  const alreadyComplete = completed.has(chapter.id);

  return (
    <main className="flex-1" style={{ background: theme.bg }}>
      <SetChatContext unitId={chapter.id} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: theme.accent }}>
            {theme.label} · Chapter {chapter.number}
          </p>
          <h1 className="font-display text-3xl" style={{ color: theme.ink }}>
            {chapter.title}
          </h1>
        </div>

        <section className="rounded-xl border border-[var(--color-border)] bg-white p-5">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-2">
            What happens
          </h2>
          <p className="text-sm leading-relaxed">{chapter.summary}</p>
        </section>

        <section className="rounded-xl p-5 border-l-4" style={{ background: theme.accentSoft, borderColor: theme.accent }}>
          <p className="italic text-lg font-display" style={{ color: theme.ink }}>
            &ldquo;{chapter.quote.text}&rdquo;
          </p>
          <p className="text-xs mt-2 text-[var(--color-muted)]">{chapter.quote.context}</p>
        </section>

        <Section title="Vocabulary">
          <VocabularyActivity terms={chapter.vocabulary} />
        </Section>

        <Section title="Close reading">
          <CloseReadingActivity passages={chapter.closeReading} />
        </Section>

        <Section title="Symbol tracker">
          <SymbolTracker updates={chapter.symbolUpdates} />
        </Section>

        <Section title="Character tracker">
          <CharacterArcTracker updates={chapter.characterUpdates} />
        </Section>

        {chapter.paragraphBuilder && (
          <Section title="Write about it">
            <ParagraphBuilder data={chapter.paragraphBuilder} />
          </Section>
        )}

        <Section title="Reflect">
          <ReflectionActivity data={chapter.reflection} />
        </Section>

        {chapter.trivia.length > 0 && (
          <Section title="Quick trivia">
            <TriviaChallenge questions={chapter.trivia} />
          </Section>
        )}

        <div className="pt-2 pb-10">
          <MarkCompleteButton
            unitId={chapter.id}
            alreadyComplete={alreadyComplete}
            nextHref={next ? unitHref(next) : "/"}
            nextLabel={next ? `Continue to ${unitLabel(next)} →` : "Back to your reading path →"}
          />
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-[var(--color-muted)] mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
