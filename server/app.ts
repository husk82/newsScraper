import express from 'express';
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Routers
const homeRouter = require('./routes/home');
app.use("/", homeRouter);


app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});