export default function LoginButton({ html }) {
  const params = {
    response_type: "code",
    client_id: process.env.AUTH0_CLIENT_ID,
    redirect_uri: process.env.AUTH0_REDIRECT_URI,
    scope: "openid profile email",
  };
  const loginURL = `https://${
    process.env.AUTH0_DOMAIN
  }/authorize?${new URLSearchParams(params).toString()}`;

  return html`<style>
      :host {
        --_accent: var(--accent, white);
        --_fore: var(--fore, red);
        --_back: var(--back, red);
        width: 100%;
        font-family: sans-serif;
      }
      :host a {
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
      }</style
    ><a
      href=${loginURL}
      class="
              whitespace-no-wrap
              pb-3
              pi0
              font-semibold
              radius0"
    >
      Login
    </a>`;
}
