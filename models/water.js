const { Schema, model } = require("mongoose");
const Joi = require("joi");

const waterSchema = Schema(
  {
    water: {
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

const addWater = Joi.object({
  water: Joi.array().items(Joi.number()),
});
const SchemaWater = { addWater };
const Water = model("water", waterSchema);

module.exports = { Water, SchemaWater };
