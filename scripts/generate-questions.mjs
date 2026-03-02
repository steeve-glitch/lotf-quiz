/**
 * Question Bank Generator for Lord of the Flies Trivia
 *
 * Usage:
 *   1. Add GEMINI_API_KEY=your-key to .env in the project root
 *   2. npm run generate-questions
 *
 * Generates ~288 questions across all category/difficulty combos
 * and writes them to src/data/questions.json.
 *
 * Run once locally, commit the JSON, deploy statically.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'data', 'questions.json')

const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set. Add it to your .env file.')
  process.exit(1)
}

const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`

const CATEGORIES = [
  'Characters',
  'Symbolism',
  'Plot Events',
  'Themes',
  'Quotes',
  'The Island',
  'Leadership',
  'Savagery vs Civilization',
  'The Beast',
  'Ralph vs Jack',
  'Fire & Rescue',
  'Endings',
]

const DIFFICULTIES = ['easy', 'medium', 'hard']
const QUESTIONS_PER_BATCH = 8 // 12 × 3 × 8 = 288 questions total

async function generateBatch(category, difficulty) {
  const prompt = `Generate exactly ${QUESTIONS_PER_BATCH} trivia questions about the novel "Lord of the Flies" by William Golding.

Specifications:
- Category: ${category}
- Difficulty: ${difficulty}
- Format: Multiple choice with exactly 4 options per question
- All questions must be factually correct and specific to the book

Respond ONLY with a valid JSON object in this exact format:
{
  "questions": [
    {
      "question": "What does the conch shell symbolize in the novel?",
      "options": ["Order and civilization", "Fear and chaos", "Ralph's power", "The beast"],
      "correctAnswer": 0,
      "category": "${category}",
      "difficulty": "${difficulty}"
    }
  ]
}

Rules:
- correctAnswer is the index (0-3) of the correct option
- All 4 options must be plausible (no obviously wrong distractors)
- Questions must vary — do not repeat the same question
- DO NOT output anything except the JSON object`

  const response = await fetch(GEMINI_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Referer': 'http://localhost:5173' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7 },
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`API error ${response.status}: ${err}`)
  }

  const data = await response.json()
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) throw new Error('Empty response from Gemini')

  const cleanText = text.replace(/```json|```/g, '').trim()
  const parsed = JSON.parse(cleanText)

  if (!parsed.questions || !Array.isArray(parsed.questions)) {
    throw new Error('Invalid response format')
  }

  return parsed.questions
}

async function main() {
  const allQuestions = []
  const total = CATEGORIES.length * DIFFICULTIES.length
  let done = 0

  console.log(`Generating questions for ${total} category+difficulty combos...\n`)

  for (const category of CATEGORIES) {
    for (const difficulty of DIFFICULTIES) {
      process.stdout.write(`  [${++done}/${total}] ${category} / ${difficulty}... `)
      try {
        const questions = await generateBatch(category, difficulty)
        allQuestions.push(...questions)
        console.log(`✓ ${questions.length} questions`)
      } catch (err) {
        console.log(`✗ FAILED: ${err.message}`)
      }
      await new Promise((r) => setTimeout(r, 300))
    }
  }

  const output = {
    version: '1.0',
    generated: new Date().toISOString().split('T')[0],
    count: allQuestions.length,
    questions: allQuestions,
  }

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true })
  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2))

  console.log(`\nDone! ${allQuestions.length} questions written to src/data/questions.json`)
}

main().catch((err) => {
  console.error('Fatal error:', err)
  process.exit(1)
})
