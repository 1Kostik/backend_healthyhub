const { Schema, model } = require("mongoose");

const productSchema = Schema({
  name: { type: String },
  carbohydrates: { type: Number },
  protein: { type: Number },
  fat: { type: Number },
  calories: { type: Number },
});

const Product = model("Product", productSchema);

module.exports = Product;
