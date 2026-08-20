import { CHAPTER_MAP } from "@/content/chapters";
import { CHECKPOINTS } from "@/content/parts";

export function unitHref(unitId: string): string {
  if (unitId === "pre-reading") return "/pre-reading";
  if (unitId.startsWith("checkpoint-")) return `/checkpoint/${unitId}`;
  return `/chapter/${unitId}`;
}

export function unitLabel(unitId: string): string {
  if (unitId === "pre-reading") return "Pre-Reading Hub";
  const chapter = CHAPTER_MAP[unitId];
  if (chapter) return `Chapter ${chapter.number}`;
  const checkpoint = CHECKPOINTS.find((c) => c.id === unitId);
  if (checkpoint) return checkpoint.title;
  return "Next";
}
