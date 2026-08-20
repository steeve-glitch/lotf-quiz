// ── Vocabulary ──────────────────────────────────────────────────────────────

export interface VocabTerm {
  word: string;
  definition: string;
  spanishGloss: string; // short ES translation/gloss — only for genuinely obscure terms
  context: string; // the sentence/moment it appears in, and why it's worth knowing
}

// ── Close Reading ───────────────────────────────────────────────────────────

export interface CloseReadingOption {
  text: string;
  isCorrect: boolean;
  feedback: string;
}

export interface CloseReadingPassage {
  passage: string;
  question: string; // "What does Golding achieve by...?"
  options: CloseReadingOption[];
  insight: string; // deeper analytical note revealed after answering
}

// ── Symbol Tracker ──────────────────────────────────────────────────────────

export type SymbolId = "conch" | "fire" | "glasses" | "beast";

export interface SymbolStatus {
  symbol: SymbolId;
  status: string; // short label, e.g. "Cracked but still called"
  note: string; // one or two sentences on what changed this chapter
}

export interface SymbolInfo {
  id: SymbolId;
  name: string;
  description: string; // what it represents overall
}

// ── Character Arc Tracker ───────────────────────────────────────────────────

export type CharacterId = "ralph" | "jack" | "piggy" | "simon" | "roger";

export interface CharacterArcPoint {
  character: CharacterId;
  // -100 (total savagery) to +100 (total civilization) — a simple axis
  // position for this chapter, not a claim of psychological precision.
  position: number;
  note: string;
}

export interface CharacterInfo {
  id: CharacterId;
  name: string;
  description: string;
}

// ── Paragraph Builder (reused pattern from the 1984/Salesman apps) ─────────

export type ParagraphStepId = "claim" | "technique" | "evidence" | "effect" | "significance";

export interface ParagraphStep {
  id: ParagraphStepId;
  label: string;
  instruction: string;
  guidedOptions: string[];
  placeholder: string;
}

export interface ParagraphBuilderData {
  focus: string; // the analytical question this paragraph answers
  steps: ParagraphStep[];
  modelParagraph: string;
}

// ── Reflection ───────────────────────────────────────────────────────────────

export interface ReflectionData {
  question: string;
  samples: string[]; // 2-3 examples shown before the free write
}

// ── Trivia ───────────────────────────────────────────────────────────────────

export interface TriviaQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  difficulty: "easy" | "medium" | "hard";
}

// ── Chapter ──────────────────────────────────────────────────────────────────

export interface Chapter {
  id: string; // "ch-01"
  number: number;
  title: string; // Golding's own chapter title
  part: 1 | 2 | 3;
  summary: string;
  quote: { text: string; context: string };
  vocabulary: VocabTerm[];
  closeReading: CloseReadingPassage[];
  symbolUpdates: SymbolStatus[];
  characterUpdates: CharacterArcPoint[];
  paragraphBuilder?: ParagraphBuilderData;
  reflection: ReflectionData;
  trivia: TriviaQuestion[];
}

// ── Parts & checkpoints ──────────────────────────────────────────────────────

export interface Part {
  id: 1 | 2 | 3;
  title: string;
  subtitle: string;
  chapterIds: string[];
}

export interface CheckpointQuestion {
  question: string;
  options: CloseReadingOption[];
}

export interface Checkpoint {
  id: string; // "checkpoint-1"
  afterPart: 1 | 2;
  title: string;
  intro: string;
  questions: CheckpointQuestion[];
}
