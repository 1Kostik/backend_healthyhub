const { Calories } = require("../../models");

const createCalories = async (req, res, next) => {


  const { _id: owner } = req.user;

  console.log(owner);

  const body = req.body;

  console.log(body);

  const newCalories = await Calories.create({ ...body,owner});

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newCalories,
    },
  });
};
module.exports = createCalories;
