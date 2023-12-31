const { Products, Calories } = require("../../models");
const { formattedDate } = require("../../utils");

const updateProducts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { id} = req.params;

  const currentDate = formattedDate();
  const body = req.body;
  const product = body.product;
  product.ident = id;
  const type = body.type;
  const calories = Number(body.product.calories);

  const userProduct = await Products.findOne({ owner });
  const oldCalories = userProduct[type].find((el) => el.ident === id);
  if (!oldCalories) {
    return res.status(404).json({
      status: "error",
      code: 404,
      message: `Product with id=${ident} not found`,
    });
  }
  const caloriesUser = await Calories.findOne({ owner, date: currentDate });

  const updCls = caloriesUser.calories - oldCalories.calories + calories;

  caloriesUser.calories = updCls;
  caloriesUser.save();

  const index = userProduct[type].findIndex((item) => item.ident === id);
  userProduct[type][index] = product;
  userProduct.totalCalories = caloriesUser.calories;
  userProduct.save();

  const updateProduct = userProduct[type].find(
    (el) => el.name === product.name
  );

  res.json({
    status: "success",
    code: 200,
    data: {
      type,
      product: updateProduct,
      totalCalories: caloriesUser.calories,
    },
  });
};
module.exports = updateProducts;
