//import fetch from "node-fetch";
import { getPractices } from "../models/practices.mjs";

export const URL = "https://gojncrx4mb.execute-api.eu-west-2.amazonaws.com";

export async function get(req) {
  console.log(req.session);
  const data = await getPractices();
  return {
    json: {
      practices: data,
      user: req.session,
    },
  };
}
