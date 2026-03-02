import { useState, useEffect } from 'react'
import questionBank from '../data/questions.json'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  category: string
  difficulty: string
}

interface AnswerRecord {
  questionIndex: number
  selectedAnswer: number
  isCorrect: boolean
}

type GameMode = 'teacher' | 'student'
type GameState = 'modeSelect' | 'setup' | 'playing' | 'results' | 'answerKey'
type Difficulty = 'easy' | 'medium' | 'hard'

// ─── i18n ─────────────────────────────────────────────────────────────────────

const TRANSLATIONS = {
  'en-US': {
    triviaTitle: 'Lord of the Flies Trivia',
    triviaSubtitle: "Test your knowledge of William Golding's classic novel",
    selectModeTitle: 'Select Mode',
    teacherModeTitle: 'Teacher Mode',
    teacherModeDesc: 'Project on whiteboard for whole class',
    studentModeTitle: 'Student Mode',
    studentModeDesc: 'Individual practice with scoring',
    categoriesTitle: 'Categories',
    difficultyTitle: 'Difficulty',
    numQuestionsTitle: 'Number of questions',
    startGameButton: 'Start game',
    questionOf: 'Question',
    of: 'of',
    score: 'Score:',
    nextQuestionButton: 'Next question',
    revealAnswerButton: 'Reveal answer',
    finishGameButton: 'Finish game',
    resultsTitle: 'Results',
    correct: 'Correct',
    excellentMessage: 'Excellent!',
    goodJobMessage: 'Good job!',
    notBadMessage: 'Not bad!',
    keepStudyingMessage: 'Keep studying!',
    yourAnswer: 'Your answer:',
    correctAnswer: 'Correct answer:',
    playAgainButton: 'Play again',
    selectCategoryAlert: 'Please select at least one category!',
    selectAnswerAlert: 'Please select an answer!',
    noQuestionsError: 'No questions found for the selected categories and difficulty. Try a different combination.',
    easy: 'Easy',
    medium: 'Medium',
    hard: 'Hard',
  },
  'es-ES': {
    triviaTitle: 'Trivia El Señor de las Moscas',
    triviaSubtitle: 'Pon a prueba tus conocimientos sobre la novela clásica de William Golding',
    selectModeTitle: 'Seleccionar Modo',
    teacherModeTitle: 'Modo Profesor',
    teacherModeDesc: 'Proyectar en pizarra para toda la clase',
    studentModeTitle: 'Modo Estudiante',
    studentModeDesc: 'Práctica individual con puntuación',
    categoriesTitle: 'Categorías',
    difficultyTitle: 'Dificultad',
    numQuestionsTitle: 'Número de preguntas',
    startGameButton: 'Comenzar juego',
    questionOf: 'Pregunta',
    of: 'de',
    score: 'Puntuación:',
    nextQuestionButton: 'Siguiente pregunta',
    revealAnswerButton: 'Revelar respuesta',
    finishGameButton: 'Terminar juego',
    resultsTitle: 'Resultados',
    correct: 'Correcto',
    excellentMessage: '¡Excelente!',
    goodJobMessage: '¡Buen trabajo!',
    notBadMessage: '¡No está mal!',
    keepStudyingMessage: '¡Sigue estudiando!',
    yourAnswer: 'Tu respuesta:',
    correctAnswer: 'Respuesta correcta:',
    playAgainButton: 'Jugar de nuevo',
    selectCategoryAlert: '¡Por favor selecciona al menos una categoría!',
    selectAnswerAlert: '¡Por favor selecciona una respuesta!',
    noQuestionsError: 'No se encontraron preguntas para las categorías y dificultad seleccionadas. Intenta otra combinación.',
    easy: 'Fácil',
    medium: 'Medio',
    hard: 'Difícil',
  },
} as const

type LocaleKey = keyof typeof TRANSLATIONS
type TranslationKey = keyof (typeof TRANSLATIONS)['en-US']

const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US'
const findLocale = (locale: string): LocaleKey => {
  if (locale in TRANSLATIONS) return locale as LocaleKey
  const lang = locale.split('-')[0]
  const match = Object.keys(TRANSLATIONS).find((k) => k.startsWith(lang + '-'))
  return (match as LocaleKey) ?? 'en-US'
}
const locale = findLocale(browserLocale)
const t = (key: TranslationKey) => TRANSLATIONS[locale][key] ?? TRANSLATIONS['en-US'][key]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function sampleQuestions(categories: string[], difficulty: Difficulty, count: number): Question[] {
  const pool = (questionBank.questions as Question[]).filter(
    (q) => categories.includes(q.category) && q.difficulty === difficulty,
  )
  const shuffled = [...pool]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, count)
}

// ─── Fullscreen Button ────────────────────────────────────────────────────────

function FullscreenButton({ isFullscreen, onToggle }: { isFullscreen: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
      className="fixed top-3 right-3 z-50 p-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 text-gray-400 hover:text-white transition-all duration-200"
    >
      {isFullscreen ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
        </svg>
      )}
    </button>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

const AVAILABLE_CATEGORIES = [
  'Characters', 'Symbolism', 'Plot Events', 'Themes', 'Quotes', 'The Island',
  'Leadership', 'Savagery vs Civilization', 'The Beast', 'Ralph vs Jack', 'Fire & Rescue', 'Endings',
]

export default function TriviaGame() {
  const [gameMode, setGameMode] = useState<GameMode | null>(null)
  const [gameState, setGameState] = useState<GameState>('modeSelect')
  const [categories, setCategories] = useState<string[]>([])
  const [difficulty, setDifficulty] = useState<Difficulty>('medium')
  const [numQuestions, setNumQuestions] = useState(10)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<AnswerRecord[]>([])
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [fiftyFiftyUsed, setFiftyFiftyUsed] = useState(false)
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([])

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const toggleCategory = (category: string) => {
    setCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const activateFiftyFifty = () => {
    const correct = questions[currentQuestion].correctAnswer
    const wrong = [0, 1, 2, 3].filter((i) => i !== correct)
    // Shuffle wrong options and eliminate 2
    for (let i = wrong.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[wrong[i], wrong[j]] = [wrong[j], wrong[i]]
    }
    setEliminatedOptions(wrong.slice(0, 2))
    setFiftyFiftyUsed(true)
    // Deselect answer if it was eliminated
    if (selectedAnswer !== null && wrong.slice(0, 2).includes(selectedAnswer)) {
      setSelectedAnswer(null)
    }
  }

  const startGame = () => {
    if (categories.length === 0) { alert(t('selectCategoryAlert')); return }
    const sampled = sampleQuestions(categories, difficulty, numQuestions)
    if (sampled.length === 0) { alert(t('noQuestionsError')); return }
    setQuestions(sampled)
    setCurrentQuestion(0)
    setScore(0)
    setAnswers([])
    setFiftyFiftyUsed(false)
    setEliminatedOptions([])
    setGameState('playing')
  }

  const submitAnswer = () => {
    if (selectedAnswer === null) { alert(t('selectAnswerAlert')); return }
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer
    const newAnswers = [...answers, { questionIndex: currentQuestion, selectedAnswer, isCorrect }]
    setAnswers(newAnswers)
    if (isCorrect) setScore((s) => s + 1)
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((q) => q + 1)
      setSelectedAnswer(null)
      setEliminatedOptions([])
    } else {
      setGameState('results')
    }
  }

  const resetGame = () => {
    setGameState('modeSelect')
    setGameMode(null)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setScore(0)
    setAnswers([])
    setQuestions([])
    setFiftyFiftyUsed(false)
    setEliminatedOptions([])
  }

  // ── Mode Select ─────────────────────────────────────────────────────────────

  if (gameState === 'modeSelect') {
    return (
      <div className="h-screen overflow-hidden bg-gray-900 text-white flex flex-col justify-center p-6">
        <FullscreenButton isFullscreen={isFullscreen} onToggle={toggleFullscreen} />
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-black mb-2 text-green-400">{t('triviaTitle')}</h1>
            <p className="text-base text-gray-300">{t('triviaSubtitle')}</p>
          </div>
          <h2 className="text-xl font-bold text-green-400 mb-5 text-center">{t('selectModeTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <button
              onClick={() => { setGameMode('teacher'); setGameState('setup') }}
              className="bg-gray-800 rounded-2xl p-6 shadow-2xl border-2 border-gray-700 hover:border-green-400 transition-all duration-200 text-left"
            >
              <div className="text-3xl mb-3">👨‍🏫</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">{t('teacherModeTitle')}</h3>
              <p className="text-sm text-gray-300">{t('teacherModeDesc')}</p>
            </button>
            <button
              onClick={() => { setGameMode('student'); setGameState('setup') }}
              className="bg-gray-800 rounded-2xl p-6 shadow-2xl border-2 border-gray-700 hover:border-green-400 transition-all duration-200 text-left"
            >
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-xl font-bold text-green-400 mb-2">{t('studentModeTitle')}</h3>
              <p className="text-sm text-gray-300">{t('studentModeDesc')}</p>
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Setup ───────────────────────────────────────────────────────────────────

  if (gameState === 'setup') {
    return (
      <div className="h-screen overflow-hidden bg-gray-900 text-white flex flex-col p-4">
        <FullscreenButton isFullscreen={isFullscreen} onToggle={toggleFullscreen} />
        <div className="max-w-2xl mx-auto w-full flex flex-col flex-1 min-h-0">
          <div className="text-center py-3 shrink-0">
            <h1 className="text-2xl font-black text-green-400">{t('triviaTitle')}</h1>
            <span className="inline-block mt-1 px-3 py-1 bg-green-500 text-black rounded-full text-xs font-semibold">
              {gameMode === 'teacher' ? `👨‍🏫 ${t('teacherModeTitle')}` : `🎓 ${t('studentModeTitle')}`}
            </span>
          </div>

          <div className="bg-gray-800 rounded-2xl p-5 shadow-2xl border-2 border-gray-700 flex flex-col gap-4 flex-1 min-h-0">
            {/* Categories */}
            <div className="shrink-0">
              <h2 className="text-base font-bold mb-2 text-green-400">{t('categoriesTitle')}</h2>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                {AVAILABLE_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`py-2 px-2 rounded-lg font-semibold transition-all duration-200 border-2 text-xs ${
                      categories.includes(category)
                        ? 'bg-green-500 text-black border-green-400 shadow-lg'
                        : 'bg-gray-700 text-white border-gray-600 hover:border-green-400 hover:bg-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="shrink-0">
              <h2 className="text-base font-bold mb-2 text-green-400">{t('difficultyTitle')}</h2>
              <div className="flex gap-2">
                {(['easy', 'medium', 'hard'] as Difficulty[]).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 border-2 text-sm ${
                      difficulty === diff
                        ? 'bg-green-500 text-black border-green-400 shadow-lg'
                        : 'bg-gray-700 text-white border-gray-600 hover:border-green-400 hover:bg-gray-600'
                    }`}
                  >
                    {t(diff)}
                  </button>
                ))}
              </div>
            </div>

            {/* Num questions */}
            <div className="shrink-0">
              <h2 className="text-base font-bold mb-2 text-green-400">{t('numQuestionsTitle')}</h2>
              <div className="flex gap-2">
                {[5, 10, 15, 20].map((num) => (
                  <button
                    key={num}
                    onClick={() => setNumQuestions(num)}
                    className={`px-5 py-2 rounded-lg font-semibold transition-all duration-200 border-2 text-sm ${
                      numQuestions === num
                        ? 'bg-green-500 text-black border-green-400 shadow-lg'
                        : 'bg-gray-700 text-white border-gray-600 hover:border-green-400 hover:bg-gray-600'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-2 mt-auto">
              <button
                onClick={startGame}
                className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-3 px-8 rounded-xl text-base transition-all duration-200 shadow-xl"
              >
                {t('startGameButton')}
              </button>
              <button
                onClick={() => setGameState('modeSelect')}
                className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-8 rounded-xl text-sm transition-all duration-200"
              >
                ← {t('selectModeTitle')}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Playing ─────────────────────────────────────────────────────────────────

  if (gameState === 'playing') {
    const question = questions[currentQuestion]
    const isLastQuestion = currentQuestion + 1 === questions.length

    // Teacher Mode
    if (gameMode === 'teacher') {
      return (
        <div className="h-screen overflow-hidden bg-gray-900 text-white flex flex-col p-4">
          <FullscreenButton isFullscreen={isFullscreen} onToggle={toggleFullscreen} />
          <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 min-h-0">
            <div className="flex justify-between items-center py-3 shrink-0">
              <div className="text-green-400 font-bold text-lg">
                {t('questionOf')} {currentQuestion + 1} {t('of')} {questions.length}
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl border-2 border-gray-700 flex flex-col flex-1 min-h-0">
              <div className="shrink-0 mb-4">
                <span className="inline-block px-3 py-1 bg-green-500 text-black rounded-full text-sm font-semibold mb-3">
                  {question.category}
                </span>
                <h2 className="text-2xl font-bold leading-snug">{question.question}</h2>
              </div>
              <div className="grid grid-cols-2 gap-3 flex-1 content-center">
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className="px-5 py-4 rounded-xl font-semibold text-lg border-2 bg-gray-700 text-white border-gray-600"
                  >
                    <span className="font-black mr-3 text-xl">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </div>
                ))}
              </div>
              <div className="shrink-0 mt-4">
                {isLastQuestion ? (
                  <button
                    onClick={() => setGameState('answerKey')}
                    className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-3 px-8 rounded-xl text-lg transition-all duration-200 shadow-xl"
                  >
                    Show Answers
                  </button>
                ) : (
                  <button
                    onClick={() => setCurrentQuestion((q) => q + 1)}
                    className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-3 px-8 rounded-xl text-lg transition-all duration-200 shadow-xl"
                  >
                    {t('nextQuestionButton')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }

    // Student Mode
    return (
      <div className="h-screen overflow-hidden bg-gray-900 text-white flex flex-col p-4">
        <FullscreenButton isFullscreen={isFullscreen} onToggle={toggleFullscreen} />
        <div className="max-w-3xl mx-auto w-full flex flex-col flex-1 min-h-0">
          <div className="flex justify-between items-center py-3 shrink-0">
            <div className="text-green-400 font-bold text-base">
              {t('questionOf')} {currentQuestion + 1} {t('of')} {questions.length}
            </div>
            <div className="text-green-400 font-bold text-base">
              {t('score')} {score}
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-5 shadow-2xl border-2 border-gray-700 flex flex-col flex-1 min-h-0">
            <div className="shrink-0 mb-4">
              <span className="inline-block px-3 py-1 bg-green-500 text-black rounded-full text-xs font-semibold mb-3">
                {question.category}
              </span>
              <h2 className="text-xl font-bold leading-snug">{question.question}</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 flex-1 content-center">
              {question.options.map((option, index) => {
                const isEliminated = eliminatedOptions.includes(index)
                return (
                  <button
                    key={index}
                    onClick={() => !isEliminated && setSelectedAnswer(index)}
                    disabled={isEliminated}
                    className={`px-4 py-3 rounded-xl font-semibold text-left text-sm transition-all duration-200 border-2 ${
                      isEliminated
                        ? 'bg-gray-800 text-gray-600 border-gray-700 line-through cursor-not-allowed'
                        : selectedAnswer === index
                          ? 'bg-green-500 text-black border-green-400 shadow-lg'
                          : 'bg-gray-700 text-white border-gray-600 hover:border-green-400 hover:bg-gray-600'
                    }`}
                  >
                    <span className="font-black mr-2">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </button>
                )
              })}
            </div>
            <div className="shrink-0 mt-4 flex gap-2">
              <button
                onClick={activateFiftyFifty}
                disabled={fiftyFiftyUsed}
                title="Eliminate 2 wrong answers"
                className={`px-4 py-3 rounded-xl font-black text-sm border-2 transition-all duration-200 shrink-0 ${
                  fiftyFiftyUsed
                    ? 'bg-gray-800 text-gray-600 border-gray-700 cursor-not-allowed'
                    : 'bg-yellow-500 hover:bg-yellow-400 text-black border-yellow-400 shadow-lg'
                }`}
              >
                50/50
              </button>
              <button
                onClick={submitAnswer}
                className="flex-1 bg-green-500 hover:bg-green-400 text-black font-black py-3 px-8 rounded-xl text-base transition-all duration-200 shadow-xl"
              >
                {isLastQuestion ? t('finishGameButton') : t('nextQuestionButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // ── Answer Key (Teacher) ────────────────────────────────────────────────────

  if (gameState === 'answerKey') {
    return (
      <div className="h-screen overflow-hidden bg-gray-900 text-white flex flex-col p-4">
        <FullscreenButton isFullscreen={isFullscreen} onToggle={toggleFullscreen} />
        <div className="max-w-4xl mx-auto w-full flex flex-col flex-1 min-h-0">
          <div className="text-center py-3 shrink-0">
            <h1 className="text-2xl font-black text-green-400">Answer Key</h1>
            <p className="text-sm text-gray-300">{questions.length} questions</p>
          </div>
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 min-h-0">
            {questions.map((question, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-4 border-2 border-gray-700">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-green-400 font-black text-sm shrink-0">Q{index + 1}.</span>
                  <div>
                    <span className="inline-block px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full text-xs font-semibold mb-1">
                      {question.category}
                    </span>
                    <p className="text-sm font-semibold">{question.question}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 ml-6">
                  {question.options.map((option, optIndex) => (
                    <div
                      key={optIndex}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold border-2 ${
                        optIndex === question.correctAnswer
                          ? 'bg-green-500 text-black border-green-400'
                          : 'bg-gray-700 text-gray-400 border-gray-600'
                      }`}
                    >
                      <span className="font-black mr-1">{String.fromCharCode(65 + optIndex)}.</span>
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="shrink-0 pt-3">
            <button
              onClick={resetGame}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-3 px-8 rounded-xl text-base transition-all duration-200 shadow-xl"
            >
              {t('playAgainButton')}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ── Results ─────────────────────────────────────────────────────────────────

  if (gameState === 'results') {
    const percentage = Math.round((score / questions.length) * 100)
    const message =
      percentage >= 80 ? t('excellentMessage')
      : percentage >= 60 ? t('goodJobMessage')
      : percentage >= 40 ? t('notBadMessage')
      : t('keepStudyingMessage')

    return (
      <div className="h-screen overflow-hidden bg-gray-900 text-white flex flex-col p-4">
        <FullscreenButton isFullscreen={isFullscreen} onToggle={toggleFullscreen} />
        <div className="max-w-2xl mx-auto w-full flex flex-col flex-1 min-h-0">
          <div className="text-center py-3 shrink-0">
            <h1 className="text-2xl font-black text-green-400">{t('resultsTitle')}</h1>
            <div className="text-4xl font-black text-green-400 mt-1">{score}/{questions.length}</div>
            <div className="text-base font-bold">{percentage}% {t('correct')}</div>
            <div className="text-sm text-gray-300 mt-1">{message}</div>
          </div>
          <div className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-0 mt-2">
            {questions.map((question, index) => {
              const userAnswer = answers[index]
              const isCorrect = userAnswer?.isCorrect
              return (
                <div
                  key={index}
                  className={`p-3 rounded-xl border-2 ${
                    isCorrect ? 'border-green-400 bg-green-900/30' : 'border-red-400 bg-red-900/30'
                  }`}
                >
                  <div className="text-sm font-semibold mb-1">{question.question}</div>
                  <div className="text-xs">
                    <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                      {t('yourAnswer')} {question.options[userAnswer.selectedAnswer]}
                    </span>
                    {!isCorrect && (
                      <div className="text-green-400">
                        {t('correctAnswer')} {question.options[question.correctAnswer]}
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="shrink-0 pt-3">
            <button
              onClick={resetGame}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-3 px-8 rounded-xl text-base transition-all duration-200 shadow-xl"
            >
              {t('playAgainButton')}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
