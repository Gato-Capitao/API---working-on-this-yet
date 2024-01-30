import express from "express";
import { loomiRouter } from "./src/routes/Loomian.route.js";
const app = express();
const port = 8002;

app.use(express.json());
app.use(loomiRouter);

app.listen(port, ()=> {
  console.log("started server");
})