export async function get() {
  const response = await fetch(
    "https://hphrq29eda.execute-api.us-east-1.amazonaws.com/practices"
  );
  const data = await response.json();
  console.log("data", data);
  return {
    json: {
      practices: data,
    },
  };
}
