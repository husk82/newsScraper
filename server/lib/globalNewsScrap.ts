import axios from "axios";
import { load } from "cheerio";

const url = "https://globalnews.ca/";

export async function globalScrapTitle(): Promise<string[]> {
  let titles: string[] = [];
  let links: string[] = [];
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const html: string = response.data;
      const $ = load(html);
      // Performing scraping operations
      $(".c-posts__headlineText").each((index, element) => {
        const title: string = $(element).text();
        titles.push(title);
        const link: string | undefined = $(element).attr("href");
        if (link) {
          links.push(link);
        }
      });
    }
    console.log(links);
  } catch (error) {
    console.error("Error: ", error);
  }
  // Using a Set to remove duplicates
  const uniqueTitlesSet = new Set(titles);

  // Converting the Set back to an array
  const uniqueTitlesArray = Array.from(uniqueTitlesSet);
  return uniqueTitlesArray;
}

module.exports = {
  globalScrapTitle,
};
