const { Schema, model } = require("mongoose");
const Joi = require("joi");

const weightSchema = Schema(
  {
  weight:{ type: Number},
   
  },
  { versionKey: false, timestamps: true }
);

const addWeight = Joi.object({
  weight:Joi.number()
});
const updateWeight = Joi.object({
  weight:Joi.number()
});
const schemaWeight = { addWeight,updateWeight };
const Weight = model("weight", weightSchema);

module.exports = { Weight, schemaWeight };
