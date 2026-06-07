export type GrammarQuestion = {
  category: string;
  prompt: string;
  options: string[];
  answer: string;
  acceptedAnswers?: string[];
};

export const grammarBank: GrammarQuestion[] = [

  // ── 1. Verb Conjugation ──────────────────────────────────────────────
  { category: "Verb Conjugation", prompt: "Ich _____ aus Spanien.", answer: "komme", options: ["kommst", "komme", "kommt", "kommen"] },
  { category: "Verb Conjugation", prompt: "Du _____ aus Deutschland?", answer: "kommst", options: ["komme", "kommst", "kommen", "kommt"] },
  { category: "Verb Conjugation", prompt: "Er _____ aus der Türkei.", answer: "kommt", options: ["kommen", "komme", "kommst", "kommt"] },
  { category: "Verb Conjugation", prompt: "Wir _____ Deutsch.", answer: "lernen", options: ["lernt", "lernen", "lerne", "lernst"] },
  { category: "Verb Conjugation", prompt: "Sie (she) _____ Englisch.", answer: "lernt", options: ["lernen", "lerne", "lernt", "lernst"] },
  { category: "Verb Conjugation", prompt: "Ich _____ in München.", answer: "wohne", options: ["wohnt", "wohnen", "wohne", "wohnst"] },
  { category: "Verb Conjugation", prompt: "Er _____ in Berlin.", answer: "wohnt", options: ["wohnen", "wohne", "wohnst", "wohnt"] },
  { category: "Verb Conjugation", prompt: "Wie _____ du?", answer: "heißt", options: ["heiße", "heißen", "heißt", "heißest"] },
  { category: "Verb Conjugation", prompt: "Ich _____ Maria.", answer: "heiße", options: ["heißt", "heiße", "heißen", "heißest"] },
  { category: "Verb Conjugation", prompt: "Ich _____ als Arzt.", answer: "arbeite", options: ["arbeitest", "arbeitet", "arbeite", "arbeiten"] },
  { category: "Verb Conjugation", prompt: "Sie (she) _____ als Kellnerin.", answer: "arbeitet", options: ["arbeite", "arbeitest", "arbeiten", "arbeitet"] },
  { category: "Verb Conjugation", prompt: "Ich _____ Spanisch.", answer: "spreche", options: ["sprichst", "spricht", "sprechen", "spreche"] },
  { category: "Verb Conjugation", prompt: "Er _____ Deutsch und Englisch.", answer: "spricht", options: ["spreche", "sprichst", "sprechen", "spricht"] },
  { category: "Verb Conjugation", prompt: "Ich _____ Student.", answer: "bin", options: ["bist", "ist", "bin", "sind"] },
  { category: "Verb Conjugation", prompt: "Wir _____ verheiratet.", answer: "sind", options: ["bin", "bist", "ist", "sind"] },
  { category: "Verb Conjugation", prompt: "Ich _____ zwei Kinder.", answer: "habe", options: ["hast", "hat", "haben", "habe"] },
  { category: "Verb Conjugation", prompt: "Er _____ eine Schwester.", answer: "hat", options: ["habe", "hast", "haben", "hat"] },
  { category: "Verb Conjugation", prompt: "Wir _____ in Wien.", answer: "leben", options: ["lebe", "lebst", "lebt", "leben"] },

  // ── 2. Personal Pronouns ─────────────────────────────────────────────
  { category: "Personal Pronouns", prompt: "Simon → _____", answer: "er", options: ["sie", "er", "du", "wir"] },
  { category: "Personal Pronouns", prompt: "Miriam → _____", answer: "sie", options: ["er", "wir", "sie", "du"] },
  { category: "Personal Pronouns", prompt: "Lydia und Arno → _____", answer: "sie", options: ["er", "du", "wir", "sie"] },
  { category: "Personal Pronouns", prompt: "Thomas und ich → _____", answer: "wir", options: ["er", "sie", "du", "wir"] },
  { category: "Personal Pronouns", prompt: "Frau Schmidt → _____", answer: "sie", options: ["er", "sie", "du", "wir"] },
  { category: "Personal Pronouns", prompt: "Herr Müller → _____", answer: "er", options: ["er", "sie", "du", "wir"] },
  { category: "Personal Pronouns", prompt: "Anna und Maria → _____", answer: "sie", options: ["du", "wir", "er", "sie"] },

  // ── 3. W-Questions ───────────────────────────────────────────────────
  { category: "W-Questions", prompt: "_____ heißt du?", answer: "Wie", options: ["Wer", "Wie", "Woher", "Was"] },
  { category: "W-Questions", prompt: "_____ ist das?", answer: "Wer", options: ["Wie", "Woher", "Wer", "Was"] },
  { category: "W-Questions", prompt: "_____ kommen Sie?", answer: "Woher", options: ["Wie", "Wer", "Was", "Woher"] },
  { category: "W-Questions", prompt: "_____ bist du?", answer: "Wer", options: ["Woher", "Wer", "Wie", "Was"] },
  { category: "W-Questions", prompt: "_____ kommst du?", answer: "Woher", options: ["Was", "Wie", "Wer", "Woher"] },
  { category: "W-Questions", prompt: "_____ heißen Sie?", answer: "Wie", options: ["Woher", "Wer", "Wie", "Was"] },
  { category: "W-Questions", prompt: "_____ kommt er?", answer: "Woher", options: ["Wie", "Woher", "Wer", "Was"] },
  { category: "W-Questions", prompt: "_____ arbeitet hier?", answer: "Wer", options: ["Wie", "Was", "Woher", "Wer"] },

  // ── 4. Sentence Structure ────────────────────────────────────────────
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Ich heiße Rita.", options: ["Heiße ich Rita.", "Rita ich heiße.", "Ich heiße Rita.", "Ich Rita heiße."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Ich komme aus Spanien.", options: ["Komme ich aus Spanien.", "Ich komme aus Spanien.", "Aus Spanien ich komme.", "Ich Spanien aus komme."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Er ist Arzt.", options: ["Ist er Arzt.", "Arzt er ist.", "Er Arzt ist.", "Er ist Arzt."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Wir wohnen in Berlin.", options: ["Wir wohnen in Berlin.", "Wohnen wir in Berlin.", "In Berlin wir wohnen.", "Wir Berlin in wohnen."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Sie lernt Deutsch.", options: ["Lernt sie Deutsch.", "Deutsch sie lernt.", "Sie lernt Deutsch.", "Sie Deutsch lernt."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Ich spreche Englisch.", options: ["Spreche ich Englisch.", "Englisch ich spreche.", "Ich Englisch spreche.", "Ich spreche Englisch."] },
  { category: "Sentence Structure", prompt: "Choose the correct sentence:", answer: "Ich habe eine Schwester.", options: ["Habe ich eine Schwester.", "Ich habe eine Schwester.", "Eine Schwester ich habe.", "Ich Schwester eine habe."] },

  // ── 5. Countries & Prepositions ──────────────────────────────────────
  { category: "Countries & Prepositions", prompt: "Ich komme _____ Österreich.", answer: "aus", options: ["von", "aus", "in", "nach"] },
  { category: "Countries & Prepositions", prompt: "Ich wohne _____ München.", answer: "in", options: ["aus", "nach", "in", "von"] },
  { category: "Countries & Prepositions", prompt: "Er kommt _____ der Türkei.", answer: "aus", options: ["in", "nach", "von", "aus"] },
  { category: "Countries & Prepositions", prompt: "Sie lebt _____ Berlin.", answer: "in", options: ["in", "aus", "von", "nach"] },
  { category: "Countries & Prepositions", prompt: "Wir kommen _____ Deutschland.", answer: "aus", options: ["nach", "von", "aus", "in"] },
  { category: "Countries & Prepositions", prompt: "Er arbeitet _____ Wien.", answer: "in", options: ["aus", "von", "nach", "in"] },
  { category: "Countries & Prepositions", prompt: "Sie kommt _____ der Schweiz.", answer: "aus", options: ["aus", "nach", "in", "von"] },
  { category: "Countries & Prepositions", prompt: "Ich studiere _____ Hamburg.", answer: "in", options: ["von", "in", "aus", "nach"] },

  // ── 6. Possessive Articles ───────────────────────────────────────────
  { category: "Possessive Articles", prompt: "_____ Bruder (my)", answer: "mein", options: ["meine", "mein", "dein", "deine"] },
  { category: "Possessive Articles", prompt: "_____ Schwester (my)", answer: "meine", options: ["mein", "dein", "meine", "deine"] },
  { category: "Possessive Articles", prompt: "_____ Vater (your)", answer: "dein", options: ["mein", "deine", "meine", "dein"] },
  { category: "Possessive Articles", prompt: "_____ Mutter (your)", answer: "deine", options: ["dein", "mein", "deine", "meine"] },
  { category: "Possessive Articles", prompt: "_____ Kind (my)", answer: "mein", options: ["meine", "deine", "mein", "dein"] },
  { category: "Possessive Articles", prompt: "_____ Eltern (my)", answer: "meine", options: ["meine", "mein", "deine", "dein"] },
  { category: "Possessive Articles", prompt: "_____ Opa (your)", answer: "dein", options: ["deine", "meine", "mein", "dein"] },
  { category: "Possessive Articles", prompt: "_____ Tochter (your)", answer: "deine", options: ["mein", "deine", "meine", "dein"] },

  // ── 7. Family Questions ──────────────────────────────────────────────
  { category: "Family Questions", prompt: "Ist das dein Bruder?\n— Ja, das ist _____ Bruder.", answer: "mein", options: ["dein", "mein", "meine", "deine"] },
  { category: "Family Questions", prompt: "Ist das deine Schwester?\n— Ja, das ist _____ Schwester.", answer: "meine", options: ["mein", "dein", "deine", "meine"] },
  { category: "Family Questions", prompt: "Ist das dein Vater?\n— Nein, das ist mein _____.", answer: "Onkel", options: ["Vater", "Onkel", "Sohn", "Bruder"] },
  { category: "Family Questions", prompt: "Das ist die Mutter von meinem Vater. Das ist meine _____.", answer: "Oma", options: ["Tante", "Schwester", "Oma", "Mutter"] },
  { category: "Family Questions", prompt: "Mein Bruder und meine Schwester — das sind meine _____.", answer: "Geschwister", options: ["Eltern", "Geschwister", "Kinder", "Großeltern"] },
  { category: "Family Questions", prompt: "Ist das deine Großmutter?\n— Ja, das ist _____ Oma.", answer: "meine", options: ["mein", "dein", "meine", "deine"] },

  // ── 8. Ja / Nein / Doch ─────────────────────────────────────────────
  { category: "Ja / Nein / Doch", prompt: "Ist das deine Schwester?\n— _____, das ist meine Schwester.", answer: "Ja", options: ["Doch", "Ja", "Nein", "Nicht"] },
  { category: "Ja / Nein / Doch", prompt: "Ist das nicht deine Schwester?\n— _____, das ist meine Schwester.", answer: "Doch", options: ["Ja", "Nein", "Doch", "Nicht"] },
  { category: "Ja / Nein / Doch", prompt: "Bist du verheiratet?\n— _____, ich bin Single.", answer: "Nein", options: ["Ja", "Doch", "Nicht", "Nein"] },
  { category: "Ja / Nein / Doch", prompt: "Bist du nicht aus Deutschland?\n— _____, ich bin aus Deutschland.", answer: "Doch", options: ["Nein", "Ja", "Nicht", "Doch"] },
  { category: "Ja / Nein / Doch", prompt: "Sprichst du Deutsch?\n— _____, ich spreche Deutsch.", answer: "Ja", options: ["Nein", "Doch", "Nicht", "Ja"] },
  { category: "Ja / Nein / Doch", prompt: "Arbeitest du nicht?\n— _____, ich arbeite.", answer: "Doch", options: ["Ja", "Nein", "Doch", "Nicht"] },

  // ── 9. Professions ───────────────────────────────────────────────────
  { category: "Professions", prompt: "Sie arbeitet als _____ (female hairdresser).", answer: "Friseurin", options: ["Ärztin", "Friseurin", "Kellnerin", "Lehrerin"] },
  { category: "Professions", prompt: "Er arbeitet als _____ (male doctor).", answer: "Arzt", options: ["Arzt", "Ärztin", "Kellner", "Lehrer"] },
  { category: "Professions", prompt: "Er studiert an der Universität. Er ist _____.", answer: "Student", options: ["Kellner", "Arzt", "Student", "Lehrer"] },
  { category: "Professions", prompt: "Sie schneidet Haare. Sie ist _____.", answer: "Friseurin", options: ["Ärztin", "Kellnerin", "Lehrerin", "Friseurin"] },
  { category: "Professions", prompt: "Er bedient Gäste im Restaurant. Er ist _____.", answer: "Kellner", options: ["Kellner", "Arzt", "Lehrer", "Friseur"] },
  { category: "Professions", prompt: "Was ist die feminine Form von 'Arzt'?", answer: "Ärztin", options: ["Ärzterin", "Ärztin", "Arztfrau", "Arzterin"] },

  // ── 10. Communication Patterns ───────────────────────────────────────
  { category: "Communication Patterns", prompt: "Wie fragt man nach dem Namen?", answer: "Wie heißt du?", options: ["Wie heißt du?", "Woher kommst du?", "Wie geht's?", "Was machst du?"] },
  { category: "Communication Patterns", prompt: "Wie fragt man nach dem Beruf?", answer: "Was machst du beruflich?", options: ["Wie heißt du?", "Was machst du beruflich?", "Woher kommst du?", "Wie geht's?"] },
  { category: "Communication Patterns", prompt: "Wie fragt man nach dem Befinden?", answer: "Wie geht's?", options: ["Wie heißt du?", "Woher kommst du?", "Wer bist du?", "Wie geht's?"] },
  { category: "Communication Patterns", prompt: "Wie fragt man nach der Herkunft?", answer: "Woher kommst du?", options: ["Wie geht's?", "Wer bist du?", "Wie heißt du?", "Woher kommst du?"] },
  { category: "Communication Patterns", prompt: "Wie fragt man nach den Sprachen?", answer: "Welche Sprachen sprichst du?", options: ["Woher kommst du?", "Welche Sprachen sprichst du?", "Wie geht's?", "Was machst du?"] },
  { category: "Communication Patterns", prompt: "Wie stellt man sich vor?", answer: "Ich heiße...", options: ["Woher kommst du?", "Wie geht's?", "Ich heiße...", "Danke!"] },

  // ── 11. Negation ─────────────────────────────────────────────────────
  { category: "Negation", prompt: "Ich bin verheiratet.\n→ Ich bin _____ verheiratet.", answer: "nicht", options: ["kein", "nein", "nicht", "nie"] },
  { category: "Negation", prompt: "Er kommt aus Deutschland.\n→ Er kommt _____ aus Deutschland.", answer: "nicht", options: ["nein", "nicht", "kein", "nie"] },
  { category: "Negation", prompt: "Sie spricht Deutsch.\n→ Sie spricht _____ Deutsch.", answer: "nicht", options: ["nie", "kein", "nein", "nicht"] },
  { category: "Negation", prompt: "Ich wohne in Berlin.\n→ Ich wohne _____ in Berlin.", answer: "nicht", options: ["nicht", "nein", "kein", "nie"] },
  { category: "Negation", prompt: "Er ist Arzt.\n→ Er ist _____ Arzt.", answer: "nicht", options: ["kein", "nicht", "nie", "nein"] },
  { category: "Negation", prompt: "Ich arbeite.\n→ Ich arbeite _____.", answer: "nicht", options: ["nein", "nie", "kein", "nicht"] },

  // ── 12. Languages ────────────────────────────────────────────────────
  { category: "Languages", prompt: "Welche Sprache spricht man in Deutschland?", answer: "Deutsch", options: ["Englisch", "Deutsch", "Spanisch", "Französisch"] },
  { category: "Languages", prompt: "Welche Sprache spricht man in Frankreich?", answer: "Französisch", options: ["Deutsch", "Spanisch", "Französisch", "Englisch"] },
  { category: "Languages", prompt: "Welche Sprache spricht man in Spanien?", answer: "Spanisch", options: ["Russisch", "Englisch", "Spanisch", "Deutsch"] },
  { category: "Languages", prompt: "Welche Sprache spricht man in der Türkei?", answer: "Türkisch", options: ["Arabisch", "Türkisch", "Persisch", "Russisch"] },
  { category: "Languages", prompt: "Er kommt aus Russland. Er spricht _____.", answer: "Russisch", options: ["Deutsch", "Russisch", "Englisch", "Polnisch"] },
  { category: "Languages", prompt: "Sie kommt aus China. Sie spricht _____.", answer: "Chinesisch", options: ["Chinesisch", "Japanisch", "Koreanisch", "Russisch"] },

  // ── 13. Family Relationships ─────────────────────────────────────────
  { category: "Family Relationships", prompt: "Antonio und Eva sind meine _____.", answer: "Großeltern", options: ["Eltern", "Großeltern", "Geschwister", "Kinder"] },
  { category: "Family Relationships", prompt: "Mein Vater und meine Mutter sind meine _____.", answer: "Eltern", options: ["Großeltern", "Eltern", "Geschwister", "Kinder"] },
  { category: "Family Relationships", prompt: "Mein Bruder und meine Schwester sind meine _____.", answer: "Geschwister", options: ["Eltern", "Kinder", "Großeltern", "Geschwister"] },
  { category: "Family Relationships", prompt: "Der Vater meines Vaters ist mein _____.", answer: "Opa", options: ["Onkel", "Vater", "Opa", "Bruder"] },
  { category: "Family Relationships", prompt: "Die Tochter meiner Eltern ist meine _____.", answer: "Schwester", options: ["Schwester", "Tante", "Mutter", "Cousine"] },
  { category: "Family Relationships", prompt: "Der Sohn meines Sohnes ist mein _____.", answer: "Enkel", options: ["Enkel", "Neffe", "Bruder", "Sohn"] },
  { category: "Family Relationships", prompt: "Lena und Tim sind Geschwister. Tim ist Lenas _____.", answer: "Bruder", options: ["Vater", "Onkel", "Bruder", "Sohn"] },
  { category: "Family Relationships", prompt: "Mein Sohn und meine Tochter — das sind meine _____.", answer: "Kinder", options: ["Geschwister", "Kinder", "Eltern", "Enkel"] },
];

export const GRAMMAR_QUIZ_SIZE = 20;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildGrammarQuiz(): GrammarQuestion[] {
  const categories = [...new Set(grammarBank.map((q) => q.category))];
  const selected: GrammarQuestion[] = [];

  for (const cat of categories) {
    const pool = shuffle(grammarBank.filter((q) => q.category === cat));
    if (pool.length > 0) selected.push(pool[0]);
  }

  const remaining = shuffle(grammarBank.filter((q) => !selected.includes(q)));
  while (selected.length < GRAMMAR_QUIZ_SIZE && remaining.length > 0) {
    selected.push(remaining.shift()!);
  }

  return shuffle(selected.slice(0, GRAMMAR_QUIZ_SIZE));
}
