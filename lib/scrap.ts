import axios from 'axios'
import { load } from 'cheerio'

const url = 'https://globalnews.ca/'

export interface NewsItem {
	headline: string
	link: string
}

export async function scrapTitle(): Promise<NewsItem[]> {
	let newsItems: NewsItem[] = []
	try {
		const response = await axios.get(url)
		if (response.status === 200) {
			const html: string = response.data
			const $ = load(html)
			// Performing scraping operations
			$('.c-posts__item').each((index, element) => {
				const headline: string | undefined = $(element)
					.find('span.c-posts__headlineText')
					.attr('title')
				const link: string | undefined =
					$(element).find('a.c-posts__inner').attr('href') ??
					$(element).find('a.c-posts__headlineLink').attr('href')

				if (headline && link) newsItems.push({ headline, link })
			})
		}
	} catch (error) {
		console.error('Error: ', error)
	}
	return newsItems
}

module.exports = {
	scrapTitle,
}
