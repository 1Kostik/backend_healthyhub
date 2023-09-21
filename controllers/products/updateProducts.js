const { Products, Calories } = require("../../models");
const { HttpError } = require("../../utils");

const updateProducts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { id } = req.params;

  const body = req.body;

  const type = body.type;

  const userProduct = await Products.findOne({ owner });

  const index = userProduct[type].findIndex(
    (item) => item._id.toString() === id
  );
 if(index=== -1){

 }
  userProduct[type][index] = body.product;
  userProduct.save();

  const totalCalories = await Calories.findOne({owner})

  res.json({
    status: "success",
    code: 200,
    data: {
      type,
      product: { ...body.product, id },
    },
  });
};
module.exports = updateProducts;
