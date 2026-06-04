import { useState } from "react";
import StartScreen from "@/pages/StartScreen";
import Quiz from "@/pages/Quiz";
import GrammarQuiz from "@/pages/GrammarQuiz";
import { type Chapter } from "@/data/chapters";

type Screen = "start" | "grammar";

export default function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [chapter, setChapter] = useState<Chapter | null>(null);

  if (chapter) {
    return <Quiz chapter={chapter} onBack={() => setChapter(null)} />;
  }

  if (screen === "grammar") {
    return <GrammarQuiz onBack={() => setScreen("start")} />;
  }

  return (
    <StartScreen
      onSelect={setChapter}
      onGrammar={() => setScreen("grammar")}
    />
  );
}
