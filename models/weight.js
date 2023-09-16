const { Schema, model } = require("mongoose");
const Joi = require("joi");

const weightSchema = Schema(
  {
    weight: [
      {
        type: Number,
        default: 0,
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

const addWeight = Joi.object({
  weight: Joi.array().items(Joi.number())
});

const schemaWeight = { addWeight };
const Weight = model("weight", weightSchema);

module.exports = { Weight, schemaWeight };
