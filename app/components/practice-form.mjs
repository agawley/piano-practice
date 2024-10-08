/* globals customElements */
import CustomElement from "@enhance/custom-element";
import { getTodaysKey } from "../lib/dates.mjs";

export default class PracticeForm extends CustomElement {
  constructor() {
    super();
    this.form = this.querySelector("form");
    // JS is enabled so disable the submit button
    const button = this.querySelector("button");
    button.disabled = true;
    button.textContent = "Auto saved...";
    this.checkboxChanged = this.checkboxChanged.bind(this);
  }

  connectedCallback() {
    this.addEventListener("change", this.checkboxChanged);
  }

  disconnectedCallback() {
    this.removeEventListener("change", this.checkboxChanged);
  }

  checkboxChanged() {
    let body = JSON.stringify(Object.fromEntries(new FormData(this.form))); // 4
    fetch(this.form.action, {
      // 5
      method: this.form.method,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        console.log("form submit successful");
      })
      .catch((error) => {
        console.log("got an error", error);
      });
  }

  render({ html, state }) {
    const { store } = state;
    const { practice } = store;

    return html` <style>
        :host {
          --_accent: var(--accent, white);
          --_fore: var(--fore, red);
          --_back: var(--back, red);
          width: 100%;
          font-family: sans-serif;
        }
        :host form {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          font-size: 1.5em;
        }
        :host button {
          color: rgb(255, 255, 255);
          background-color: rgb(25, 118, 210);
          border: 1px solid transparent;
          margin: auto;
          margin-top: 15px;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
            rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
            rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
          border-radius: 4px;
          font-weight: normal;
          width: 200px;
        }
        :host button:disabled {
          color: rgba(0, 0, 0, 0.26);
          background-color: rgba(0, 0, 0, 0);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: none;
          border-radius: 4px;
          font-weight: normal;
        }
      </style>
      <form action="/practice" method="post">
        <input
          type="hidden"
          name="key"
          value=${practice?.key || getTodaysKey()}
        />
        <new-practice-checkbox label="Scales" name="scales">
        </new-practice-checkbox>
        <new-practice-checkbox label="Sight Reading" name="siteReading">
        </new-practice-checkbox>
        <new-practice-checkbox label="Hannon" name="hannon">
        </new-practice-checkbox>
        <new-practice-checkbox label="Allegro" name="piece1">
        </new-practice-checkbox>
        <new-practice-checkbox label="Garden" name="piece2">
        </new-practice-checkbox>
        <new-practice-checkbox label="Chords" name="chords">
        </new-practice-checkbox>
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
}

customElements.define("practice-form", PracticeForm);
