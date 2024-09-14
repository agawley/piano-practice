export default function PracticeHeader({ html, state }) {
  const { attrs } = state;
  const { page } = attrs;
  return html`<style>
      :host {
        font-family: sans-serif;
        font-size: 1.5em;
      }
      .tab {
        overflow: hidden;
        border-bottom: 1px solid light-dark(#ccc, #333);
        margin-bottom: 15px;
        background-color: light-dark(#eee, #222222);
        display: flex;
        justify-content: center;
      }

      /* Style the buttons that are used to open the tab content */
      .tab a {
        background-color: inherit;
        float: left;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        color: light-dark(#616161, #ccc);
        border-radius: 10px 10px 0px 0px;
      }

      /* Change background color of buttons on hover */
      .tab a:hover {
        background-color: light-dark(#ddd, #444);
        color: light-dark(black, white);
      }

      /* Create an active/current tablink class */
      .tab a.active {
        background-color: light-dark(white, black);

        color: light-dark(black, white);
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
