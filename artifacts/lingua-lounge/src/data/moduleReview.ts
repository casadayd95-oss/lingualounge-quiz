import {
  chapters,
  getArticleAnswer,
  type Word,
} from "@/data/chapters";
import {
  chapterGrammarBank,
  type ChapterGrammarQuestion,
} from "@/data/chapterGrammar";

type ModuleOneReviewBucket =
  | "ch1Vocabulary"
  | "ch1Grammar"
  | "ch1Application"
  | "ch2Vocabulary"
  | "ch2Grammar"
  | "ch2Application"
  | "ch3Vocabulary"
  | "ch3Grammar"
  | "ch3Application";

export type ModuleOneReviewQuestionData = {
  id: string;
  chapter: 1 | 2 | 3;
  topic: string;
  quizBucket: ModuleOneReviewBucket;
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
};

export type ModuleReviewPracticeQuestion = {
  type: "practice";
  id: string;
  chapter: number;
  topic: string;
  quizBucket: ModuleOneReviewBucket;
  prompt: string;
  answer: string;
  options: string[];
  explanation?: string;
};

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
  | ModuleReviewPracticeQuestion
  | ModuleReviewArticleQuestion
  | ModuleReviewTranslationQuestion
  | ModuleReviewGrammarQuestion;

export const MODULE_REVIEW_QUIZ_SIZE = 30;

export const module1ReviewBank: ModuleOneReviewQuestionData[] = [
  {
    id: "m1-q-001",
    chapter: 1,
    topic: "CHAPTER 1: VOCABULARY",
    quizBucket: "ch1Vocabulary",
    prompt: "Which greeting is normally used in the morning?",
    options: ["Guten Morgen", "Guten Abend", "Gute Nacht", "Auf Wiedersehen"],
    answer: "Guten Morgen",
  },
  {
    id: "m1-q-002",
    chapter: 1,
    topic: "CHAPTER 1: VOCABULARY",
    quizBucket: "ch1Vocabulary",
    prompt: "Which expression is a formal goodbye?",
    options: ["Auf Wiedersehen", "Tschüss", "Guten Morgen", "Wie geht’s?"],
    answer: "Auf Wiedersehen",
    explanation: "Auf Wiedersehen is formal, and Tschüss is informal.",
  },
  {
    id: "m1-q-003",
    chapter: 1,
    topic: "CHAPTER 1: VOCABULARY",
    quizBucket: "ch1Vocabulary",
    prompt: "Which language is associated with Deutschland?",
    options: ["Deutsch", "Spanisch", "Französisch", "Türkisch"],
    answer: "Deutsch",
    explanation: "Deutschland is Germany, and Deutsch is German.",
  },
  {
    id: "m1-q-004",
    chapter: 1,
    topic: "CHAPTER 1: VOCABULARY",
    quizBucket: "ch1Vocabulary",
    prompt: "Which country matches the language Spanisch?",
    options: ["Spanien", "Frankreich", "Italien", "Österreich"],
    answer: "Spanien",
    explanation: "Spanien means Spain, and Spanisch means Spanish.",
  },
  {
    id: "m1-q-005",
    chapter: 1,
    topic: "CHAPTER 1: VOCABULARY",
    quizBucket: "ch1Vocabulary",
    prompt: "What does Vorname mean?",
    options: ["first name", "family name", "country", "language"],
    answer: "first name",
  },
  {
    id: "m1-q-006",
    chapter: 1,
    topic: "CHAPTER 1: VOCABULARY",
    quizBucket: "ch1Vocabulary",
    prompt: "What does Familienname mean?",
    options: ["family name", "first name", "language", "country"],
    answer: "family name",
    explanation: "Familienname means family name or last name.",
  },
  {
    id: "m1-q-007",
    chapter: 1,
    topic: "CHAPTER 1: GRAMMAR",
    quizBucket: "ch1Grammar",
    prompt: "Complete with the correct form of kommen: Ich ___ aus Österreich.",
    options: ["komme", "kommst", "kommt", "kommen"],
    answer: "komme",
    explanation: "With ich, the verb kommen changes to komme.",
  },
  {
    id: "m1-q-008",
    chapter: 1,
    topic: "CHAPTER 1: GRAMMAR",
    quizBucket: "ch1Grammar",
    prompt: "Complete with the correct form of lernen: Du ___ Deutsch.",
    options: ["lernst", "lerne", "lernt", "lernen"],
    answer: "lernst",
    explanation: "With du, the verb lernen changes to lernst.",
  },
  {
    id: "m1-q-009",
    chapter: 1,
    topic: "CHAPTER 1: GRAMMAR",
    quizBucket: "ch1Grammar",
    prompt: "Complete with the correct form of heißen: Die Studentin ___ Leila.",
    options: ["heißt", "heiße", "heißen", "heiß"],
    answer: "heißt",
    explanation: "The Studentin is a singular she-subject, so heißen changes to heißt.",
  },
  {
    id: "m1-q-010",
    chapter: 1,
    topic: "CHAPTER 1: GRAMMAR",
    quizBucket: "ch1Grammar",
    prompt: "Complete with the correct form of sein: Ich ___ Noah.",
    options: ["bin", "bist", "ist", "sind"],
    answer: "bin",
    explanation: "With ich, the irregular verb sein changes to bin.",
  },
  {
    id: "m1-q-011",
    chapter: 1,
    topic: "CHAPTER 1: GRAMMAR",
    quizBucket: "ch1Grammar",
    prompt: "Which question word means “where from”?",
    options: ["Woher", "Wie", "Wer", "Wo"],
    answer: "Woher",
    explanation: "Woher asks about someone’s origin.",
  },
  {
    id: "m1-q-012",
    chapter: 1,
    topic: "CHAPTER 1: GRAMMAR",
    quizBucket: "ch1Grammar",
    prompt: "Complete the question: ___ heißt du?",
    options: ["Wie", "Woher", "Wer", "Aus"],
    answer: "Wie",
    explanation: "Use Wie with heißen to ask someone’s name: Wie heißt du?",
  },
  {
    id: "m1-q-013",
    chapter: 1,
    topic: "CHAPTER 1: GRAMMAR",
    quizBucket: "ch1Grammar",
    prompt: "Choose the correct German statement.",
    options: ["Emma kommt aus Frankreich.", "Emma aus Frankreich kommt.", "Kommt Emma aus Frankreich.", "Emma Frankreich kommt aus."],
    answer: "Emma kommt aus Frankreich.",
    explanation: "In a normal statement, the conjugated verb comes in position 2.",
  },
  {
    id: "m1-q-014",
    chapter: 1,
    topic: "CHAPTER 1: GRAMMAR",
    quizBucket: "ch1Grammar",
    prompt: "Complete the sentence: Jonas kommt ___ Italien.",
    options: ["aus", "in", "bei", "als"],
    answer: "aus",
    explanation: "Use aus to say where someone comes from: aus Italien.",
  },
  {
    id: "m1-q-015",
    chapter: 1,
    topic: "CHAPTER 1: REAL-LIFE PRACTICE",
    quizBucket: "ch1Application",
    prompt: "Choose the best answer: Wie heißt du?",
    options: ["Ich heiße Mia.", "Ich komme aus Spanien.", "Ich lerne Deutsch.", "Das ist Noah."],
    answer: "Ich heiße Mia.",
    explanation: "Wie heißt du? asks for someone’s name.",
  },
  {
    id: "m1-q-016",
    chapter: 1,
    topic: "CHAPTER 1: REAL-LIFE PRACTICE",
    quizBucket: "ch1Application",
    prompt: "Which question matches the answer: Ich komme aus der Schweiz.",
    options: ["Woher kommst du?", "Wie heißt du?", "Wer ist das?", "Wie geht’s?"],
    answer: "Woher kommst du?",
    explanation: "Woher kommst du? asks where someone is from.",
  },
  {
    id: "m1-q-017",
    chapter: 1,
    topic: "CHAPTER 1: REAL-LIFE PRACTICE",
    quizBucket: "ch1Application",
    prompt: "Choose the best answer: Wer ist das?",
    options: ["Das ist Leila.", "Ich heiße Leila.", "Ich komme aus Spanien.", "Leila lernt Deutsch."],
    answer: "Das ist Leila.",
    explanation: "Wer ist das? asks who a person is.",
  },
  {
    id: "m1-q-018",
    chapter: 1,
    topic: "CHAPTER 1: REAL-LIFE PRACTICE",
    quizBucket: "ch1Application",
    prompt: "You are not feeling well. What is the best answer to: Wie geht’s?",
    options: ["Nicht so gut.", "Super!", "Sehr gut!", "Guten Morgen."],
    answer: "Nicht so gut.",
    explanation: "Nicht so gut means not so good.",
  },
  {
    id: "m1-q-019",
    chapter: 1,
    topic: "CHAPTER 1: REAL-LIFE PRACTICE",
    quizBucket: "ch1Application",
    prompt: "How do you ask a classmate’s name informally?",
    options: ["Wie heißt du?", "Wie heißen Sie?", "Woher kommst du?", "Wer ist Sie?"],
    answer: "Wie heißt du?",
    explanation: "Use du when speaking informally to one person.",
  },
  {
    id: "m1-q-020",
    chapter: 1,
    topic: "CHAPTER 1: REAL-LIFE PRACTICE",
    quizBucket: "ch1Application",
    prompt: "Choose the correct complete introduction.",
    options: [
      "Hallo! Ich heiße Noah. Ich komme aus Deutschland und lerne Spanisch.",
      "Hallo! Ich heißt Noah. Ich kommst aus Deutschland und lernt Spanisch.",
      "Hallo! Ich bin aus Noah und heiße Deutschland.",
      "Hallo! Ich kommen aus Deutschland und Spanisch lernt."
    ],
    answer: "Hallo! Ich heiße Noah. Ich komme aus Deutschland und lerne Spanisch.",
    explanation: "With ich, use heiße, komme, and lerne.",
  },
  {
    id: "m1-q-021",
    chapter: 2,
    topic: "CHAPTER 2: VOCABULARY",
    quizBucket: "ch2Vocabulary",
    prompt: "What does die Ärztin mean?",
    options: ["female doctor", "female teacher", "female student", "female journalist"],
    answer: "female doctor",
  },
  {
    id: "m1-q-022",
    chapter: 2,
    topic: "CHAPTER 2: VOCABULARY",
    quizBucket: "ch2Vocabulary",
    prompt: "What does der Lehrer mean?",
    options: ["teacher", "doctor", "waiter", "mechanic"],
    answer: "teacher",
  },
  {
    id: "m1-q-023",
    chapter: 2,
    topic: "CHAPTER 2: VOCABULARY",
    quizBucket: "ch2Vocabulary",
    prompt: "What does verheiratet mean?",
    options: ["married", "single", "divorced", "employed"],
    answer: "married",
  },
  {
    id: "m1-q-024",
    chapter: 2,
    topic: "CHAPTER 2: VOCABULARY",
    quizBucket: "ch2Vocabulary",
    prompt: "What does ledig mean?",
    options: ["single", "married", "divorced", "retired"],
    answer: "single",
  },
  {
    id: "m1-q-025",
    chapter: 2,
    topic: "CHAPTER 2: VOCABULARY",
    quizBucket: "ch2Vocabulary",
    prompt: "What does Telefonnummer mean?",
    options: ["telephone number", "address", "age", "profession"],
    answer: "telephone number",
  },
  {
    id: "m1-q-026",
    chapter: 2,
    topic: "CHAPTER 2: VOCABULARY",
    quizBucket: "ch2Vocabulary",
    prompt: "Which German number is 47?",
    options: ["siebenundvierzig", "vierundsiebzig", "siebenundvierzehn", "vierzigsieben"],
    answer: "siebenundvierzig",
  },
  {
    id: "m1-q-027",
    chapter: 2,
    topic: "CHAPTER 2: GRAMMAR",
    quizBucket: "ch2Grammar",
    prompt: "Complete with the correct form of wohnen: Ich ___ in Graz.",
    options: ["wohne", "wohnst", "wohnt", "wohnen"],
    answer: "wohne",
    explanation: "With ich, the verb wohnen changes to wohne.",
  },
  {
    id: "m1-q-028",
    chapter: 2,
    topic: "CHAPTER 2: GRAMMAR",
    quizBucket: "ch2Grammar",
    prompt: "Complete with the correct form of leben: Wir ___ in Österreich.",
    options: ["leben", "lebe", "lebst", "lebt"],
    answer: "leben",
    explanation: "With wir, use leben.",
  },
  {
    id: "m1-q-029",
    chapter: 2,
    topic: "CHAPTER 2: GRAMMAR",
    quizBucket: "ch2Grammar",
    prompt: "Complete with the correct form of haben: Jonas ___ zwei Kinder.",
    options: ["hat", "habe", "hast", "haben"],
    answer: "hat",
    explanation: "With Jonas (he), the irregular verb haben changes to hat.",
  },
  {
    id: "m1-q-030",
    chapter: 2,
    topic: "CHAPTER 2: GRAMMAR",
    quizBucket: "ch2Grammar",
    prompt: "Complete with the correct form of arbeiten: Leila und Mia ___ bei Medico.",
    options: ["arbeiten", "arbeitet", "arbeitest", "arbeite"],
    answer: "arbeiten",
    explanation: "Leila und Mia is a plural subject, so use arbeiten.",
  },
  {
    id: "m1-q-031",
    chapter: 2,
    topic: "CHAPTER 2: GRAMMAR",
    quizBucket: "ch2Grammar",
    prompt: "Complete the sentence: Mia arbeitet heute ___.",
    options: ["nicht", "kein", "keine", "keinen"],
    answer: "nicht",
    explanation: "Use nicht to negate the verb phrase: Sie arbeitet heute nicht.",
  },
  {
    id: "m1-q-032",
    chapter: 2,
    topic: "CHAPTER 2: GRAMMAR",
    quizBucket: "ch2Grammar",
    prompt: "Complete the sentence: Jonas arbeitet ___ Lehrer.",
    options: ["als", "bei", "in", "aus"],
    answer: "als",
    explanation: "Use als before a profession or role: als Lehrer.",
  },
  {
    id: "m1-q-033",
    chapter: 2,
    topic: "CHAPTER 2: GRAMMAR",
    quizBucket: "ch2Grammar",
    prompt: "Complete the sentence: Leila arbeitet ___ Medico.",
    options: ["bei", "als", "in", "aus"],
    answer: "bei",
    explanation: "Use bei with an employer or organization: bei Medico.",
  },
  {
    id: "m1-q-034",
    chapter: 2,
    topic: "CHAPTER 2: GRAMMAR",
    quizBucket: "ch2Grammar",
    prompt: "What is the feminine form of der Verkäufer?",
    options: ["die Verkäuferin", "die Verkäufer", "der Verkäuferin", "die Verkauf"],
    answer: "die Verkäuferin",
    explanation: "Many feminine profession nouns are formed with the ending -in: Verkäufer → Verkäuferin.",
  },
  {
    id: "m1-q-035",
    chapter: 2,
    topic: "CHAPTER 2: REAL-LIFE PRACTICE",
    quizBucket: "ch2Application",
    prompt: "Read the profile: Leila wohnt in Wien und arbeitet als Journalistin bei Radio Nova. Wo wohnt Leila?",
    options: ["In Wien.", "Bei Radio Nova.", "Als Journalistin.", "In Deutschland."],
    answer: "In Wien.",
    explanation: "The profile says that Leila wohnt in Wien.",
  },
  {
    id: "m1-q-036",
    chapter: 2,
    topic: "CHAPTER 2: REAL-LIFE PRACTICE",
    quizBucket: "ch2Application",
    prompt: "Read the profile: Leila wohnt in Wien und arbeitet als Journalistin bei Radio Nova. Was ist Leila von Beruf?",
    options: ["Sie ist Journalistin.", "Sie ist Ärztin.", "Sie ist Lehrerin.", "Sie ist Studentin."],
    answer: "Sie ist Journalistin.",
    explanation: "The profile says that Leila arbeitet als Journalistin.",
  },
  {
    id: "m1-q-037",
    chapter: 2,
    topic: "CHAPTER 2: REAL-LIFE PRACTICE",
    quizBucket: "ch2Application",
    prompt: "Choose the best answer: Was sind Sie von Beruf?",
    options: ["Ich bin Mechaniker.", "Ich wohne in Graz.", "Ich bin ledig.", "Ich komme aus Österreich."],
    answer: "Ich bin Mechaniker.",
    explanation: "Was sind Sie von Beruf? asks about someone’s profession.",
  },
  {
    id: "m1-q-038",
    chapter: 2,
    topic: "CHAPTER 2: REAL-LIFE PRACTICE",
    quizBucket: "ch2Application",
    prompt: "Choose the best answer: Wo arbeiten Sie?",
    options: ["Ich arbeite bei Medico.", "Ich arbeite als Ärztin.", "Ich wohne in Wien.", "Ich bin verheiratet."],
    answer: "Ich arbeite bei Medico.",
    explanation: "Wo arbeiten Sie? asks where or for which organization someone works.",
  },
  {
    id: "m1-q-039",
    chapter: 2,
    topic: "CHAPTER 2: REAL-LIFE PRACTICE",
    quizBucket: "ch2Application",
    prompt: "Choose the best answer: Sind Sie verheiratet?",
    options: ["Nein, ich bin ledig.", "Nein, ich wohne in Wien.", "Ja, ich arbeite als Lehrer.", "Ich komme aus Spanien."],
    answer: "Nein, ich bin ledig.",
    explanation: "Ledig means single or unmarried.",
  },
  {
    id: "m1-q-040",
    chapter: 2,
    topic: "CHAPTER 2: REAL-LIFE PRACTICE",
    quizBucket: "ch2Application",
    prompt: "Which sentence correctly says that Mia is a doctor and lives in Graz?",
    options: [
      "Mia arbeitet als Ärztin und wohnt in Graz.",
      "Mia arbeitet bei Ärztin und wohnt als Graz.",
      "Mia ist Ärztin bei Graz und arbeitet in.",
      "Mia wohnen in Graz und arbeiten als Ärztin."
    ],
    answer: "Mia arbeitet als Ärztin und wohnt in Graz.",
    explanation: "Use als before the profession and in before the city.",
  },
  {
    id: "m1-q-041",
    chapter: 3,
    topic: "CHAPTER 3: VOCABULARY",
    quizBucket: "ch3Vocabulary",
    prompt: "What does die Mutter mean?",
    options: ["mother", "sister", "daughter", "grandmother"],
    answer: "mother",
  },
  {
    id: "m1-q-042",
    chapter: 3,
    topic: "CHAPTER 3: VOCABULARY",
    quizBucket: "ch3Vocabulary",
    prompt: "What does die Eltern mean?",
    options: ["parents", "siblings", "children", "grandparents"],
    answer: "parents",
  },
  {
    id: "m1-q-043",
    chapter: 3,
    topic: "CHAPTER 3: VOCABULARY",
    quizBucket: "ch3Vocabulary",
    prompt: "What does die Cousine mean?",
    options: ["female cousin", "aunt", "sister", "daughter"],
    answer: "female cousin",
  },
  {
    id: "m1-q-044",
    chapter: 3,
    topic: "CHAPTER 3: VOCABULARY",
    quizBucket: "ch3Vocabulary",
    prompt: "What does der Sohn mean?",
    options: ["son", "father", "brother", "grandfather"],
    answer: "son",
  },
  {
    id: "m1-q-045",
    chapter: 3,
    topic: "CHAPTER 3: VOCABULARY",
    quizBucket: "ch3Vocabulary",
    prompt: "What language is Französisch?",
    options: ["French", "Spanish", "German", "Italian"],
    answer: "French",
  },
  {
    id: "m1-q-046",
    chapter: 3,
    topic: "CHAPTER 3: VOCABULARY",
    quizBucket: "ch3Vocabulary",
    prompt: "What does ein bisschen mean?",
    options: ["a little", "very well", "not at all", "always"],
    answer: "a little",
  },
  {
    id: "m1-q-047",
    chapter: 3,
    topic: "CHAPTER 3: GRAMMAR",
    quizBucket: "ch3Grammar",
    prompt: "Which phrase means “my father”?",
    options: ["mein Vater", "meine Vater", "dein Vater", "meinen Vater"],
    answer: "mein Vater",
    explanation: "Vater is masculine. Use mein Vater.",
  },
  {
    id: "m1-q-048",
    chapter: 3,
    topic: "CHAPTER 3: GRAMMAR",
    quizBucket: "ch3Grammar",
    prompt: "Which phrase means “my sister”?",
    options: ["meine Schwester", "mein Schwester", "deine Schwester", "meinen Schwester"],
    answer: "meine Schwester",
    explanation: "Schwester is feminine. Use meine Schwester.",
  },
  {
    id: "m1-q-049",
    chapter: 3,
    topic: "CHAPTER 3: GRAMMAR",
    quizBucket: "ch3Grammar",
    prompt: "Which phrase means “your brother” informally?",
    options: ["dein Bruder", "deine Bruder", "mein Bruder", "deinen Bruder"],
    answer: "dein Bruder",
    explanation: "Bruder is masculine. Use dein Bruder.",
  },
  {
    id: "m1-q-050",
    chapter: 3,
    topic: "CHAPTER 3: GRAMMAR",
    quizBucket: "ch3Grammar",
    prompt: "Which phrase means “Leila’s mother”?",
    options: ["Leilas Mutter", "Leila Mutter", "Mutter Leila", "Leilas die Mutter"],
    answer: "Leilas Mutter",
    explanation: "Add -s to the name to show possession: Leilas Mutter.",
  },
  {
    id: "m1-q-051",
    chapter: 3,
    topic: "CHAPTER 3: GRAMMAR",
    quizBucket: "ch3Grammar",
    prompt: "Complete with the correct form of sprechen: Ich ___ Deutsch.",
    options: ["spreche", "sprichst", "spricht", "sprechen"],
    answer: "spreche",
    explanation: "With ich, the verb sprechen changes to spreche.",
  },
  {
    id: "m1-q-052",
    chapter: 3,
    topic: "CHAPTER 3: GRAMMAR",
    quizBucket: "ch3Grammar",
    prompt: "Complete with the correct form of sprechen: Du ___ Spanisch.",
    options: ["sprichst", "spreche", "spricht", "sprechen"],
    answer: "sprichst",
    explanation: "With du, sprechen changes to sprichst. The vowel changes from e to i.",
  },
  {
    id: "m1-q-053",
    chapter: 3,
    topic: "CHAPTER 3: GRAMMAR",
    quizBucket: "ch3Grammar",
    prompt: "Complete with the correct form of sprechen: Anna und Mia ___ Englisch.",
    options: ["sprechen", "spricht", "sprichst", "spreche"],
    answer: "sprechen",
    explanation: "Anna und Mia is a plural subject, so use sprechen.",
  },
  {
    id: "m1-q-054",
    chapter: 3,
    topic: "CHAPTER 3: GRAMMAR",
    quizBucket: "ch3Grammar",
    prompt: "Someone says: Du sprichst nicht Deutsch. Choose the response that corrects the statement.",
    options: ["Doch, ich spreche Deutsch.", "Ja, ich spreche nicht Deutsch.", "Nein, ich spreche Deutsch.", "Nicht, ich spreche Deutsch."],
    answer: "Doch, ich spreche Deutsch.",
    explanation: "Use doch to contradict a negative statement.",
  },
  {
    id: "m1-q-055",
    chapter: 3,
    topic: "CHAPTER 3: REAL-LIFE PRACTICE",
    quizBucket: "ch3Application",
    prompt: "Ist das deine Schwester? Choose the answer that confirms that she is your sister.",
    options: ["Ja, das ist meine Schwester.", "Nein, das ist meine Mutter.", "Doch, das ist meine Schwester.", "Nein, das ist mein Bruder."],
    answer: "Ja, das ist meine Schwester.",
    explanation: "Use ja to confirm a normal positive question.",
  },
  {
    id: "m1-q-056",
    chapter: 3,
    topic: "CHAPTER 3: REAL-LIFE PRACTICE",
    quizBucket: "ch3Application",
    prompt: "Someone says: Das ist nicht dein Bruder. Choose the response that corrects the statement.",
    options: ["Doch, das ist mein Bruder.", "Ja, das ist nicht mein Bruder.", "Nein, das ist mein Bruder.", "Nicht, das ist mein Bruder."],
    answer: "Doch, das ist mein Bruder.",
    explanation: "Use doch to contradict a negative statement.",
  },
  {
    id: "m1-q-057",
    chapter: 3,
    topic: "CHAPTER 3: REAL-LIFE PRACTICE",
    quizBucket: "ch3Application",
    prompt: "Anna is Jonas’s mother. Jonas is Anna’s ___.",
    options: ["Sohn", "Vater", "Bruder", "Onkel"],
    answer: "Sohn",
  },
  {
    id: "m1-q-058",
    chapter: 3,
    topic: "CHAPTER 3: REAL-LIFE PRACTICE",
    quizBucket: "ch3Application",
    prompt: "Read the profile: Leila spricht sehr gut Deutsch und ein bisschen Englisch. Which statement is correct?",
    options: [
      "Leila speaks German very well and a little English.",
      "Leila speaks only English.",
      "Leila does not speak German.",
      "Leila speaks French and Spanish."
    ],
    answer: "Leila speaks German very well and a little English.",
    explanation: "Sehr gut means very well, and ein bisschen means a little.",
  },
  {
    id: "m1-q-059",
    chapter: 3,
    topic: "CHAPTER 3: REAL-LIFE PRACTICE",
    quizBucket: "ch3Application",
    prompt: "Mia has a sister named Leila. Which sentence is correct?",
    options: ["Leila ist Mias Schwester.", "Mia ist Leilas Mutter.", "Leila ist Mias Bruder.", "Mias ist Leila Schwester."],
    answer: "Leila ist Mias Schwester.",
    explanation: "Mias Schwester means Mia’s sister.",
  },
  {
    id: "m1-q-060",
    chapter: 3,
    topic: "CHAPTER 3: REAL-LIFE PRACTICE",
    quizBucket: "ch3Application",
    prompt: "Mia says: Das ist mein Vater. Er heißt Noah. Who is Noah?",
    options: ["Mias Vater", "Mias Bruder", "Mias Sohn", "Mias Großmutter"],
    answer: "Mias Vater",
    explanation: "Mia says that Noah is her father.",
  },
];

const MODULE1_REVIEW_BUCKET_RECIPE: Record<ModuleOneReviewBucket, number> = {
  ch1Vocabulary: 3,
  ch1Grammar: 4,
  ch1Application: 3,
  ch2Vocabulary: 3,
  ch2Grammar: 4,
  ch2Application: 3,
  ch3Vocabulary: 3,
  ch3Grammar: 4,
  ch3Application: 3,
};

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

function buildModule1ReviewQuiz(): ModuleReviewPracticeQuestion[] {
  const selected = Object.entries(MODULE1_REVIEW_BUCKET_RECIPE).flatMap(
    ([bucket, count]) =>
      shuffle(module1ReviewBank.filter((question) => question.quizBucket === bucket))
        .slice(0, count)
        .map((question) => ({
          type: "practice" as const,
          id: question.id,
          chapter: question.chapter,
          topic: question.topic,
          quizBucket: question.quizBucket,
          prompt: question.prompt,
          answer: question.answer,
          options: shuffle([...question.options]),
          explanation: question.explanation,
        }))
  );

  return shuffle(selected);
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
  if (moduleNumber === 1) return buildModule1ReviewQuiz();

  const articlePool = buildArticlePool(moduleNumber);
  const translationPool = buildTranslationPool(moduleNumber);
  const grammarPool = buildGrammarPool(moduleNumber);

  return takeWithFill([articlePool, translationPool, grammarPool], 10);
}
