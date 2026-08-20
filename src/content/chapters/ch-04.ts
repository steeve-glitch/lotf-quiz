import { Chapter } from "../types";

export const CH_04: Chapter = {
  id: "ch-04",
  number: 4,
  title: "Painted Faces and Long Hair",
  part: 1,
  summary:
    "Life on the island has settled into a rhythm, and the littluns' whole world has shrunk to eating, playing, and fearing the dark. Roger and Maurice kick apart littluns' sandcastles; Roger picks up stones and throws them near — but not at — a littlun named Henry, some old instinct still holding him back from actually hitting. Jack, still failing to catch a pig, starts painting his face with clay and charcoal — and Golding notes something shifts in him behind the mask, a kind of freedom from being seen and known as himself. A ship appears on the horizon — their one real chance at rescue — but the signal fire has gone out, because Jack pulled everyone off fire duty to join the hunt. The ship passes without seeing them. Ralph is furious. In the same breath, Jack's hunters finally kill their first pig, triumphant and covered in blood, chanting as they carry it back. The celebration collides head-on with Ralph's fury over the missed ship; in the fight that follows, Jack punches Piggy and cracks one lens of his glasses.",
  quote: {
    text: "Kill the pig! Spill her blood!",
    context: "The hunters' chant, heard for the first time as they return triumphant from their first successful kill.",
  },
  vocabulary: [
    {
      word: "taboo",
      definition: "A social or cultural prohibition against doing something, especially one so deeply held it feels automatic rather than chosen.",
      context: "The word Golding uses for whatever stops Roger from actually hitting Henry with his stones — not a rule anyone stated out loud, just an old, half-forgotten restraint.",
    },
    {
      word: "incredulous",
      definition: "Unable or unwilling to believe something.",
      context: "How Ralph looks at the dead fire when he realizes what's happened — the ship came and went while everyone who should have been watching was hunting.",
    },
    {
      word: "compulsion",
      definition: "An irresistible urge to do something, especially something irrational.",
      context: "Close to what Golding suggests is happening to Jack behind the paint — not a decision so much as something taking him over.",
    },
    {
      word: "derisive",
      definition: "Expressing contempt or ridicule.",
      context: "How the hunters treat Ralph's anger about the fire, at first — before the full weight of what happened sinks in.",
    },
  ],
  closeReading: [
    {
      passage:
        "Roger picks up stones and throws them near Henry, deliberately missing — Golding writes that he's still ringed by \"the taboo of the old life,\" the memory of parents, school, and policemen, even though none of that exists here anymore.",
      question: "What does Golding achieve by explaining Roger's restraint as coming from old rules rather than from Roger's own conscience?",
      options: [
        {
          text: "It suggests that \"civilized\" behavior might be a habit borrowed from external authority rather than something people carry inside themselves — which raises the question of what happens once that borrowed habit wears off.",
          isCorrect: true,
          feedback:
            "Exactly — and that's the most unsettling implication in the whole chapter. If good behavior is just leftover conditioning, it can run out. Keep watching what Roger does once it does.",
        },
        {
          text: "It shows that Roger has a naturally kind personality that's just being tested by the island.",
          isCorrect: false,
          feedback: "Reread the passage — Golding is explicit that the restraint comes from something external and old, not from Roger's own character.",
        },
        {
          text: "It's a minor character detail with no connection to the book's larger ideas.",
          isCorrect: false,
          feedback: "This is one of the most direct statements of the novel's argument about where \"civilized\" behavior actually comes from — worth taking seriously.",
        },
      ],
      insight:
        "\"The taboo of the old life\" is a phrase worth holding onto. It implies the restraint is a leftover, not a foundation — and leftovers run out.",
    },
    {
      passage:
        "Jack paints his face with clay and charcoal before a hunt, then catches his reflection in a pool of water and is described as no longer recognizing — or being troubled by — himself.",
      question: "Why does Golding have Jack use a painted mask rather than simply becoming more violent gradually and openly?",
      options: [
        {
          text: "The mask gives Jack permission — it lets him do things \"the painted savage\" would do that Jack himself might still hesitate over, by making it feel like someone else is doing them.",
          isCorrect: true,
          feedback:
            "Right. The mask isn't hiding Jack — it's freeing a version of him that was already there but held back by shame or self-consciousness, the same way Roger was held back by the \"taboo.\"",
        },
        {
          text: "The mask is purely practical camouflage for hunting pigs, with no symbolic weight.",
          isCorrect: false,
          feedback: "Golding spends real time on Jack's reaction to seeing himself painted — that's not how you'd write a purely practical detail.",
        },
        {
          text: "It shows that Jack has always secretly wanted to be an artist.",
          isCorrect: false,
          feedback: "Not what the text supports — the paint is about concealment and liberation from shame, not artistic expression.",
        },
      ],
      insight:
        "Watch how often \"liberation\" language attaches to the mask across the rest of the book. Golding keeps suggesting that what the paint removes isn't identity — it's shame.",
    },
  ],
  symbolUpdates: [
    { symbol: "fire", status: "Goes out — a ship passes unseen", note: "The hunters abandoned fire duty to join the hunt. This is the first time the island's stakes become real and irreversible." },
    { symbol: "glasses", status: "Cracked — one lens broken in the fight", note: "Jack hits Piggy during the confrontation over the fire. A literal crack in the group's only working tool for reason and fire alike." },
    { symbol: "conch", status: "Still holding, but strained", note: "The fight happens right at the edge of an assembly — the rules are still technically in force, barely." },
  ],
  characterUpdates: [
    { character: "ralph", position: 45, note: "Devastated by the missed rescue — his first real, unrecoverable failure as chief." },
    { character: "jack", position: -10, note: "First kill, first mask, first act of real violence against another boy. The clearest turn yet." },
    { character: "piggy", position: 50, note: "Physically hurt for the first time — hit and half-blinded, but still the one trying to hold the group to its rules." },
    { character: "simon", position: 65, note: "Stays out of the fight; his position in the group remains gentle and apart." },
    { character: "roger", position: 25, note: "Throws stones close to Henry but not at him — still restrained, for now, by something he can't quite name." },
  ],
  paragraphBuilder: {
    focus: "How does Golding use the \"taboo of the old life\" to suggest that civilized behavior might be conditioning rather than character?",
    steps: [
      {
        id: "claim",
        label: "Claim",
        instruction: "State your argument about what Roger's restraint reveals.",
        guidedOptions: [
          "Golding uses Roger's restraint to suggest that \"civilized\" behavior is inherited habit, not innate character — and habits can wear away.",
          "Golding uses the \"taboo of the old life\" to show that civilization survives only as long as its old authority figures are remembered.",
        ],
        placeholder: "Golding suggests that civilized behavior is...",
      },
      {
        id: "technique",
        label: "Technique",
        instruction: "Name the literary technique at work.",
        guidedOptions: ["Direct authorial commentary/narration", "Symbolism (the stones, the circle Roger won't cross)", "Foreshadowing"],
        placeholder: "Golding achieves this through...",
      },
      {
        id: "evidence",
        label: "Evidence",
        instruction: "Quote or closely paraphrase the moment that supports your claim.",
        guidedOptions: [
          "Roger is described as still \"ringed\" by the taboo of the old life — parents, school, policemen — even though none of it exists on the island anymore.",
          "He throws stones to miss, not to hit — the restraint is deliberate, not accidental.",
        ],
        placeholder: "For example, when...",
      },
      {
        id: "effect",
        label: "Effect",
        instruction: "Explain what this technique does for the reader.",
        guidedOptions: [
          "It plants a specific fear: that this restraint could fail once the memory of the old world fades further.",
          "It makes the reader distrust \"good behavior\" they see for the rest of the book, wondering how much of it is really a choice.",
        ],
        placeholder: "This makes the reader...",
      },
      {
        id: "significance",
        label: "Significance",
        instruction: "Connect this to the novel's larger argument about civilization and human nature.",
        guidedOptions: [
          "This is Golding's clearest early statement that civilization is borrowed, not built-in — which raises the question of what happens once it's gone.",
          "By naming exactly what's holding Roger back, Golding makes clear how fragile that restraint actually is — a habit, not a foundation.",
        ],
        placeholder: "This matters because...",
      },
    ],
    modelParagraph:
      "In this chapter, Golding uses Roger's restraint around Henry to suggest that \"civilized\" behavior may be conditioning rather than character. As Roger throws stones deliberately to miss, the narrator explains that he is still \"ringed\" by \"the taboo of the old life\" — the memory of parents, school, and policemen — even though none of those authorities exist on the island anymore. This detail plants a specific, quiet fear: if the restraint is only memory, it will fade as the memory does. The effect is to make the reader distrust every act of \"good behavior\" that follows for the rest of the novel, wondering how much of it is choice and how much is habit running on borrowed time. This is one of Golding's clearest early statements of the novel's central argument — that civilization is not something people carry inside themselves, but something imposed from outside that can wear thin and disappear.",
  },
  reflection: {
    question:
      "Golding suggests some of our \"good\" behavior might just be habit from being watched or taught, not something we'd choose on our own if no one was watching. Do you think that's true? Is there a difference between behaving well because you'd feel guilty, and behaving well because no one would ever know?",
    samples: [
      "I think there's a real difference — guilt is still something inside you, but a lot of \"good\" behavior really is just because someone's watching, and I think Golding is right to point that out.",
      "I disagree a bit — I think some people do have internal values that would hold even with no one watching, though maybe fewer than we'd like to think.",
    ],
  },
  trivia: [
    {
      question: "What prevents the boys from being rescued early in the book?",
      options: ["The fire went out", "They were asleep", "The ship never came close enough", "They couldn't find enough wood"],
      correctAnswer: 0,
      category: "Fire & Rescue",
      difficulty: "easy",
    },
    {
      question: "What does Jack's painted face symbolize?",
      options: ["A disguise for hunting only", "Savagery and liberation from shame", "Mourning for the pig", "Loyalty to Ralph"],
      correctAnswer: 1,
      category: "Themes",
      difficulty: "easy",
    },
    {
      question: "What activity does Jack prioritize over maintaining the signal fire?",
      options: ["Hunting pigs", "Building shelters", "Exploring the island", "Swimming"],
      correctAnswer: 0,
      category: "Leadership",
      difficulty: "easy",
    },
  ],
};
