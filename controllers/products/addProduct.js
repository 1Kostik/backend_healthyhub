const { Products } = require("../../models");


const addProduct = async (req, res, next) => {
  console.log(req.body)
  // const { _id: owner } = req.user;
  const body = req.body;
  const newProducts = await Products.create({ ...body});
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newProducts,
    },
  });
};
module.exports = addProduct;
// hi 