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
          margin-bottom: 10px;
        }
        :host label {
          min-width: 300px;
          display: flex;
          align-items: center;
          padding: 5px;
          border-radius: 5px;
        }
        :host label.checked {
          background-color: #388e3c;
          color: white;
        }
      </style>
      <label class="p0 block ${practice?.sections?.[name] ? "checked" : ""}">
        <input
          type="checkbox"
          name=${name}
          style="margin-right: 10px"
          class="hidden"
          ${practice?.sections?.[name] ? "checked" : ""}
        />
        <div class="text-center">${label}</div>
      </label>`;
  }
}
customElements.define("new-practice-checkbox", NewPracticeCheckbox);
