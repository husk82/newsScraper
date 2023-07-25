import { scrapTitle } from '../lib/scrap';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
	try {
		const titles: string[] = await scrapTitle();
		res.status(200).send(titles);
	} catch (error) {
		console.error('Error', error);
		res.status(500).send('Internal Server Error');
	}
});


module.exports = router