import { useEffect, useState } from "react";
import HomeScreen from "@/pages/HomeScreen";
import ModuleScreen from "@/pages/ModuleScreen";
import Quiz from "@/pages/Quiz";
import GrammarQuiz from "@/pages/GrammarQuiz";
import GrammarQuiz2 from "@/pages/GrammarQuiz2";
import GrammarQuiz3 from "@/pages/GrammarQuiz3";
import ChapterGrammarQuiz from "@/pages/ChapterGrammarQuiz";
import ModuleReviewQuiz from "@/pages/ModuleReviewQuiz";
import PhrasesPage from "@/pages/PhrasesPage";
import { chapters, type Chapter } from "@/data/chapters";

type View = "home" | "module" | "quiz" | "grammar" | "chapterGrammar" | "phrases";
type AppHistoryState = {
  lingualounge: true;
  view: View;
  moduleNumber: number;
  chapterNumber: number | null;
};

function findChapter(chapterNumber: number | null): Chapter | null {
  if (chapterNumber === null) return null;
  return chapters.find((ch) => ch.number === chapterNumber) ?? null;
}

function buildHistoryState(
  view: View,
  moduleNumber: number,
  chapter: Chapter | null
): AppHistoryState {
  return {
    lingualounge: true,
    view,
    moduleNumber,
    chapterNumber: chapter?.number ?? null,
  };
}

export default function App() {
  const [view, setView] = useState<View>("home");
  const [moduleNumber, setModuleNumber] = useState<number>(1);
  const [chapter, setChapter] = useState<Chapter | null>(null);

  useEffect(() => {
    window.history.replaceState(buildHistoryState("home", 1, null), "");

    const handlePopState = (event: PopStateEvent) => {
      const state = event.state as AppHistoryState | null;
      if (!state?.lingualounge) return;

      setView(state.view);
      setModuleNumber(state.moduleNumber);
      setChapter(findChapter(state.chapterNumber));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (
    nextView: View,
    nextModuleNumber = moduleNumber,
    nextChapter: Chapter | null = chapter,
    replace = false
  ) => {
    setView(nextView);
    setModuleNumber(nextModuleNumber);
    setChapter(nextChapter);
    const historyMethod = replace ? window.history.replaceState : window.history.pushState;
    historyMethod.call(
      window.history,
      buildHistoryState(nextView, nextModuleNumber, nextChapter),
      ""
    );
  };

  const goHome = () => navigate("home", moduleNumber, null);
  const goModule = () => navigate("module", moduleNumber, null);

  const handleSelectModule = (num: number) => {
    navigate("module", num, null);
  };

  const handleSelectChapter = (ch: Chapter) => {
    navigate("quiz", moduleNumber, ch);
  };

  const handleGrammar = () => navigate("grammar");
  const handleChapterGrammar = () => navigate("chapterGrammar", moduleNumber, chapter, true);
  const handlePhrases = () => navigate("phrases", moduleNumber, null);

  if (view === "quiz" && chapter) {
    return (
      <Quiz
        chapter={chapter}
        onBack={goModule}
        onChapterGrammar={handleChapterGrammar}
      />
    );
  }

  if (view === "chapterGrammar" && chapter) {
    return <ChapterGrammarQuiz chapterNumber={chapter.number} onBack={goModule} />;
  }

  if (view === "phrases") {
    return <PhrasesPage moduleNumber={moduleNumber} onBack={goModule} />;
  }

  if (view === "grammar") {
    if (moduleNumber === 4) {
      return <ModuleReviewQuiz moduleNumber={4} onBack={goModule} />;
    }
    if (moduleNumber === 3) {
      return <GrammarQuiz3 onBack={goModule} />;
    }
    if (moduleNumber === 2) {
      return <GrammarQuiz2 onBack={goModule} />;
    }
    return <GrammarQuiz onBack={goModule} />;
  }

  if (view === "module") {
    return (
      <ModuleScreen
        moduleNumber={moduleNumber}
        onBack={goHome}
        onSelectChapter={handleSelectChapter}
        onGrammar={handleGrammar}
        onPhrases={handlePhrases}
      />
    );
  }

  return <HomeScreen onSelect={handleSelectModule} />;
}
