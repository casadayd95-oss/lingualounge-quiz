import {
  chapters,
  getArticleAnswer,
  type Word,
} from "@/data/chapters";
import {
  chapterGrammarBank,
  type ChapterGrammarQuestion,
} from "@/data/chapterGrammar";

export type ModuleReviewArticleQuestion = {
  type: "article";
  chapter: number;
  word: Word;
  answer: string;
  options: string[];
};

export type ModuleReviewTranslationQuestion = {
  type: "translation";
  chapter: number;
  word: Word;
  answer: string;
  options: string[];
};

export type ModuleReviewGrammarQuestion = {
  type: "grammar";
  chapter: number;
  question: ChapterGrammarQuestion;
  answer: string;
  options: string[];
};

export type ModuleReviewQuestion =
  | ModuleReviewArticleQuestion
  | ModuleReviewTranslationQuestion
  | ModuleReviewGrammarQuestion;

export const MODULE_REVIEW_QUIZ_SIZE = 30;

const MODULE_REVIEW_CHAPTERS: Record<number, number[]> = {
  4: [10, 11, 12],
};

const ARTICLE_OPTIONS = ["der", "die", "das", "die (pl.)"];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getModuleChapters(moduleNumber: number) {
  const chapterNumbers = MODULE_REVIEW_CHAPTERS[moduleNumber] ?? [];
  return chapters.filter((chapter) => chapterNumbers.includes(chapter.number));
}

function getTranslationOptions(current: Word, allWords: Word[]): string[] {
  const wrong = shuffle(allWords.filter((word) => word.english !== current.english))
    .slice(0, 3)
    .map((word) => word.english);
  return shuffle([current.english, ...wrong]);
}

function buildArticlePool(moduleNumber: number): ModuleReviewArticleQuestion[] {
  return getModuleChapters(moduleNumber).flatMap((chapter) =>
    chapter.words
      .filter((word) => word.article && word.includeInArticleQuiz !== false)
      .map((word) => ({
        type: "article" as const,
        chapter: chapter.number,
        word,
        answer: getArticleAnswer(word),
        options: ARTICLE_OPTIONS,
      }))
  );
}

function buildTranslationPool(moduleNumber: number): ModuleReviewTranslationQuestion[] {
  const moduleChapters = getModuleChapters(moduleNumber);
  const allWords = moduleChapters.flatMap((chapter) =>
    chapter.words.filter((word) => word.includeInTranslationQuiz !== false)
  );

  return moduleChapters.flatMap((chapter) =>
    chapter.words
      .filter((word) => word.includeInTranslationQuiz !== false)
      .map((word) => ({
        type: "translation" as const,
        chapter: chapter.number,
        word,
        answer: word.english,
        options: getTranslationOptions(word, allWords),
      }))
  );
}

function buildGrammarPool(moduleNumber: number): ModuleReviewGrammarQuestion[] {
  const chapterNumbers = MODULE_REVIEW_CHAPTERS[moduleNumber] ?? [];

  return chapterGrammarBank
    .filter((question) => chapterNumbers.includes(question.chapter))
    .map((question) => ({
      type: "grammar" as const,
      chapter: question.chapter,
      question,
      answer: question.answer,
      options: shuffle([...question.options]),
    }));
}

function takeWithFill(
  pools: ModuleReviewQuestion[][],
  targetPerPool: number
): ModuleReviewQuestion[] {
  const selected: ModuleReviewQuestion[] = [];
  const remaining: ModuleReviewQuestion[] = [];

  for (const pool of pools.map(shuffle)) {
    selected.push(...pool.slice(0, targetPerPool));
    remaining.push(...pool.slice(targetPerPool));
  }

  selected.push(
    ...shuffle(remaining).slice(0, MODULE_REVIEW_QUIZ_SIZE - selected.length)
  );

  return shuffle(selected).slice(0, MODULE_REVIEW_QUIZ_SIZE);
}

export function buildModuleReviewQuiz(moduleNumber: number): ModuleReviewQuestion[] {
  const articlePool = buildArticlePool(moduleNumber);
  const translationPool = buildTranslationPool(moduleNumber);
  const grammarPool = buildGrammarPool(moduleNumber);

  return takeWithFill([articlePool, translationPool, grammarPool], 10);
}
