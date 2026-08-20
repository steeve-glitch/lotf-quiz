import { PARTS, CHECKPOINTS } from "@/content/parts";

/**
 * The full ordered list of unit ids a student progresses through, derived
 * from PARTS/CHECKPOINTS — not from which chapter content modules actually
 * exist yet (src/content/chapters/index.ts). This lets Phase 1 ship with only
 * ch-01/ch-02 written while the unlock chain and nav already reflect the
 * eventual full book; chapters without content yet render a "coming soon"
 * placeholder instead of 404ing (see src/app/(companion)/chapter/[id]/page.tsx).
 */
export function getOrderedUnitIds(): string[] {
  const ids: string[] = ["pre-reading"];
  for (const part of PARTS) {
    ids.push(...part.chapterIds);
    const checkpoint = CHECKPOINTS.find((c) => c.afterPart === part.id);
    if (checkpoint) ids.push(checkpoint.id);
  }
  return ids;
}

export function isUnitUnlocked(unitId: string, completed: Set<string>): boolean {
  const order = getOrderedUnitIds();
  const idx = order.indexOf(unitId);
  if (idx <= 0) return true; // pre-reading (or unknown id — fail open to visible)
  const previous = order[idx - 1];
  return completed.has(previous);
}

export function nextUnitId(currentUnitId: string): string | null {
  const order = getOrderedUnitIds();
  const idx = order.indexOf(currentUnitId);
  if (idx === -1 || idx === order.length - 1) return null;
  return order[idx + 1];
}
