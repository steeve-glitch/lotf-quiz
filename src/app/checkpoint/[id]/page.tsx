import Link from "next/link";
import { getStudentSession } from "@/lib/auth";
import { getCompletedUnitIds } from "@/lib/progressServer";
import { isUnitUnlocked, nextUnitId } from "@/lib/sequence";
import { unitHref } from "@/lib/unitLinks";
import { CHECKPOINTS } from "@/content/parts";
import { getPartTheme, partBackgroundStyle } from "@/lib/partTheme";
import { SetChatContext } from "@/components/chat/SetChatContext";
import { CheckpointFlow } from "@/components/activities/CheckpointFlow";

export default async function CheckpointPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await getStudentSession();
  if (!session) return null;

  const checkpoint = CHECKPOINTS.find((c) => c.id === id);
  // The checkpoint gates entry to the *next* part, so its scenery leads with
  // where the student is headed rather than where they've been.
  const part = checkpoint ? checkpoint.afterPart === 1 ? 2 : 3 : 1;
  const theme = getPartTheme(part);
  const bgStyle = partBackgroundStyle(part);
  const completed = await getCompletedUnitIds(session.studentId);

  if (!checkpoint) {
    return (
      <main className="flex-1 grain flex items-center justify-center" style={bgStyle}>
        <Link href="/" className="text-base font-semibold underline">
          ← Back to your reading path
        </Link>
      </main>
    );
  }

  const unlocked = isUnitUnlocked(checkpoint.id, completed);
  if (!unlocked) {
    return (
      <main className="flex-1 grain flex items-center justify-center px-4" style={bgStyle}>
        <div className="text-center max-w-sm">
          <p className="text-4xl mb-3">🔒</p>
          <p className="font-semibold text-lg" style={{ color: theme.ink }}>
            Finish the chapters in this part first.
          </p>
          <Link href="/" className="text-base font-semibold underline mt-3 inline-block" style={{ color: theme.accent }}>
            ← Back to your reading path
          </Link>
        </div>
      </main>
    );
  }

  if (completed.has(checkpoint.id)) {
    const next = nextUnitId(checkpoint.id);
    return (
      <main className="flex-1 grain flex items-center justify-center px-4" style={bgStyle}>
        <div className="text-center max-w-sm">
          <p className="text-4xl mb-3">✅</p>
          <p className="font-semibold text-lg" style={{ color: theme.ink }}>
            Already completed.
          </p>
          <Link href={next ? unitHref(next) : "/"} className="text-base font-semibold underline mt-3 inline-block" style={{ color: theme.accent }}>
            Continue →
          </Link>
        </div>
      </main>
    );
  }

  const next = nextUnitId(checkpoint.id);

  return (
    <main className="flex-1 grain" style={bgStyle}>
      <SetChatContext unitId={checkpoint.id} />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: theme.accent }}>
            Checkpoint
          </p>
          <h1 className="font-display text-3xl" style={{ color: theme.ink }}>
            {checkpoint.title}
          </h1>
          <p className="text-base text-[var(--color-muted)] mt-2 leading-relaxed">{checkpoint.intro}</p>
        </div>

        <CheckpointFlow
          unitId={checkpoint.id}
          questions={checkpoint.questions}
          nextHref={next ? unitHref(next) : "/"}
        />
      </div>
    </main>
  );
}
