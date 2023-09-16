const { Water } = require("../water");

const getWaterByOwner = async (req, res) => {
  try {
    const { ownerId } = req.params;

    const waterRecords = await Water.find({ owner: ownerId });

    res.status(200).json(waterRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "!!! error !!!",
    });
  }
};

module.exports = getWaterByOwner;
