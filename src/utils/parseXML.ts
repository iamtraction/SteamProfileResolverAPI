"use strict";

import * as xml2js from "xml2js";
import { promisify } from "util";

const parseXMLString = promisify(xml2js.parseString) as (
  T1: xml2js.convertableToString,
  T2: xml2js.OptionsV2
) => Promise<object>;

/**
 * Parses the XML string from the input and returns as an object.
 * @module parseXML
 * @param {string} xml The XML string
 * @returns {object} The parsed XML as JSON
 */
export = (xml: string) => {
  return new Promise<object>(async (resolve, reject) => {
    try {
      let parsedObject: object = await parseXMLString(xml, {
        emptyTag: null,
        explicitArray: false,
        explicitRoot: false,
        ignoreAttrs: true,
        trim: true,
      });

      resolve(parsedObject);
    } catch (error) {
      reject(error);
    }
  });
};
