import { module1Phrases } from "./module1";
import { module2Phrases } from "./module2";
import { module3Phrases } from "./module3";
import { module4Phrases } from "./module4";

export type ModulePhrase = {
  module: number;
  section: string;
  sectionEnglish: string;
  german: string;
  english: string;
  note?: string;
};

export const modulePhrases = [
  ...module1Phrases,
  ...module2Phrases,
  ...module3Phrases,
  ...module4Phrases,
];

export function getModulePhrases(moduleNumber: number): ModulePhrase[] {
  return modulePhrases.filter((phrase) => phrase.module === moduleNumber);
}
