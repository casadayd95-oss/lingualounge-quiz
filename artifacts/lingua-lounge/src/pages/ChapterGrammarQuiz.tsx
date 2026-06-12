import { useState, useCallback, useMemo } from "react";
import {
  buildChapterGrammarQuiz,
  type ChapterGrammarQuestion,
} from "@/data/chapterGrammar";

type Props = {
  chapterNumber: number;
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
  const parts = text.split("___");
  if (parts.length === 1) return <>{text}</>;
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

function isAccepted(opt: string, q: ChapterGrammarQuestion): boolean {
  if (q.acceptedAnswers && q.acceptedAnswers.length > 0) {
    return q.acceptedAnswers.includes(opt);
  }
  return opt === q.answer;
}

function possibleAnswersLabel(q: ChapterGrammarQuestion): string {
  if (q.acceptedAnswers && q.acceptedAnswers.length > 1) {
    return q.acceptedAnswers.join(" / ");
  }
  return q.answer;
}

type Status = "idle" | "correct" | "incorrect";

export default function ChapterGrammarQuiz({ chapterNumber, onBack }: Props) {
  const [questions, setQuestions] = useState<ChapterGrammarQuestion[]>(() =>
    buildChapterGrammarQuiz(chapterNumber)
  );
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  const shuffledOptions = useMemo(
    () => (current ? shuffle([...current.options]) : []),
    [current, index, questions]
  );

  const handleGuess = useCallback(
    (opt: string) => {
      if (status !== "idle" || !current) return;
      const correct = isAccepted(opt, current);
      setChosen(opt);
      setStatus(correct ? "correct" : "incorrect");
      setScore((s) => ({
        correct: s.correct + (correct ? 1 : 0),
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
    setQuestions(buildChapterGrammarQuiz(chapterNumber));
    setIndex(0);
    setStatus("idle");
    setChosen(null);
    setScore({ correct: 0, total: 0 });
    setFinished(false);
  }, [chapterNumber]);

  if (questions.length === 0) {
    return (
      <div className="screen">
        <div className="card results-card">
          <div className="flag-bar" />
          <div className="results-icon">📚</div>
          <h2 className="results-title">Coming Soon</h2>
          <p className="encouragement">
            Chapter {chapterNumber} grammar practice is being prepared.
          </p>
          <div className="results-actions">
            <button className="btn btn-back-outline" onClick={onBack}>
              ← Back to Chapter {chapterNumber}
            </button>
          </div>
        </div>
      </div>
    );
  }

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
            <span className="score-denom">/ {questions.length}</span>
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
              ← Back to Chapter {chapterNumber}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const hasMultiple = (current.acceptedAnswers?.length ?? 0) > 1;
  const label = possibleAnswersLabel(current);

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
                if (isAccepted(opt, current)) cls += " btn-correct";
                else if (opt === chosen)       cls += " btn-wrong";
                else                           cls += " btn-dim";
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
                  {hasMultiple ? (
                    <>Possible answers: <strong>{label}</strong></>
                  ) : (
                    <>The answer is <strong>{label}</strong></>
                  )}
                </p>
                {current.explanation && (
                  <p
                    className="feedback-answer"
                    style={{ whiteSpace: "pre-line", fontSize: 13, marginTop: 8 }}
                  >
                    <strong>Tip:</strong>
                    {current.explanation.replace(/^Rule:/, "")}
                  </p>
                )}
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
