"use strict";

import * as express from "express";
import fetchSteamProfile from "../utils/fetchSteamProfile";
import parseXML from "../utils/parseXML";

module Route {
  export class Profile {
    public async main(req: express.Request, res: express.Response, next: express.NextFunction) {
      try {
        let profileXML = await fetchSteamProfile(req.params.vanityname);
        let profileJSON = await parseXML(profileXML);

        res.json(profileJSON); 
      } catch (error) {
        next(error);
      }
    }
  }
}

export = Route;
