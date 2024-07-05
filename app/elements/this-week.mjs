import { getWeekStartKey } from "../lib/dates.mjs";

export default function ThisWeek({ html, state }) {
  const { store } = state;
  const { practices } = store;

  const thisWeekPractices = practices.filter(
    (practice) =>
      practice.key >= getWeekStartKey() &&
      Object.keys(practice.sections).length > 0
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
        font-size: 1.5em;
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 15px;
      }
      :host .total {
        margin-bottom: 30px;
      }
      :host .section {
        padding-top: 10px;
        padding-bottom: 10px;
      }
    </style>
    <div
      class="flex flex-col justify-content-around align-content-around"
      style="width: 300px"
    >
      <div class="flex justify-content-between font-semibold total">
        <span>Total practices: </span><span>${thisWeekPractices.length}</span>
      </div>
      <div class="flex justify-content-between section">
        <span>Scales: </span><span>${result.scales || 0}</span>
      </div>
      <div class="flex justify-content-between section">
        <span>Site reading: </span><span>${result.siteReading || 0}</span>
      </div>
      <div class="flex justify-content-between section">
        <span>Hannon: </span><span>${result.hannon || 0}</span>
      </div>
      <div class="flex justify-content-between section">
        <span>Piece 1: </span><span>${result.piece1 || 0}</span>
      </div>
      <div class="flex justify-content-between section">
        <span>Piece 2: </span><span>${result.piece2 || 0}</span>
      </div>
      <div class="flex justify-content-between section">
        <span>Chords: </span><span>${result.chords || 0}</span>
      </div>
    </div>
  `;
}
