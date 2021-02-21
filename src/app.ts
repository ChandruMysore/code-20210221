import dotenv from "dotenv";
import express from "express";
import * as bodyParser from 'body-parser';
import homerouter from "./routers/homeRouter";

// load the environment variables from the .env file
dotenv.config({
  path: ".env",
});
const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Empty request");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
app.use('/', homerouter);
