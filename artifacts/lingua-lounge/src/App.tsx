import { useState } from "react";
import StartScreen from "@/pages/StartScreen";
import Quiz from "@/pages/Quiz";
import { type Chapter } from "@/data/chapters";

export default function App() {
  const [chapter, setChapter] = useState<Chapter | null>(null);

  if (!chapter) {
    return <StartScreen onSelect={setChapter} />;
  }

  return <Quiz chapter={chapter} onBack={() => setChapter(null)} />;
}
