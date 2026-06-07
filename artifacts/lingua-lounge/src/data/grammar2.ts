import { type GrammarQuestion } from "@/data/grammar";
export type { GrammarQuestion };

// Fixed option pools per grammar category — no stray vocabulary words
const DEF_NOM  = ["der", "die", "das", "den"];          // nominative + acc-masc as distractor
const DEF_AKK  = ["den", "die", "das", "der"];          // accusative + nom-masc as distractor
const INDEF_NOM = ["ein", "eine"];
const INDEF_AKK = ["einen", "eine", "ein"];
const NEG_NOM  = ["kein", "keine"];
const NEG_AKK  = ["keinen", "keine", "kein"];
const PRONOUN  = ["er", "sie", "es"];
const SEHEN    = ["sehe", "siehst", "sieht", "sehen"];
const FINDEN   = ["finde", "findest", "findet", "finden"];
const KOSTEN   = ["koste", "kostet", "kosten"];

export const grammar2Bank: GrammarQuestion[] = [

  // ── 1. Verb Conjugation — sehen ───────────────────────────────────────
  { category: "Verb — sehen", prompt: "Ich _____ den Tisch.",     answer: "sehe",   options: SEHEN },
  { category: "Verb — sehen", prompt: "Du _____ das Bild.",       answer: "siehst", options: SEHEN },
  { category: "Verb — sehen", prompt: "Er _____ die Lampe.",      answer: "sieht",  options: SEHEN },
  { category: "Verb — sehen", prompt: "Wir _____ den Kalender.",  answer: "sehen",  options: SEHEN },
  { category: "Verb — sehen", prompt: "Sie _____ das Tablet.",    answer: "sieht",  options: SEHEN },
  { category: "Verb — sehen", prompt: "Ich _____ das Buch.",      answer: "sehe",   options: SEHEN },
  { category: "Verb — sehen", prompt: "Du _____ die Tasche.",     answer: "siehst", options: SEHEN },

  // ── 2. Definite Articles — Nominativ ─────────────────────────────────
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Tisch.",    answer: "der", options: DEF_NOM },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Lampe.",    answer: "die", options: DEF_NOM },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Bild.",     answer: "das", options: DEF_NOM },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Computer.", answer: "der", options: DEF_NOM },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ E-Mail.",   answer: "die", options: DEF_NOM },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Passwort.", answer: "das", options: DEF_NOM },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Drucker.",  answer: "der", options: DEF_NOM },

  // ── 3. Indefinite Articles — Nominativ ───────────────────────────────
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Tisch.",   answer: "ein",  options: INDEF_NOM },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Uhr.",     answer: "eine", options: INDEF_NOM },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Buch.",    answer: "ein",  options: INDEF_NOM },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Stuhl.",   answer: "ein",  options: INDEF_NOM },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Lampe.",   answer: "eine", options: INDEF_NOM },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Tablet.",  answer: "ein",  options: INDEF_NOM },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Laptop.",  answer: "ein",  options: INDEF_NOM },

  // ── 4. Negative Articles — Nominativ ─────────────────────────────────
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Tisch.",     answer: "kein",  options: NEG_NOM },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Lampe.",     answer: "keine", options: NEG_NOM },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Bild.",      answer: "kein",  options: NEG_NOM },
  { category: "Neg. Article — Nominativ", prompt: "Das sind _____ Termine.",  answer: "keine", options: NEG_NOM },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Stuhl.",     answer: "kein",  options: NEG_NOM },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Uhr.",       answer: "keine", options: NEG_NOM },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Passwort.",  answer: "kein",  options: NEG_NOM },

  // ── 5. Definite Articles — Akkusativ ─────────────────────────────────
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Tisch.",   answer: "den", options: DEF_AKK },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Lampe.",   answer: "die", options: DEF_AKK },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Bild.",    answer: "das", options: DEF_AKK },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Stuhl.",   answer: "den", options: DEF_AKK },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Uhr.",     answer: "die", options: DEF_AKK },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Laptop.",  answer: "den", options: DEF_AKK },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Tablet.",  answer: "das", options: DEF_AKK },

  // ── 6. Indefinite Articles — Akkusativ ───────────────────────────────
  { category: "Indef. Article — Akkusativ", prompt: "Ich habe _____ Kalender.",  answer: "einen", options: INDEF_AKK },
  { category: "Indef. Article — Akkusativ", prompt: "Ich brauche _____ Tasche.", answer: "eine",  options: INDEF_AKK },
  { category: "Indef. Article — Akkusativ", prompt: "Ich sehe _____ Tablet.",    answer: "ein",   options: INDEF_AKK },
  { category: "Indef. Article — Akkusativ", prompt: "Ich kaufe _____ Schrank.",  answer: "einen", options: INDEF_AKK },
  { category: "Indef. Article — Akkusativ", prompt: "Ich brauche _____ Lampe.",  answer: "eine",  options: INDEF_AKK },
  { category: "Indef. Article — Akkusativ", prompt: "Ich habe _____ Buch.",      answer: "ein",   options: INDEF_AKK },
  { category: "Indef. Article — Akkusativ", prompt: "Ich suche _____ Drucker.",  answer: "einen", options: INDEF_AKK },

  // ── 7. Negative Articles — Akkusativ ─────────────────────────────────
  { category: "Neg. Article — Akkusativ", prompt: "Ich habe _____ Termin.",     answer: "keinen", options: NEG_AKK },
  { category: "Neg. Article — Akkusativ", prompt: "Ich brauche _____ Tasche.",  answer: "keine",  options: NEG_AKK },
  { category: "Neg. Article — Akkusativ", prompt: "Ich sehe _____ Tablet.",     answer: "kein",   options: NEG_AKK },
  { category: "Neg. Article — Akkusativ", prompt: "Ich habe _____ Stuhl.",      answer: "keinen", options: NEG_AKK },
  { category: "Neg. Article — Akkusativ", prompt: "Ich brauche _____ Lampe.",   answer: "keine",  options: NEG_AKK },
  { category: "Neg. Article — Akkusativ", prompt: "Ich habe _____ Passwort.",   answer: "kein",   options: NEG_AKK },
  { category: "Neg. Article — Akkusativ", prompt: "Ich sehe _____ Kalender.",   answer: "keinen", options: NEG_AKK },

  // ── 8. Singular → Plural ─────────────────────────────────────────────
  { category: "Singular → Plural", prompt: "das Buch → _____",      answer: "die Bücher",      options: ["die Buche", "die Bücher", "die Buchs", "die Büche"] },
  { category: "Singular → Plural", prompt: "der Laptop → _____",    answer: "die Laptops",     options: ["die Laptöpe", "die Laptoppen", "die Laptos", "die Laptops"] },
  { category: "Singular → Plural", prompt: "die Maus → _____",      answer: "die Mäuse",       options: ["die Mausen", "die Mäusen", "die Mäuse", "die Maus"] },
  { category: "Singular → Plural", prompt: "das Passwort → _____",  answer: "die Passwörter",  options: ["die Passworte", "die Passworten", "die Passwords", "die Passwörter"] },
  { category: "Singular → Plural", prompt: "die Nachricht → _____", answer: "die Nachrichten", options: ["die Nachrichte", "die Nachrichten", "die Nachrichts", "die Nachrichtten"] },
  { category: "Singular → Plural", prompt: "das Tablet → _____",    answer: "die Tablets",     options: ["die Tabletten", "die Tableten", "die Tablete", "die Tablets"] },
  { category: "Singular → Plural", prompt: "der Tisch → _____",     answer: "die Tische",      options: ["die Tischer", "die Tischen", "die Tische", "die Tisché"] },

  // ── 9. Personal Pronouns (er / sie / es) ─────────────────────────────
  { category: "Personal Pronouns", prompt: "der Stuhl → _____",    answer: "er",  options: PRONOUN },
  { category: "Personal Pronouns", prompt: "die Lampe → _____",    answer: "sie", options: PRONOUN },
  { category: "Personal Pronouns", prompt: "das Bild → _____",     answer: "es",  options: PRONOUN },
  { category: "Personal Pronouns", prompt: "der Computer → _____", answer: "er",  options: PRONOUN },
  { category: "Personal Pronouns", prompt: "die Uhr → _____",      answer: "sie", options: PRONOUN },
  { category: "Personal Pronouns", prompt: "das Sofa → _____",     answer: "es",  options: PRONOUN },
  { category: "Personal Pronouns", prompt: "der Tisch → _____",    answer: "er",  options: PRONOUN },

  // ── 10. Preposition — aus ─────────────────────────────────────────────
  { category: "Preposition — aus", prompt: "Die Flasche ist _____ Plastik.", answer: "aus", options: ["von", "in", "aus", "mit"] },
  { category: "Preposition — aus", prompt: "Der Tisch ist _____ Holz.",      answer: "aus", options: ["mit", "aus", "von", "in"] },
  { category: "Preposition — aus", prompt: "Die Brille ist _____ Metall.",   answer: "aus", options: ["in", "von", "mit", "aus"] },
  { category: "Preposition — aus", prompt: "Das Regal ist _____ Holz.",      answer: "aus", options: ["aus", "von", "in", "mit"] },
  { category: "Preposition — aus", prompt: "Die Tasche ist _____ Leder.",    answer: "aus", options: ["von", "aus", "mit", "in"] },
  { category: "Preposition — aus", prompt: "Der Stuhl ist _____ Plastik.",   answer: "aus", options: ["mit", "in", "aus", "von"] },

  // ── 11. Asking Prices ─────────────────────────────────────────────────
  { category: "Asking Prices", prompt: "_____ kostet der Stuhl?",                        answer: "Wie viel", options: ["Was", "Wie viel", "Wie", "Woher"] },
  { category: "Asking Prices", prompt: "_____ kostet die Lampe?",                        answer: "Wie viel", options: ["Wie viel", "Was", "Wie", "Woher"] },
  { category: "Asking Prices", prompt: "_____ kostet das Sofa?",                         answer: "Wie viel", options: ["Wie", "Woher", "Was", "Wie viel"] },
  { category: "Asking Prices", prompt: "Was kostet das Sofa?\n→ _____ kostet 399 Euro.", answer: "Es",       options: ["Er", "Sie", "Es", "Das"] },
  { category: "Asking Prices", prompt: "Was kostet der Drucker?\n→ _____ kostet 89 Euro.", answer: "Er",     options: ["Es", "Er", "Sie", "Das"] },
  { category: "Asking Prices", prompt: "Was kostet die Lampe?\n→ _____ kostet 29 Euro.", answer: "Sie",      options: ["Er", "Es", "Das", "Sie"] },

  // ── 12. Describing Objects ────────────────────────────────────────────
  { category: "Describing Objects", prompt: "Der Stuhl ist nicht schön. → Er ist _____.",   answer: "hässlich",  options: ["schön", "hässlich", "günstig", "modern"] },
  { category: "Describing Objects", prompt: "Das Sofa ist nicht teuer. → Es ist _____.",    answer: "günstig",   options: ["teuer", "günstig", "billig", "hässlich"],  acceptedAnswers: ["günstig", "billig"] },
  { category: "Describing Objects", prompt: "Der Schrank ist nicht alt. → Er ist _____.",   answer: "neu",       options: ["alt", "modern", "neu", "groß"],             acceptedAnswers: ["neu", "modern"] },
  { category: "Describing Objects", prompt: "Das Regal ist nicht klein. → Es ist _____.",   answer: "groß",      options: ["groß", "klein", "billig", "neu"] },
  { category: "Describing Objects", prompt: "Die Lampe ist nicht neu. → Sie ist _____.",    answer: "alt",       options: ["neu", "alt", "modern", "schön"] },
  { category: "Describing Objects", prompt: "Der Tisch ist nicht günstig. → Er ist _____.", answer: "teuer",     options: ["günstig", "teuer", "billig", "hässlich"] },
  { category: "Describing Objects", prompt: "Das Sofa ist groß und _____.",                 answer: "praktisch", options: ["hässlich", "billig", "teuer", "praktisch"] },

  // ── 13. Verb Usage — finden ───────────────────────────────────────────
  { category: "Verb — finden", prompt: "Ich _____ das Sofa schön.",       answer: "finde",   options: FINDEN },
  { category: "Verb — finden", prompt: "Wir _____ den Preis gut.",        answer: "finden",  options: FINDEN },
  { category: "Verb — finden", prompt: "Du _____ das Regal praktisch?",   answer: "findest", options: FINDEN },
  { category: "Verb — finden", prompt: "Er _____ die Lampe schön.",       answer: "findet",  options: FINDEN },
  { category: "Verb — finden", prompt: "Ich _____ das Bett bequem.",      answer: "finde",   options: FINDEN },
  { category: "Verb — finden", prompt: "Wir _____ den Schrank zu groß.",  answer: "finden",  options: FINDEN },

  // ── 14. Verb Usage — kosten ───────────────────────────────────────────
  { category: "Verb — kosten", prompt: "Das Buch _____ zehn Euro.",    answer: "kostet", options: KOSTEN },
  { category: "Verb — kosten", prompt: "Der Schrank _____ 99 Euro.",   answer: "kostet", options: KOSTEN },
  { category: "Verb — kosten", prompt: "Die Stühle _____ 50 Euro.",    answer: "kosten", options: KOSTEN },
  { category: "Verb — kosten", prompt: "Das Sofa _____ 399 Euro.",     answer: "kostet", options: KOSTEN },
  { category: "Verb — kosten", prompt: "Die Bücher _____ 15 Euro.",    answer: "kosten", options: KOSTEN },
  { category: "Verb — kosten", prompt: "Der Drucker _____ 89 Euro.",   answer: "kostet", options: KOSTEN },
];

export const GRAMMAR2_QUIZ_SIZE = 20;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildGrammarQuiz2(): GrammarQuestion[] {
  const categories = [...new Set(grammar2Bank.map((q) => q.category))];
  const selected: GrammarQuestion[] = [];

  for (const cat of categories) {
    const pool = shuffle(grammar2Bank.filter((q) => q.category === cat));
    if (pool.length > 0) selected.push(pool[0]);
  }

  const remaining = shuffle(grammar2Bank.filter((q) => !selected.includes(q)));
  while (selected.length < GRAMMAR2_QUIZ_SIZE && remaining.length > 0) {
    selected.push(remaining.shift()!);
  }

  return shuffle(selected.slice(0, GRAMMAR2_QUIZ_SIZE));
}
