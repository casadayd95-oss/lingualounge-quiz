export function getGermanWordClass(text: string): string {
  if (text.length > 22) return "noun-word noun-word-longer";
  if (text.length > 12) return "noun-word noun-word-long";
  return "noun-word";
}
