import { chapters, type Chapter } from "@/data/chapters";

type Props = {
  moduleNumber: number;
  onBack: () => void;
  onSelectChapter: (chapter: Chapter) => void;
  onGrammar: () => void;
};

const MODULE_META: Record<number, { title: string; description: string; hasGrammar: boolean }> = {
  1: { title: "Module 1", description: "Greetings, Family & Personal Info", hasGrammar: true },
  2: { title: "Module 2", description: "Furniture, Objects & Appointments", hasGrammar: false },
  3: { title: "Module 3", description: "Coming Soon", hasGrammar: false },
  4: { title: "Module 4", description: "Coming Soon", hasGrammar: false },
};

const MODULE_CHAPTERS: Record<number, number[]> = {
  1: [1, 2, 3],
  2: [4],
  3: [],
  4: [],
};

export default function ModuleScreen({ moduleNumber, onBack, onSelectChapter, onGrammar }: Props) {
  const meta = MODULE_META[moduleNumber] ?? { title: `Module ${moduleNumber}`, description: "", hasGrammar: false };
  const chapterNums = MODULE_CHAPTERS[moduleNumber] ?? [];
  const moduleChapters = chapters.filter((ch) => chapterNums.includes(ch.number));
  const isActive = chapterNums.length > 0;

  return (
    <div className="screen start-screen">
      <div className="start-hero module-hero">
        <div className="flag-bar" />
        <div className="start-logo-row">
          <span className="logo-icon">🇩🇪</span>
          <span className="logo-text">LinguaLounge</span>
        </div>
        <div className="start-badge">A1.1</div>
        <h1 className="start-title">{meta.title}</h1>
        <p className="module-hero-subtitle">{meta.description}</p>
      </div>

      <div className="start-body">
        <button className="module-back-link" onClick={onBack}>
          ← Back to All Modules
        </button>
        {!isActive ? (
          <div className="coming-soon-wrap">
            <div className="coming-soon-icon">🚧</div>
            <h2 className="coming-soon-title">Coming Soon</h2>
            <p className="coming-soon-body">
              This module is being prepared. Check back soon!
            </p>
          </div>
        ) : (
          <>
            <p className="module-label">Vocabulary</p>

            <div className="chapter-list">
              {moduleChapters.map((ch) => {
                const articleCount = ch.words.filter((w) => w.article).length;
                const totalCount = ch.words.length;
                return (
                  <button
                    key={ch.number}
                    className="chapter-btn"
                    onClick={() => onSelectChapter(ch)}
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

            {meta.hasGrammar && (
              <>
                <div className="section-divider" />

                <p className="module-label">Grammar Practice</p>

                <button className="grammar-practice-btn" onClick={onGrammar}>
                  <div className="grammar-btn-left">
                    <span className="grammar-btn-star">⭐</span>
                    <div>
                      <span className="grammar-btn-title">Module {moduleNumber} Grammar Practice</span>
                      <span className="grammar-btn-meta">20 questions · all grammar topics</span>
                    </div>
                  </div>
                  <span className="chapter-arrow">›</span>
                </button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
