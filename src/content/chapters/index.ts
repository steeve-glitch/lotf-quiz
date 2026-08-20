import { Chapter } from "../types";
import { CH_01 } from "./ch-01";
import { CH_02 } from "./ch-02";
import { CH_03 } from "./ch-03";
import { CH_04 } from "./ch-04";
import { CH_05 } from "./ch-05";
import { CH_06 } from "./ch-06";
import { CH_07 } from "./ch-07";
import { CH_08 } from "./ch-08";
import { CH_09 } from "./ch-09";
import { CH_10 } from "./ch-10";
import { CH_11 } from "./ch-11";
import { CH_12 } from "./ch-12";

export const CHAPTERS: Chapter[] = [
  CH_01, CH_02, CH_03, CH_04, CH_05, CH_06,
  CH_07, CH_08, CH_09, CH_10, CH_11, CH_12,
];

export const CHAPTER_MAP: Record<string, Chapter> = Object.fromEntries(
  CHAPTERS.map((c) => [c.id, c]),
);
