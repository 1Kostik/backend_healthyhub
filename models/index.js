const { Products,productSchemas} = require("./products");
const { User, userSchemas } = require("./user");
const { Water } = require("./water");
const { Weight,schemaWeight } = require("./weight");

module.exports = {
  User,
  productSchemas,
  userSchemas,
  Products,
  Water,
  Weight,
  schemaWeight
};
