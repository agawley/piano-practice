import fetch from "node-fetch";

export const URL = "https://gojncrx4mb.execute-api.eu-west-2.amazonaws.com";

export async function get() {
  const response = await fetch(`${URL}/practices`);
  const data = await response.json();
  return {
    json: {
      practices: data,
    },
  };
}
