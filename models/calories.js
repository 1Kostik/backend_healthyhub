const { Schema, model } = require("mongoose");
const Joi = require("joi");

const caloriesSchema = Schema(
  {
    calories: {
      type: Number,
      default: 0,
    },
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

const addCaloriesShema = Joi.object({
  calories: Joi.number().required(),
  date: Joi.string().required(),
});

const Calories = model("calories", caloriesSchema);

module.exports = { Calories, addCaloriesShema };
