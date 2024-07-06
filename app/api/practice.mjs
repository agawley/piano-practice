import { getPractice, upsertPractice } from "../models/practices.mjs";

import { checkAuth } from "../lib/auth.mjs";
import { getTodaysKey } from "../lib/dates.mjs";

export const get = async (req) => {
  const user = checkAuth(req);
  if (!user) return { location: "/login" };
  const today = getTodaysKey();
  const data = await getPractice(user.id, today);
  return {
    json: {
      practice: data && data.sections ? data : { key: today, sections: {} },
      user,
    },
  };
};

export const post = async (req) => {
  const user = checkAuth(req);
  if (!user) return { location: "/login" };
  const { key, ...sections } = req.body;
  const data = await upsertPractice(user.id, { key, sections });
  return {
    json: {
      practice: data,
      user: user,
    },
    location: "/",
  };
};
