const { Schema, model } = require("mongoose");

const diarySchema = Schema(
  {
    date: {
      type: Date,
      default: Date.now,
    },
    weight: {
      type: Number,
      default: 0,
    },
    calories: {
      type: Number,
      default: 0,
    },
  },
  { versionKey: false, timestamps: true }
);

const Diary = model("diarys", diarySchema, "diarys");

module.exports = Diary;
