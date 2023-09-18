const { Products } = require("../../models");

const createProducts = async (req, res, next) => {
  console.log(req.body);
  const { _id: owner } = req.user;
  const body = req.body;
  const newProducts = await Products.create({ ...body, owner });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newProducts,
    },
  });
};
module.exports = createProducts;
// hi
