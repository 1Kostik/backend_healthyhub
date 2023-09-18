const { Weight } = require("../../models");

const getAllWeight = async (req, res) => {
  const { ownerId } = req.params;

  const allWeight = await Weight.find({ owner: ownerId });

  res.status(200).json(allWeight);
};

module.exports = getAllWeight;
