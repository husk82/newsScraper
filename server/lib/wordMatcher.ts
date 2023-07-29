import { STOP_WORDS } from "./stopWords";

function calculateWordSimilarity(
  words1: Set<string>,
  words2: Set<string>
): number {
  const totalWords = words1.size + words2.size;
  let matchedWords = 0;

  words1.forEach((word) => {
    if (words2.has(word)) {
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

  const titleWords1: Set<string>[] = array1.map(
    (title) =>
      new Set(
        title
          .toLowerCase()
          .split(/\s+/)
          .filter((word) => !STOP_WORDS.has(word))
      )
  );

  const titleWords2: Set<string>[] = array2.map(
    (title) =>
      new Set(
        title
          .toLowerCase()
          .split(/\s+/)
          .filter((word) => !STOP_WORDS.has(word))
      )
  );

  // Compare the titles based on word similarity
  titleWords1.forEach((words1, index1) => {
    titleWords2.forEach((words2, index2) => {
      const similarity = calculateWordSimilarity(words1, words2);
      if (similarity >= similarityThreshold) {
        similarTitles.push({
          title1: array1[index1],
          title2: array2[index2],
          similarity,
        });
      }
    });
  });

  return similarTitles;
}

export default findSimilarTitles;
