export type Gender = "masculine" | "feminine" | "neuter" | "plural";

export type Word = {
  article?: "der" | "die" | "das";
  gender?: Gender;
  german: string;
  english: string;
  includeInArticleQuiz?: boolean;
  includeInTranslationQuiz?: boolean;
  articleExplanation?: string;
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
      { article: "das", gender: "neuter",    german: "Auto",             english: "car" },
      { article: "die", gender: "feminine",  german: "Uhr",              english: "clock / watch" },
      { article: "das", gender: "neuter",    german: "Handy",            english: "cell phone" },
      { article: "die", gender: "feminine",  german: "Brille",           english: "glasses" },
      { article: "das", gender: "neuter",    german: "Buch",             english: "book" },
      { article: "die", gender: "feminine",  german: "Kamera",           english: "camera" },
      { article: "die", gender: "feminine",  german: "Flasche",          english: "bottle" },
      { article: "die", gender: "feminine",  german: "Kette",            english: "necklace" },
      { article: "der", gender: "masculine", german: "Kugelschreiber",   english: "pen" },
      { article: "der", gender: "masculine", german: "Schlüssel",        english: "key" },
      { article: "die", gender: "feminine",  german: "Tasche",           english: "bag" },
      { article: "das", gender: "neuter",    german: "Holz",             english: "wood" },
      { article: "das", gender: "neuter",    german: "Papier",           english: "paper" },
      { article: "das", gender: "neuter",    german: "Glas",             english: "glass" },
      { article: "das", gender: "neuter",    german: "Plastik",          english: "plastic" },
      { article: "das", gender: "neuter",    german: "Metall",           english: "metal" },
      { article: "der", gender: "masculine", german: "Bleistift",        english: "pencil" },
      { article: "das", gender: "neuter",    german: "Feuerzeug",        english: "lighter" },
      { article: "der", gender: "masculine", german: "Geldbeutel",       english: "wallet" },
      { article: "das", gender: "neuter",    german: "Taschentuch",      english: "tissue" },
      { article: "der", gender: "masculine", german: "Schirm",           english: "umbrella" },
      { article: "die", gender: "feminine",  german: "Farbe",            english: "color" },
      { article: "das", gender: "neuter",    german: "Material",         english: "material" },
      { article: "das", gender: "neuter",    german: "Produkt",          english: "product" },
      { article: "der", gender: "masculine", german: "Preis",            english: "price" },
      { article: "die", gender: "feminine",  german: "Menge",            english: "amount / quantity" },
      { article: "die", gender: "feminine",  german: "Bestellnummer",    english: "order number" },
      { german: "gelb",    english: "yellow" },
      { german: "grün",    english: "green" },
      { german: "grau",    english: "gray" },
      { german: "blau",    english: "blue" },
      { german: "orange",  english: "orange" },
      { german: "braun",   english: "brown" },
      { german: "rot",     english: "red" },
      { german: "schwarz", english: "black" },
      { german: "hell",    english: "light / bright" },
      { german: "dunkel",  english: "dark" },
      { german: "sehen",   english: "to see" },
    ],
  },
  {
    number: 6,
    title: "Office, Technology & Appointments",
    words: [
      { article: "das", gender: "neuter",    german: "Büro",             english: "office" },
      { article: "der", gender: "masculine", german: "Computer",         english: "computer" },
      { article: "der", gender: "masculine", german: "Laptop",           english: "laptop" },
      { article: "das", gender: "neuter",    german: "Tablet",           english: "tablet" },
      { article: "die", gender: "feminine",  german: "E-Mail",           english: "email" },
      { article: "die", gender: "feminine",  german: "Nachricht",        english: "message" },
      { article: "das", gender: "neuter",    german: "Passwort",         english: "password" },
      { article: "der", gender: "masculine", german: "Termin",           english: "appointment" },
      { article: "der", gender: "masculine", german: "Kalender",         english: "calendar" },
      { article: "der", gender: "masculine", german: "Bildschirm",       english: "screen / monitor" },
      { article: "die", gender: "feminine",  german: "Tastatur",         english: "keyboard" },
      { article: "die", gender: "feminine",  german: "Maus",             english: "mouse" },
      { article: "der", gender: "masculine", german: "Drucker",          english: "printer" },
      { article: "die", gender: "feminine",  german: "Liste",            english: "list" },
      { article: "die", gender: "feminine",  german: "Visitenkarte",     english: "business card" },
      { article: "die", gender: "feminine",  german: "Adresse",          english: "address" },
      { article: "die", gender: "feminine",  german: "Telefonnummer",    english: "phone number" },
      { article: "die", gender: "feminine",  german: "E-Mail-Adresse",   english: "email address" },
      { article: "der", gender: "masculine", german: "Name",             english: "name" },
      { article: "die", gender: "feminine",  german: "Firma",            english: "company" },
      { article: "der", gender: "masculine", german: "Empfang",          english: "reception" },
      { article: "der", gender: "masculine", german: "Albtraum",         english: "nightmare" },
      { german: "Hunger",       english: "hunger" },
      { german: "arbeiten",     english: "to work" },
      { german: "anrufen",      english: "to call" },
      { german: "telefonieren", english: "to make a phone call" },
      { german: "schreiben",    english: "to write" },
      { german: "schicken",     english: "to send" },
      { german: "brauchen",     english: "to need" },
      { german: "machen",       english: "to do / make" },
      { german: "haben",        english: "to have" },
      { german: "sein",         english: "to be" },
    ],
  },
  {
      "number": 7,
      "title": "Modal Verbs: Können & Hobbies",
      "words": [
          {
              "german": "tanzen",
              "english": "to dance"
          },
          {
              "german": "kochen",
              "english": "to cook"
          },
          {
              "german": "singen",
              "english": "to sing"
          },
          {
              "german": "schwimmen",
              "english": "to swim"
          },
          {
              "german": "fotografieren",
              "english": "to photograph"
          },
          {
              "german": "Ski fahren",
              "english": "to ski"
          },
          {
              "german": "malen",
              "english": "to paint"
          },
          {
              "german": "backen",
              "english": "to bake"
          },
          {
              "german": "Fußball spielen",
              "english": "to play soccer"
          },
          {
              "german": "Rad fahren",
              "english": "to ride a bike"
          },
          {
              "german": "reisen",
              "english": "to travel"
          },
          {
              "german": "Tennis spielen",
              "english": "to play tennis"
          },
          {
              "german": "Gitarre spielen",
              "english": "to play guitar"
          },
          {
              "german": "reiten",
              "english": "to ride a horse"
          },
          {
              "german": "Schach spielen",
              "english": "to play chess"
          },
          {
              "german": "lesen",
              "english": "to read"
          },
          {
              "german": "treffen",
              "english": "to meet"
          },
          {
              "german": "fahren",
              "english": "to drive / to ride / to go"
          },
          {
              "german": "finden",
              "english": "to find / to think"
          },
          {
              "german": "können",
              "english": "can / to be able to"
          },
          {
              "german": "toll",
              "english": "great"
          },
          {
              "german": "super",
              "english": "super / great"
          },
          {
              "german": "normal",
              "english": "normal"
          },
          {
              "german": "komisch",
              "english": "strange / weird"
          },
          {
              "german": "blöd",
              "english": "stupid / dumb"
          },
          {
              "german": "interessant",
              "english": "interesting"
          },
          {
              "german": "lustig",
              "english": "funny"
          },
          {
              "german": "angenehm",
              "english": "pleasant"
          },
          {
              "german": "schwierig",
              "english": "difficult"
          },
          {
              "german": "langweilig",
              "english": "boring"
          },
          {
              "german": "immer",
              "english": "always"
          },
          {
              "german": "oft",
              "english": "often"
          },
          {
              "german": "manchmal",
              "english": "sometimes"
          },
          {
              "german": "nie",
              "english": "never"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Freizeit",
              "english": "free time"
          }
      ]
  },
  {
      "number": 8,
      "title": "Time, Appointments & Scheduling",
      "words": [
          {
              "article": "das",
              "gender": "neuter",
              "german": "Kino",
              "english": "cinema / movie theater"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Museum",
              "english": "museum"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Theater",
              "english": "theater"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Café",
              "english": "café"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Ausstellung",
              "english": "exhibition"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Klub",
              "english": "club"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Disco",
              "english": "disco / nightclub"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Schwimmbad",
              "english": "swimming pool"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Konzert",
              "english": "concert"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Restaurant",
              "english": "restaurant"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Bar",
              "english": "bar"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Fitnessstudio",
              "english": "gym / fitness studio"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Montag",
              "english": "Monday"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Dienstag",
              "english": "Tuesday"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Mittwoch",
              "english": "Wednesday"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Donnerstag",
              "english": "Thursday"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Freitag",
              "english": "Friday"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Samstag",
              "english": "Saturday"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Sonntag",
              "english": "Sunday"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Wochenende",
              "english": "weekend"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Morgen",
              "english": "morning"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Vormittag",
              "english": "late morning / before noon"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Mittag",
              "english": "midday / noon"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Nachmittag",
              "english": "afternoon"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Abend",
              "english": "evening"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Nacht",
              "english": "night"
          },
          {
              "german": "wissen",
              "english": "to know"
          },
          {
              "german": "gehen",
              "english": "to go"
          },
          {
              "german": "haben",
              "english": "to have"
          },
          {
              "german": "machen",
              "english": "to do / make"
          },
          {
              "german": "fragen",
              "english": "to ask"
          },
          {
              "german": "sagen",
              "english": "to say"
          },
          {
              "german": "finden",
              "english": "to find / to think"
          },
          {
              "german": "hören",
              "english": "to hear / to listen"
          },
          {
              "german": "sehen",
              "english": "to see"
          },
          {
              "german": "glauben",
              "english": "to believe / to think"
          },
          {
              "german": "heute",
              "english": "today"
          },
          {
              "german": "morgen",
              "english": "tomorrow"
          },
          {
              "german": "leider",
              "english": "unfortunately"
          }
      ]
  },
  {
      "number": 9,
      "title": "Food, Mögen & Compound Nouns",
      "words": [
          {
              "article": "das",
              "gender": "neuter",
              "german": "Brötchen",
              "english": "bread roll"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Brot",
              "english": "bread"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Käse",
              "english": "cheese"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Salat",
              "english": "salad"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Kaffee",
              "english": "coffee"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Fleisch",
              "english": "meat"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Marmelade",
              "english": "jam"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Suppe",
              "english": "soup"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Tee",
              "english": "tea"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Orange",
              "english": "orange"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Fisch",
              "english": "fish"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Tomate",
              "english": "tomato"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Kuchen",
              "english": "cake"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Apfel",
              "english": "apple"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Saft",
              "english": "juice"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Apfelsaft",
              "english": "apple juice"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Mineralwasser",
              "english": "mineral water"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Schokolade",
              "english": "chocolate"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Lieblingsessen",
              "english": "favorite food"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Lieblingsgetränk",
              "english": "favorite drink"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Fischsalat",
              "english": "fish salad"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Schokoladenkuchen",
              "english": "chocolate cake"
          },
          {
              "german": "mögen",
              "english": "to like"
          },
          {
              "german": "lieben",
              "english": "to love"
          },
          {
              "german": "möchten",
              "english": "would like"
          },
          {
              "german": "essen",
              "english": "to eat"
          },
          {
              "german": "trinken",
              "english": "to drink"
          },
          {
              "german": "nehmen",
              "english": "to take / have"
          },
          {
              "german": "lecker",
              "english": "tasty"
          },
          {
              "german": "gut",
              "english": "good"
          },
          {
              "german": "jeden Tag",
              "english": "every day"
          },
          {
              "german": "oft",
              "english": "often"
          },
          {
              "german": "fast nie",
              "english": "almost never"
          },
          {
              "german": "nie",
              "english": "never"
          }
      ]
  },
  {
      "number": 10,
      "title": "Arrivals & Transportation",
      "words": [
          {
              "article": "der",
              "gender": "masculine",
              "german": "Zug",
              "english": "train"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Bus",
              "english": "bus"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Auto",
              "english": "car"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Taxi",
              "english": "taxi"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Flugzeug",
              "english": "airplane"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Schiff",
              "english": "ship"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Fähre",
              "english": "ferry"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "U-Bahn",
              "english": "subway"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "S-Bahn",
              "english": "city train"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Straßenbahn",
              "english": "tram"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Fahrrad",
              "english": "bicycle"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Flughafen",
              "english": "airport"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Bahnhof",
              "english": "train station"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Koffer",
              "english": "suitcase"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Tasche",
              "english": "bag"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Gepäck",
              "english": "luggage"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Rucksack",
              "english": "backpack"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Abfahrt",
              "english": "departure"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Ankunft",
              "english": "arrival"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Verspätung",
              "english": "delay"
          },
          {
              "german": "ankommen",
              "english": "arrive"
          },
          {
              "german": "abfahren",
              "english": "depart"
          },
          {
              "german": "abfliegen",
              "english": "fly/depart"
          },
          {
              "german": "anrufen",
              "english": "call"
          },
          {
              "german": "abholen",
              "english": "pick up"
          },
          {
              "german": "einsteigen",
              "english": "board/get in"
          },
          {
              "german": "aussteigen",
              "english": "get out"
          },
          {
              "german": "umsteigen",
              "english": "transfer/change trains"
          },
          {
              "german": "reisen",
              "english": "travel"
          },
          {
              "german": "fahren",
              "english": "travel/go"
          },
          {
              "german": "fliegen",
              "english": "fly"
          },
          {
              "german": "hoffentlich",
              "english": "hopefully"
          },
          {
              "german": "schade",
              "english": "too bad"
          },
          {
              "german": "kurz vor sechs",
              "english": "shortly before six"
          },
          {
              "german": "kurz nach sechs",
              "english": "shortly after six"
          }
      ]
  },
  {
      "number": 11,
      "title": "Perfekt with Haben (Past Actions)",
      "words": [
          {
              "german": "Zeitung lesen",
              "english": "to read the newspaper",
              "includeInTranslationQuiz": false
          },
          {
              "german": "arbeiten",
              "english": "to work"
          },
          {
              "german": "aufräumen",
              "english": "to clean up / tidy up"
          },
          {
              "german": "Kaffee trinken",
              "english": "to drink coffee"
          },
          {
              "german": "eine Pause machen",
              "english": "to take a break"
          },
          {
              "german": "einen Spaziergang machen",
              "english": "to take a walk"
          },
          {
              "german": "Nachrichten schreiben",
              "english": "to write messages"
          },
          {
              "german": "schlafen",
              "english": "to sleep"
          },
          {
              "german": "Hausaufgaben machen",
              "english": "to do homework"
          },
          {
              "german": "eine Serie schauen",
              "english": "to watch a series"
          },
          {
              "german": "einen Film schauen",
              "english": "to watch a film"
          },
          {
              "german": "einkaufen",
              "english": "to shop"
          },
          {
              "german": "kochen",
              "english": "to cook"
          },
          {
              "german": "Musik hören",
              "english": "to listen to music"
          },
          {
              "german": "Freunde treffen",
              "english": "to meet friends"
          },
          {
              "german": "eine Freundin anrufen",
              "english": "to call a friend (f.)"
          },
          {
              "german": "Freunde einladen",
              "english": "to invite friends",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Sport machen",
              "english": "to do sports"
          },
          {
              "german": "Deutsch lernen",
              "english": "to learn German"
          },
          {
              "german": "lange frühstücken",
              "english": "to have a long breakfast",
              "includeInTranslationQuiz": false
          },
          {
              "german": "spät frühstücken",
              "english": "to have breakfast late",
              "includeInTranslationQuiz": false
          },
          {
              "german": "den Schreibtisch aufräumen",
              "english": "to tidy the desk",
              "includeInTranslationQuiz": false
          },
          {
              "german": "telefonieren",
              "english": "to talk on the phone"
          },
          {
              "german": "fotografieren",
              "english": "to photograph"
          },
          {
              "german": "einen Film machen",
              "english": "to make a film",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Nudeln kochen",
              "english": "to cook noodles"
          },
          {
              "german": "das Geschirr abwaschen",
              "english": "to wash the dishes"
          },
          {
              "german": "Geschirr abwaschen",
              "english": "to wash dishes",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im Internet surfen",
              "english": "to surf the internet",
              "includeInTranslationQuiz": false
          },
          {
              "german": "chatten",
              "english": "to chat",
              "includeInTranslationQuiz": false
          },
          {
              "german": "malen",
              "english": "to paint",
              "includeInTranslationQuiz": false
          },
          {
              "german": "backen",
              "english": "to bake",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Gitarre spielen",
              "english": "to play guitar",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Schach spielen",
              "english": "to play chess",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Fußball spielen",
              "english": "to play soccer",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Tennis spielen",
              "english": "to play tennis",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Basketball spielen",
              "english": "to play basketball",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Handball spielen",
              "english": "to play handball",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im Chor singen",
              "english": "to sing in a choir",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Radio hören",
              "english": "to listen to the radio",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Wäsche waschen",
              "english": "to wash laundry"
          },
          {
              "german": "ein Geschenk kaufen",
              "english": "to buy a gift"
          },
          {
              "german": "gemacht",
              "english": "made / done",
              "includeInTranslationQuiz": false
          },
          {
              "german": "getrunken",
              "english": "drunk",
              "includeInTranslationQuiz": false
          },
          {
              "german": "eingekauft",
              "english": "shopped",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ferngesehen",
              "english": "watched TV",
              "includeInTranslationQuiz": false
          },
          {
              "german": "fotografiert",
              "english": "photographed",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gelesen",
              "english": "read",
              "includeInTranslationQuiz": false
          },
          {
              "german": "geschrieben",
              "english": "written",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gearbeitet",
              "english": "worked",
              "includeInTranslationQuiz": false
          },
          {
              "german": "aufgeräumt",
              "english": "cleaned up / tidied up",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gekocht",
              "english": "cooked",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gehört",
              "english": "heard / listened to",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gesungen",
              "english": "sung",
              "includeInTranslationQuiz": false
          },
          {
              "german": "telefoniert",
              "english": "talked on the phone",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gespielt",
              "english": "played",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gegessen",
              "english": "eaten",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gekauft",
              "english": "bought",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gelernt",
              "english": "learned",
              "includeInTranslationQuiz": false
          },
          {
              "german": "geschlafen",
              "english": "slept",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gefrühstückt",
              "english": "had breakfast",
              "includeInTranslationQuiz": false
          },
          {
              "german": "eingeladen",
              "english": "invited",
              "includeInTranslationQuiz": false
          },
          {
              "german": "angerufen",
              "english": "called",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gewaschen",
              "english": "washed",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gebacken",
              "english": "baked",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gestern",
              "english": "yesterday",
              "includeInTranslationQuiz": false
          },
          {
              "german": "heute",
              "english": "today",
              "includeInTranslationQuiz": false
          },
          {
              "german": "morgen",
              "english": "tomorrow",
              "includeInTranslationQuiz": false
          },
          {
              "german": "gestern Abend",
              "english": "yesterday evening",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Morgen",
              "english": "in the morning",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Vormittag",
              "english": "before noon / late morning",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Mittag",
              "english": "at midday / noon",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Nachmittag",
              "english": "in the afternoon",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Abend",
              "english": "in the evening",
              "includeInTranslationQuiz": false
          },
          {
              "german": "von ... bis ...",
              "english": "from ... to ...",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ab",
              "english": "from / starting at",
              "includeInTranslationQuiz": false
          },
          {
              "german": "um",
              "english": "at",
              "includeInTranslationQuiz": false
          },
          {
              "german": "dann",
              "english": "then",
              "includeInTranslationQuiz": false
          },
          {
              "german": "danach",
              "english": "after that",
              "includeInTranslationQuiz": false
          },
          {
              "german": "letzten Freitag",
              "english": "last Friday",
              "includeInTranslationQuiz": false
          },
          {
              "german": "letzten Samstag",
              "english": "last Saturday",
              "includeInTranslationQuiz": false
          },
          {
              "german": "letzten Sonntag",
              "english": "last Sunday",
              "includeInTranslationQuiz": false
          },
          {
              "german": "letzte Woche",
              "english": "last week",
              "includeInTranslationQuiz": false
          },
          {
              "german": "letztes Wochenende",
              "english": "last weekend",
              "includeInTranslationQuiz": false
          },
          {
              "german": "letztes Jahr",
              "english": "last year",
              "includeInTranslationQuiz": false
          },
          {
              "german": "letzten Mittwoch",
              "english": "last Wednesday",
              "includeInTranslationQuiz": false
          },
          {
              "german": "zu wenig",
              "english": "too little / not enough",
              "includeInTranslationQuiz": false
          },
          {
              "german": "zu viel",
              "english": "too much",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ein bisschen",
              "english": "a little bit",
              "includeInTranslationQuiz": false
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Zeitung",
              "english": "newspaper"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Kaffee",
              "english": "coffee"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Geschenk",
              "english": "gift"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Vogel",
              "english": "bird",
              "includeInArticleQuiz": false,
              "includeInTranslationQuiz": false
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Geschirr",
              "english": "dishes"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Wäsche",
              "english": "laundry"
          },
          {
              "article": "die",
              "gender": "plural",
              "german": "Nudeln",
              "english": "noodles"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Bahnhof",
              "english": "train station",
              "includeInArticleQuiz": false,
              "includeInTranslationQuiz": false
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Stadion",
              "english": "stadium",
              "includeInArticleQuiz": false,
              "includeInTranslationQuiz": false
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Eis",
              "english": "ice cream"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Schreibtisch",
              "english": "desk"
          },
          {
              "article": "die",
              "gender": "plural",
              "german": "Hausaufgaben",
              "english": "homework"
          },
          {
              "article": "die",
              "gender": "plural",
              "german": "Nachrichten",
              "english": "messages"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Film",
              "english": "film"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Serie",
              "english": "series"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Freundin",
              "english": "female friend"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Pause",
              "english": "break"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Spaziergang",
              "english": "walk"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Internet",
              "english": "internet",
              "includeInArticleQuiz": false,
              "includeInTranslationQuiz": false
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Gitarre",
              "english": "guitar",
              "includeInArticleQuiz": false,
              "includeInTranslationQuiz": false
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Radio",
              "english": "radio",
              "includeInArticleQuiz": false,
              "includeInTranslationQuiz": false
          }
      ]
  },
  {
      "number": 12,
      "title": "Perfekt with Sein (Movement & Travel)",
      "words": [
          {
              "article": "die",
              "gender": "feminine",
              "german": "Reise",
              "english": "trip / journey"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Frühling",
              "english": "spring",
              "articleExplanation": "Rule:\n\nSeasons are masculine in German.\n\nExamples: der Frühling, der Sommer"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Sommer",
              "english": "summer",
              "articleExplanation": "Rule:\n\nSeasons are masculine in German.\n\nExamples: der Frühling, der Sommer"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Herbst",
              "english": "autumn / fall",
              "articleExplanation": "Rule:\n\nSeasons are masculine in German.\n\nExamples: der Frühling, der Sommer"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Winter",
              "english": "winter",
              "articleExplanation": "Rule:\n\nSeasons are masculine in German.\n\nExamples: der Frühling, der Sommer"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "März",
              "english": "March",
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "April",
              "english": "April",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Mai",
              "english": "May",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Juni",
              "english": "June",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Juli",
              "english": "July",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "August",
              "english": "August",
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "September",
              "english": "September",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Oktober",
              "english": "October",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "November",
              "english": "November",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Dezember",
              "english": "December",
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Januar",
              "english": "January",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Februar",
              "english": "February",
              "includeInTranslationQuiz": false,
              "articleExplanation": "Rule:\n\nMonths of the year are masculine in German.\n\nExample: der April"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Wetter",
              "english": "weather"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Marathon",
              "english": "marathon"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Fest",
              "english": "festival"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Volksfest",
              "english": "folk festival / public festival"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Besucher",
              "english": "visitor (m.)"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Besucherin",
              "english": "visitor (f.)"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Schiff",
              "english": "ship"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Hafen",
              "english": "harbor"
          },
          {
              "article": "der",
              "gender": "masculine",
              "german": "Geburtstag",
              "english": "birthday"
          },
          {
              "article": "das",
              "gender": "neuter",
              "german": "Wochenende",
              "english": "weekend"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Schweiz",
              "english": "Switzerland"
          },
          {
              "article": "die",
              "gender": "feminine",
              "german": "Türkei",
              "english": "Turkey"
          },
          {
              "german": "fahren",
              "english": "to go / travel by vehicle"
          },
          {
              "german": "fliegen",
              "english": "to fly"
          },
          {
              "german": "laufen",
              "english": "to run / walk"
          },
          {
              "german": "gehen",
              "english": "to go"
          },
          {
              "german": "kommen",
              "english": "to come"
          },
          {
              "german": "ankommen",
              "english": "to arrive"
          },
          {
              "german": "zurückfahren",
              "english": "to travel back / drive back"
          },
          {
              "german": "weiterfahren",
              "english": "to continue traveling"
          },
          {
              "german": "bleiben",
              "english": "to stay"
          },
          {
              "german": "passieren",
              "english": "to happen"
          },
          {
              "german": "glauben",
              "english": "to think / believe"
          },
          {
              "german": "ich glaube",
              "english": "I think / I believe"
          },
          {
              "german": "war",
              "english": "was"
          },
          {
              "german": "hatte",
              "english": "had"
          },
          {
              "german": "Wie war’s?",
              "english": "How was it?",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Wie war dein Tag?",
              "english": "How was your day?",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Ich hatte Glück.",
              "english": "I was lucky.",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Ich hatte Pech.",
              "english": "I was unlucky.",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Ich hatte viel Spaß.",
              "english": "I had a lot of fun.",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Die Reise war schön.",
              "english": "The trip was nice.",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Das Wetter war toll.",
              "english": "The weather was great.",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Das stimmt.",
              "english": "That’s true.",
              "includeInTranslationQuiz": false
          },
          {
              "german": "Das glaube ich auch.",
              "english": "I think so too.",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin gefahren",
              "english": "I went / traveled",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin geflogen",
              "english": "I flew",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin gelaufen",
              "english": "I ran / walked",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin gegangen",
              "english": "I went",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin gekommen",
              "english": "I came",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin angekommen",
              "english": "I arrived",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin zurückgefahren",
              "english": "I traveled back",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin weitergefahren",
              "english": "I continued traveling",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ich bin geblieben",
              "english": "I stayed",
              "includeInTranslationQuiz": false
          },
          {
              "german": "es ist passiert",
              "english": "it happened",
              "includeInTranslationQuiz": false
          },
          {
              "german": "nach Hamburg",
              "english": "to Hamburg",
              "includeInTranslationQuiz": false
          },
          {
              "german": "nach Berlin",
              "english": "to Berlin",
              "includeInTranslationQuiz": false
          },
          {
              "german": "nach Bremen",
              "english": "to Bremen",
              "includeInTranslationQuiz": false
          },
          {
              "german": "nach Düsseldorf",
              "english": "to Düsseldorf",
              "includeInTranslationQuiz": false
          },
          {
              "german": "nach Österreich",
              "english": "to Austria",
              "includeInTranslationQuiz": false
          },
          {
              "german": "in die Schweiz",
              "english": "to Switzerland",
              "includeInTranslationQuiz": false
          },
          {
              "german": "in die Türkei",
              "english": "to Turkey",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Bodensee",
              "english": "at Lake Constance",
              "includeInTranslationQuiz": false
          },
          {
              "german": "in Konstanz",
              "english": "in Constance",
              "includeInTranslationQuiz": false
          },
          {
              "german": "in Bregenz",
              "english": "in Bregenz",
              "includeInTranslationQuiz": false
          },
          {
              "german": "in Lindau",
              "english": "in Lindau",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Brandenburger Tor",
              "english": "at the Brandenburg Gate",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im Frühling",
              "english": "in spring",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im Sommer",
              "english": "in summer",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im Herbst",
              "english": "in autumn/fall",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im Winter",
              "english": "in winter",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im März",
              "english": "in March",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im August",
              "english": "in August",
              "includeInTranslationQuiz": false
          },
          {
              "german": "im Dezember",
              "english": "in December",
              "includeInTranslationQuiz": false
          },
          {
              "german": "seit 1977",
              "english": "since 1977",
              "includeInTranslationQuiz": false
          },
          {
              "german": "seit fast 1000 Jahren",
              "english": "for almost 1000 years",
              "includeInTranslationQuiz": false
          },
          {
              "german": "jedes Jahr",
              "english": "every year",
              "includeInTranslationQuiz": false
          },
          {
              "german": "ein paar Tage",
              "english": "a few days",
              "includeInTranslationQuiz": false
          },
          {
              "german": "vier Tage",
              "english": "four days",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Montagabend",
              "english": "on Monday evening",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Dienstag",
              "english": "on Tuesday",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Mittwoch",
              "english": "on Wednesday",
              "includeInTranslationQuiz": false
          },
          {
              "german": "am Donnerstag",
              "english": "on Thursday",
              "includeInTranslationQuiz": false
          },
          {
              "german": "heute Nacht",
              "english": "tonight",
              "includeInTranslationQuiz": false
          },
          {
              "german": "letztes Jahr",
              "english": "last year",
              "includeInTranslationQuiz": false
          }
      ]
  }
];
