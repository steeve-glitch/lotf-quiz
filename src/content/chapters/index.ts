import { Chapter } from "../types";
import { CH_01 } from "./ch-01";
import { CH_02 } from "./ch-02";

// Phase 2 adds ch-03 .. ch-12 here, in order. The rest of the app (unlock
// logic, navigation) is written against this array, not against individual
// chapter modules, so adding a chapter is the only change Phase 2 needs here.
export const CHAPTERS: Chapter[] = [CH_01, CH_02];

export const CHAPTER_MAP: Record<string, Chapter> = Object.fromEntries(
  CHAPTERS.map((c) => [c.id, c]),
);
