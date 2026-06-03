import { useState, useCallback, useMemo } from "react";

const vocabulary = [
  { article: "der", noun: "Kopf", english: "head" },
  { article: "die", noun: "Nase", english: "nose" },
  { article: "das", noun: "Auge", english: "eye" },
  { article: "der", noun: "Mund", english: "mouth" },
  { article: "das", noun: "Ohr", english: "ear" },
  { article: "die", noun: "Hand", english: "hand" },
  { article: "der", noun: "Arm", english: "arm" },
  { article: "das", noun: "Bein", english: "leg" },
  { article: "der", noun: "Fuß", english: "foot" },
  { article: "die", noun: "Schulter", english: "shoulder" },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getTranslationOptions(current: typeof vocabulary[0]): string[] {
  const wrong = shuffle(
    vocabulary.filter((w) => w.english !== current.english)
  )
    .slice(0, 3)
    .map((w) => w.english);
  return shuffle([current.english, ...wrong]);
}

type Status = "idle" | "correct" | "incorrect";
type Mode = "article" | "translation";

export default function Quiz() {
  const [mode, setMode] = useState<Mode>("article");
  const [deck, setDeck] = useState(() => shuffle(vocabulary));
  const [index, setIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [chosen, setChosen] = useState<string | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [finished, setFinished] = useState(false);

  const current = deck[index];

  const translationOptions = useMemo(
    () => getTranslationOptions(current),
    [current]
  );

  const handleGuess = useCallback(
    (answer: string) => {
      if (status !== "idle") return;
      const correct =
        mode === "article" ? current.article : current.english;
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

  const resetQuiz = useCallback((nextMode?: Mode) => {
    setDeck(shuffle(vocabulary));
    setIndex(0);
    setStatus("idle");
    setChosen(null);
    setScore({ correct: 0, total: 0 });
    setFinished(false);
    if (nextMode) setMode(nextMode);
  }, []);

  const handleModeSwitch = useCallback(
    (next: Mode) => {
      if (next !== mode) resetQuiz(next);
    },
    [mode, resetQuiz]
  );

  const articles = ["der", "die", "das"];

  if (finished) {
    const pct = Math.round((score.correct / score.total) * 100);
    return (
      <div className="screen">
        <div className="card results-card">
          <div className="flag-bar" />
          <div className="results-icon">{pct === 100 ? "🏆" : pct >= 70 ? "⭐" : "📚"}</div>
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
          <button className="btn btn-next" onClick={() => resetQuiz()}>
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="screen">
      <header className="header">
        <div className="logo-row">
          <span className="logo-icon">🇩🇪</span>
          <span className="logo-text">LinguaLounge</span>
        </div>
        <div className="progress-pill">
          {index + 1} / {deck.length}
        </div>
      </header>

      <div className="mode-toggle">
        <button
          className={`mode-btn${mode === "article" ? " mode-btn-active" : ""}`}
          onClick={() => handleModeSwitch("article")}
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
                <span className="noun-word">{current.noun}</span>
                <span className="noun-english">{current.english}</span>
              </div>

              <div className="buttons-grid">
                {articles.map((art) => {
                  let btnClass = "btn btn-article";
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
                <div className={`feedback ${status === "correct" ? "feedback-correct" : "feedback-incorrect"}`}>
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
                        {current.article} {current.noun}
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
                  <span className="noun-article-hint">{current.article}</span>{" "}
                  {current.noun}
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
                <div className={`feedback ${status === "correct" ? "feedback-correct" : "feedback-incorrect"}`}>
                  <span className="feedback-icon">
                    {status === "correct" ? "✓" : "✗"}
                  </span>
                  <div>
                    <p className="feedback-verdict">
                      {status === "correct" ? "Correct!" : "Not quite!"}
                    </p>
                    <p className="feedback-answer">
                      <strong>{current.article} {current.noun}</strong> = <strong>{current.english}</strong>
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
