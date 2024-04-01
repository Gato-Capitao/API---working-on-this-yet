import express from "express";
import { BookRouter } from "./src/routes/Book.route.js";
import { MovieRouter } from "./src/routes/Movie.route.js";
import { GameRouter } from "./src/routes/Game.route.js";
import cors from 'cors'


const app = express();
const port = 8009;

app.use(express.json());
app.use(cors())
app.use(BookRouter);
app.use(MovieRouter);
app.use(GameRouter);

app.listen(port, ()=> {
  console.log("started server");
})