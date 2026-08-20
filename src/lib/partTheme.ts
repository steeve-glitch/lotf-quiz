export interface PartTheme {
  bg: string;
  ink: string;
  accent: string;
  accentSoft: string;
  label: string;
}

const THEMES: Record<1 | 2 | 3, PartTheme> = {
  1: {
    bg: "var(--color-part1-bg)",
    ink: "var(--color-part1-ink)",
    accent: "var(--color-part1-accent)",
    accentSoft: "var(--color-part1-accent-soft)",
    label: "Part One: Order",
  },
  2: {
    bg: "var(--color-part2-bg)",
    ink: "var(--color-part2-ink)",
    accent: "var(--color-part2-accent)",
    accentSoft: "var(--color-part2-accent-soft)",
    label: "Part Two: Fracture",
  },
  3: {
    bg: "var(--color-part3-bg)",
    ink: "var(--color-part3-ink)",
    accent: "var(--color-part3-accent)",
    accentSoft: "var(--color-part3-accent-soft)",
    label: "Part Three: Collapse",
  },
};

export function getPartTheme(part: 1 | 2 | 3): PartTheme {
  return THEMES[part];
}
