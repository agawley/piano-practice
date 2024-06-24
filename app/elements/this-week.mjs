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
    <style>
      :host {
        font-family: sans-serif;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    </style>
    <div
      class="p2 flex flex-col justify-content-around align-content-around"
      style="width: 300px"
    >
      <div class="flex justify-content-between mbe-5 pbe-5 font-bold">
        <span>Total practices: </span><span>${thisWeekPractices.length}</span>
      </div>
      <div class="flex justify-content-between pbe-2 mbs-5">
        <span>Scales: </span><span>${result.scales || 0}</span>
      </div>
      <div class="flex justify-content-between pbe-2">
        <span>Site reading: </span><span>${result.siteReading || 0}</span>
      </div>
      <div class="flex justify-content-between pbe-2">
        <span>Hannon: </span><span>${result.hannon || 0}</span>
      </div>
      <div class="flex justify-content-between pbe-2">
        <span>Piece 1: </span><span>${result.piece1 || 0}</span>
      </div>
      <div class="flex justify-content-between pbe-2">
        <span>Piece 2: </span><span>${result.piece2 || 0}</span>
      </div>
      <div class="flex justify-content-between pbe-2">
        <span>Chords: </span><span>${result.chords || 0}</span>
      </div>
    </div>
  `;
}
