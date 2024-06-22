export default function PracticeForm({ html, state }) {
  const { store } = state;
  const { practice } = store;

  return html` <style>
      :host {
        --_accent: var(--accent, royalblue);
        --_fore: var(--fore, black);
        --_back: var(--back, white);
      }
      :host button {
        color: var(--_back);
        background-color: var(--_accent, var(--_fore));
        border: 1px solid transparent;
      }
      :host button:active {
        color: var(--_fore);
        background-color: var(--_accent, var(--_back));
        border: 1px solid var(--_fore);
      }
      :host button:disabled {
        color: var(--_accent, var(--_fore));
        background-color: var(--_fore);
        border: 1px solid var(--_accent, var(--_back));
      }
    </style>
    <form action="/practice" method="post">
      <input type="hidden" name="date" value=${practice.date} />
      <label
        >Chords
        <input
          type="checkbox"
          name="chords"
          ${practice.sections.chords ? "checked" : ""}
        />
      </label>
      <label
        >Hannon
        <input
          type="checkbox"
          name="hannon"
          ${practice.sections.hannon ? "checked" : ""}
        />
      </label>
      <button
        type="submit"
        class="
    whitespace-no-wrap
    pb-3
    pi0
    font-semibold
    radius0"
      >
        Save
      </button>
    </form>`;
}
