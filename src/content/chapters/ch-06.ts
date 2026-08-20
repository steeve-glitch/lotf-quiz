import { Chapter } from "../types";

export const CH_06: Chapter = {
  id: "ch-06",
  number: 6,
  title: "Beast from Air",
  part: 2,
  summary:
    "In the night, far above the island, a battle happens in the sky — unseen and unexplained to the boys — and a dead parachutist drifts down onto the mountain, his parachute catching the wind so that the body seems to sit up and slump over again and again in the gusts. Sam and Eric, on fire duty, wake to see the shape in the dark and are terrified out of their minds; they run back to camp convinced they've seen the beast up close, with teeth and eyes. Ralph, cornered by his own rule that fear has to be checked out rather than just believed, organizes an expedition up the mountain. Jack goads him the whole way, testing whether Ralph really has the nerve for this the way a hunter would. They explore Castle Rock along the way — a natural fortress at the far end of the island that Jack is clearly drawn to. They don't reach the top of the mountain by nightfall, and the real test is still ahead.",
  quote: {
    text: "There were eyes― ... Teeth― ... Claws―",
    context: "Sam and Eric, still shaking, describing what they saw on the mountain in short, fragmented bursts. The reader has more information than they do — nobody on the island knows what a parachute looks like at night.",
  },
  vocabulary: [
    { word: "vigil", definition: "A period of watchful attention, especially at night.", context: "What Sam and Eric are technically doing on fire duty when they see the shape on the mountain." },
    { word: "encumbrance", definition: "A burden or hindrance.", context: "How the littluns and the general fear of the beast are starting to be described — a weight the group is dragging along with it." },
    { word: "furrowed", definition: "Marked with deep wrinkles or lines, especially from worry or concentration.", context: "Ralph's expression as he works out whether he actually has to lead the expedition up the mountain himself." },
    { word: "translucent", definition: "Allowing light to pass through partially; semi-transparent.", context: "Used to describe the strange, thin quality of the night air and the parachute material as it catches what little light there is." },
  ],
  closeReading: [
    {
      passage:
        "The reader learns, through Golding's description of the aerial battle and the parachutist's fall, exactly what the \"beast\" is — a piece of information none of the boys have access to.",
      question: "What does Golding achieve by letting readers understand the beast's true nature long before the characters do?",
      options: [
        {
          text: "It creates dramatic irony that makes every scene of fear that follows land differently for the reader — we know there's nothing to be afraid of, which makes watching the fear cause real harm even harder to sit with.",
          isCorrect: true,
          feedback:
            "Exactly right. Dramatic irony here isn't just a technique for suspense — it's doing thematic work, showing how much damage a misunderstood fear can cause even when the \"threat\" itself is nothing at all.",
        },
        {
          text: "It's a mistake in the plot that Golding never resolves.",
          isCorrect: false,
          feedback: "This is deliberate — Golding withholds this reveal from the characters for the rest of the book on purpose. It's central to how the story works.",
        },
        {
          text: "It shows that the boys are simply not intelligent enough to figure out the truth.",
          isCorrect: false,
          feedback: "It's dark, they're terrified, and none of them have ever seen a parachute — this isn't about intelligence, it's about how fear and darkness distort real evidence.",
        },
      ],
      insight:
        "Keep this scene in mind for later — the actual, harmless explanation for the beast never fully reaches the group. Watch what fills that gap instead.",
    },
    {
      passage:
        "Jack pushes Ralph, step by step, to prove he's brave enough to go up the mountain — turning the expedition into a test of nerve rather than a simple decision about safety.",
      question: "What does this moment reveal about how leadership is starting to be measured on the island?",
      options: [
        {
          text: "It shows Jack redefining what leadership even means — from Ralph's model of planning and responsibility toward something closer to physical courage and dominance, on Jack's own terms.",
          isCorrect: true,
          feedback:
            "Right. This is Jack testing Ralph by rules Jack gets to set, rather than the ones Ralph was actually elected under.",
        },
        {
          text: "It shows that Jack genuinely believes Ralph is a coward and wants to protect the group by replacing him.",
          isCorrect: false,
          feedback: "Look at Jack's tone here — this reads more like a challenge/test than a real concern for the group's safety.",
        },
        {
          text: "It's simply banter between friends with no real stakes.",
          isCorrect: false,
          feedback: "The stakes are Ralph's authority itself — this exchange is part of a much longer contest for leadership.",
        },
      ],
      insight:
        "Notice that Ralph goes up the mountain not because it's the best decision, but because he can't afford to be seen refusing. That's Jack's rules starting to apply to Ralph, not just to Jack.",
    },
  ],
  symbolUpdates: [
    { symbol: "beast", status: "\"Seen\" for the first time — a shape in the dark", note: "Sam and Eric's terror gives the fear a concrete, terrifying (if false) shape for the first time." },
    { symbol: "fire", status: "Fire-watch duty still holding, barely", note: "Sam and Eric were technically doing their job when they panicked — the system is still functioning, just fraying." },
  ],
  characterUpdates: [
    { character: "ralph", position: 45, note: "Forced into a physical test of leadership he isn't built for, but he goes anyway rather than lose face." },
    { character: "jack", position: -25, note: "Goads Ralph up the mountain, testing and reshaping what \"leadership\" is measured by." },
    { character: "piggy", position: 55, note: "Stays behind with the littluns — his usefulness is intellectual, not physical, and everyone including him knows it." },
    { character: "simon", position: 68, note: "Largely apart from this chapter's action — still the group's quiet exception." },
    { character: "roger", position: 0, note: "Watches closely, saying little — increasingly comfortable at the edges of whatever Jack is building." },
  ],
  reflection: {
    question:
      "The reader knows exactly what the \"beast\" really is before any character does. Why do you think Golding chose to let us know something the characters don't, instead of keeping us just as in the dark as they are?",
    samples: [
      "I think it makes it scarier in a different way — we're not scared of the monster, we're scared of what the fear itself is going to make them do.",
      "It makes me want to shout at the characters, almost — you feel powerless watching people panic over something you know is harmless.",
    ],
  },
  trivia: [
    {
      question: "What do Samneric claim to have seen that they believe is the beast?",
      options: ["A dead parachutist", "A wild boar", "A shipwreck", "Another survivor"],
      correctAnswer: 0,
      category: "The Beast",
      difficulty: "medium",
    },
    {
      question: "What are Sam and Eric's nicknames, reflecting their close relationship?",
      options: ["Twinnies", "Samneric", "The Watchers", "Fireboys"],
      correctAnswer: 1,
      category: "Characters",
      difficulty: "easy",
    },
    {
      question: "What is Jack's initial role within the choir group?",
      options: ["Leader and hunter", "Fire-keeper", "Record-keeper", "Lookout only"],
      correctAnswer: 0,
      category: "Ralph vs Jack",
      difficulty: "medium",
    },
  ],
};
