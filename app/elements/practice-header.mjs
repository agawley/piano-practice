export default function PracticeHeader({ html, state }) {
  const { attrs, store } = state;
  const { page } = attrs;
  const { user } = store;
  const auth0Domain = process.env.AUTH0_DOMAIN;
  const params = {
    response_type: "code",
    client_id: process.env.AUTH0_CLIENT_ID,
    redirect_uri: process.env.AUTH0_REDIRECT_URI,
    scope: "openid profile email",
  };
  const loginURL = `https://${auth0Domain}/authorize?${new URLSearchParams(
    params
  ).toString()}`;
  return html`<style>
      :host {
        font-family: sans-serif;
        font-size: 1.5em;
      }
      .tab {
        overflow: hidden;
        border-bottom: 1px solid #ccc;
        margin-bottom: 15px;
        background-color: #f5f5f5;
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
        color: #616161;
        border-radius: 10px 10px 0px 0px;
      }

      /* Change background color of buttons on hover */
      .tab a:hover {
        background-color: #ddd;
        color: black;
      }

      /* Create an active/current tablink class */
      .tab a.active {
        background-color: white;

        color: black;
      }
    </style>
    <div class="tab">
      <a class="tablinks" href="${user.sub ? "/logout" : loginURL}"
        >${user.sub ? "Logout" : "Login"}</a
      >
      <a class="tablinks ${page === "index" ? "active" : ""}" href="/">Stats</a>
      <a
        class="tablinks  ${page === "practice" ? "active" : ""}"
        href="/practice"
        >Record practice</a
      >
    </div>`;
}
