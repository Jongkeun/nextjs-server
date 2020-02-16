import * as express from "express";

export default function(app: express.Application) {
  app.get("/", (req: express.Request, res: express.Response) => {
    res.send("start!");
  });

  app.get("/about", function(req: express.Request, res: express.Response) {
    res.render("about.html");
  });
}
