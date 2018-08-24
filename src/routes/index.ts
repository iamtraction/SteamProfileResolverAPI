"use strict";

import * as express from "express";

module Route {
  export class Index {
    public main(_req: express.Request, res: express.Response, _next: express.NextFunction) {
      res.json({
        "Hello": "Gamer!"
      });
    }
  }
}

export = Route;
