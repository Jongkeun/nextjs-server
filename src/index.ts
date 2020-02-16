import * as express from "express";
import App from "./app";
import router from "./router/main";

const app: express.Application = new App().application;
const PORT: number = parseInt(process.env.PORT) || 4000;
// set router
router(app);

app.listen(PORT, () => {
  console.log(`✅  Server is listening on port ${PORT}!`);
});
