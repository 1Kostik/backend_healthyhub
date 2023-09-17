const { Water } = require("../../models/water");

const createWaterRecord = async (req, res) => {
  try {
    const { water, owner } = req.body;

    const waterRecord = new Water({ water, owner });

    const savedRecord = await waterRecord.save();

    res.status(201).json(savedRecord);
  } catch (error) {
    console.error(error);
    res.status(501).json({ error: "Server error" });
  }
};

module.exports = createWaterRecord;