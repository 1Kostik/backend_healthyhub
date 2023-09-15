const { Schema, model } = require("mongoose");

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

const Water = model("water", waterSchema);

module.exports = Water;