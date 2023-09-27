const { Products, Calories } = require("../../models");
const { formattedDate } = require("../../utils");

const getAllProducts = async (req, res, next) => {
  const { _id: owner } = req.user;

  const currentDate = formattedDate();

  const userProducts = await Products.findOne({ owner });
  const userCalories = await Calories.findOne({ owner, date: currentDate });

  if (!userProducts) {
    await Calories.create({ calories: 0, owner, date: currentDate });
    const newProducts = await Products.create({
      lunch: [],
      snack: [],
      dinner: [],
      breakfast: [],
      owner: owner,
      date: currentDate,
      totalCalories: 0,
    });
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        userProducts:newProducts,
      },
    });
    return;
  }

  const id = userProducts._id;

  if (currentDate !== userProducts.date) {
    await Calories.create({ calories: 0, owner, date: currentDate });
    const newProducts = await Products.findByIdAndUpdate(
      id,
      {
        lunch: [],
        snack: [],
        dinner: [],
        breakfast: [],
        owner,
        date: currentDate,
        totalCalories: 0,
      },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        userProducts:newProducts,
      },
    });
  }
  if (currentDate === userProducts.date) {
    userProducts.totalCalories = userCalories.calories;
    userProducts.save();

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        userProducts,
      },
    });
  }
};
module.exports = getAllProducts;
