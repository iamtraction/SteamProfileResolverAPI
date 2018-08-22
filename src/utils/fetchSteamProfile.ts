"use strict";

import * as request from "request-promise-native";

/**
 * Fetches a user profile from Steam and then returns the XML.
 * @module fetchSteamProfile
 * @param {string} vanityName The vanity name of the user
 * @returns {string} The user's profile in XML
 */
export default (vanityName: string) => {
  return new Promise<string>(async (resolve, reject) => {
    try {
      let url = `https://steamcommunity.com/id/${vanityName}`;
      let options: request.RequestPromiseOptions = {
        qs: {
          xml: 1
        }
      };
      let response = await request.get(url, options);

      resolve(response);
    }
    catch (error) {
      reject(error);
    }
  });
}
