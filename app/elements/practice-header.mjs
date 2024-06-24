export default function ThisWeek({ html, state }) {
  const { attrs } = state;
  const { page } = attrs;
  return html`<style>
      :host {
        font-family: sans-serif;
      }
      .tab {
        overflow: hidden;
        border: 1px solid #ccc;
        margin-bottom: 15px;
        background-color: #f1f1f1;
        display: flex;
        justify-content: center;
      }

      /* Style the buttons that are used to open the tab content */
      .tab a {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
      }

      /* Change background color of buttons on hover */
      .tab a:hover {
        background-color: #ddd;
      }

      /* Create an active/current tablink class */
      .tab a.active {
        background-color: #ccc;
      }
    </style>
    <div class="tab">
      <a class="tablinks ${page === "index" ? "active" : ""}" href="/">Stats</a>
      <a
        class="tablinks  ${page === "practice" ? "active" : ""}"
        href="/practice"
        >Record practice</a
      >
    </div>`;
}
