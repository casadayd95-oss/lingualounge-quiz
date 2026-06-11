import { useCallback, useMemo, useState } from "react";
import {
  buildModuleReviewQuiz,
  MODULE_REVIEW_QUIZ_SIZE,
  type ModuleReviewQuestion,
} from "@/data/moduleReview";
import {
  getArticleAnswer,
  getGenderColorClass,
} from "@/data/chapters";
import { getGermanWordClass } from "@/lib/displayText";

type Props = {
  moduleNumber: number;
  onBack: () => void;
};

type Status = "idle" | "correct" | "incorrect";

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

function isAccepted(answer: string, current: ModuleReviewQuestion): boolean {
  if (current.type !== "grammar") return answer === current.answer;
  const accepted = current.question.acceptedAnswers;
  return accepted && accepted.length > 0
    ? accepted.includes(answer)
    : answer === current.answer;
}

function possibleAnswersLabel(current: ModuleReviewQuestion): string {
  if (current.type === "grammar") {
    const accepted = current.question.acceptedAnswers;
    if (accepted && accepted.length > 1) return accepted.join(" / ");
  }
  return current.answer;
}

function questionLabel(current: ModuleReviewQuestion): string {
  if (current.type === "article") return `Chapter ${current.chapter} · Article`;
  if (current.type === "translation") return `Chapter ${current.chapter} · Translation`;
  return `Chapter ${current.chapter} · ${current.question.category}`;
}

export default function ModuleReviewQuiz({ moduleNumber, onBack }: Props) {
  const [questions, setQuestions] = useState<ModuleReviewQuestion[]>(() =>
    buildModuleReviewQuiz(moduleNumber)
  );
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  const options = useMemo(() => current?.options ?? [], [current]);

  const handleGuess = useCallback(
    (answer: string) => {
      if (status !== "idle" || !current) return;
      const correct = isAccepted(answer, current);
      setChosen(answer);
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
    setQuestions(buildModuleReviewQuiz(moduleNumber));
    setIndex(0);
    setStatus("idle");
    setChosen(null);
    setScore({ correct: 0, total: 0 });
    setFinished(false);
  }, [moduleNumber]);

  if (questions.length === 0 || !current) {
    return (
      <div className="screen">
        <div className="card results-card">
          <div className="flag-bar" />
          <div className="results-icon">📚</div>
          <h2 className="results-title">Coming Soon</h2>
          <p className="encouragement">Module {moduleNumber} Review is being prepared.</p>
          <div className="results-actions">
            <button className="btn btn-back-outline" onClick={onBack}>
              ← Back to Module {moduleNumber}
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
          <h2 className="results-title">Module {moduleNumber} Review</h2>
          <div className="score-ring">
            <span className="score-number">{score.correct}</span>
            <span className="score-denom">/ {questions.length}</span>
          </div>
          <p className="score-label">{pct}% correct</p>
          <p className="encouragement">
            {pct === 100
              ? "Perfekt! You know your review topics!"
              : pct >= 70
              ? "Gut gemacht! Keep practising!"
              : "Weiter üben — you'll get there!"}
          </p>
          <div className="results-actions">
            <button className="btn btn-next" onClick={handleRestart}>
              Play Again
            </button>
            <button className="btn btn-back-outline" onClick={onBack}>
              ← Back to Module {moduleNumber}
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
          <span className="logo-text">Module {moduleNumber} Review</span>
        </div>
        <div className="progress-pill">
          {index + 1} / {questions.length}
        </div>
      </header>

      <div className="grammar-category-bar">{questionLabel(current)}</div>

      <div className="progress-bar-track">
        <div
          className="progress-bar-fill grammar-progress-fill"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <main className="main">
        <div className="card quiz-card">
          <div className="flag-bar" />

          {current.type === "article" ? (
            <>
              <p className="instruction">Choose the correct article</p>
              <div className="noun-display">
                <span className={getGermanWordClass(current.word.german)}>
                  {current.word.german}
                </span>
              </div>
            </>
          ) : current.type === "translation" ? (
            <>
              <p className="instruction">Choose the correct translation</p>
              <div className="noun-display">
                <span className={getGermanWordClass(current.word.german)}>
                  {current.word.article ? (
                    <>
                      <span className={`noun-article-hint ${getGenderColorClass(current.word)}`}>
                        {current.word.article}
                      </span>{" "}
                      {current.word.german}
                    </>
                  ) : (
                    current.word.german
                  )}
                </span>
              </div>
            </>
          ) : (
            <div className="question-prompt-wrap">
              <p className="question-prompt">{renderPrompt(current.question.prompt)}</p>
            </div>
          )}

          <div className="buttons-grid-translation options-grid">
            {options.map((option) => {
              let cls = "btn btn-translation";
              if (current.type === "article") {
                const colorClass =
                  option === "der"
                    ? " article-color-der"
                    : option === "das"
                    ? " article-color-das"
                    : option === "die (pl.)"
                    ? " article-color-die-pl"
                    : " article-color-die-f";
                cls = `btn btn-article${colorClass}`;
              }
              if (status !== "idle") {
                if (isAccepted(option, current)) cls += " btn-correct";
                else if (option === chosen)      cls += " btn-wrong";
                else                             cls += " btn-dim";
              }
              return (
                <button
                  key={option}
                  className={cls}
                  onClick={() => handleGuess(option)}
                  disabled={status !== "idle"}
                >
                  {option}
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
                {current.type === "article" ? (
                  <>
                    <p className="feedback-answer">
                      The answer is{" "}
                      <strong>
                        {current.word.article} {current.word.german}
                      </strong>
                      {current.word.gender === "plural" && (
                        <span className="feedback-tag">plural</span>
                      )}
                    </p>
                    {current.word.articleExplanation && (
                      <p
                        className="feedback-answer"
                        style={{ whiteSpace: "pre-line", fontSize: 13, marginTop: 8 }}
                      >
                        <strong>Rule:</strong>
                        {current.word.articleExplanation.replace(/^Rule:/, "")}
                      </p>
                    )}
                  </>
                ) : current.type === "translation" ? (
                  <p className="feedback-answer">
                    {current.word.article ? (
                      <><strong>{current.word.article} {current.word.german}</strong> = </>
                    ) : (
                      <><strong>{current.word.german}</strong> = </>
                    )}
                    <strong>{current.word.english}</strong>
                  </p>
                ) : (
                  <>
                    <p className="feedback-answer">
                      The answer is <strong>{possibleAnswersLabel(current)}</strong>
                    </p>
                    {current.question.explanation && (
                      <p
                        className="feedback-answer"
                        style={{ whiteSpace: "pre-line", fontSize: 13, marginTop: 8 }}
                      >
                        <strong>Rule:</strong>
                        {current.question.explanation.replace(/^Rule:/, "")}
                      </p>
                    )}
                  </>
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
