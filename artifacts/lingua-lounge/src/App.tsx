import { useState } from "react";
import HomeScreen from "@/pages/HomeScreen";
import ModuleScreen from "@/pages/ModuleScreen";
import Quiz from "@/pages/Quiz";
import GrammarQuiz from "@/pages/GrammarQuiz";
import { type Chapter } from "@/data/chapters";

type View = "home" | "module" | "quiz" | "grammar";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [moduleNumber, setModuleNumber] = useState<number>(1);
  const [chapter, setChapter] = useState<Chapter | null>(null);

  const goHome = () => setView("home");
  const goModule = () => setView("module");

  const handleSelectModule = (num: number) => {
    setModuleNumber(num);
    setView("module");
  };

  const handleSelectChapter = (ch: Chapter) => {
    setChapter(ch);
    setView("quiz");
  };

  const handleGrammar = () => setView("grammar");

  if (view === "quiz" && chapter) {
    return <Quiz chapter={chapter} onBack={goModule} />;
  }

  if (view === "grammar") {
    return <GrammarQuiz onBack={goModule} />;
  }

  if (view === "module") {
    return (
      <ModuleScreen
        moduleNumber={moduleNumber}
        onBack={goHome}
        onSelectChapter={handleSelectChapter}
        onGrammar={handleGrammar}
      />
    );
  }

  return <HomeScreen onSelect={handleSelectModule} />;
}
