const { Product } = require("./products");
const { User, schemas } = require("./user");
const { Statistic, joiSchema } = require("./statistic");
const { Diary } = require("./diary");

module.exports = {
  User,
  schemas,
  Product,
  Statistic,
  joiSchema,
  Diary,
};
