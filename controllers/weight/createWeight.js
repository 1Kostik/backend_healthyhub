const { Weight } = require("../../models");

const createWeight = async (req, res, next) => {
  const { _id: owner } = req.user;

  const body = req.body;

  const newProducts = await Weight.create({ ...body, owner });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newProducts,
    },
  });
};

module.exports = createWeight;
