import axios from 'axios';
import { load } from 'cheerio';

const url = 'https://globalnews.ca/';

export async function scrapTitle(): Promise<string[]> {
	let titles: string[] = [];
	try {
		const response = await axios.get(url);
		if (response.status === 200) {
			const html: string = response.data;
			const $ = load(html);
			// Performing scraping operations
			$('.c-posts__headlineText').each((index, element) => {
				const title: string = $(element).text();
				titles.push(title);
			})
		}
	} catch (error) {
		console.error('Error: ', error);
	}
	return titles;
}

module.exports = {
	scrapTitle
}
