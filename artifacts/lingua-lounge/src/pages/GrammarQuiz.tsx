import { useState, useCallback, useMemo } from "react";
import { buildGrammarQuiz, GRAMMAR_QUIZ_SIZE, type GrammarQuestion } from "@/data/grammar";

type Props = {
  onBack: () => void;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function renderPrompt(text: string) {
  const parts = text.split("_____");
  if (parts.length === 1) {
    const partsShort = text.split("___");
    if (partsShort.length === 1) return <>{text}</>;
    return (
      <>
        {partsShort.map((part, i) => (
          <span key={i}>
            {part}
            {i < partsShort.length - 1 && <span className="prompt-blank">_____</span>}
          </span>
        ))}
      </>
    );
  }
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <span className="prompt-blank">_____</span>}
        </span>
      ))}
    </>
  );
}

type Status = "idle" | "correct" | "incorrect";

export default function GrammarQuiz({ onBack }: Props) {
  const [questions, setQuestions] = useState<GrammarQuestion[]>(() => buildGrammarQuiz());
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  const shuffledOptions = useMemo(
    () => shuffle([...current.options]),
    [current]
  );

  const handleGuess = useCallback(
    (opt: string) => {
      if (status !== "idle") return;
      const isCorrect = opt === current.answer;
      setChosen(opt);
      setStatus(isCorrect ? "correct" : "incorrect");
      setScore((s) => ({
        correct: s.correct + (isCorrect ? 1 : 0),
        total: s.total + 1,
      }));
    },
    [status, current]
  );

  const handleNext = useCallback(() => {
    if (index + 1 >= questions.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setStatus("idle");
      setChosen(null);
    }
  }, [index, questions.length]);

  const handleRestart = useCallback(() => {
    setQuestions(buildGrammarQuiz());
    setIndex(0);
    setStatus("idle");
    setChosen(null);
    setScore({ correct: 0, total: 0 });
    setFinished(false);
  }, []);

  if (finished) {
    const pct = Math.round((score.correct / score.total) * 100);
    return (
      <div className="screen">
        <div className="card results-card">
          <div className="flag-bar" />
          <div className="results-icon">
            {pct === 100 ? "🏆" : pct >= 70 ? "⭐" : "📚"}
          </div>
          <h2 className="results-title">Grammar Score</h2>
          <div className="score-ring">
            <span className="score-number">{score.correct}</span>
            <span className="score-denom">/ {GRAMMAR_QUIZ_SIZE}</span>
          </div>
          <p className="score-label">{pct}% correct</p>
          <p className="encouragement">
            {pct === 100
              ? "Perfekt! You know your grammar!"
              : pct >= 70
              ? "Gut gemacht! Keep practising!"
              : "Weiter üben — you'll get there!"}
          </p>
          <div className="results-actions">
            <button className="btn btn-next" onClick={handleRestart}>
              Play Again
            </button>
            <button className="btn btn-back-outline" onClick={onBack}>
              ← Back to Module 1
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={onBack}>
          ‹ Back
        </button>
        <div className="header-center">
          <span className="logo-text">Grammar</span>
        </div>
        <div className="progress-pill">
          {index + 1} / {questions.length}
        </div>
      </header>

      <div className="grammar-category-bar">
        {current.category}
      </div>

      <div className="progress-bar-track">
        <div
          className="progress-bar-fill grammar-progress-fill"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <main className="main">
        <div className="card quiz-card">
          <div className="flag-bar" />

          <div className="question-prompt-wrap">
            <p className="question-prompt">{renderPrompt(current.prompt)}</p>
          </div>

          <div className="buttons-grid-translation options-grid">
            {shuffledOptions.map((opt) => {
              let cls = "btn btn-translation";
              if (status !== "idle") {
                if (opt === current.answer) cls += " btn-correct";
                else if (opt === chosen)    cls += " btn-wrong";
                else                        cls += " btn-dim";
              }
              return (
                <button
                  key={opt}
                  className={cls}
                  onClick={() => handleGuess(opt)}
                  disabled={status !== "idle"}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {status !== "idle" && (
            <div
              className={`feedback ${
                status === "correct" ? "feedback-correct" : "feedback-incorrect"
              }`}
            >
              <span className="feedback-icon">
                {status === "correct" ? "✓" : "✗"}
              </span>
              <div>
                <p className="feedback-verdict">
                  {status === "correct" ? "Correct!" : "Not quite!"}
                </p>
                <p className="feedback-answer">
                  The answer is <strong>{current.answer}</strong>
                </p>
              </div>
            </div>
          )}
        </div>

        {status !== "idle" && (
          <button className="btn btn-next" onClick={handleNext}>
            {index + 1 >= questions.length ? "See Results" : "Next Question →"}
          </button>
        )}

        <div className="score-bar">
          <span>✓ {score.correct}</span>
          <span>✗ {score.total - score.correct}</span>
        </div>
      </main>
    </div>
  );
}
