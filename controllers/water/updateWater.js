const { Water } = require("../../models/water");

const updateWater = async (req, res, next) => {
  // const { _id: owner } = req.user;

  const id = req.params;

  const body = req.body;

  const updateWt = await Water.findByIdAndUpdate(id, body, { new: true });

  res.status(201).json({
    status: "success",
    code: 200,
    data: {
      updateWt,
    },
  });
};
module.exports = updateWater;
