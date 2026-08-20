import { CSSProperties } from "react";

export interface PartTheme {
  bg: string;
  ink: string;
  accent: string;
  accentSoft: string;
  label: string;
  bgImage: string;
}

// Each scene is a flat SVG silhouette anchored to the bottom of the viewport,
// with opacity baked into the shapes themselves (not a CSS opacity layer) so
// it composes safely as an ordinary background-image without extra DOM. Kept
// deliberately low-contrast — this is ambient scenery behind reading content,
// not an illustration competing for attention.

const PART_1_SVG = `
<svg width="900" height="700" viewBox="0 0 900 700" xmlns="http://www.w3.org/2000/svg">
  <circle cx="740" cy="130" r="80" fill="#1b7a6b" opacity="0.05"/>
  <path d="M0,430 Q220,390 450,420 T900,405 V700 H0 Z" fill="#1b7a6b" opacity="0.045"/>
  <path d="M0,480 Q220,468 450,480 T900,472" stroke="#1b7a6b" stroke-width="2" fill="none" opacity="0.06"/>
  <path d="M0,525 Q220,515 450,525 T900,519" stroke="#1b7a6b" stroke-width="2" fill="none" opacity="0.05"/>
  <path d="M70,700 C64,600 100,540 78,480" stroke="#1b7a6b" stroke-width="7" fill="none" opacity="0.07" stroke-linecap="round"/>
  <path d="M78,480 C45,455 10,462 -15,495 M78,480 C112,450 148,458 172,488 M78,480 C60,442 60,410 72,382 M78,480 C55,460 25,468 0,452" stroke="#1b7a6b" stroke-width="6" fill="none" opacity="0.07" stroke-linecap="round"/>
</svg>`;

const PART_2_SVG = `
<svg width="900" height="700" viewBox="0 0 900 700" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,440 L170,320 L340,410 L480,280 L680,420 L900,340 V700 H0 Z" fill="#c9691f" opacity="0.05"/>
  <path d="M480,280 C503,232 456,208 490,160 C513,124 466,100 495,52" stroke="#c9691f" stroke-width="7" fill="none" opacity="0.08" stroke-linecap="round"/>
  <path d="M0,540 Q34,505 68,540 T136,540 T204,540 T272,540 T340,540 T408,540 T476,540 T544,540 T612,540 T680,540 T748,540 T816,540 T884,540 V700 H0 Z" fill="#c9691f" opacity="0.06"/>
</svg>`;

const PART_3_SVG = `
<svg width="900" height="700" viewBox="0 0 900 700" xmlns="http://www.w3.org/2000/svg">
  <path d="M0,590 Q225,565 450,582 T900,575 V700 H0 Z" fill="#b2321e" opacity="0.06"/>
  <path d="M330,590 C305,528 352,502 328,452 C376,478 388,528 364,578 Z" fill="#b2321e" opacity="0.08"/>
  <path d="M560,590 C536,516 596,490 566,432 C624,462 630,522 600,578 Z" fill="#b2321e" opacity="0.09"/>
  <path d="M730,590 C712,540 748,522 728,478 C772,502 776,546 754,584 Z" fill="#b2321e" opacity="0.07"/>
  <circle cx="270" cy="420" r="4" fill="#b2321e" opacity="0.16"/>
  <circle cx="650" cy="360" r="3.2" fill="#b2321e" opacity="0.14"/>
  <circle cx="500" cy="330" r="3.8" fill="#b2321e" opacity="0.13"/>
  <circle cx="790" cy="400" r="3.2" fill="#b2321e" opacity="0.15"/>
</svg>`;

function toDataUri(svg: string): string {
  return `url("data:image/svg+xml,${encodeURIComponent(svg.trim())}")`;
}

const THEMES: Record<1 | 2 | 3, PartTheme> = {
  1: {
    bg: "var(--color-part1-bg)",
    ink: "var(--color-part1-ink)",
    accent: "var(--color-part1-accent)",
    accentSoft: "var(--color-part1-accent-soft)",
    label: "Part One: Order",
    bgImage: toDataUri(PART_1_SVG),
  },
  2: {
    bg: "var(--color-part2-bg)",
    ink: "var(--color-part2-ink)",
    accent: "var(--color-part2-accent)",
    accentSoft: "var(--color-part2-accent-soft)",
    label: "Part Two: Fracture",
    bgImage: toDataUri(PART_2_SVG),
  },
  3: {
    bg: "var(--color-part3-bg)",
    ink: "var(--color-part3-ink)",
    accent: "var(--color-part3-accent)",
    accentSoft: "var(--color-part3-accent-soft)",
    label: "Part Three: Collapse",
    bgImage: toDataUri(PART_3_SVG),
  },
};

export function getPartTheme(part: 1 | 2 | 3): PartTheme {
  return THEMES[part];
}

/** Solid part color + the ambient scenery, ready to spread onto a container's style prop. */
export function partBackgroundStyle(part: 1 | 2 | 3): CSSProperties {
  const theme = THEMES[part];
  return {
    backgroundColor: theme.bg,
    backgroundImage: theme.bgImage,
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
    backgroundRepeat: "no-repeat",
  };
}
