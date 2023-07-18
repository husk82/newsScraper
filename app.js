const express = require("express");
const scrap = require("./lib/scrap");

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const title = await scrap.scrapTitle();
        res.send(`Scraped Title: ${title}`);
    }
    catch (error) {
        console.error('Error', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});