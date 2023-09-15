const { Schema, model } = require("mongoose");

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
  },
  { versionKey: false, timestamps: true }
);

const Weight = model("weight", weightSchema);

module.exports = Weight;