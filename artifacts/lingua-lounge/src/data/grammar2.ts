import { type GrammarQuestion } from "@/data/grammar";
export type { GrammarQuestion };

export const grammar2Bank: GrammarQuestion[] = [

  // ── 1. Verb Conjugation — sehen ───────────────────────────────────────
  { category: "Verb — sehen", prompt: "Ich _____ den Tisch.", answer: "sehe", options: ["siehst", "sehe", "sieht", "sehen"] },
  { category: "Verb — sehen", prompt: "Du _____ das Bild.", answer: "siehst", options: ["sehe", "siehst", "sehen", "sieht"] },
  { category: "Verb — sehen", prompt: "Er _____ die Lampe.", answer: "sieht", options: ["sehen", "sehe", "sieht", "siehst"] },
  { category: "Verb — sehen", prompt: "Wir _____ den Kalender.", answer: "sehen", options: ["sehe", "sieht", "siehst", "sehen"] },
  { category: "Verb — sehen", prompt: "Sie (she) _____ das Tablet.", answer: "sieht", options: ["sehe", "sehen", "sieht", "siehst"] },
  { category: "Verb — sehen", prompt: "Ich _____ das Buch.", answer: "sehe", options: ["sieht", "sehe", "sehen", "siehst"] },
  { category: "Verb — sehen", prompt: "Du _____ die Tasche.", answer: "siehst", options: ["siehst", "sehe", "sehen", "sieht"] },

  // ── 2. Definite Articles — Nominativ ─────────────────────────────────
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Tisch. (masculine)", answer: "der", options: ["die", "das", "der", "den"] },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Lampe. (feminine)", answer: "die", options: ["der", "die", "das", "den"] },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Bild. (neuter)", answer: "das", options: ["der", "den", "das", "die"] },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Computer. (masculine)", answer: "der", options: ["das", "die", "den", "der"] },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ E-Mail. (feminine)", answer: "die", options: ["das", "der", "die", "den"] },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Passwort. (neuter)", answer: "das", options: ["die", "der", "den", "das"] },
  { category: "Def. Article — Nominativ", prompt: "Das ist _____ Drucker. (masculine)", answer: "der", options: ["der", "die", "das", "den"] },

  // ── 3. Indefinite Articles — Nominativ ───────────────────────────────
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Tisch.", answer: "ein", options: ["eine", "ein", "kein", "der"] },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Uhr.", answer: "eine", options: ["ein", "eine", "keine", "die"] },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Buch.", answer: "ein", options: ["eine", "ein", "das", "kein"] },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Stuhl.", answer: "ein", options: ["ein", "eine", "kein", "der"] },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Lampe.", answer: "eine", options: ["ein", "keine", "eine", "die"] },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Tablet.", answer: "ein", options: ["eine", "kein", "ein", "das"] },
  { category: "Indef. Article — Nominativ", prompt: "Das ist _____ Laptop.", answer: "ein", options: ["eine", "ein", "der", "kein"] },

  // ── 4. Negative Articles — Nominativ ─────────────────────────────────
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Tisch.", answer: "kein", options: ["keine", "kein", "ein", "eine"] },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Lampe.", answer: "keine", options: ["kein", "keine", "ein", "eine"] },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Bild.", answer: "kein", options: ["keine", "ein", "kein", "eine"] },
  { category: "Neg. Article — Nominativ", prompt: "Das sind _____ Termine.", answer: "keine", options: ["kein", "keinen", "keine", "ein"] },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Stuhl.", answer: "kein", options: ["keinen", "kein", "keine", "einen"] },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Uhr.", answer: "keine", options: ["kein", "keine", "ein", "eine"] },
  { category: "Neg. Article — Nominativ", prompt: "Das ist _____ Passwort.", answer: "kein", options: ["keine", "keinen", "kein", "eine"] },

  // ── 5. Definite Articles — Akkusativ ─────────────────────────────────
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Tisch.", answer: "den", options: ["der", "die", "den", "das"] },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Lampe.", answer: "die", options: ["den", "die", "der", "das"] },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Bild.", answer: "das", options: ["den", "das", "die", "der"] },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Stuhl.", answer: "den", options: ["der", "den", "die", "das"] },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Uhr.", answer: "die", options: ["das", "den", "die", "der"] },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Laptop.", answer: "den", options: ["die", "das", "der", "den"] },
  { category: "Def. Article — Akkusativ", prompt: "Ich sehe _____ Tablet.", answer: "das", options: ["den", "die", "das", "der"] },

  // ── 6. Indefinite Articles — Akkusativ ───────────────────────────────
  { category: "Indef. Article — Akkusativ", prompt: "Ich habe _____ Kalender.", answer: "einen", options: ["ein", "eine", "einen", "kein"] },
  { category: "Indef. Article — Akkusativ", prompt: "Ich brauche _____ Tasche.", answer: "eine", options: ["einen", "eine", "ein", "keine"] },
  { category: "Indef. Article — Akkusativ", prompt: "Ich sehe _____ Tablet.", answer: "ein", options: ["einen", "eine", "ein", "kein"] },
  { category: "Indef. Article — Akkusativ", prompt: "Ich kaufe _____ Schrank.", answer: "einen", options: ["ein", "einen", "eine", "kein"] },
  { category: "Indef. Article — Akkusativ", prompt: "Ich brauche _____ Lampe.", answer: "eine", options: ["einen", "ein", "eine", "keine"] },
  { category: "Indef. Article — Akkusativ", prompt: "Ich habe _____ Buch.", answer: "ein", options: ["einen", "ein", "eine", "kein"] },
  { category: "Indef. Article — Akkusativ", prompt: "Ich suche _____ Drucker.", answer: "einen", options: ["ein", "eine", "keinen", "einen"] },

  // ── 7. Negative Articles — Akkusativ ─────────────────────────────────
  { category: "Neg. Article — Akkusativ", prompt: "Ich habe _____ Termin.", answer: "keinen", options: ["kein", "keine", "keinen", "einen"] },
  { category: "Neg. Article — Akkusativ", prompt: "Ich brauche _____ Tasche.", answer: "keine", options: ["keinen", "keine", "kein", "eine"] },
  { category: "Neg. Article — Akkusativ", prompt: "Ich sehe _____ Tablet.", answer: "kein", options: ["keinen", "kein", "keine", "ein"] },
  { category: "Neg. Article — Akkusativ", prompt: "Ich habe _____ Stuhl.", answer: "keinen", options: ["kein", "keinen", "keine", "einen"] },
  { category: "Neg. Article — Akkusativ", prompt: "Ich brauche _____ Lampe.", answer: "keine", options: ["kein", "keine", "keinen", "eine"] },
  { category: "Neg. Article — Akkusativ", prompt: "Ich habe _____ Passwort.", answer: "kein", options: ["keine", "kein", "keinen", "ein"] },
  { category: "Neg. Article — Akkusativ", prompt: "Ich sehe _____ Kalender.", answer: "keinen", options: ["kein", "keine", "einen", "keinen"] },

  // ── 8. Singular → Plural ─────────────────────────────────────────────
  { category: "Singular → Plural", prompt: "das Buch → _____", answer: "die Bücher", options: ["die Buche", "die Bücher", "die Buchs", "die Büche"] },
  { category: "Singular → Plural", prompt: "der Laptop → _____", answer: "die Laptops", options: ["die Laptöpe", "die Lapts", "die Laptops", "die Laptoppen"] },
  { category: "Singular → Plural", prompt: "die Maus → _____", answer: "die Mäuse", options: ["die Mausen", "die Mäuse", "die Mäusen", "die Maus"] },
  { category: "Singular → Plural", prompt: "das Passwort → _____", answer: "die Passwörter", options: ["die Passworte", "die Passwörter", "die Passworten", "die Passwords"] },
  { category: "Singular → Plural", prompt: "die Nachricht → _____", answer: "die Nachrichten", options: ["die Nachrichten", "die Nachrichte", "die Nachrichts", "die Nachrichtten"] },
  { category: "Singular → Plural", prompt: "das Tablet → _____", answer: "die Tablets", options: ["die Tabletten", "die Tableten", "die Tablets", "die Tablets"] },
  { category: "Singular → Plural", prompt: "der Tisch → _____", answer: "die Tische", options: ["die Tischer", "die Tische", "die Tischen", "die Tisché"] },

  // ── 9. Personal Pronouns (er/sie/es) ─────────────────────────────────
  { category: "Personal Pronouns", prompt: "der Stuhl → _____", answer: "er", options: ["sie", "er", "es", "wir"] },
  { category: "Personal Pronouns", prompt: "die Lampe → _____", answer: "sie", options: ["er", "sie", "es", "wir"] },
  { category: "Personal Pronouns", prompt: "das Bild → _____", answer: "es", options: ["er", "sie", "es", "wir"] },
  { category: "Personal Pronouns", prompt: "der Computer → _____", answer: "er", options: ["es", "sie", "wir", "er"] },
  { category: "Personal Pronouns", prompt: "die Uhr → _____", answer: "sie", options: ["er", "es", "sie", "wir"] },
  { category: "Personal Pronouns", prompt: "das Sofa → _____", answer: "es", options: ["er", "es", "sie", "wir"] },
  { category: "Personal Pronouns", prompt: "der Tisch → _____", answer: "er", options: ["sie", "wir", "es", "er"] },

  // ── 10. Preposition — aus ─────────────────────────────────────────────
  { category: "Preposition — aus", prompt: "Die Flasche ist _____ Plastik.", answer: "aus", options: ["von", "in", "aus", "mit"] },
  { category: "Preposition — aus", prompt: "Der Tisch ist _____ Holz.", answer: "aus", options: ["mit", "aus", "von", "in"] },
  { category: "Preposition — aus", prompt: "Die Brille ist _____ Metall.", answer: "aus", options: ["in", "von", "mit", "aus"] },
  { category: "Preposition — aus", prompt: "Das Regal ist _____ Holz.", answer: "aus", options: ["aus", "von", "in", "mit"] },
  { category: "Preposition — aus", prompt: "Die Tasche ist _____ Leder.", answer: "aus", options: ["von", "aus", "mit", "in"] },
  { category: "Preposition — aus", prompt: "Der Stuhl ist _____ Plastik.", answer: "aus", options: ["mit", "in", "aus", "von"] },

  // ── 11. Asking Prices ─────────────────────────────────────────────────
  { category: "Asking Prices", prompt: "_____ kostet der Stuhl?", answer: "Wie viel", options: ["Was", "Wie viel", "Wie", "Woher"] },
  { category: "Asking Prices", prompt: "_____ kostet die Lampe?", answer: "Wie viel", options: ["Wie viel", "Was", "Wie", "Woher"] },
  { category: "Asking Prices", prompt: "_____ kostet das Sofa?", answer: "Wie viel", options: ["Wie", "Woher", "Was", "Wie viel"] },
  { category: "Asking Prices", prompt: "Was kostet das Sofa?\n→ _____ kostet 399 Euro.", answer: "Es", options: ["Er", "Sie", "Es", "Das"] },
  { category: "Asking Prices", prompt: "Was kostet der Drucker?\n→ _____ kostet 89 Euro.", answer: "Er", options: ["Es", "Er", "Sie", "Das"] },
  { category: "Asking Prices", prompt: "Was kostet die Lampe?\n→ _____ kostet 29 Euro.", answer: "Sie", options: ["Er", "Es", "Das", "Sie"] },

  // ── 12. Describing Objects ────────────────────────────────────────────
  { category: "Describing Objects", prompt: "Der Stuhl ist nicht schön. → Er ist _____.", answer: "hässlich", options: ["schön", "hässlich", "günstig", "modern"] },
  { category: "Describing Objects", prompt: "Das Sofa ist nicht teuer. → Es ist _____.", answer: "günstig", options: ["teuer", "günstig", "hässlich", "klein"] },
  { category: "Describing Objects", prompt: "Der Schrank ist nicht alt. → Er ist _____.", answer: "modern", options: ["alt", "modern", "neu", "groß"] },
  { category: "Describing Objects", prompt: "Das Regal ist nicht klein. → Es ist _____.", answer: "groß", options: ["groß", "klein", "billig", "neu"] },
  { category: "Describing Objects", prompt: "Die Lampe ist nicht neu. → Sie ist _____.", answer: "alt", options: ["neu", "alt", "modern", "schön"] },
  { category: "Describing Objects", prompt: "Der Tisch ist nicht günstig. → Er ist _____.", answer: "teuer", options: ["günstig", "teuer", "billig", "hässlich"] },
  { category: "Describing Objects", prompt: "Das Sofa ist groß und _____.", answer: "praktisch", options: ["hässlich", "billig", "teuer", "praktisch"] },

  // ── 13. Verb Usage — finden ───────────────────────────────────────────
  { category: "Verb — finden", prompt: "Ich _____ das Sofa schön.", answer: "finde", options: ["findest", "finde", "findet", "finden"] },
  { category: "Verb — finden", prompt: "Wir _____ den Preis gut.", answer: "finden", options: ["finde", "findest", "findet", "finden"] },
  { category: "Verb — finden", prompt: "Du _____ das Regal praktisch?", answer: "findest", options: ["finde", "findest", "findet", "finden"] },
  { category: "Verb — finden", prompt: "Er _____ die Lampe schön.", answer: "findet", options: ["finden", "finde", "findet", "findest"] },
  { category: "Verb — finden", prompt: "Ich _____ das Bett bequem.", answer: "finde", options: ["findet", "finden", "finde", "findest"] },
  { category: "Verb — finden", prompt: "Wir _____ den Schrank zu groß.", answer: "finden", options: ["finde", "finden", "findest", "findet"] },

  // ── 14. Verb Usage — kosten ───────────────────────────────────────────
  { category: "Verb — kosten", prompt: "Das Buch _____ zehn Euro.", answer: "kostet", options: ["kosten", "kostet", "koste", "kostete"] },
  { category: "Verb — kosten", prompt: "Der Schrank _____ 99 Euro.", answer: "kostet", options: ["kostet", "kosten", "koste", "kostete"] },
  { category: "Verb — kosten", prompt: "Die Stühle _____ 50 Euro.", answer: "kosten", options: ["kostet", "kosten", "koste", "kostete"] },
  { category: "Verb — kosten", prompt: "Das Sofa _____ 399 Euro.", answer: "kostet", options: ["kosten", "koste", "kostet", "kostete"] },
  { category: "Verb — kosten", prompt: "Die Bücher _____ 15 Euro.", answer: "kosten", options: ["kostet", "koste", "kostete", "kosten"] },
  { category: "Verb — kosten", prompt: "Der Drucker _____ 89 Euro.", answer: "kostet", options: ["kosten", "koste", "kostet", "kostete"] },
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
