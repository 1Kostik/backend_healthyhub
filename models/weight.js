const { Schema, model } = require("mongoose");
const Joi = require("joi");

const weightSchema = Schema(
  {
    weight: {
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

const addWeight = Joi.object({
  weight: Joi.number().required(),
  date: Joi.string().required(),
 
});
const updateWeight = Joi.object({
  weight: Joi.number().required(),
  date: Joi.string().required(), 
});
const schemaWeight = { addWeight, updateWeight };
const Weight = model("weight", weightSchema);

module.exports = { Weight, schemaWeight };
