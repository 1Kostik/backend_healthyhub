const { Schema, model } = require("mongoose");
const Joi = require("joi");

const statisticSchema = Schema(
  {
    date: {
      type: Date,
      default: new Date(),
    },
    calories: {
      type: Number,
      default: 0,
    },
    water: {
      type: Number,
      default: 0,
    },
    weight: {
      type: Number,
      default: 0,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Statistic = model("statistic", statisticSchema);

const statisticAdd = Joi.object({
  date: Joi.date().required(),
  calories: Joi.number().min(0).required(),
  water: Joi.number().min(0).required(),
  weight: Joi.number().min(0).required(),
  // owner: Joi.object().required(),
});

const joiSchema = { statisticAdd };

module.exports = { Statistic, joiSchema };
