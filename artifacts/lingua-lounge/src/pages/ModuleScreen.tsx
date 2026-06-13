import { chapters, type Chapter } from "@/data/chapters";
import { getModulePhrases } from "@/data/modulePhrases";

type Props = {
  moduleNumber: number;
  onBack: () => void;
  onSelectChapter: (chapter: Chapter) => void;
  onGrammar: () => void;
  onPhrases: () => void;
};

const MODULE_META: Record<number, { title: string; description: string; hasGrammar: boolean }> = {
  1: { title: "Module 1", description: "Greetings, Family & Personal Info", hasGrammar: true },
  2: { title: "Module 2", description: "Furniture, Objects & Appointments", hasGrammar: true },
  3: { title: "Module 3", description: "Food, Hobbies & Daily Life", hasGrammar: true },
  4: { title: "Module 4", description: "Travel & Talking About the Past", hasGrammar: true },
};

const MODULE_CHAPTERS: Record<number, number[]> = {
  1: [1, 2, 3],
  2: [4, 5, 6],
  3: [7, 8, 9],
  4: [10, 11, 12],
};

export default function ModuleScreen({ moduleNumber, onBack, onSelectChapter, onGrammar, onPhrases }: Props) {
  const meta = MODULE_META[moduleNumber] ?? { title: `Module ${moduleNumber}`, description: "", hasGrammar: false };
  const chapterNums = MODULE_CHAPTERS[moduleNumber] ?? [];
  const moduleChapters = chapters.filter((ch) => chapterNums.includes(ch.number));
  const modulePhrases = getModulePhrases(moduleNumber);
  const isActive = chapterNums.length > 0;
  const isModuleOne = moduleNumber === 1;

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
              {moduleChapters.map((ch) => (
                  <button
                    key={ch.number}
                    className="chapter-btn"
                    onClick={() => onSelectChapter(ch)}
                  >
                    <div className="chapter-btn-left">
                      <span className="chapter-number">Ch. {ch.number}</span>
                      <span className="chapter-title">{ch.title}</span>
                    </div>
                    <span className="chapter-arrow">›</span>
                  </button>
              ))}
            </div>

            {meta.hasGrammar && (
              <>
                <div className="section-divider" />

                <p className="module-label">{isModuleOne ? "MODULE REVIEW" : "Grammar Practice"}</p>

                <button className="grammar-practice-btn" onClick={onGrammar}>
                  <div className="grammar-btn-left">
                    <span className="grammar-btn-star">⭐</span>
                    <div>
                      <span className="grammar-btn-title">
                        {isModuleOne ? "Module 1 Quiz" : `Module ${moduleNumber} Grammar Practice`}
                      </span>
                      <span className="grammar-btn-meta">
                        {isModuleOne ? "30 questions · Chapters 1–3" : "20 questions · all grammar topics"}
                      </span>
                    </div>
                  </div>
                  <span className="chapter-arrow">›</span>
                </button>
              </>
            )}

            {modulePhrases.length > 0 && (
              <>
                <div className="section-divider" />

                <button className="grammar-practice-btn" onClick={onPhrases}>
                  <div className="grammar-btn-left">
                    <span className="grammar-btn-star">💬</span>
                    <div>
                      <span className="grammar-btn-title">Useful Phrases</span>
                      <span className="grammar-btn-meta">Extra speaking phrases from this module</span>
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
