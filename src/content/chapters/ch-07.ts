import { Chapter } from "../types";

export const CH_07: Chapter = {
  id: "ch-07",
  number: 7,
  title: "Shadows and Tall Trees",
  part: 2,
  summary:
    "Ralph, Jack, Roger, and Simon push on toward the mountain, hungry and increasingly on edge. Killing time, the boys stumble into a mock hunt — one of them plays the pig while the others jab at him with spears, chanting — and it tips further into real excitement than anyone expects, Ralph included. Even Ralph, surprising himself, feels the pull of the game. Simon volunteers to go back alone to tell Piggy the group will be late, choosing the long walk through the darkening jungle by himself rather than let the littluns worry. Ralph, Jack, and Roger press on toward the summit as dusk falls. At the top, in the fading light, they glimpse a shape — the dead parachutist, still rising and slumping in the wind — and, thoroughly convinced it's the beast, they flee down the mountain without staying to look closer.",
  quote: {
    text: "Things are breaking up. I don't understand why.",
    context: "Ralph, quietly, to himself — the first time he says out loud that he doesn't actually know how to fix what's happening to the group.",
  },
  vocabulary: [
    { word: "petrified", definition: "So frightened that one is unable to move; turned to stone with fear.", context: "The state Ralph, Jack, and Roger are left in after glimpsing the shape on the mountain." },
    { word: "instinctive", definition: "Done without conscious thought, as a natural or automatic response.", context: "How the boys' flight down the mountain is described — no discussion, no decision, just running." },
    { word: "hysteria", definition: "Exaggerated or uncontrollable emotion, especially fear or excitement, often spreading through a group.", context: "What the mock hunt tips into — a game that stops being a game partway through." },
    { word: "vantage", definition: "A place or position affording a good view of something; a position of advantage.", context: "What the boys are hoping to find at the top of the mountain — a clear look at whatever they've been afraid of." },
  ],
  closeReading: [
    {
      passage:
        "During the mock hunt, Ralph — usually the one holding the group to order — gets swept into the chanting and jabbing along with everyone else, and Golding notes his own surprise at how much he enjoys it.",
      question: "What does it reveal that even Ralph, the character most associated with order and restraint, gets pulled into the mock hunt's excitement?",
      options: [
        {
          text: "It suggests the pull toward savagery isn't just a trait some boys have and others don't — it's something in the situation itself, something anyone in this group could be drawn into given the right conditions.",
          isCorrect: true,
          feedback:
            "Exactly — this is Golding widening the argument. If it can happen to Ralph, even briefly, the book isn't really about Jack being uniquely bad. It's about what any group under these conditions might do.",
        },
        {
          text: "It shows that Ralph has secretly wanted to be like Jack the whole time.",
          isCorrect: false,
          feedback: "That overstates it — this is a brief, surprising slip, not a hidden desire Ralph has been suppressing all along.",
        },
        {
          text: "It's a minor detail included only for pacing, without larger meaning.",
          isCorrect: false,
          feedback: "Golding chose his most \"civilized\" character for this moment very deliberately — that's not a pacing choice.",
        },
      ],
      insight:
        "This moment matters because it complicates a simple \"good boys vs. bad boys\" reading of the novel. Golding's actual claim is broader and more uncomfortable than that.",
    },
    {
      passage:
        "At the top of the mountain, in near-darkness, the boys glimpse a shape moving in the wind and flee immediately, without confirming what they actually saw.",
      question: "Why is it significant that they run without checking what the shape actually is?",
      options: [
        {
          text: "It shows that once fear reaches a certain pitch, verifying the truth stops being an option people even consider — they're reacting to their own terror, not to solid evidence.",
          isCorrect: true,
          feedback:
            "Right. This is the same pattern from Chapter 5 — fear outrunning reason — but now happening to the biguns who are supposed to be the most levelheaded, not just the littluns.",
        },
        {
          text: "It shows that the shape was moving too fast for them to get a clear look.",
          isCorrect: false,
          feedback: "The parachute's movement is described as slow, gust-driven sagging and rising — the boys don't run because it's fast, they run because they're already terrified.",
        },
        {
          text: "It's a purely practical decision, since nighttime exploration would have been genuinely dangerous.",
          isCorrect: false,
          feedback: "There's some truth to the danger, but the scene emphasizes panic and instinct, not a calm risk assessment.",
        },
      ],
      insight:
        "This is the moment the fear stops belonging just to the littluns. Once Ralph and Jack have both \"seen\" it themselves, the beast becomes unquestionable fact for the whole group.",
    },
  ],
  symbolUpdates: [
    { symbol: "beast", status: "Seen directly by Ralph and Jack, not just Sam and Eric", note: "The fear is no longer secondhand — the two most influential boys on the island now believe it themselves." },
    { symbol: "conch", status: "Absent from this chapter", note: "This is action out in the jungle and on the mountain, far from any assembly — a reminder of how much territory now exists outside the conch's reach." },
  ],
  characterUpdates: [
    { character: "ralph", position: 40, note: "Gets swept into the mock hunt's excitement despite himself — the first real crack in his own composure." },
    { character: "jack", position: -30, note: "Fully at home in the mock hunt and the climb — completely unbothered by the fear that shakes Ralph." },
    { character: "piggy", position: 55, note: "Waiting anxiously back at camp, unaware of what the search party is finding." },
    { character: "simon", position: 70, note: "Volunteers to walk back alone through the darkening jungle so the littluns won't be left worrying — quietly selfless, as always." },
    { character: "roger", position: -5, note: "Watchful and largely silent on the climb, taking everything in." },
  ],
  reflection: {
    question:
      "Even Ralph gets caught up in the excitement of the mock hunt for a moment. Have you ever gotten swept into a group's mood or energy — even briefly — in a way that surprised you afterward?",
    samples: [
      "Yes — I think crowds and group excitement can make you feel and do things you wouldn't on your own, even if it's just for a few seconds.",
      "I think this happens with online piling-on sometimes — you get caught up in the momentum of a group reacting to something before you've really thought it through.",
    ],
  },
  trivia: [
    {
      question: "Which character is most closely associated with logic and reason in supporting Ralph?",
      options: ["Simon", "Piggy", "Sam", "Eric"],
      correctAnswer: 1,
      category: "Ralph vs Jack",
      difficulty: "easy",
    },
    {
      question: "Which character is most closely associated with spirituality and nature?",
      options: ["Jack", "Roger", "Simon", "Ralph"],
      correctAnswer: 2,
      category: "Characters",
      difficulty: "easy",
    },
  ],
};
