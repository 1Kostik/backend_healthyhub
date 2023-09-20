const { Schema, model } = require("mongoose");
const Joi = require("joi");

const productSchema = Schema(
  {
    breakfast: [
      {
        name: { type: String },
        carbohydrates: { type: Number },
        protein: { type: Number },
        fat: { type: Number },
        calories: { type: Number },
      },
    ],

    dinner: [
      {
        name: { type: String },
        carbohydrates: { type: Number },
        protein: { type: Number },
        fat: { type: Number },
        calories: { type: Number },
      },
    ],

    snack: [
      {
        name: { type: String },
        carbohydrates: { type: Number },
        protein: { type: Number },
        fat: { type: Number },
        calories: { type: Number },
      },
    ],

    lunch: [
      {
        name: { type: String },
        carbohydrates: { type: Number },
        protein: { type: Number },
        fat: { type: Number },
        calories: { type: Number },
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    date: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);
const addProduct = Joi.object({
  breakfast: Joi.array(),
  lunch: Joi.array(),
  snack: Joi.array(),
  dinner: Joi.array(),
  date:Joi.string(),
});
const createProduct = Joi.object({
  breakfast: Joi.object(),
  lunch: Joi.object(),
  snack: Joi.object(),
  dinner: Joi.object(),
});
/*
.Joi.array().items({
    name: Joi.string(),
    carbohydrates: Joi.number(),
    protein: Joi.number(),
    fat: Joi.number(),
    calories: Joi.number(),
  })*/
const productSchemas = { addProduct, createProduct };

const Products = model("product", productSchema);

module.exports = { Products, productSchemas };
