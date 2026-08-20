export interface PreReadingSection {
  id: string;
  title: string;
  body: string;
}

export const PRE_READING_SECTIONS: PreReadingSection[] = [
  {
    id: "golding",
    title: "Who was William Golding?",
    body:
      "Golding taught schoolboys for years before writing Lord of the Flies (1954), and he'd also served in the Royal Navy during World War II — including at D-Day. He said the war changed how he saw people: before it, he believed in the basic decency of human nature; after it, having watched what ordinary people were capable of, he didn't. Lord of the Flies is his argument for that second view, staged as a thought experiment: strip away laws, adults, and consequences, and see what's actually underneath.",
  },
  {
    id: "genre-flip",
    title: "A deliberate answer to a different kind of island book",
    body:
      "British readers in 1954 already had a genre for \"boys shipwrecked on an island\": stories like The Coral Island (1858), where well-raised English boys handle the situation with cheerful competence and good manners. Golding named a couple of his characters (Ralph, Jack) as a direct nod to that book — and then wrote the opposite ending on purpose. If a teacher or a source mentions The Coral Island, this is why: Golding is arguing with it.",
  },
  {
    id: "context",
    title: "The world the book was written into",
    body:
      "1954: World War II had ended less than a decade earlier. The full scale of the Holocaust was known. The Cold War and the threat of nuclear war were escalating. A novel asking \"what happens to civilization when the adults and the rules disappear\" wasn't an abstract question for its first readers — it was close to a live one.",
  },
  {
    id: "how-to-read",
    title: "How to read it",
    body:
      "Every object and character in this book is doing double duty — a boy on an island, and a piece of an argument about human nature. That's not a bad thing to notice as \"symbolism hunting\"; it's the whole design. This companion will keep pointing at it directly: the conch, the fire, the glasses, the beast, and each boy are all tracked chapter by chapter so the pattern is visible as it builds, not just obvious in hindsight.",
  },
];

export const ORTHODOXY_CHECK_QUESTION = {
  question:
    "Before you start reading: do you think a group of ordinary, well-behaved kids — with no adults and no consequences — would keep behaving well?",
  note:
    "There's no right answer here. Come back to what you picked after Chapter 12 and see if it's still what you'd say.",
};
