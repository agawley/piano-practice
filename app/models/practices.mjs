import { Practice } from "./schemas/practice.mjs";
import data from "@begin/data";
import { validator } from "@begin/validator";

const deletePractice = async function (key) {
  await data.destroy({ table: "practices", key });
  return { key };
};

const upsertPractice = async function (practice) {
  console.log(practice);
  return data.set({ table: "practices", ...practice });
};

const getPractice = async function (key) {
  return data.get({ table: "practices", key });
};

const getPractices = async function () {
  const databasePageResults = await data.page({
    table: "practices",
    limit: 25,
  });

  let practices = [];
  for await (let databasePageResult of databasePageResults) {
    for (let practice of databasePageResult) {
      delete practice.table;
      practices.push(practice);
    }
  }

  return practices.sort((a, b) => a.created.localeCompare(b.created));
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
