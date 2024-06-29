//import fetch from "node-fetch";
import { getPractice, upsertPractice } from "../models/practices.mjs";

//import { URL } from "./index.mjs";
import { getTodaysKey } from "../lib/dates.mjs";

export async function get() {
  const today = getTodaysKey();
  const data = await getPractice(today);
  return {
    json: {
      practice: data && data.sections ? data : { key: today, sections: {} },
    },
  };
}

export async function post(req) {
  const { key, ...sections } = req.body;
  const data = await upsertPractice({ key, sections });
  return {
    json: {
      practice: data,
    },
    location: "/practice",
  };
}
