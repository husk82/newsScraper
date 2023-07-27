import { globalScrapTitle } from '../lib/globalNewsScrap';
import { cnnScrapTitle } from '../lib/cnnScrap';
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
	try {
		const globalTitles: string[] = await globalScrapTitle();
		const cnnTitles: string[] = await cnnScrapTitle();
		const combinedTitles = {
			global: globalTitles,
			cnn: cnnTitles
		};
		
		res.status(200).json(cnnTitles);
	} catch (error) {
		console.error('Error', error);
		res.status(500).send('Internal Server Error');
	}
});


module.exports = router