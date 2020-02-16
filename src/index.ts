import * as express from "express";
import App from "./app";

const app = new App().application;
const PORT = process.env.PORT || 4000;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("start");
});

app.listen(PORT, () => {
  console.log(`✅  Server is listening on port ${PORT}!`);
});
