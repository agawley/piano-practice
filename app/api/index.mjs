//import fetch from "node-fetch";
import { getPractices } from "../models/practices.mjs";

export const URL = "https://gojncrx4mb.execute-api.eu-west-2.amazonaws.com";

export async function get() {
  /* const response = await fetch(`${URL}/practices`);
  const data = await response.json(); */
  const data = await getPractices();
  return {
    json: {
      practices: data,
    },
  };
}
