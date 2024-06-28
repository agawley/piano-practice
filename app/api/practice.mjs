import { URL } from "./index.mjs";
import fetch from "node-fetch";
import { getTodaysDate } from "../lib/dates.mjs";

export async function get() {
  const today = getTodaysDate();
  const response = await fetch(`${URL}/practice/${today}`);
  const data = await response.json();
  return {
    json: {
      practice: data.sections ? data : { date: today, sections: {} },
    },
  };
}

export async function post(req) {
  const { date, ...sections } = req.body;
  const response = await fetch(`${URL}/practice`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date, sections }),
  });
  const data = await response.json();
  return {
    json: {
      practice: data,
    },
    location: "/practice",
  };
}
