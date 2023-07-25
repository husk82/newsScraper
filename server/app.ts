import express from 'express';

const app = express();
const port = 3000;

// Routers
const postRouter = require('./routes/posts');
app.use("/", postRouter);


app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});