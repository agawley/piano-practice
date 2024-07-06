import { Practice } from "./schemas/practice.mjs";
import data from "@begin/data";
import { validator } from "@begin/validator";

const TABLE_PREFIX = "practices_";

const deletePractice = async function (user, key) {
  await data.destroy({ table: TABLE_PREFIX + user, key });
  return { key };
};

const upsertPractice = async function (user, practice) {
  return data.set({ table: TABLE_PREFIX + user, ...practice });
};

const getPractice = async function (user, key) {
  return data.get({ table: TABLE_PREFIX + user, key });
};

const getPractices = async function (user) {
  const databasePageResults = await data.page({
    table: TABLE_PREFIX + user,
    limit: 25,
  });

  let practices = [];
  for await (let databasePageResult of databasePageResults) {
    for (let practice of databasePageResult) {
      delete practice.table;
      practices.push(practice);
    }
  }

  return practices.sort((a, b) => a.key.localeCompare(b.key));
};

const validatePractice = {
  shared(req) {
    return validator(req, Practice);
  },
  async create(req) {
    let { valid, problems, data } = validatePractice.shared(req);
    if (req.body.key) {
      problems["key"] = { errors: "<p>should not be included on a create</p>" };
    }
    // Insert your custom validation here
    return !valid ? { problems, practice: data } : { practice: data };
  },
  async update(req) {
    let { valid, problems, data } = validatePractice.shared(req);
    // Insert your custom validation here
    return !valid ? { problems, practice: data } : { practice: data };
  },
};

export {
  deletePractice,
  getPractice,
  getPractices,
  upsertPractice,
  validatePractice,
};
