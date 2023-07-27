import axios from 'axios';
import { load } from 'cheerio';

const url = 'https://cnn.com/';

export async function cnnScrapTitle(): Promise<string[]> {
	let titles: string[] = [];
	try {
		const response = await axios.get(url);
		if (response.status === 200) {
			const html: string = response.data;
			const $ = load(html);
			// Performing scraping operations
			$('div.container_lead-package__headline span[data-editable="headline"]').each((index, element) => {
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
	cnnScrapTitle
}
