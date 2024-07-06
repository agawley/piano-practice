export const checkAuth = (req) => {
  if (req.session) {
    const time = Date.now() / 1000;
    if (req.session.iat + 30 * 24 * 60 * 60 > time)
      return {
        id: req.session.sub,
        user: req.session.name,
      };
    else return undefined;
  }
  return undefined;
};
