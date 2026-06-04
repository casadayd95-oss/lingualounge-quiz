import { chapters, type Chapter } from "@/data/chapters";

type Props = {
  onSelect: (chapter: Chapter) => void;
  onGrammar: () => void;
};

export default function StartScreen({ onSelect, onGrammar }: Props) {
  return (
    <div className="screen start-screen">
      <div className="start-hero">
        <div className="flag-bar" />
        <div className="start-logo-row">
          <span className="logo-icon">🇩🇪</span>
          <span className="logo-text">LinguaLounge</span>
        </div>
        <div className="start-badge">A1.1</div>
        <h1 className="start-title">Quiz</h1>
      </div>

      <div className="start-body">
        <p className="module-label">Module 1 — Vocabulary</p>

        <div className="chapter-list">
          {chapters.map((ch) => {
            const articleCount = ch.words.filter((w) => w.article).length;
            const totalCount = ch.words.length;
            return (
              <button
                key={ch.number}
                className="chapter-btn"
                onClick={() => onSelect(ch)}
              >
                <div className="chapter-btn-left">
                  <span className="chapter-number">Ch. {ch.number}</span>
                  <span className="chapter-title">{ch.title}</span>
                  <span className="chapter-meta">
                    {totalCount} words
                    {articleCount > 0 ? ` · ${articleCount} nouns` : ""}
                  </span>
                </div>
                <span className="chapter-arrow">›</span>
              </button>
            );
          })}
        </div>

        <div className="section-divider" />

        <p className="module-label">Module 1 — Grammar Practice</p>

        <button className="grammar-practice-btn" onClick={onGrammar}>
          <div className="grammar-btn-left">
            <span className="grammar-btn-star">⭐</span>
            <div>
              <span className="grammar-btn-title">Module 1 Grammar Practice</span>
              <span className="grammar-btn-meta">20 questions · all grammar topics</span>
            </div>
          </div>
          <span className="chapter-arrow">›</span>
        </button>
      </div>
    </div>
  );
}
