import express, { Request, Response } from 'express'
import cors from 'cors'
import { scrapTitle, NewsItem } from './lib/scrap'

const app = express()
app.use(cors())
app.use(express.json())

const port = 3000

app.get('/', async (req: Request, res: Response) => {
	try {
		const newsItems: NewsItem[] = await scrapTitle()
		res.status(200).send(newsItems)
	} catch (error) {
		console.error('Error', error)
		res.status(500).send('Internal Server Error')
	}
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})
