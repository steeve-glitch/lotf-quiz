import React, { useState } from 'react';

const TRANSLATIONS = {
  "en-US": {
    "triviaTitle": "Lord of the Flies Trivia",
    "triviaSubtitle": "Test your knowledge of William Golding's classic novel",
    "selectModeTitle": "Select Mode",
    "teacherModeTitle": "Teacher Mode",
    "teacherModeDesc": "Project on whiteboard for whole class",
    "studentModeTitle": "Student Mode",
    "studentModeDesc": "Individual practice with scoring",
    "categoriesTitle": "Categories",
    "difficultyTitle": "Difficulty",
    "numQuestionsTitle": "Number of questions",
    "startGameButton": "Start game",
    "generatingQuestionsTitle": "Generating questions...",
    "generatingQuestionsSubtitle": "Preparing your trivia challenge",
    "questionOf": "Question",
    "of": "of",
    "score": "Score:",
    "checkAnswerButton": "Check answer",
    "nextQuestionButton": "Next question",
    "revealAnswerButton": "Reveal answer",
    "finishGameButton": "Finish game",
    "resultsTitle": "Results",
    "correct": "Correct",
    "excellentMessage": "🏆 Excellent!",
    "goodJobMessage": "👍 Good job!",
    "notBadMessage": "👌 Not bad!",
    "keepStudyingMessage": "📚 Keep studying!",
    "yourAnswer": "Your answer:",
    "correctAnswer": "Correct answer:",
    "playAgainButton": "Play again",
    "selectCategoryAlert": "Please select at least one category!",
    "selectAnswerAlert": "Please select an answer!",
    "generateQuestionsError": "Failed to generate questions. Please try again.",
    "easy": "easy",
    "medium": "medium",
    "hard": "hard"
  },
  /* LOCALE_PLACEHOLDER_START */
  "es-ES": {
    "triviaTitle": "Trivia El Señor de las Moscas",
    "triviaSubtitle": "Pon a prueba tus conocimientos sobre la novela clásica de William Golding",
    "selectModeTitle": "Seleccionar Modo",
    "teacherModeTitle": "Modo Profesor",
    "teacherModeDesc": "Proyectar en pizarra para toda la clase",
    "studentModeTitle": "Modo Estudiante",
    "studentModeDesc": "Práctica individual con puntuación",
    "categoriesTitle": "Categorías",
    "difficultyTitle": "Dificultad",
    "numQuestionsTitle": "Número de preguntas",
    "startGameButton": "Comenzar juego",
    "generatingQuestionsTitle": "Generando preguntas...",
    "generatingQuestionsSubtitle": "Preparando tu desafío de trivia",
    "questionOf": "Pregunta",
    "of": "de",
    "score": "Puntuación:",
    "checkAnswerButton": "Verificar respuesta",
    "nextQuestionButton": "Siguiente pregunta",
    "revealAnswerButton": "Revelar respuesta",
    "finishGameButton": "Terminar juego",
    "resultsTitle": "Resultados",
    "correct": "Correcto",
    "excellentMessage": "🏆 ¡Excelente!",
    "goodJobMessage": "👍 ¡Buen trabajo!",
    "notBadMessage": "👌 ¡No está mal!",
    "keepStudyingMessage": "📚 ¡Sigue estudiando!",
    "yourAnswer": "Tu respuesta:",
    "correctAnswer": "Respuesta correcta:",
    "playAgainButton": "Jugar de nuevo",
    "selectCategoryAlert": "¡Por favor selecciona al menos una categoría!",
    "selectAnswerAlert": "¡Por favor selecciona una respuesta!",
    "generateQuestionsError": "Error al generar preguntas. Por favor inténtalo de nuevo.",
    "easy": "fácil",
    "medium": "medio",
    "hard": "difícil"
  }
  /* LOCALE_PLACEHOLDER_END */
};

const appLocale = '{{APP_LOCALE}}';
const browserLocale = navigator.languages?.[0] || navigator.language || 'en-US';
const findMatchingLocale = (locale) => {
  if (TRANSLATIONS[locale]) return locale;
  const lang = locale.split('-')[0];
  const match = Object.keys(TRANSLATIONS).find(key => key.startsWith(lang + '-'));
  return match || 'en-US';
};
const locale = (appLocale !== '{{APP_LOCALE}}') ? findMatchingLocale(appLocale) : findMatchingLocale(browserLocale);
const t = (key) => TRANSLATIONS[locale]?.[key] || TRANSLATIONS['en-US'][key] || key;

const TriviaGame = () => {
  const [gameMode, setGameMode] = useState(null); // null, 'teacher', 'student'
  const [gameState, setGameState] = useState('modeSelect'); // modeSelect, setup, loading, playing, checking, results
  const [categories, setCategories] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [numQuestions, setNumQuestions] = useState(5);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [teacherRevealAnswer, setTeacherRevealAnswer] = useState(false);

  const availableCategories = [
    'Characters', 'Symbolism', 'Plot Events', 'Themes', 'Quotes', 'The Island',
    'Leadership', 'Savagery vs Civilization', 'The Beast', 'Ralph vs Jack', 'Fire & Rescue', 'Endings'
  ];

  const toggleCategory = (category) => {
    setCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const generateQuestions = async () => {
    if (categories.length === 0) {
      alert(t('selectCategoryAlert'));
      return;
    }

    setGameState('loading');
    
    try {
      const categoriesStr = categories.join(', ');
      const prompt = `Generate exactly ${numQuestions} trivia questions about the novel "Lord of the Flies" by William Golding with the following specifications:
- Focus areas: ${categoriesStr}
- Difficulty: ${difficulty}
- Format: Multiple choice with 4 options
- All questions must be about the book "Lord of the Flies"

Please respond in ${locale} language.

Respond ONLY with a valid JSON object in this exact format:
{
  "questions": [
    {
      "question": "What does the conch shell symbolize in the novel?",
      "options": ["Order and civilization", "Fear and chaos", "Ralph's power", "The beast"],
      "correctAnswer": 0,
      "category": "Symbolism"
    }
  ]
}

Make sure each question has exactly 4 plausible options and the correctAnswer is the index (0-3) of the correct option.
DO NOT OUTPUT ANYTHING OTHER THAN VALID JSON. Your entire response must be a single, valid JSON object.`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 4000,
          messages: [
            { role: "user", content: prompt }
          ],
        })
      });

      const data = await response.json();
      const text = data.content
        .filter(item => item.type === "text")
        .map(item => item.text)
        .join("\n");
      
      const cleanText = text.replace(/```json|```/g, "").trim();
      const jsonResponse = JSON.parse(cleanText);
      
      if (jsonResponse.questions && Array.isArray(jsonResponse.questions)) {
        setQuestions(jsonResponse.questions);
        setGameState('playing');
        setCurrentQuestion(0);
        setScore(0);
        setAnswers([]);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating questions:', error);
      alert(t('generateQuestionsError'));
      setGameState('setup');
    }
  };

  const selectAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) {
      alert(t('selectAnswerAlert'));
      return;
    }

    // Move to next question immediately
    const isCorrect = selectedAnswer === questions[currentQuestion].correctAnswer;
    const newAnswers = [...answers, {
      questionIndex: currentQuestion,
      selectedAnswer,
      isCorrect
    }];
    
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setGameState('results');
    }
  };

  const resetGame = () => {
    setGameState('modeSelect');
    setGameMode(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setAnswers([]);
    setQuestions([]);
    setTeacherRevealAnswer(false);
  };

  if (gameState === 'modeSelect') {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mt-8 mb-8">
            <h1 className="text-6xl font-black mb-4 text-green-400">{t('triviaTitle')}</h1>
            <p className="text-xl text-gray-300">{t('triviaSubtitle')}</p>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-400 mb-8">{t('selectModeTitle')}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <button
              onClick={() => {
                setGameMode('teacher');
                setGameState('setup');
              }}
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-gray-700 hover:border-green-400 transition-all duration-200 text-left"
            >
              <div className="text-4xl mb-4">👨‍🏫</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">{t('teacherModeTitle')}</h3>
              <p className="text-gray-300">{t('teacherModeDesc')}</p>
            </button>

            <button
              onClick={() => {
                setGameMode('student');
                setGameState('setup');
              }}
              className="bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-gray-700 hover:border-green-400 transition-all duration-200 text-left"
            >
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-green-400 mb-3">{t('studentModeTitle')}</h3>
              <p className="text-gray-300">{t('studentModeDesc')}</p>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'setup') {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mt-8 mb-8">
            <h1 className="text-6xl font-black mb-4 text-green-400">{t('triviaTitle')}</h1>
            <p className="text-xl text-gray-300">{t('triviaSubtitle')}</p>
            <div className="mt-4">
              <span className="inline-block px-4 py-2 bg-green-500 text-black rounded-full text-sm font-semibold">
                {gameMode === 'teacher' ? '👨‍🏫 ' + t('teacherModeTitle') : '🎓 ' + t('studentModeTitle')}
              </span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-gray-700">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">{t('categoriesTitle')}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`p-3 rounded-xl font-semibold transition-all duration-200 border-2 ${
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

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">{t('difficultyTitle')}</h2>
              <div className="flex gap-3">
                {['easy', 'medium', 'hard'].map(diff => (
                  <button
                    key={diff}
                    onClick={() => setDifficulty(diff)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 border-2 capitalize ${
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

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-green-400">{t('numQuestionsTitle')}</h2>
              <div className="flex gap-3">
                {[5, 10, 15, 20].map(num => (
                  <button
                    key={num}
                    onClick={() => setNumQuestions(num)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 border-2 ${
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

            <button
              onClick={generateQuestions}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-4 px-8 rounded-xl text-xl transition-all duration-200 shadow-xl mb-4"
            >
              {t('startGameButton')}
            </button>
            
            <button
              onClick={() => setGameState('modeSelect')}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200"
            >
              ← {t('selectModeTitle')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'loading') {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-green-400">{t('generatingQuestionsTitle')}</h2>
          <p className="text-gray-300">{t('generatingQuestionsSubtitle')}</p>
        </div>
      </div>
    );
  }

  if (gameState === 'playing') {
    const question = questions[currentQuestion];
    
    // Teacher Mode
    if (gameMode === 'teacher') {
      return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <div className="text-green-400 font-bold text-2xl">
                {t('questionOf')} {currentQuestion + 1} {t('of')} {questions.length}
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-12 shadow-2xl border-2 border-gray-700">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-green-500 text-black rounded-full text-lg font-semibold mb-6">
                  {question.category}
                </span>
                <h2 className="text-4xl font-bold leading-relaxed">{question.question}</h2>
              </div>

              <div className="space-y-4 mb-8">
                {question.options.map((option, index) => {
                  let buttonClass = 'w-full p-6 rounded-xl font-semibold text-left text-2xl transition-all duration-200 border-2 ';
                  
                  if (teacherRevealAnswer && index === question.correctAnswer) {
                    buttonClass += 'bg-green-500 text-black border-green-400 shadow-lg';
                  } else {
                    buttonClass += 'bg-gray-700 text-white border-gray-600';
                  }
                  
                  return (
                    <div key={index} className={buttonClass}>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-black mr-4 text-3xl">{String.fromCharCode(65 + index)}.</span>
                          {option}
                        </div>
                        {teacherRevealAnswer && index === question.correctAnswer && (
                          <div className="text-black text-3xl">✓</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4">
                {!teacherRevealAnswer ? (
                  <button
                    onClick={() => setTeacherRevealAnswer(true)}
                    className="flex-1 bg-green-500 hover:bg-green-400 text-black font-black py-6 px-8 rounded-xl text-2xl transition-all duration-200 shadow-xl"
                  >
                    {t('revealAnswerButton')}
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (currentQuestion + 1 < questions.length) {
                        setCurrentQuestion(currentQuestion + 1);
                        setTeacherRevealAnswer(false);
                      } else {
                        setGameState('modeSelect');
                        setQuestions([]);
                        setCurrentQuestion(0);
                        setTeacherRevealAnswer(false);
                      }
                    }}
                    className="flex-1 bg-green-500 hover:bg-green-400 text-black font-black py-6 px-8 rounded-xl text-2xl transition-all duration-200 shadow-xl"
                  >
                    {currentQuestion + 1 === questions.length ? t('finishGameButton') : t('nextQuestionButton')}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    // Student Mode
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="text-green-400 font-bold text-lg">
              {t('questionOf')} {currentQuestion + 1} {t('of')} {questions.length}
            </div>
            {gameMode === 'student' && (
              <div className="text-green-400 font-bold text-lg">
                {t('score')} {score}
              </div>
            )}
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-gray-700">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-green-500 text-black rounded-full text-sm font-semibold mb-4">
                {question.category}
              </span>
              <h2 className="text-2xl font-bold leading-relaxed">{question.question}</h2>
            </div>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => {
                let buttonClass = 'w-full p-4 rounded-xl font-semibold text-left transition-all duration-200 border-2 ';
                
                if (selectedAnswer === index) {
                  buttonClass += 'bg-green-500 text-black border-green-400 shadow-lg';
                } else {
                  buttonClass += 'bg-gray-700 text-white border-gray-600 hover:border-green-400 hover:bg-gray-600';
                }
                
                return (
                  <button
                    key={index}
                    onClick={() => selectAnswer(index)}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-black mr-3">{String.fromCharCode(65 + index)}.</span>
                        {option}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              onClick={nextQuestion}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-4 px-8 rounded-xl text-xl transition-all duration-200 shadow-xl"
            >
              {currentQuestion + 1 === questions.length 
                ? t('finishGameButton')
                : t('nextQuestionButton')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === 'results') {
    // Only show results for student mode
    if (gameMode !== 'student') {
      setGameState('modeSelect');
      return null;
    }
    
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gray-900 text-white p-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-4 text-green-400">{t('resultsTitle')}</h1>
          
          <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-gray-700 mb-8">
            <div className="text-6xl font-black mb-4 text-green-400">
              {score}/{questions.length}
            </div>
            <div className="text-2xl font-bold mb-6">
              {percentage}% {t('correct')}
            </div>
            
            <div className="text-lg mb-8">
              {percentage >= 80 ? t('excellentMessage') : 
               percentage >= 60 ? t('goodJobMessage') : 
               percentage >= 40 ? t('notBadMessage') : t('keepStudyingMessage')}
            </div>

            <div className="space-y-4 mb-8 text-left">
              {questions.map((question, index) => {
                const userAnswer = answers[index];
                const isCorrect = userAnswer && userAnswer.isCorrect;
                return (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    isCorrect ? 'border-green-400 bg-green-900/30' : 'border-red-400 bg-red-900/30'
                  }`}>
                    <div className="font-semibold mb-2">{question.question}</div>
                    <div className="text-sm">
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
                );
              })}
            </div>

            <button
              onClick={resetGame}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-black py-4 px-8 rounded-xl text-xl transition-all duration-200 shadow-xl"
            >
              {t('playAgainButton')}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default TriviaGame;