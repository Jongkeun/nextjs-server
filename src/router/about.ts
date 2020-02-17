import * as express from "express";
let router = express.Router();

router.get("/about", (req: express.Request, res: express.Response) => {
  res.send("default!");
});

router.get("/a", (req: express.Request, res: express.Response) => {
  res.send("a!");
});

router.get("/b", function(req: express.Request, res: express.Response) {
  res.send("b!");
});

export default router;
