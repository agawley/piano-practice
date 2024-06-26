export default function PracticeCheckbox({ html, state }) {
  const { attrs, store } = state;
  const { practice } = store;
  const { label, name } = attrs;
  return html`<style>
      :host {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        font-family: sans-serif;
      }
      :host label {
        width: 300px;
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
      }
      :host label.checked {
        background-color: #c8e6c9;
      }
    </style>
    <label class="p0 block ${practice?.sections?.[name] ? "checked" : ""}">
      <input
        type="checkbox"
        name=${name}
        style="margin-right: 10px"
        ${practice?.sections?.[name] ? "checked" : ""}
      /><span>${label}</span>
    </label>`;
}
