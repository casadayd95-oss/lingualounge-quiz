import { useMemo } from "react";
import { getModulePhrases } from "@/data/modulePhrases";

type Props = {
  moduleNumber: number;
  onBack: () => void;
};

export default function PhrasesPage({ moduleNumber, onBack }: Props) {
  const phrases = getModulePhrases(moduleNumber);
  const sections = useMemo(() => {
    const grouped: {
      section: string;
      sectionEnglish: string;
      phrases: typeof phrases;
    }[] = [];

    for (const phrase of phrases) {
      let group = grouped.find((item) => item.section === phrase.section);
      if (!group) {
        group = {
          section: phrase.section,
          sectionEnglish: phrase.sectionEnglish,
          phrases: [],
        };
        grouped.push(group);
      }
      group.phrases.push(phrase);
    }

    return grouped;
  }, [phrases]);

  return (
    <div className="screen">
      <header className="header">
        <button className="back-btn" onClick={onBack}>
          ‹ Back
        </button>
        <div className="header-center">
          <span className="logo-text">Kommunikation</span>
        </div>
        <div />
      </header>

      <main className="main phrases-main">
        <div className="phrases-page-intro">
          <h1 className="phrases-page-title">Useful Phrases</h1>
          <p className="phrases-page-instruction">
            Essential phrases for real conversations.
            <br />
            Tap a phrase to reveal the English translation.
          </p>
        </div>

        <div className="phrases-section-list">
          {sections.map((section) => (
            <section className="card phrases-section-card" key={section.section}>
              <div className="flag-bar" />
              <div className="phrases-section-header">
                <h2 className="phrases-section-title">{section.section}</h2>
                <p className="phrases-section-subtitle">{section.sectionEnglish}</p>
              </div>

              <div className="phrases-phrase-list">
                {section.phrases.map((phrase) => {
                  const id = `${phrase.module}-${phrase.section}-${phrase.german}`;
                  return (
                    <div
                      className="chapter-btn phrases-phrase-card"
                      key={id}
                    >
                      <div className="chapter-btn-left">
                        <span className="phrases-phrase-german">{phrase.german}</span>
                        <span className="phrases-phrase-english">{phrase.english}</span>
                        {phrase.note && (
                          <span className="chapter-meta">{phrase.note}</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
