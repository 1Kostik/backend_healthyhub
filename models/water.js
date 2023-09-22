const { Schema, model } = require("mongoose");
const Joi = require("joi");

const waterSchema = Schema(
  {
    value: {
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

const addWater = Joi.object({
  value: Joi.number().required(),
  date: Joi.string(),
});
const updateWater = Joi.object({
  value: Joi.number().required(),
  date: Joi.string(),
});
const getWater = Joi.object({
  value: Joi.number(),
  date: Joi.string(),
});
const schemaWater = { addWater, updateWater, getWater };
const Water = model("water", waterSchema);

module.exports = { Water, schemaWater };
