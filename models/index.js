const { Products,schema } = require("./products");
const { User, schemas } = require("./user");
const { Water } = require("./water");
const { Weight } = require("./weight");

module.exports = {
  User,
  schema,
  schemas,
  Products,
  Water,
  Weight
};
