const { Products } = require("../../models");
const { HttpError } = require("../../utils");

const updateProducts = async (req, res, next) => {
  const { id } = req.params;

  // const { _id: owner } = req.user;

  const body = req.body;

  const newProducts = await Products.findByIdAndUpdate(id, body, { new: true });

  if (!newProducts) {
    throw HttpError(404, "Not found");
  }

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newProducts,
    },
  });
};
module.exports = updateProducts;
