const { Weight } = require("../../models");

const createWeight = async (req, res, next) => {
  console.log(req.body);
  const id = req._id;
  // const { _id: owner } = req.user;
  console.log(id);
  const body = req.body;
  console.log(body);
  const newProducts = await Weight.create({ ...body});
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newProducts,
    },
  });
};
module.exports = createWeight;
