const { Products } = require("../../models");
const { HttpError } = require("../../utils");

const getAllProducts = async (req, res, next) => {
  const { _id: owner } = req.user;

  const allProducts = await Products.find({ owner });

  if (allProducts.length === 0) {
    throw HttpError(404, "Not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: { allProducts },
  });
};
module.exports = getAllProducts;
