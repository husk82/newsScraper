import { STOP_WORDS } from "./stopWords";

function calculateWordSimilarity(title1: string, title2: string): number {
  const words1 = title1
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => !STOP_WORDS.has(word));
  const words2 = title2
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => !STOP_WORDS.has(word));

  const totalWords = words1.length + words2.length;
  let matchedWords = 0;

  words1.forEach((word1) => {
    if (words2.includes(word1)) {
      matchedWords++;
    }
  });

  return matchedWords / totalWords;
}

function findSimilarTitles(
  array1: string[],
  array2: string[],
  similarityThreshold: number
): { title1: string; title2: string; similarity: number }[] {
  const similarTitles: {
    title1: string;
    title2: string;
    similarity: number;
  }[] = [];

  array1.forEach((title1) => {
    array2.forEach((title2) => {
      const similarity = calculateWordSimilarity(title1, title2);
      if (similarity >= similarityThreshold) {
        similarTitles.push({ title1, title2, similarity });
      }
    });
  });

  return similarTitles;
}

export default findSimilarTitles;
