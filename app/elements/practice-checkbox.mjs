export default function PracticeCheckbox({ html, state }) {
  const { attrs, store } = state;
  const { practice } = store;
  const { label, name } = attrs;
  return html`<label
    >${label}
    <input
      type="checkbox"
      name=${name}
      ${practice?.sections?.[name] ? "checked" : ""}
    />
  </label>`;
}
