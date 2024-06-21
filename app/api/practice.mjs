export async function get(date) {
  const response = await fetch(
    `https://hphrq29eda.execute-api.us-east-1.amazonaws.com/practice/${date}`
  );
  const data = await response.json();
  return {
    json: {
      practice: data,
    },
  };
}

export async function post(practice) {
  console.log(practice);
  const data = { date: "abcdef", sections: { hannon: true, scales: true } };
  /* const response = await fetch(
    "https://hphrq29eda.execute-api.us-east-1.amazonaws.com/practice",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(practice),
    }
  );
  const data = await response.json(); */
  return {
    json: {
      practice: data,
    },
  };
}
