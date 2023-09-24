const { Products, Calories } = require("../../models");
const { formattedDate } = require("../../utils");

const updateProducts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { id } = req.params;
  const currentDate = formattedDate();
  const body = req.body;

  const type = body.type;
  const calories = Number(body.product.calories);

  const userProduct = await Products.findOne({ owner });
  const oldCalories = userProduct[type].find((el) => el._id.toString() === id);
  const caloriesUser = await Calories.findOne({ owner, date: currentDate });
 
  const updCls = caloriesUser.calories - oldCalories.calories + calories;

  caloriesUser.calories = updCls;
  caloriesUser.save();

  const index = userProduct[type].findIndex(
    (item) => item._id.toString() === id
  );

  userProduct[type][index] = body.product;
  userProduct.save();

  res.json({
    status: "success",
    code: 200,
    data: {
      type,
      product: { ...body.product, id },
      totalCalories: caloriesUser.calories,
    },
  });
};
module.exports = updateProducts;
