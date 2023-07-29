import { globalScrapTitle } from "../lib/globalNewsScrap";
import { cnnScrapTitle } from "../lib/cnnScrap";
import express, { Request, Response } from "express";
import findSimilarTitles from "../lib/nGramFuzzyMatcher";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const globalTitles: string[] = await globalScrapTitle();
    const cnnTitles: string[] = await cnnScrapTitle();

    // Threshold for similarity and ngram (Can be adjusted as necessary)
    const similarityThreshold: number = 0.2;
    const ngram: number = 3;
    const similarTitles = await findSimilarTitles(
      globalTitles,
      cnnTitles,
      ngram,
      similarityThreshold
    );

    res.status(200).json(similarTitles);
  } catch (error) {
    console.error("Error", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
