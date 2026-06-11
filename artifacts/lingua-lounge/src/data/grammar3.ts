import { type GrammarQuestion as BaseGrammarQuestion } from "@/data/grammar";

export type GrammarQuestion = BaseGrammarQuestion & {
  explanation?: string;
};

const KOENNEN = ["kann", "kannst", "können", "könnt"];
const MOEGEN = ["mag", "magst", "mögen", "mögt"];
const MOECHTEN = ["möchte", "möchtest", "möchten", "möchtet"];
const LESEN = ["lese", "liest", "lesen", "lest"];
const TREFFEN = ["treffe", "triffst", "trifft", "treffen"];
const FAHREN = ["fahre", "fährst", "fährt", "fahren"];
const WISSEN = ["weiß", "weißt", "wissen", "wisst"];
const ESSEN = ["esse", "isst", "essen", "esst"];
const NEHMEN = ["nehme", "nimmst", "nimmt", "nehmen"];
const FINDEN = ["finde", "findest", "findet", "finden"];
const GLAUBEN = ["glaube", "glaubst", "glaubt", "glauben"];
const HOEREN = ["höre", "hörst", "hört", "hören"];
const SEHEN = ["sehe", "siehst", "sieht", "sehen"];
const TRINKEN = ["trinke", "trinkst", "trinkt", "trinken"];
const TEMPORAL = ["am", "um"];
const FREQUENCY = ["immer", "oft", "manchmal", "fast nie", "nie", "jeden Tag"];
const NEG_ARTICLE = ["keinen", "kein", "keine", "nicht"];
const INDEF_AKK = ["einen", "ein", "eine"];

export const grammar3Bank: GrammarQuestion[] = [

  // ── 1. können Conjugation ────────────────────────────────────────────
  { category: "können Conjugation", prompt: "Ich _____ gut tanzen.", answer: "kann", options: KOENNEN },
  { category: "können Conjugation", prompt: "Du _____ sehr gut singen.", answer: "kannst", options: KOENNEN },
  { category: "können Conjugation", prompt: "Wir _____ heute Tennis spielen.", answer: "können", options: KOENNEN },
  { category: "können Conjugation", prompt: "Ihr _____ am Samstag Tennis spielen.", answer: "könnt", options: KOENNEN },
  { category: "können Conjugation", prompt: "Julia _____ gut schwimmen.", answer: "kann", options: KOENNEN },
  { category: "können Conjugation", prompt: "Tom und Eva _____ Gitarre spielen.", answer: "können", options: KOENNEN },
  { category: "können Conjugation", prompt: "_____ du Schach spielen?", answer: "kannst", options: KOENNEN },
  { category: "können Conjugation", prompt: "Wir _____ am Wochenende reisen.", answer: "können", options: KOENNEN },

  // ── 2. mögen Conjugation ─────────────────────────────────────────────
  { category: "mögen Conjugation", prompt: "Ich _____ Kaffee.", answer: "mag", options: MOEGEN },
  { category: "mögen Conjugation", prompt: "Du _____ Tee.", answer: "magst", options: MOEGEN },
  { category: "mögen Conjugation", prompt: "Wir _____ Schokolade.", answer: "mögen", options: MOEGEN },
  { category: "mögen Conjugation", prompt: "Ihr _____ Kuchen.", answer: "mögt", options: MOEGEN },
  { category: "mögen Conjugation", prompt: "Er _____ keinen Fisch.", answer: "mag", options: MOEGEN },
  { category: "mögen Conjugation", prompt: "Julia _____ keine Suppe.", answer: "mag", options: MOEGEN },
  { category: "mögen Conjugation", prompt: "Die Kinder _____ Apfelsaft.", answer: "mögen", options: MOEGEN },
  { category: "mögen Conjugation", prompt: "_____ du Mineralwasser?", answer: "magst", options: MOEGEN },

  // ── 3. möchten Conjugation ───────────────────────────────────────────
  { category: "möchten Conjugation", prompt: "Ich _____ einen Kaffee.", answer: "möchte", options: MOECHTEN },
  { category: "möchten Conjugation", prompt: "Du _____ ein Brötchen.", answer: "möchtest", options: MOECHTEN },
  { category: "möchten Conjugation", prompt: "Wir _____ heute Kuchen essen.", answer: "möchten", options: MOECHTEN },
  { category: "möchten Conjugation", prompt: "Ihr _____ heute kochen.", answer: "möchtet", options: MOECHTEN },
  { category: "möchten Conjugation", prompt: "Julia _____ Tee trinken.", answer: "möchte", options: MOECHTEN },
  { category: "möchten Conjugation", prompt: "Tom und Lena _____ Tennis spielen.", answer: "möchten", options: MOECHTEN },
  { category: "möchten Conjugation", prompt: "_____ du ein Mineralwasser?", answer: "möchtest", options: MOECHTEN },
  { category: "möchten Conjugation", prompt: "Ich _____ am Freitag Tennis spielen.", answer: "möchte", options: MOECHTEN },

  // ── 4. Stem-Changing Verbs ───────────────────────────────────────────
  { category: "Stem-Changing Verbs", prompt: "Ich _____ gern am Abend.", answer: "lese", options: LESEN },
  { category: "Stem-Changing Verbs", prompt: "Du _____ am Abend.", answer: "liest", options: LESEN },
  { category: "Stem-Changing Verbs", prompt: "Er _____ jeden Tag.", answer: "liest", options: LESEN },
  { category: "Stem-Changing Verbs", prompt: "Ich _____ Julia am Abend.", answer: "treffe", options: TREFFEN },
  { category: "Stem-Changing Verbs", prompt: "Du _____ Julia am Montag.", answer: "triffst", options: TREFFEN },
  { category: "Stem-Changing Verbs", prompt: "Er _____ seine Freunde am Samstag.", answer: "trifft", options: TREFFEN },
  { category: "Stem-Changing Verbs", prompt: "Ich _____ Rad.", answer: "fahre", options: FAHREN },
  { category: "Stem-Changing Verbs", prompt: "Du _____ Ski.", answer: "fährst", options: FAHREN },
  { category: "Stem-Changing Verbs", prompt: "Er _____ am Wochenende Rad.", answer: "fährt", options: FAHREN },
  { category: "Stem-Changing Verbs", prompt: "Ich _____ das leider nicht.", answer: "weiß", options: WISSEN },
  { category: "Stem-Changing Verbs", prompt: "_____ du das?", answer: "weißt", options: WISSEN },
  { category: "Stem-Changing Verbs", prompt: "Ich _____ gern Kuchen.", answer: "esse", options: ESSEN },
  { category: "Stem-Changing Verbs", prompt: "Du _____ jeden Tag Brot.", answer: "isst", options: ESSEN },
  { category: "Stem-Changing Verbs", prompt: "Er _____ einen Kaffee.", answer: "nimmt", options: NEHMEN },

  // ── 5. Regular Verb Conjugation ──────────────────────────────────────
  { category: "Regular Verb Conjugation", prompt: "Ich _____ das Konzert toll.", answer: "finde", options: FINDEN },
  { category: "Regular Verb Conjugation", prompt: "Du _____ das Museum interessant.", answer: "findest", options: FINDEN },
  { category: "Regular Verb Conjugation", prompt: "Wir _____ das Café angenehm.", answer: "finden", options: FINDEN },
  { category: "Regular Verb Conjugation", prompt: "Ich _____, das Essen ist lecker.", answer: "glaube", options: GLAUBEN },
  { category: "Regular Verb Conjugation", prompt: "Du _____, das Theater ist langweilig.", answer: "glaubst", options: GLAUBEN },
  { category: "Regular Verb Conjugation", prompt: "Er _____ das Konzert.", answer: "hört", options: HOEREN },
  { category: "Regular Verb Conjugation", prompt: "Wir _____ das Konzert.", answer: "hören", options: HOEREN },
  { category: "Regular Verb Conjugation", prompt: "Ich _____ das Museum.", answer: "sehe", options: SEHEN },
  { category: "Regular Verb Conjugation", prompt: "Du _____ den Klub.", answer: "siehst", options: SEHEN },
  { category: "Regular Verb Conjugation", prompt: "Wir _____ jeden Tag Tee.", answer: "trinken", options: TRINKEN },

  // ── 6. Temporal Prepositions ────────────────────────────────────────
  { category: "Temporal Prepositions", prompt: "Wir treffen Julia _____ Montag.", answer: "am", options: TEMPORAL },
  { category: "Temporal Prepositions", prompt: "Das Konzert ist _____ Freitag.", answer: "am", options: TEMPORAL },
  { category: "Temporal Prepositions", prompt: "Ich treffe Julia _____ Abend.", answer: "am", options: TEMPORAL },
  { category: "Temporal Prepositions", prompt: "Der Film beginnt _____ acht Uhr.", answer: "um", options: TEMPORAL },
  { category: "Temporal Prepositions", prompt: "Wir essen _____ sieben Uhr.", answer: "um", options: TEMPORAL },
  { category: "Temporal Prepositions", prompt: "Ich habe _____ Wochenende Zeit.", answer: "am", options: TEMPORAL },
  { category: "Temporal Prepositions", prompt: "Das Konzert beginnt _____ halb acht.", answer: "um", options: TEMPORAL },
  { category: "Temporal Prepositions", prompt: "Wir treffen uns _____ Nachmittag.", answer: "am", options: TEMPORAL },

  // ── 7. Sentence Structure ───────────────────────────────────────────
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Julia hat am Montag keine Zeit.", options: ["Julia am Montag hat keine Zeit.", "Julia hat am Montag keine Zeit.", "Hat Julia am Montag keine Zeit.", "Julia keine Zeit hat am Montag."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Am Montag hat Julia keine Zeit.", options: ["Am Montag Julia hat keine Zeit.", "Am Montag hat Julia keine Zeit.", "Am Montag keine Zeit hat Julia.", "Hat am Montag Julia keine Zeit."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Wir spielen heute Tennis.", options: ["Wir heute spielen Tennis.", "Heute wir spielen Tennis.", "Wir spielen heute Tennis.", "Tennis wir heute spielen."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Heute spielen wir Tennis.", options: ["Heute spielen wir Tennis.", "Heute wir spielen Tennis.", "Spielen heute wir Tennis.", "Heute Tennis wir spielen."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Ich trinke jeden Tag Tee.", options: ["Ich jeden Tag trinke Tee.", "Jeden Tag ich trinke Tee.", "Ich trinke jeden Tag Tee.", "Tee ich trinke jeden Tag."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Am Samstag treffe ich Julia.", options: ["Am Samstag treffe ich Julia.", "Am Samstag ich treffe Julia.", "Treffe am Samstag ich Julia.", "Julia ich treffe am Samstag."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Leider habe ich keine Zeit.", options: ["Leider ich habe keine Zeit.", "Leider habe ich keine Zeit.", "Leider keine Zeit ich habe.", "Habe leider ich keine Zeit."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Wir essen um 12 Uhr.", options: ["Wir um 12 Uhr essen.", "Um 12 Uhr wir essen.", "Wir essen um 12 Uhr.", "Essen wir um 12 Uhr."] },

  // ── 8. Modal Verb Sentence Bracket ──────────────────────────────────
  { category: "Modal Verb Sentence Bracket", prompt: "Choose the correct sentence:", answer: "Ich kann gut tanzen.", options: ["Ich gut tanzen kann.", "Ich kann gut tanzen.", "Kann ich gut tanzen.", "Ich tanzen kann gut."] },
  { category: "Modal Verb Sentence Bracket", prompt: "Choose the correct sentence:", answer: "Wir können heute Tennis spielen.", options: ["Wir können heute Tennis spielen.", "Wir spielen können heute Tennis.", "Wir heute können Tennis spielen.", "Wir können spielen heute Tennis."] },
  { category: "Modal Verb Sentence Bracket", prompt: "Choose the correct sentence:", answer: "Du kannst gut kochen.", options: ["Du gut kochen kannst.", "Du kannst gut kochen.", "Du kochen kannst gut.", "Kannst du gut kochen."] },
  { category: "Modal Verb Sentence Bracket", prompt: "Choose the correct sentence:", answer: "Julia kann am Samstag schwimmen.", options: ["Julia kann am Samstag schwimmen.", "Julia schwimmen kann am Samstag.", "Julia kann schwimmt am Samstag.", "Am Samstag Julia kann schwimmen."] },
  { category: "Modal Verb Sentence Bracket", prompt: "Choose the correct sentence:", answer: "Ich möchte einen Kaffee trinken.", options: ["Ich trinken möchte einen Kaffee.", "Ich möchte einen Kaffee trinken.", "Ich möchte trinke einen Kaffee.", "Ich einen Kaffee möchte trinken."] },
  { category: "Modal Verb Sentence Bracket", prompt: "Choose the correct sentence:", answer: "Wir möchten heute Kuchen essen.", options: ["Wir möchten heute Kuchen essen.", "Wir essen möchten heute Kuchen.", "Wir möchten essen heute Kuchen.", "Heute wir möchten Kuchen essen."] },
  { category: "Modal Verb Sentence Bracket", prompt: "Choose the correct sentence:", answer: "Er kann Gitarre spielen.", options: ["Er spielen kann Gitarre.", "Er kann Gitarre spielen.", "Er kann spielt Gitarre.", "Er Gitarre kann spielen."] },
  { category: "Modal Verb Sentence Bracket", prompt: "Choose the correct sentence:", answer: "Ihr könnt heute Tennis spielen.", options: ["Ihr könnt heute Tennis spielen.", "Ihr heute könnt Tennis spielen.", "Ihr spielt könnt heute Tennis.", "Heute ihr könnt Tennis spielen."] },

  // ── 9. Frequency Words ──────────────────────────────────────────────
  { category: "Frequency Words", prompt: "Ich trinke _____ Kaffee. (always)", answer: "immer", options: FREQUENCY },
  { category: "Frequency Words", prompt: "Wir spielen _____ Tennis. (often)", answer: "oft", options: FREQUENCY },
  { category: "Frequency Words", prompt: "Julia spielt _____ Tennis. (sometimes)", answer: "manchmal", options: FREQUENCY },
  { category: "Frequency Words", prompt: "Ich esse _____ Fisch. (almost never)", answer: "fast nie", options: FREQUENCY },
  { category: "Frequency Words", prompt: "Er trinkt _____ Tee. (never)", answer: "nie", options: FREQUENCY },
  { category: "Frequency Words", prompt: "Ich lese _____. (every day)", answer: "jeden Tag", options: FREQUENCY },
  { category: "Frequency Words", prompt: "Wir kochen _____. (often)", answer: "oft", options: FREQUENCY },
  { category: "Frequency Words", prompt: "Du hörst _____ ein Konzert. (sometimes)", answer: "manchmal", options: FREQUENCY },

  // ── 10. Word Formation ──────────────────────────────────────────────
  { category: "Word Formation", prompt: "der Apfel + der Saft = _____", answer: "der Apfelsaft", options: ["der Apfelsaft", "der Apfeltee", "das Apfelbrot", "der Apfelkuchen"], explanation: "Rule:\n\nThe last noun decides the gender.\n\nder Saft\n→ der Apfelsaft" },
  { category: "Word Formation", prompt: "die Schokolade + der Kuchen = _____", answer: "der Schokoladenkuchen", options: ["der Schokoladenkuchen", "das Schokoladebrot", "die Kuchenschokolade", "der Schokoladensaft"], explanation: "Rule:\n\nThe last noun decides the gender.\n\nder Kuchen\n→ der Schokoladenkuchen" },
  { category: "Word Formation", prompt: "der Fisch + der Salat = _____", answer: "der Fischsalat", options: ["der Fischsalat", "der Salatfisch", "die Fischsuppe", "der Fleischsalat"], explanation: "Rule:\n\nThe last noun decides the gender.\n\nder Salat\n→ der Fischsalat" },
  { category: "Word Formation", prompt: "What does Apfelsaft mean?", answer: "apple juice", options: ["apple juice", "apple cake", "orange juice", "mineral water"] },
  { category: "Word Formation", prompt: "What does Schokoladenkuchen mean?", answer: "chocolate cake", options: ["chocolate cake", "favorite food", "bread roll", "fish salad"] },
  { category: "Word Formation", prompt: "What does Fischsalat mean?", answer: "fish salad", options: ["fish salad", "fruit salad", "fish soup", "cheese salad"] },

  // ── 11. Food & Preferences ──────────────────────────────────────────
  { category: "Food & Preferences", prompt: "Ich _____ Kaffee. (to like)", answer: "mag", options: ["mag", "möchte", "esse", "trinke"] },
  { category: "Food & Preferences", prompt: "Ich mag _____ Fisch.", answer: "keinen", options: NEG_ARTICLE },
  { category: "Food & Preferences", prompt: "Ich mag _____ Fleisch.", answer: "kein", options: NEG_ARTICLE },
  { category: "Food & Preferences", prompt: "Ich mag _____ Suppe.", answer: "keine", options: NEG_ARTICLE },
  { category: "Food & Preferences", prompt: "Ich esse _____ Kuchen. (gladly / like to)", answer: "gern", options: ["gern", "oft", "nie", "leider"], acceptedAnswers: ["gern", "gerne"] },
  { category: "Food & Preferences", prompt: "Ich trinke _____ Tee. (every day)", answer: "jeden Tag", options: FREQUENCY },
  { category: "Food & Preferences", prompt: "Ich möchte _____ Kaffee.", answer: "einen", options: INDEF_AKK },
  { category: "Food & Preferences", prompt: "Ich nehme _____ Brötchen.", answer: "ein", options: INDEF_AKK },
  { category: "Food & Preferences", prompt: "Julia möchte _____ Suppe.", answer: "eine", options: INDEF_AKK },
  { category: "Food & Preferences", prompt: "Der Kuchen ist _____.", answer: "lecker", options: ["lecker", "jeden Tag", "keinen", "morgen"] },
  { category: "Food & Preferences", prompt: "Mein _____ ist Schokoladenkuchen.", answer: "Lieblingsessen", options: ["Lieblingsessen", "Lieblingsgetränk", "Apfelsaft", "Mineralwasser"] },
  { category: "Food & Preferences", prompt: "Mein _____ ist Apfelsaft.", answer: "Lieblingsgetränk", options: ["Lieblingsgetränk", "Lieblingsessen", "Kuchen", "Fischsalat"] },
];

export const GRAMMAR3_QUIZ_SIZE = 20;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildGrammarQuiz3(): GrammarQuestion[] {
  const categories = [...new Set(grammar3Bank.map((q) => q.category))];
  const selected: GrammarQuestion[] = [];

  for (const cat of categories) {
    const pool = shuffle(grammar3Bank.filter((q) => q.category === cat));
    if (pool.length > 0) selected.push(pool[0]);
  }

  const remaining = shuffle(grammar3Bank.filter((q) => !selected.includes(q)));
  while (selected.length < GRAMMAR3_QUIZ_SIZE && remaining.length > 0) {
    selected.push(remaining.shift()!);
  }

  return shuffle(selected.slice(0, GRAMMAR3_QUIZ_SIZE));
}
