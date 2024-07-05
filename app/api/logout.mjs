export async function get() {
  return {
    location:
      `https://${process.env.AUTH0_DOMAIN}/v2/logout?` +
      new URLSearchParams({
        client_id: process.env.AUTH0_CLIENT_ID,
        returnTo: process.env.AUTH0_LOGOUT_URI,
      }).toString(),
  };
}
