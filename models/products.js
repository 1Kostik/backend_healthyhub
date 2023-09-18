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
  },
  { versionKey: false, timestamps: true }
);
const addProduct = Joi.object({
  breakfast: Joi.array(),
  lunch: Joi.array(),
  snack: Joi.array(),
  dinner: Joi.array(),
});
/*
.Joi.array().items({
    name: Joi.string(),
    carbohydrates: Joi.number(),
    protein: Joi.number(),
    fat: Joi.number(),
    calories: Joi.number(),
  })*/
const productSchemas = { addProduct };

const Products = model("product", productSchema);

module.exports = { Products, productSchemas };
