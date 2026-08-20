import { Chapter } from "../types";

export const CH_05: Chapter = {
  id: "ch-05",
  number: 5,
  title: "Beast from Water",
  part: 2,
  summary:
    "Ralph calls the most serious assembly yet, determined to lay down clear rules — about the fire, about using the rocks as a toilet, about fear — before things get any worse. Piggy makes his big, rational case: there's no reason to believe in a beast, because \"life is scientific.\" But a small littlun named Percival Wemys Madison, prompted to speak, dissolves into tears and lets slip that the beast comes from the sea. Panic spreads. Simon tries to say something true and hard to explain — that maybe the beast isn't a creature at all, maybe \"it's only us\" — and can't find the words before the group laughs him down. The assembly falls apart. Jack, furious at being told what to do yet again, declares outright that the rules — and the conch — don't matter anymore, and storms off. Most of the older boys drift after him, buzzing with the thrill of finally being told they can just do what they want. Ralph, Piggy, and Simon are left with the littluns, and for the first time Ralph understands, fully, how close to breaking the group already is.",
  quote: {
    text: "I know there isn't no beast — not with claws and all that, I mean — but I know there isn't no fear, either, unless we get frightened of people.",
    context: "Piggy, trying to reason the group out of its fear at the worst possible moment. He's not wrong — but being right has never been enough to make people listen to Piggy.",
  },
  vocabulary: [
    { word: "solemn", definition: "Formal and dignified; deeply serious.", context: "How Ralph tries to run this assembly — a last, real attempt to make the rules feel like they still matter." },
    { word: "mirage", definition: "An optical illusion caused by atmospheric conditions, especially the appearance of water in a desert or, here, distortion at sea.", context: "Part of how the boys try to explain away what Percival claims to have seen — reason reaching for any explanation before fear takes over." },
    { word: "petulant", definition: "Childishly sulky or bad-tempered.", context: "How Jack is described as the assembly turns against him — right before he stops asking for the group's approval altogether." },
    { word: "derision", definition: "Contempt; ridicule.", context: "What Simon receives when he tries to explain what he means about the beast. He never really gets to finish the thought." },
  ],
  closeReading: [
    {
      passage:
        "Piggy lays out his case point by point — no scientists have found a beast, the world is knowable, fear only exists if you let it — and is met not with agreement but with restlessness and, eventually, mockery.",
      question: "What does Golding achieve by making Piggy's speech logically sound but socially useless?",
      options: [
        {
          text: "It shows that being correct isn't the same as being persuasive — the group isn't looking for a right answer, it's looking for permission to feel a certain way, and Piggy can't give them that.",
          isCorrect: true,
          feedback:
            "Exactly. This is one of the novel's sharper, quieter arguments: reason loses to fear not because reason is wrong, but because fear was never really listening for an answer.",
        },
        {
          text: "It shows that Piggy's ideas are actually incorrect and the group is right to doubt him.",
          isCorrect: false,
          feedback: "The text doesn't support this — Piggy's reasoning holds up. The problem is the audience, not the argument.",
        },
        {
          text: "It's simply a realistic detail with no larger thematic weight.",
          isCorrect: false,
          feedback: "This scene sets up one of the book's central ideas about fear and reason — worth more than a passing read.",
        },
      ],
      insight:
        "Watch how often, across the rest of the book, someone who is factually right (Piggy here, Simon later) is ignored simply because of how the group feels about them, not because of what they're actually saying.",
    },
    {
      passage:
        "Simon tries to explain that the beast might be something inside the boys themselves rather than a creature to fear — and fails to get the words out before the group laughs and the moment passes.",
      question: "Why might Golding have Simon fail to fully articulate this idea here, rather than letting him explain it clearly?",
      options: [
        {
          text: "It shows that the truth Simon senses is real but genuinely hard to put into words — and that even if he could say it perfectly, this group, in this mood, wasn't going to listen anyway.",
          isCorrect: true,
          feedback:
            "Right — this scene isn't really about Simon's communication skills. It's about how an idea this uncomfortable gets rejected regardless of how well it's phrased.",
        },
        {
          text: "It shows that Simon doesn't actually understand what he's trying to say.",
          isCorrect: false,
          feedback: "Later in the book, Simon's intuition here turns out to be exactly right — this isn't confusion, it's an idea ahead of its moment.",
        },
        {
          text: "It's just a realistic detail about how littluns and biguns communicate differently.",
          isCorrect: false,
          feedback: "This moment is doing more work than that — it's the first time the novel's real thesis about the beast gets spoken aloud at all.",
        },
      ],
      insight:
        "This is the first time anyone says, out loud, the idea the whole novel is built around. It gets laughed off completely. Notice how long it takes — and what it costs — before anyone takes it seriously.",
    },
  ],
  symbolUpdates: [
    { symbol: "conch", status: "Authority openly rejected by Jack", note: "Jack declares that the conch \"doesn't count\" anymore on the mountain — the first time anyone says the rule doesn't apply to them." },
    { symbol: "beast", status: "Given a location — the sea", note: "Percival's claim gives the fear a direction, which somehow makes it feel more real, not less." },
    { symbol: "fire", status: "Still tended, barely", note: "Still burning for now, but with fewer boys committed to the group that maintains it." },
  ],
  characterUpdates: [
    { character: "ralph", position: 50, note: "Tries hardest yet to hold the group together with rules — and watches it fail in real time." },
    { character: "jack", position: -30, note: "Openly rejects the conch's authority for the first time — the clearest break yet." },
    { character: "piggy", position: 55, note: "Makes his most reasoned case of the book. It changes nothing." },
    { character: "simon", position: 70, note: "Comes closest yet to naming the novel's central truth — and is mocked for it." },
    { character: "roger", position: 5, note: "Drifts after Jack when the group splits, drawn to wherever the rules matter least." },
  ],
  paragraphBuilder: {
    focus: "Why does Golding have Piggy's rational speech fail to reassure the group, while Percival's fear spreads instantly?",
    steps: [
      {
        id: "claim",
        label: "Claim",
        instruction: "State your argument about why reason loses to fear in this scene.",
        guidedOptions: [
          "Golding shows that fear spreads faster and more persuasively than reason, because fear doesn't need to be logically consistent to feel true.",
          "Golding shows that the group was never actually looking for an accurate answer about the beast — they wanted permission for how they already felt.",
        ],
        placeholder: "Golding shows that...",
      },
      {
        id: "technique",
        label: "Technique",
        instruction: "Name the literary technique at work.",
        guidedOptions: ["Contrast/juxtaposition (Piggy's speech vs. Percival's outburst)", "Characterization", "Structure (order of the assembly breaking down)"],
        placeholder: "Golding achieves this through...",
      },
      {
        id: "evidence",
        label: "Evidence",
        instruction: "Quote or closely paraphrase the moment that supports your claim.",
        guidedOptions: [
          "Piggy's carefully reasoned speech is met with restlessness, not agreement.",
          "Percival's tearful, half-coherent claim about the beast from the sea spreads through the group almost instantly.",
        ],
        placeholder: "For example, when...",
      },
      {
        id: "effect",
        label: "Effect",
        instruction: "Explain what this technique does for the reader.",
        guidedOptions: [
          "It makes the reader uneasy about how little logic actually matters once a group is frightened.",
          "It sets up a pattern the rest of the novel follows — fear beats reason nearly every time they compete directly.",
        ],
        placeholder: "This makes the reader...",
      },
      {
        id: "significance",
        label: "Significance",
        instruction: "Connect this to the novel's larger argument about civilization and human nature.",
        guidedOptions: [
          "This is the moment the group's decline stops being about Jack versus Ralph and becomes about fear versus reason — a much harder fight to win.",
          "This scene is the turning point where the assembly, the book's clearest symbol of order, permanently stops working.",
        ],
        placeholder: "This matters because...",
      },
    ],
    modelParagraph:
      "In this chapter, Golding contrasts Piggy's carefully reasoned speech with Percival's tearful outburst to show that fear spreads faster and more persuasively than logic, because fear doesn't need to be consistent to feel true. Piggy lays out, point by point, why there is no reason to believe in a beast — and is met with restlessness, not agreement. Moments later, Percival's half-coherent claim that the beast comes from the sea spreads through the group almost instantly, despite offering no more evidence than Piggy did. The effect is to make the reader deeply uneasy about how little logic actually matters once a group has decided to be afraid. This is the moment the novel's central conflict shifts from a simple disagreement between Ralph and Jack into something harder to fix: fear against reason, a fight reason keeps losing for the rest of the book.",
  },
  reflection: {
    question:
      "Piggy is completely right, and it doesn't matter at all. Have you ever seen someone lose an argument they were factually correct about, just because of how the group felt about them or the moment?",
    samples: [
      "Yes — I think being right and being convincing are actually two different skills, and being liked or trusted matters more than people want to admit.",
      "I've seen this happen online a lot — someone makes a completely reasonable point and gets dismissed just because of who said it or the mood everyone's already in.",
    ],
  },
  trivia: [
    {
      question: "Where does Percival Wemys Madison claim the beast comes from?",
      options: ["The mountain", "The sea", "The jungle", "The sky"],
      correctAnswer: 1,
      category: "The Beast",
      difficulty: "hard",
    },
    {
      question: "What is the initial source of the boys' fear of the 'beast'?",
      options: ["A nightmare shared by several boys", "A footprint on the beach", "A strange sound at night", "Something Jack claimed to see"],
      correctAnswer: 0,
      category: "The Beast",
      difficulty: "medium",
    },
    {
      question: "Who first suggests that the beast might be 'only us'?",
      options: ["Ralph", "Piggy", "Simon", "Roger"],
      correctAnswer: 2,
      category: "The Beast",
      difficulty: "medium",
    },
  ],
};
