import { Chapter } from "../types";

export const CH_08: Chapter = {
  id: "ch-08",
  number: 8,
  title: "Gift for the Darkness",
  part: 2,
  summary:
    "Ralph reports what he, Jack, and Roger saw on the mountain to the full assembly. Jack seizes the moment to call Ralph a coward unfit to lead and demands the group vote him out as chief. The vote fails — most of the boys still won't choose Jack over Ralph, even now. Humiliated, Jack declares he's \"not going to play any longer,\" storms off alone, and announces that anyone who wants real meat and freedom from rules is welcome to join his own tribe instead. Over the next stretch of the chapter, most of the older boys drift away to find him, drawn by hunger and the promise of not having to follow anyone's orders. Jack's new tribe hunts down a sow, killing her in a hunt Golding describes with disturbing, almost gleeful violence, and mounts her severed head on a sharpened stick, driven into the ground as an offering — a gift — for the beast. Simon, alone in his quiet clearing and still weak from the heat, is left facing the pig's head, swarmed with flies, as it seems in his feverish state to speak to him: that it is the beast, that the beast was never something that could be hunted and killed, because it's inside them all along. Simon collapses.",
  quote: {
    text: "I'm not going to play any longer. Not with you.",
    context: "Jack, after losing the vote to remove Ralph as chief — the moment he stops trying to win the group over and simply takes the boys who'll follow him instead.",
  },
  vocabulary: [
    { word: "defiant", definition: "Boldly resistant or challenging authority.", context: "Jack's whole posture as he walks away from the assembly after losing the vote." },
    { word: "usurp", definition: "To take a position of power or authority by force or without right.", context: "What Jack is explicitly trying, and failing, to do to Ralph's leadership at the start of this chapter." },
    { word: "carrion", definition: "The decaying flesh of dead animals.", context: "What draws the flies to the pig's head — and what gives the Lord of the Flies its literal name, since \"Lord of the Flies\" is an old title for exactly this kind of creature." },
    { word: "propitiate", definition: "To win or regain the favor of someone by doing something to please them; to appease.", context: "The purpose the hunters believe the pig's head serves — an offering meant to satisfy the beast so it leaves them alone." },
  ],
  closeReading: [
    {
      passage:
        "Jack calls for a vote to remove Ralph as chief, loses, and walks away anyway — declaring he's \"not playing any longer\" and inviting anyone who wants to join him to a new tribe with no rules.",
      question: "What does it reveal that Jack loses the vote and leaves anyway, and that people still choose to follow him?",
      options: [
        {
          text: "It shows that the conch's authority only ever worked because everyone silently agreed to respect it — the moment Jack simply ignores the result and offers something more appealing, that agreement stops mattering.",
          isCorrect: true,
          feedback:
            "Exactly. Ralph technically \"wins\" the vote, but it changes nothing, because Jack was never really asking permission — he was testing whether the rules could actually stop him. They can't.",
        },
        {
          text: "It shows that the vote was rigged or unfair in some way.",
          isCorrect: false,
          feedback: "The text doesn't suggest this — the vote is straightforward. The problem isn't the vote's fairness, it's what happens after it.",
        },
        {
          text: "It shows that most of the boys secretly always preferred Jack.",
          isCorrect: false,
          feedback: "Most boys vote to keep Ralph — what changes their minds afterward is hunger, fear, and the appeal of no rules, not a hidden preference for Jack all along.",
        },
      ],
      insight:
        "Rules only work as long as everyone keeps agreeing to be bound by them. Jack is the first character to fully understand — and exploit — that this agreement was never actually enforced by anything.",
    },
    {
      passage:
        "Alone and feverish, Simon faces the pig's head on its stick and, in a strange half-hallucinatory scene, seems to hear it tell him that it is the beast, and that the beast was never something that could be hunted and killed.",
      question: "What does Golding achieve by having this revelation come to Simon through a delirious, half-real vision rather than a clear, calm realization?",
      options: [
        {
          text: "It suggests this kind of truth about human nature isn't something you arrive at through calm logic — it's something closer to a confrontation, uncomfortable and almost too much to bear, which is part of why almost no one else in the book is willing to face it.",
          isCorrect: true,
          feedback:
            "Right. Compare this to Piggy's rational speech in Chapter 5, which also failed to land. Golding seems to be arguing that this particular truth can't be reasoned into people — it has to be confronted, and most people would rather not.",
        },
        {
          text: "It shows that Simon is not a reliable source of information and his ideas shouldn't be trusted.",
          isCorrect: false,
          feedback: "The rest of the novel treats Simon's insight here as correct, even essential — his fever doesn't make him wrong, it makes the truth harder for him (and the reader) to look away from.",
        },
        {
          text: "It's included only to add a supernatural element to an otherwise realistic story.",
          isCorrect: false,
          feedback: "Golding leaves it ambiguous whether this is real or feverish delirium — but either way, the content of what Simon \"hears\" is treated as true by the rest of the novel.",
        },
      ],
      insight:
        "The pig's head literally translates to \"Lord of the Flies\" — an old name for the devil, tied to decay and carrion. Golding is naming, directly, what he thinks the real \"evil\" in the book actually is: not a monster, but something already inside the group.",
    },
  ],
  symbolUpdates: [
    { symbol: "conch", status: "Authority survives the vote but loses its grip", note: "Ralph technically keeps his position, but Jack simply walks away from the result — proving the conch was never backed by anything but agreement." },
    { symbol: "beast", status: "Given a literal object — the pig's head on a stick", note: "\"The Lord of the Flies.\" The hunters offer it to appease a beast that, per Simon's vision, isn't something outside them at all." },
    { symbol: "fire", status: "Down to a fraction of the group", note: "With so many boys gone to Jack's tribe, keeping any fire going at all becomes much harder." },
  ],
  characterUpdates: [
    { character: "ralph", position: 35, note: "Wins the vote but loses most of his group anyway — holding on to a leadership that's shrinking by the hour." },
    { character: "jack", position: -55, note: "Fully breaks away, forms his own tribe, and leads the hunt that produces the Lord of the Flies. The clearest turn in the book so far." },
    { character: "piggy", position: 55, note: "Stays with Ralph's dwindling group, frightened but still committed to the old rules." },
    { character: "simon", position: 75, note: "Has the novel's most important insight yet, alone and unwell, in the one place no one else will ever see it happen." },
    { character: "roger", position: -50, note: "Goes with Jack — fully part of the new tribe from the moment it forms." },
  ],
  paragraphBuilder: {
    focus: "Why does Golding have Jack lose the vote and leave anyway — and why do the other boys follow him regardless?",
    steps: [
      {
        id: "claim",
        label: "Claim",
        instruction: "State your argument about what this moment reveals about rules and authority.",
        guidedOptions: [
          "Golding shows that the conch's authority only ever existed because the group agreed to respect it — and that agreement can simply be withdrawn.",
          "Golding shows that fear and hunger are more persuasive than a fair vote, once someone offers an escape from responsibility.",
        ],
        placeholder: "Golding shows that...",
      },
      {
        id: "technique",
        label: "Technique",
        instruction: "Name the literary technique at work.",
        guidedOptions: ["Structure (the vote as a formal ritual that turns out to be hollow)", "Characterization (Jack's shift from asking to simply taking)", "Symbolism (the conch's declining power)"],
        placeholder: "Golding achieves this through...",
      },
      {
        id: "evidence",
        label: "Evidence",
        instruction: "Quote or closely paraphrase the moment that supports your claim.",
        guidedOptions: [
          "\"I'm not playing any longer. Not with you.\" — Jack, after losing the vote.",
          "Most of the older boys eventually drift away from Ralph's camp to join Jack's, despite the vote's result.",
        ],
        placeholder: "For example, when...",
      },
      {
        id: "effect",
        label: "Effect",
        instruction: "Explain what this technique does for the reader.",
        guidedOptions: [
          "It makes the earlier assemblies and votes feel retroactively fragile — the reader realizes the rules were never really enforced by anything.",
          "It builds dread about what happens now that the group is genuinely split, with no shared authority left at all.",
        ],
        placeholder: "This makes the reader...",
      },
      {
        id: "significance",
        label: "Significance",
        instruction: "Connect this to the novel's larger argument about civilization and human nature.",
        guidedOptions: [
          "This is the moment civilization on the island stops being one fragile system and becomes two competing groups — one of which no longer has a real system at all.",
          "This chapter shows that rules only restrain people who choose to be restrained by them — which is Golding's argument about civilization applied directly to the plot.",
        ],
        placeholder: "This matters because...",
      },
    ],
    modelParagraph:
      "In this chapter, Golding uses the failed vote and Jack's departure to show that the conch's authority only ever existed because the group agreed to respect it — an agreement that turns out to be dangerously easy to withdraw. Jack loses the vote to remove Ralph as chief, but simply declares, \"I'm not playing any longer. Not with you,\" and walks away, and most of the older boys eventually follow him regardless of what the vote decided. This makes every earlier assembly and rule feel retroactively fragile: the reader realizes the conch was never backed by anything except everyone's willingness to keep pretending it mattered. The effect is a deep unease about what's left to hold the group together now that it's genuinely split in two, with no shared authority remaining at all. This is the moment civilization on the island stops being one fragile system under strain and becomes two competing groups — one of which has no functioning system left whatsoever.",
  },
  reflection: {
    question:
      "Jack loses a fair vote and just leaves anyway — and people still follow him. Why do you think rules or votes sometimes fail to actually hold once someone decides not to respect the result?",
    samples: [
      "I think it's because rules only work if everyone agrees to be bound by them — there's no real enforcement without a group or system willing to make it stick.",
      "I think fear and self-interest are stronger motivators than fairness for a lot of people, especially when someone offers an easier alternative.",
    ],
  },
  trivia: [
    {
      question: "What position does Jack initially desire, which he loses to Ralph?",
      options: ["Chief", "Hunter", "Fire-keeper", "Lookout"],
      correctAnswer: 0,
      category: "Leadership",
      difficulty: "medium",
    },
    {
      question: "What is the 'Lord of the Flies' literally?",
      options: ["A pig's head on a stick", "A swarm of insects", "The island's volcano", "A hidden cave"],
      correctAnswer: 0,
      category: "Symbolism",
      difficulty: "easy",
    },
    {
      question: "What does Jack establish as his tribe's headquarters?",
      options: ["The lagoon", "Castle Rock", "The mountain", "The jungle thicket"],
      correctAnswer: 1,
      category: "Plot Events",
      difficulty: "easy",
    },
    {
      question: "What is the first animal that Jack's tribe hunts and kills in this chapter?",
      options: ["A sow (mother pig)", "A goat", "A wild dog", "A bird"],
      correctAnswer: 0,
      category: "Plot Events",
      difficulty: "medium",
    },
    {
      question: "How does Jack establish his own tribe and leadership?",
      options: ["By appealing to their fears and desires", "By calling a fair election", "By asking Ralph's permission", "By writing new rules"],
      correctAnswer: 0,
      category: "Leadership",
      difficulty: "easy",
    },
  ],
};
