import { Chapter } from "../types";

export const CH_12: Chapter = {
  id: "ch-12",
  number: 12,
  title: "Cry of the Hunters",
  part: 3,
  summary:
    "Alone and hunted, Ralph hides in the forest. He finds Sam and Eric on fire-watch duty, now unwilling members of Jack's tribe; they warn him of the tribe's plan and give him a little food, then — under pressure — reveal his hiding place. Roger has sharpened a stick at both ends, a detail Ralph doesn't fully understand the meaning of but the reader does, remembering the pig's head on its own sharpened stick. To flush Ralph out, Jack's tribe sets fire to the entire island, and the hunt becomes a chase across all of it, Ralph running for his life with nowhere left to hide. Exhausted and certain he's about to die, Ralph breaks out onto the beach — and collides instead with a British naval officer, whose ship spotted the island-wide smoke and came to investigate. The officer, at first amused, assumes he's stumbled onto boys playing some elaborate game, and asks if they're having fun. The reality — painted faces, weapons, and the truth of what's happened — reaches him slowly. Rescue has arrived, at last, at the cost of almost everything. The novel ends with Ralph weeping — for the end of innocence, the darkness of man's heart, and the loss of his true, wise friend Piggy — while the officer, embarrassed, looks away toward his tidy, orderly warship, unable to fully take in what he's just walked into.",
  quote: {
    text: "Ralph wept for the end of innocence, the darkness of man's heart, and the fall through the air of the true, wise friend called Piggy.",
    context:
      "The novel's final lines. Three separate things to weep for, named in this order on purpose — worth taking apart piece by piece.",
  },
  vocabulary: [
    { word: "gaunt", definition: "Thin and haggard, especially from suffering, hunger, or age.", context: "Ralph's appearance by the time he reaches the beach — barely recognizable as the boy elected chief in Chapter 1." },
    { word: "irony", definition: "A situation in which the outcome is sharply different from, or the opposite of, what was expected — often revealing something uncomfortable in the gap.", context: "The fire meant to kill Ralph is the same fire that finally brings the rescue everyone spent the whole book hoping for." },
    { word: "poignant", definition: "Evoking a keen sense of sadness or regret.", context: "The tone of the novel's final page, once the officer realizes what he's actually walked into." },
    { word: "incredulous", definition: "Unable or unwilling to believe something.", context: "The officer's reaction as the reality of the island — the weapons, the paint, what's happened to these boys — starts to sink in past his first joking assumption." },
  ],
  closeReading: [
    {
      passage:
        "The naval officer, seeing the painted, armed boys on the beach, first assumes he's interrupted a game and asks, almost joking, whether they've been having fun.",
      question: "What does Golding achieve with the officer's initial misreading of the scene?",
      options: [
        {
          text: "It shows an adult instinctively reaching for the least disturbing explanation available — \"boys playing\" — rather than immediately seeing what's actually in front of him, which suggests adults aren't automatically wiser or more perceptive, just differently blind.",
          isCorrect: true,
          feedback:
            "Exactly. This isn't really about the officer being foolish — it's Golding extending his argument to the adult world. Everyone reaches for comfortable explanations before uncomfortable ones, no matter their age.",
        },
        {
          text: "It shows that the officer is simply not very intelligent.",
          isCorrect: false,
          feedback: "The text doesn't suggest this — the officer's misreading is about assumption and comfort, not intelligence.",
        },
        {
          text: "It's included purely for comic relief with no thematic weight.",
          isCorrect: false,
          feedback: "This moment does real work right before the novel's final, serious pages — it's setting up the officer's own uncomfortable realization.",
        },
      ],
      insight:
        "Notice what the officer's own ship is: a naval cruiser, actively part of a war happening somewhere else in the world. The \"civilized\" adult world he represents is also organized around violence — just violence with better uniforms and clearer rules.",
    },
    {
      passage:
        "The novel closes with Ralph weeping \"for the end of innocence, the darkness of man's heart, and the fall through the air of the true, wise friend called Piggy\" — three things named in one final sentence.",
      question: "Why might Golding have Ralph weep for three specific things, in this specific order, rather than simply ending on relief at being rescued?",
      options: [
        {
          text: "Each loss is distinct and doesn't cancel out the others — losing innocence, learning something dark about human nature, and losing a specific friend are three separate griefs, and naming all three keeps the ending from feeling like simple relief or simple tragedy alone.",
          isCorrect: true,
          feedback:
            "Right. This final sentence is doing an enormous amount of work in very few words — it refuses to let rescue erase what was lost, and it refuses to let grief erase the fact that Ralph survived. Both are true at once.",
        },
        {
          text: "It's simply a summary of the plot events for readers who may have forgotten them.",
          isCorrect: false,
          feedback: "This line is written with far more care and rhythm than a plot summary — it's the emotional and thematic thesis of the entire novel, compressed.",
        },
        {
          text: "It shows that Ralph regrets being rescued.",
          isCorrect: false,
          feedback: "Nothing in the text supports this — Ralph's grief is about what the experience cost, not about the rescue itself.",
        },
      ],
      insight:
        "Compare this ending to the pre-reading question you answered before Chapter 1 — about whether ordinary people would stay decent with no rules and no adults watching. Golding gives his answer here, in Ralph's tears, as directly as the novel ever does.",
    },
  ],
  symbolUpdates: [
    { symbol: "fire", status: "Meant to kill Ralph — becomes the rescue signal instead", note: "The bitterest irony in the book: the fire that finally saves them was never meant to be a signal at all." },
    { symbol: "beast", status: "Fully resolved — it was never a creature", note: "Exactly what Simon tried to say in Chapter 5: the beast was human nature all along, not something separate from the boys." },
    { symbol: "conch", status: "Gone, and unmentioned", note: "Destroyed in Chapter 11. By the time rescue comes, no one has spoken of it again." },
    { symbol: "glasses", status: "No longer central", note: "Whatever became of them ends with the story — a small, telling detail lost among much larger losses." },
  ],
  characterUpdates: [
    { character: "ralph", position: 55, note: "Survives, hunted to the very edge of his life, and never once picks up a spear to hunt another boy. Rescued, but changed for good." },
    { character: "jack", position: -90, note: "At the height of his power moments before the officer arrives — and instantly stripped of it the moment an adult authority reappears." },
    { character: "roger", position: -100, note: "The furthest point of the book's savagery — silent, terrifying, and never redeemed within the novel's pages." },
  ],
  paragraphBuilder: {
    focus: "Why does Golding end the novel with Ralph weeping for three specific things — innocence, human darkness, and Piggy — rather than ending on simple relief?",
    steps: [
      {
        id: "claim",
        label: "Claim",
        instruction: "State your argument about the effect of the novel's final sentence.",
        guidedOptions: [
          "Golding names three distinct losses in the final line to show that rescue doesn't erase what the island cost — relief and grief exist together at the end, not one instead of the other.",
          "Golding's ending refuses a clean resolution, insisting that what Ralph learned about human nature can't be undone just because help arrived.",
        ],
        placeholder: "Golding's ending shows that...",
      },
      {
        id: "technique",
        label: "Technique",
        instruction: "Name the literary technique at work.",
        guidedOptions: ["Tricolon / list structure (three things named in sequence)", "Juxtaposition (rescue arriving alongside devastating loss)", "Diction (the specific word choices: \"innocence,\" \"darkness,\" \"true, wise friend\")"],
        placeholder: "Golding achieves this through...",
      },
      {
        id: "evidence",
        label: "Evidence",
        instruction: "Quote the final line directly.",
        guidedOptions: [
          "\"Ralph wept for the end of innocence, the darkness of man's heart, and the fall through the air of the true, wise friend called Piggy.\"",
        ],
        placeholder: "The novel ends with the line...",
      },
      {
        id: "effect",
        label: "Effect",
        instruction: "Explain what this technique does for the reader.",
        guidedOptions: [
          "It denies the reader a simple, comfortable ending — relief at rescue is real, but so is everything that was lost getting there.",
          "It forces the reader to hold multiple, conflicting feelings at once, rather than resolving into a single clear emotion.",
        ],
        placeholder: "This makes the reader...",
      },
      {
        id: "significance",
        label: "Significance",
        instruction: "Connect this to the novel's larger argument about civilization and human nature.",
        guidedOptions: [
          "This final line is Golding's direct answer to the question raised in the pre-reading hub — and the answer isn't simple hope or simple despair, but both, held together.",
          "By ending on Ralph's grief rather than the officer's rescue, Golding makes clear that the real subject of the novel was never survival — it was what the boys became in the process.",
        ],
        placeholder: "This matters because...",
      },
    ],
    modelParagraph:
      "In the novel's final line, Golding names three distinct losses — \"the end of innocence, the darkness of man's heart, and the fall through the air of the true, wise friend called Piggy\" — to show that rescue does not erase what the island cost. This tricolon structure, three specific griefs named in sequence, prevents the ending from resolving into either simple relief or simple tragedy. The effect is to force the reader to hold multiple, conflicting feelings at once: gratitude that Ralph survived, and grief for exactly what surviving required him to see and lose. This final line is Golding's most direct answer to the question the novel opened with — whether ordinary people would stay decent with no one watching — and the answer he gives is neither simple hope nor simple despair, but both, held together in the same breath, the same as they are in Ralph's tears.",
  },
  reflection: {
    question:
      "Go back to the question you answered before Chapter 1: whether a group of ordinary, well-behaved kids with no adults and no consequences would keep behaving well. Now that you've finished the book — has your answer changed? Why or why not?",
    samples: [
      "My answer changed — I used to think most people would stay decent, but the book made a convincing case that it depends much more on circumstances and fear than I thought.",
      "My answer stayed the same, but I understand it differently now — I still believe most people would try to stay decent, but I see now how fragile that effort actually is under real pressure.",
    ],
  },
  trivia: [
    {
      question: "What question does the naval officer ask that causes Ralph to cry?",
      options: ["\"Where are your parents?\"", "\"Having a good time are you?\"", "\"What's your name?\"", "\"Is anyone hurt?\""],
      correctAnswer: 1,
      category: "Endings",
      difficulty: "medium",
    },
    {
      question: "What is burning out of control when the naval officer arrives?",
      options: ["A single hut", "The island's jungle", "The signal fire only", "A shipwreck"],
      correctAnswer: 1,
      category: "Endings",
      difficulty: "easy",
    },
    {
      question: "What does Ralph weep for at the end of the novel?",
      options: ["Only being rescued too late", "The darkness of man's heart", "Losing the conch", "Missing his parents"],
      correctAnswer: 1,
      category: "Endings",
      difficulty: "easy",
    },
  ],
};
