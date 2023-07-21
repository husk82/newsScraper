import express, { Request, Response } from 'express'
import { scrapTitle, NewsItem } from './lib/scrap'

const app = express()
const port = 3000

app.get('/', async (req: Request, res: Response) => {
	try {
		const newsItems: NewsItem[] = await scrapTitle()
		res.status(200).send(JSON.stringify(newsItems, null, 2))
	} catch (error) {
		console.error('Error', error)
		res.status(500).send('Internal Server Error')
	}
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
