const { Calories } = require("../../models");
const mongoose = require("mongoose");

const getAllCalories = async (req, res) => {
  try {
    const { ownerId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(ownerId)) {
      return res.status(400).json({ error: "Invalid ownerId" });
    }

    const waterRecords = await Calories.find({ owner: ownerId });
    res.status(200).json(waterRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
    });
  }
};

module.exports = getAllCalories;
