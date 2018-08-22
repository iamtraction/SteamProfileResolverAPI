"use strict";

import * as express from "express";

module Route {
  export class Index {
    public main(req: express.Request, res: express.Response, next: express.NextFunction) {
      res.json({
        "Hello": "Gamer!"
      });
    }
  }
}

export = Route;
