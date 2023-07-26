import express from 'express';
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Routers
const postRouter = require('./routes/posts');
app.use("/", postRouter);


app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});