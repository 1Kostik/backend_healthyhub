const { Calories } = require("../../models");

const getAllCalories = async (req, res) => {
  const { ownerId } = req.params;

  const allCalories = await Calories.find({ owner: ownerId });

  res.status(200).json(allCalories);
};

module.exports = getAllCalories;
