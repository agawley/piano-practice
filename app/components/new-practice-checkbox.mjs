/* globals customElements */
import CustomElement from "@enhance/custom-element";

export default class NewPracticeCheckbox extends CustomElement {
  constructor() {
    super();
    this.checkbox = this.querySelector("input");
    this.label = this.querySelector("label");
    this.checkboxChanged = this.checkboxChanged.bind(this);
  }

  connectedCallback() {
    this.checkbox.addEventListener("change", this.checkboxChanged);
  }

  disconnectedCallback() {
    this.checkbox.removeEventListener("change", this.checkboxChanged);
  }

  checkboxChanged() {
    this.label.classList.toggle("checked");
  }

  render({ html, state }) {
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
          min-width: 300px;
          display: flex;
          align-items: center;
          padding: 5px;
          border: 1px solid #ccc;
        }
        :host label.checked {
          background-color: green;
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
}
customElements.define("new-practice-checkbox", NewPracticeCheckbox);
