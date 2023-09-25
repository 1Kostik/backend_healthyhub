const { Products, Calories } = require("../../models");
const { formattedDate } = require("../../utils");
const crypto = require("crypto");

const createProducts = async (req, res, next) => {
  const { _id: owner } = req.user;

  const body = req.body;

  const type = body.type;

  const arryProducts = body.products;

  for (let i = 0; i < arryProducts.length; i += 1) {
    arryProducts[i].id = crypto.randomUUID();
  }

  const currentDate = formattedDate();

  const arrayCalories = body.products.map((el) => Number(el.calories));

  const totalCaloriesToday = arrayCalories.reduce((previousValue, number) => {
    return previousValue + number;
  }, 0);

 
 

  const userCalories = await Calories.findOne({ owner, date: currentDate });

  if ("breakfast" === type) {
    const userProducts = await Products.findOne({ owner });
    const id = userProducts._id;
    if (userCalories.calories !== 0) {
      userCalories.calories = totalCaloriesToday + userCalories.calories;

      userCalories.save();
    } else {
      userCalories.calories = totalCaloriesToday;

      userCalories.save();
    }
    userProducts.totalCalories = userCalories.calories;

    userProducts.save();

    const breakfast = { breakfast: [...userProducts[type],...arryProducts] };

    const newProducts = await Products.findByIdAndUpdate(
      id,
      { ...breakfast },
      { new: true }
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        type: "breakfast",
        product: newProducts.breakfast,
        totalCalories: userCalories.calories,
      },
    });
  }
  if ("snack" === type) {
    const userProducts = await Products.findOne({ owner });
    const id = userProducts._id;
    if (userCalories.calories !== 0) {
      userCalories.calories = totalCaloriesToday + userCalories.calories;
      userCalories.save();
    } else {
      userCalories.calories = totalCaloriesToday;
      userCalories.save();
    }
    userProducts.totalCalories = userCalories.calories;
    userProducts.save();

    const snack = { snack: [...userProducts[type],...arryProducts] };
    const newProducts = await Products.findByIdAndUpdate(
      id,
      { ...snack },
      { new: true }
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        type: "snack",
        product: newProducts.snack,
        totalCalories: userCalories.calories,
      },
    });
  }
  if ("lunch" === type) {
    const userProducts = await Products.findOne({ owner });
    const id = userProducts._id;
    if (userCalories.calories !== 0) {
      userCalories.calories = totalCaloriesToday + userCalories.calories;
      userCalories.save();
    } else {
      userCalories.calories = totalCaloriesToday;
      userCalories.save();
    }
    userProducts.totalCalories = userCalories.calories;
    userProducts.save();

    const lunch = { lunch: [...userProducts[type],...arryProducts] };
    const newProducts = await Products.findByIdAndUpdate(
      id,
      { ...lunch },
      { new: true }
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        type: "lunch",
        product: newProducts.lunch,
        totalCalories: userCalories.calories,
      },
    });
  }
  if ("dinner" === type) {
    const userProducts = await Products.findOne({ owner });
    const id = userProducts._id;
    if (userCalories.calories !== 0) {
      userCalories.calories = totalCaloriesToday + userCalories.calories;
      userCalories.save();
    } else {
      userCalories.calories = totalCaloriesToday;
      userCalories.save();
    }
    userProducts.totalCalories = userCalories.calories;
    userProducts.save();

    const dinner = { dinner: [...userProducts[type],...arryProducts] };
    const newProducts = await Products.findByIdAndUpdate(
      id,
      { ...dinner },
      { new: true }
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        type: "dinner",
        product: newProducts.dinner,
        totalCalories: userCalories.calories,
      },
    });
  }
};
module.exports = createProducts;
