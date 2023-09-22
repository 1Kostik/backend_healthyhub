const { Calories } = require("../../models");
const { formattedDate } = require("../../utils");

const createCalories = async (req, res, next) => {


  const { _id: owner } = req.user;

  const currentDate = formattedDate();

  const body = req.body;

  

  const newCalories = await Calories.create({ ...body,owner, date:currentDate});

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newCalories,
    },
  });
};
module.exports = createCalories;
