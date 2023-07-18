const axios =  require('axios');  // Makes HTTP requests
const cheerio = require('cheerio');  // Parses and Manipulates HTML docs.

const url = 'https://globalnews.ca/';

async function scrapTitle() {
    try {
        const response = await axios.get(url);
        if (response.status === 200) {
            const html = response.data;
            const $ = cheerio.load(html);

            // Performing scraping operations
            const title = $('title').text();
            
            return title;
        }
    }
    catch(error) {
        console.error('Error: ', error);
    }
}

module.exports = {
    scrapTitle
};
