import { Chapter } from "../types";

export const CH_03: Chapter = {
  id: "ch-03",
  number: 3,
  title: "Huts on the Beach",
  part: 1,
  summary:
    "Jack, obsessed, tracks a pig through the jungle alone — reading the ground, the droppings, the movement of the undergrowth — and comes back empty-handed and frustrated. Meanwhile Ralph and Simon work almost alone building shelters; most of the other boys have drifted off to swim or play, uninterested in the labor. Ralph and Jack argue on the beach: Ralph wants help with the huts and the fire; Jack cares only about hunting. Neither can really explain to the other why what they're doing matters so much. Simon, unlike the rest, doesn't join the swimming or the arguing — he slips away alone into the jungle, to a hidden clearing full of white, sweet-smelling flowers that only open at night, and sits there quietly by himself.",
  quote: {
    text: "I was talking about smoke! Don't you want to be rescued? All you can talk about is pig, pig, pig!",
    context:
      "Ralph, exasperated with Jack, who's just gotten distracted mid-conversation by the thought of hunting. It's a small exchange, but it's the whole chapter — Ralph is the only one still keeping score on rescue.",
  },
  vocabulary: [
    {
      word: "malevolent",
      definition: "Having or showing a wish to do harm; menacing.",
      context: "Golding describes the jungle itself this way as Jack tracks the pig — the island's beauty is starting to read as threat, depending on who's looking at it.",
    },
    {
      word: "labour",
      definition: "Hard physical work (British spelling — Golding's original spelling, not a typo).",
      context: "What Ralph and Simon do almost alone while everyone else swims. The word choice matters: building a shelter is work, hunting is play — and only two boys are doing the work.",
    },
    {
      word: "gesticulate",
      definition: "To make expressive gestures, especially when speaking passionately or emphatically.",
      context: "How the argument between Ralph and Jack is described — two boys who can't actually explain themselves to each other in words, only in frustration.",
    },
    {
      word: "candle-buds",
      definition: "Golding's name for the pale, waxy flowers in Simon's clearing that only open at night.",
      context: "One of the few genuinely peaceful images in the book. Worth noticing that it belongs entirely to Simon — no one else in the group even knows this place exists.",
    },
  ],
  closeReading: [
    {
      passage:
        "Jack tracks the pig with total absorption — reading broken twigs, droppings, scent — and Golding describes him becoming almost animal himself in the process, moving low and quiet, sniffing the air.",
      question: "What does Golding achieve by describing Jack's hunting in such intense, almost transformative physical detail?",
      options: [
        {
          text: "It shows hunting becoming something Jack loses himself in — not just a task, but an identity he's starting to prefer to the one he had at the start of the book.",
          isCorrect: true,
          feedback:
            "Right. This isn't Jack deciding to hunt for practical reasons anymore — it's Jack becoming absorbed by it in a way that already looks like more than a job.",
        },
        {
          text: "It shows that Jack has simply become a more skilled and useful member of the group.",
          isCorrect: false,
          feedback: "He comes back empty-handed — skill isn't really the point of this scene. Look at how the description makes him seem to change, not just improve.",
        },
        {
          text: "It's included mainly to explain the mechanics of hunting for readers unfamiliar with it.",
          isCorrect: false,
          feedback: "Golding isn't writing a hunting manual — this level of sensory, transformative detail is doing character work, not just explaining a process.",
        },
      ],
      insight:
        "Notice that Jack talks about hunting in terms of being watched and hated by the forest — \"as if he wore the mask of his own desire\" is the kind of framing to watch for later, once the actual painted mask appears.",
    },
    {
      passage:
        "Ralph and Jack argue about priorities — shelters versus hunting — and Golding notes that neither boy can really explain his own urgency to the other, or even fully to himself.",
      question: "Why might Golding deliberately make it hard for either boy to explain his own position clearly?",
      options: [
        {
          text: "Because the disagreement isn't really about logic or strategy — it's about what each of them needs to feel like themselves, which isn't the kind of thing you can argue someone out of.",
          isCorrect: true,
          feedback:
            "Exactly. This is why the conflict between Ralph and Jack never gets resolved by better arguments — it was never a debate that could be won that way.",
        },
        {
          text: "Because Golding wants to show that both boys are equally unintelligent.",
          isCorrect: false,
          feedback: "Both boys are shown as capable elsewhere in the book — this scene isn't about intelligence.",
        },
        {
          text: "It's simply a realistic detail about how children argue, with no larger significance.",
          isCorrect: false,
          feedback: "Possible, but Golding rarely wastes a scene — look at what this argument sets up for the rest of Part One.",
        },
      ],
      insight:
        "This is the first time the book shows the Ralph/Jack split as something neither of them fully controls or understands — which makes it harder to fix than a simple disagreement would be.",
    },
  ],
  symbolUpdates: [
    { symbol: "conch", status: "Still the rule, less attended to", note: "No formal assembly this chapter — the boys are drifting into their own routines instead of gathering." },
    { symbol: "fire", status: "Ralph's growing worry", note: "Not tended as carefully as Ralph wants — he's starting to notice he's the only one who really cares." },
  ],
  characterUpdates: [
    { character: "ralph", position: 55, note: "Frustrated and increasingly alone in caring about shelters, order, and rescue." },
    { character: "jack", position: 20, note: "Fully absorbed in hunting — starting to lose interest in anything else, including the argument itself." },
    { character: "piggy", position: 58, note: "Working alongside Ralph in spirit if not always in the text this chapter — still the voice of caution." },
    { character: "simon", position: 68, note: "Retreats to his own quiet place in the jungle — gentle, solitary, apart from the group's growing tension." },
    { character: "roger", position: 45, note: "Still mostly in the background, drifting loosely with Jack's world rather than Ralph's." },
  ],
  reflection: {
    question:
      "Ralph and Jack each think the other one just doesn't understand what actually matters. Have you ever been in a disagreement like that — where it wasn't really about who was right, but about two different things each person needed?",
    samples: [
      "Yes — sometimes an argument isn't really about the topic on the surface, it's about two people needing different things and not having the words for it.",
      "I think this happens a lot in group projects — one person cares about doing it well, another just wants it done, and neither one is exactly wrong.",
    ],
  },
  trivia: [
    {
      question: "What location on the island does Simon frequently retreat to for contemplation?",
      options: ["The lagoon", "The jungle thicket", "The mountain peak", "Castle Rock"],
      correctAnswer: 1,
      category: "The Island",
      difficulty: "hard",
    },
    {
      question: "What is Ralph primarily concerned with throughout the novel?",
      options: ["Building shelters and keeping a fire going", "Hunting pigs", "Painting his face", "Exploring caves"],
      correctAnswer: 0,
      category: "Ralph vs Jack",
      difficulty: "easy",
    },
    {
      question: "What role does Piggy primarily play in Ralph's leadership?",
      options: ["Advisor", "Hunter", "Rival", "Messenger"],
      correctAnswer: 0,
      category: "Leadership",
      difficulty: "easy",
    },
  ],
};
