import { checkAuth } from "../lib/auth.mjs";
import { getPractices } from "../models/practices.mjs";

export const get = async (req) => {
  const user = checkAuth(req);
  if (!user) return { location: "/login" };
  const practices = await getPractices(user.id);
  return {
    json: {
      practices,
      user,
    },
  };
};
