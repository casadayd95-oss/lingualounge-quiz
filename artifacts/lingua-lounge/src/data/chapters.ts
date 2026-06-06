export type Gender = "masculine" | "feminine" | "neuter" | "plural";

export type Word = {
  article?: "der" | "die" | "das";
  gender?: Gender;
  german: string;
  english: string;
};

export type Chapter = {
  number: number;
  title: string;
  words: Word[];
};

export function getArticleAnswer(word: Word): string {
  if (word.gender === "plural") return "die (pl.)";
  return word.article!;
}

export function getGenderColorClass(word: Word): string {
  if (!word.article) return "";
  if (word.article === "der") return "article-color-der";
  if (word.article === "das") return "article-color-das";
  if (word.gender === "plural") return "article-color-die-pl";
  return "article-color-die-f";
}

export const chapters: Chapter[] = [
  {
    number: 1,
    title: "Greetings & Introductions",
    words: [
      { german: "Hallo", english: "hello" },
      { german: "Guten Tag", english: "good day" },
      { german: "Guten Morgen", english: "good morning" },
      { german: "Guten Abend", english: "good evening" },
      { german: "Gute Nacht", english: "good night" },
      { german: "Tschüss", english: "bye" },
      { german: "Auf Wiedersehen", english: "goodbye" },
      { german: "Entschuldigung", english: "excuse me / sorry" },
      { german: "Danke", english: "thank you" },
      { german: "Wie heißt du?", english: "What is your name?" },
      { german: "Ich heiße...", english: "My name is..." },
      { german: "Wer bist du?", english: "Who are you?" },
      { german: "Woher kommst du?", english: "Where are you from?" },
      { german: "Ich komme aus...", english: "I come from..." },
      { german: "Deutschland", english: "Germany" },
      { german: "Österreich", english: "Austria" },
      { german: "Spanien", english: "Spain" },
      { german: "Frankreich", english: "France" },
      { german: "Eritrea", english: "Eritrea" },
      { article: "die", gender: "feminine", german: "Schweiz", english: "Switzerland" },
      { article: "die", gender: "feminine", german: "Türkei", english: "Turkey" },
      { article: "die", gender: "plural",   german: "USA", english: "USA" },
      { article: "die", gender: "plural",   german: "Niederlande", english: "Netherlands" },
      { article: "die", gender: "plural",   german: "Philippinen", english: "Philippines" },
      { article: "die", gender: "feminine", german: "Slowakei", english: "Slovakia" },
      { article: "die", gender: "feminine", german: "Ukraine", english: "Ukraine" },
      { article: "die", gender: "feminine", german: "Mongolei", english: "Mongolia" },
      { article: "der", gender: "masculine", german: "Iran", english: "Iran" },
      { article: "der", gender: "masculine", german: "Irak", english: "Iraq" },
      { article: "der", gender: "masculine", german: "Sudan", english: "Sudan" },
      { article: "der", gender: "masculine", german: "Libanon", english: "Lebanon" },
      { article: "der", gender: "masculine", german: "Kongo", english: "Congo" },
    ],
  },
  {
    number: 2,
    title: "Professions & Personal Info",
    words: [
      { article: "der", gender: "masculine", german: "Ingenieur", english: "engineer" },
      { article: "die", gender: "feminine",  german: "Ingenieurin", english: "female engineer" },
      { article: "der", gender: "masculine", german: "Student", english: "student" },
      { article: "die", gender: "feminine",  german: "Studentin", english: "female student" },
      { article: "der", gender: "masculine", german: "Kellner", english: "waiter" },
      { article: "die", gender: "feminine",  german: "Kellnerin", english: "waitress" },
      { article: "der", gender: "masculine", german: "Arzt", english: "doctor" },
      { article: "die", gender: "feminine",  german: "Ärztin", english: "female doctor" },
      { article: "der", gender: "masculine", german: "Lehrer", english: "teacher" },
      { article: "die", gender: "feminine",  german: "Lehrerin", english: "female teacher" },
      { article: "der", gender: "masculine", german: "Verkäufer", english: "salesman" },
      { article: "die", gender: "feminine",  german: "Verkäuferin", english: "saleswoman" },
      { article: "der", gender: "masculine", german: "Friseur", english: "hairdresser" },
      { article: "die", gender: "feminine",  german: "Friseurin", english: "female hairdresser" },
      { article: "der", gender: "masculine", german: "Paketsteller", english: "parcel delivery worker" },
      { article: "das", gender: "neuter",    german: "Kind", english: "child" },
      { german: "arbeiten", english: "to work" },
      { german: "wohnen", english: "to live / reside" },
      { german: "leben", english: "to live" },
      { german: "haben", english: "to have" },
      { german: "sein", english: "to be" },
      { german: "verheiratet", english: "married" },
      { german: "geschieden", english: "divorced" },
      { german: "Single", english: "single" },
    ],
  },
  {
    number: 3,
    title: "Family & Languages",
    words: [
      { article: "der", gender: "masculine", german: "Vater", english: "father" },
      { article: "die", gender: "feminine",  german: "Mutter", english: "mother" },
      { article: "der", gender: "masculine", german: "Bruder", english: "brother" },
      { article: "die", gender: "feminine",  german: "Schwester", english: "sister" },
      { article: "die", gender: "feminine",  german: "Oma", english: "grandma" },
      { article: "der", gender: "masculine", german: "Opa", english: "grandpa" },
      { article: "der", gender: "masculine", german: "Onkel", english: "uncle" },
      { article: "die", gender: "feminine",  german: "Tante", english: "aunt" },
      { article: "der", gender: "masculine", german: "Sohn", english: "son" },
      { article: "die", gender: "feminine",  german: "Tochter", english: "daughter" },
      { article: "die", gender: "plural",    german: "Eltern", english: "parents" },
      { article: "die", gender: "plural",    german: "Großeltern", english: "grandparents" },
      { article: "der", gender: "masculine", german: "Großvater", english: "grandfather" },
      { article: "die", gender: "feminine",  german: "Großmutter", english: "grandmother" },
      { article: "der", gender: "masculine", german: "Enkel", english: "grandson" },
      { article: "die", gender: "feminine",  german: "Enkelin", english: "granddaughter" },
      { article: "der", gender: "masculine", german: "Ehemann", english: "husband" },
      { article: "die", gender: "feminine",  german: "Ehefrau", english: "wife" },
      { article: "die", gender: "feminine",  german: "Sprache", english: "language" },
      { article: "die", gender: "plural",    german: "Geschwister", english: "siblings" },
      { german: "Deutsch", english: "German" },
      { german: "Englisch", english: "English" },
      { german: "Spanisch", english: "Spanish" },
      { german: "Französisch", english: "French" },
      { german: "Italienisch", english: "Italian" },
      { german: "Türkisch", english: "Turkish" },
      { german: "Polnisch", english: "Polish" },
      { german: "Russisch", english: "Russian" },
      { german: "Chinesisch", english: "Chinese" },
      { german: "sprechen", english: "to speak" },
    ],
  },
  {
    number: 4,
    title: "Furniture, Shopping & Prices",
    words: [
      { article: "das", gender: "neuter",    german: "Bild",           english: "picture / image" },
      { article: "der", gender: "masculine", german: "Stuhl",          english: "chair" },
      { article: "der", gender: "masculine", german: "Tisch",          english: "table" },
      { article: "das", gender: "neuter",    german: "Sofa",           english: "sofa" },
      { article: "die", gender: "feminine",  german: "Lampe",          english: "lamp" },
      { article: "das", gender: "neuter",    german: "Regal",          english: "shelf" },
      { article: "der", gender: "masculine", german: "Schrank",        english: "cabinet / wardrobe" },
      { article: "der", gender: "masculine", german: "Teppich",        english: "rug / carpet" },
      { article: "das", gender: "neuter",    german: "Bett",           english: "bed" },
      { article: "der", gender: "masculine", german: "Sessel",         english: "armchair" },
      { article: "der", gender: "masculine", german: "Euro",           english: "euro" },
      { article: "der", gender: "masculine", german: "Preis",          english: "price" },
      { article: "das", gender: "neuter",    german: "Sonderangebot",  english: "special offer" },
      { german: "schön",      english: "beautiful" },
      { german: "teuer",      english: "expensive" },
      { german: "billig",     english: "cheap" },
      { german: "praktisch",  english: "practical" },
      { german: "groß",       english: "big" },
      { german: "klein",      english: "small" },
      { german: "alt",        english: "old" },
      { german: "neu",        english: "new" },
      { article: "das", gender: "neuter",   german: "Möbelgeschäft", english: "furniture store" },
      { article: "das", gender: "neuter",   german: "Buch",          english: "book" },
      { article: "die", gender: "feminine", german: "Kommode",        english: "dresser" },
      { article: "das", gender: "neuter",   german: "Zimmer",         english: "room" },
      { german: "hässlich",  english: "ugly" },
      { german: "günstig",   english: "affordable / inexpensive" },
      { german: "modern",    english: "modern" },
      { german: "finden",    english: "to find / to think" },
      { german: "kosten",    english: "to cost" },
    ],
  },
  {
    number: 5,
    title: "Objects, Materials & Colors",
    words: [
      { article: "der", gender: "masculine", german: "Tisch",           english: "table" },
      { article: "der", gender: "masculine", german: "Stuhl",           english: "chair" },
      { article: "das", gender: "neuter",    german: "Auto",            english: "car" },
      { article: "die", gender: "feminine",  german: "Uhr",             english: "clock / watch" },
      { article: "das", gender: "neuter",    german: "Handy",           english: "cell phone" },
      { article: "die", gender: "feminine",  german: "Brille",          english: "glasses" },
      { article: "das", gender: "neuter",    german: "Buch",            english: "book" },
      { article: "die", gender: "feminine",  german: "Kamera",          english: "camera" },
      { article: "die", gender: "feminine",  german: "Flasche",         english: "bottle" },
      { article: "die", gender: "feminine",  german: "Kette",           english: "necklace" },
      { article: "der", gender: "masculine", german: "Kugelschreiber",  english: "pen" },
      { article: "der", gender: "masculine", german: "Schlüssel",       english: "key" },
      { article: "die", gender: "feminine",  german: "Tasche",          english: "bag" },
      { article: "das", gender: "neuter",    german: "Holz",            english: "wood" },
      { article: "das", gender: "neuter",    german: "Papier",          english: "paper" },
      { article: "das", gender: "neuter",    german: "Glas",            english: "glass" },
      { article: "das", gender: "neuter",    german: "Plastik",         english: "plastic" },
      { article: "das", gender: "neuter",    german: "Metall",          english: "metal" },
      { german: "gelb",    english: "yellow" },
      { german: "grün",    english: "green" },
      { german: "grau",    english: "gray" },
      { german: "blau",    english: "blue" },
      { german: "orange",  english: "orange" },
      { german: "braun",   english: "brown" },
      { german: "rot",     english: "red" },
      { german: "schwarz", english: "black" },
    ],
  },
];
