import * as express from "express";
import aboutRouter from "./about";
import pageRouter from "./page";

export default function(app: express.Application) {
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("start!");
  });

  app.get("/about", function(req: express.Request, res: express.Response) {
    res.send("about!");
    // res.render("about.html");
  });

  app.use("/about", aboutRouter);
  app.use("/page", pageRouter);
}
