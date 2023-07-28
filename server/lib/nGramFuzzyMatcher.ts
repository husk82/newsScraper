function generateNGrams(str: string, n: number): string[] {
  const ngrams: string[] = [];
  for (let i = 0; i < str.length - n + 1; i++) {
    ngrams.push(str.slice(i, i + n));
  }
  return ngrams;
}

function calculateSimilarity(
  title1: string,
  title2: string,
  n: number
): number {
  const ngrams1 = generateNGrams(title1.toLowerCase(), n);
  const ngrams2 = generateNGrams(title2.toLowerCase(), n);

  const intersection = ngrams1.filter((ngram) => ngrams2.includes(ngram));
  const union = [...new Set([...ngrams1, ...ngrams2])];

  return intersection.length / union.length;
}

function findSimilarTitles(
  array1: string[],
  array2: string[],
  n: number,
  similarityThreshold: number
): { title1: string; title2: string; similarity: number }[] {
  const similarTitles: {
    title1: string;
    title2: string;
    similarity: number;
  }[] = [];

  array1.forEach((title1) => {
    array2.forEach((title2) => {
      const similarity = calculateSimilarity(title1, title2, n);
      if (similarity >= similarityThreshold) {
        similarTitles.push({ title1, title2, similarity });
      }
    });
  });

  return similarTitles;
}

export default findSimilarTitles;
