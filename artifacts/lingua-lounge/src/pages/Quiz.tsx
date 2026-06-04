import { useState, useCallback, useMemo } from "react";
import { type Chapter, type Word } from "@/data/chapters";

type Props = {
  chapter: Chapter;
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

function getTranslationOptions(current: Word, allWords: Word[]): string[] {
  const wrong = shuffle(allWords.filter((w) => w.english !== current.english))
    .slice(0, 3)
    .map((w) => w.english);
  return shuffle([current.english, ...wrong]);
}

type Status = "idle" | "correct" | "incorrect";
type Mode = "article" | "translation";

export default function Quiz({ chapter, onBack }: Props) {
  const articleWords = useMemo(
    () => chapter.words.filter((w) => w.article),
    [chapter]
  );
  const hasArticleWords = articleWords.length > 0;

  const [mode, setMode] = useState<Mode>(
    hasArticleWords ? "article" : "translation"
  );
  const [deck, setDeck] = useState<Word[]>(() =>
    shuffle(hasArticleWords ? articleWords : chapter.words)
  );
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  const current = deck[index];

  const translationOptions = useMemo(
    () => getTranslationOptions(current, chapter.words),
    [current, chapter.words]
  );

  const handleGuess = useCallback(
    (answer: string) => {
      if (status !== "idle") return;
      const correct = mode === "article" ? current.article! : current.english;
      const isCorrect = answer === correct;
      setChosen(answer);
      setStatus(isCorrect ? "correct" : "incorrect");
      setScore((s) => ({
        correct: s.correct + (isCorrect ? 1 : 0),
        total: s.total + 1,
      }));
    },
    [status, current, mode]
  );

  const handleNext = useCallback(() => {
    if (index + 1 >= deck.length) {
      setFinished(true);
    } else {
      setIndex((i) => i + 1);
      setStatus("idle");
      setChosen(null);
    }
  }, [index, deck.length]);

  const resetQuiz = useCallback(
    (nextMode: Mode) => {
      const nextDeck =
        nextMode === "article" ? articleWords : chapter.words;
      setDeck(shuffle(nextDeck));
      setIndex(0);
      setStatus("idle");
      setChosen(null);
      setScore({ correct: 0, total: 0 });
      setFinished(false);
      setMode(nextMode);
    },
    [articleWords, chapter.words]
  );

  const handleModeSwitch = useCallback(
    (next: Mode) => {
      if (next !== mode) resetQuiz(next);
    },
    [mode, resetQuiz]
  );

  const articles = ["der", "die", "das"] as const;

  if (finished) {
    const pct = Math.round((score.correct / score.total) * 100);
    return (
      <div className="screen">
        <div className="card results-card">
          <div className="flag-bar" />
          <div className="results-icon">
            {pct === 100 ? "🏆" : pct >= 70 ? "⭐" : "📚"}
          </div>
          <h2 className="results-title">Round Complete!</h2>
          <div className="score-ring">
            <span className="score-number">{score.correct}</span>
            <span className="score-denom">/ {score.total}</span>
          </div>
          <p className="score-label">{pct}% correct</p>
          <p className="encouragement">
            {pct === 100
              ? "Perfect score! Ausgezeichnet!"
              : pct >= 70
              ? "Great work! Keep practising!"
              : "Keep going — you'll get there!"}
          </p>
          <div className="results-actions">
            <button className="btn btn-next" onClick={() => resetQuiz(mode)}>
              Play Again
            </button>
            <button className="btn btn-back-outline" onClick={onBack}>
              ← Change Chapter
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
          <span className="logo-text">Ch. {chapter.number}</span>
        </div>
        <div className="progress-pill">
          {index + 1} / {deck.length}
        </div>
      </header>

      <div className="mode-toggle">
        <button
          className={`mode-btn${mode === "article" ? " mode-btn-active" : ""}${!hasArticleWords ? " mode-btn-disabled" : ""}`}
          onClick={() => hasArticleWords && handleModeSwitch("article")}
          disabled={!hasArticleWords}
          title={!hasArticleWords ? "No nouns with articles in this chapter" : undefined}
        >
          Article
        </button>
        <button
          className={`mode-btn${mode === "translation" ? " mode-btn-active" : ""}`}
          onClick={() => handleModeSwitch("translation")}
        >
          Translation
        </button>
      </div>

      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{ width: `${((index + 1) / deck.length) * 100}%` }}
        />
      </div>

      <main className="main">
        <div className="card quiz-card">
          <div className="flag-bar" />

          {mode === "article" ? (
            <>
              <p className="instruction">Choose the correct article</p>

              <div className="noun-display">
                <span className="noun-word">{current.german}</span>
                <span className="noun-english">{current.english}</span>
              </div>

              <div className="buttons-grid">
                {articles.map((art) => {
                  let btnClass = `btn btn-article article-color-${art}`;
                  if (status !== "idle") {
                    if (art === current.article) btnClass += " btn-correct";
                    else if (art === chosen) btnClass += " btn-wrong";
                    else btnClass += " btn-dim";
                  }
                  return (
                    <button
                      key={art}
                      className={btnClass}
                      onClick={() => handleGuess(art)}
                      disabled={status !== "idle"}
                    >
                      {art}
                    </button>
                  );
                })}
              </div>

              {status !== "idle" && (
                <div
                  className={`feedback ${
                    status === "correct"
                      ? "feedback-correct"
                      : "feedback-incorrect"
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
                      The answer is{" "}
                      <strong>
                        {current.article} {current.german}
                      </strong>
                    </p>
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              <p className="instruction">Choose the correct translation</p>

              <div className="noun-display">
                <span className="noun-word">
                  {current.article ? (
                    <>
                      <span
                        className={`noun-article-hint article-color-${current.article}`}
                      >
                        {current.article}
                      </span>{" "}
                      {current.german}
                    </>
                  ) : (
                    current.german
                  )}
                </span>
              </div>

              <div className="buttons-grid-translation">
                {translationOptions.map((opt) => {
                  let btnClass = "btn btn-translation";
                  if (status !== "idle") {
                    if (opt === current.english) btnClass += " btn-correct";
                    else if (opt === chosen) btnClass += " btn-wrong";
                    else btnClass += " btn-dim";
                  }
                  return (
                    <button
                      key={opt}
                      className={btnClass}
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
                    status === "correct"
                      ? "feedback-correct"
                      : "feedback-incorrect"
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
                      {current.article && (
                        <>
                          <strong>
                            {current.article} {current.german}
                          </strong>{" "}
                          ={" "}
                        </>
                      )}
                      {!current.article && (
                        <><strong>{current.german}</strong> = </>
                      )}
                      <strong>{current.english}</strong>
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {status !== "idle" && (
          <button className="btn btn-next" onClick={handleNext}>
            {index + 1 >= deck.length ? "See Results" : "Next Word →"}
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
