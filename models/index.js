const { Products, productSchemas } = require("./products");
const { User, userSchemas } = require("./user");
const { Water, SchemaWater } = require("./water");
const { Weight, schemaWeight } = require("./weight");
const { Calories, addCaloriesShema } = require("./calories");

module.exports = {
  User,
  productSchemas,
  userSchemas,
  Products,
  Water,
  SchemaWater,
  Weight,
  schemaWeight,
  Calories,
  addCaloriesShema,
};
