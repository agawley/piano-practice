import { getWeekStart } from "../lib/dates.mjs";

export default function ThisWeek({ html, state }) {
  const { store } = state;
  const { practices } = store;

  const thisWeekPractices = practices.filter(
    (practice) => practice.date >= getWeekStart()
  );

  return html` <p>My favorites are: ${thisWeekPractices.join(", ")}</p> `;
}
