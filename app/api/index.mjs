import fetch from "node-fetch";

export const URL = "https://hphrq29eda.execute-api.us-east-1.amazonaws.com";

export async function get() {
  const response = await fetch(`${URL}/practices`);
  const data = await response.json();
  return {
    json: {
      practices: data,
    },
  };
}
