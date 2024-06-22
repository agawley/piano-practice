import { getWeekStart } from "../lib/dates.mjs";

export default function ThisWeek({ html, state }) {
  const { store } = state;
  const { practices } = store;

  const thisWeekPractices = practices.filter(
    (practice) => practice.date >= getWeekStart()
  );

  const result = thisWeekPractices.reduce((acc, practice) => {
    const obj = practice.sections || {};
    Object.keys(obj).forEach((key) => {
      acc[key] = (acc[key] || 0) + 1;
    });
    return acc;
  }, {});

  return html`
    <div><span>Scales: </span><span>${result.scales || 0}</span></div>
    <div>
      <span>Site reading: </span><span>${result.siteReading || 0}</span>
    </div>
    <div><span>Hannon: </span><span>${result.hannon || 0}</span></div>
    <div><span>Piece 1: </span><span>${result.piece1 || 0}</span></div>
    <div><span>Piece 2: </span><span>${result.piece2 || 0}</span></div>
    <div><span>Chords: </span><span>${result.chords || 0}</span></div>
  `;
}
