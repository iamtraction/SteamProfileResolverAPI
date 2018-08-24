"use strict";

import * as express from "express";
import fetchSteamProfile from "../utils/fetchSteamProfile";
import parseXML from "../utils/parseXML";

interface steamProfile extends Object {
  steam64ID: string | null,
  steamID: string | null,
  onlineStatus: string | null,
  statusMessage: string | null,
  privacyState: string | null,
  visibilityState: string | null,
  avatarIcon: string | null,
  avatarMedium: string | null,
  avatarFull: string | null,
  vacBanned: string | null,
  tradeBanState: string | null,
  isLimitedAccount: string | null,
  customURL: string | null,
  memberSince: string | null,
  steamRating: string | null,
  hoursPlayed2Wk: string | null,
  headline: string | null,
  location: string | null,
  realname: string | null,
  summary: string | null,
};

module Route {
  export class Resolver {
    public async main(req: express.Request, res: express.Response, next: express.NextFunction) {
      try {
        let profileXML = await fetchSteamProfile(req.params.vanityname);
        let profileJSON: steamProfile = await parseXML(profileXML) as steamProfile;

        res.json(profileJSON); 
      } catch (error) {
        next(error);
      }
    }
  }
}

export = Route;
