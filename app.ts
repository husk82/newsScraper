import express, { Request, Response } from 'express'
import { scrapTitle } from './lib/scrap'

const app = express()
const port = 3000

app.get('/', async (req: Request, res: Response) => {
	try {
		const titles: string[] = await scrapTitle()
		res.status(200).send(titles)
	} catch (error) {
		console.error('Error', error)
		res.status(500).send('Internal Server Error')
	}
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`)
})