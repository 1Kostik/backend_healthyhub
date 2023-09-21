const { User } = require("../../models");
const { calculateBMR } = require("../../utils");

const dailyGoalCalories = async (req, res) => {
  try {
    const { _id: id } = req.user;
    const user = await User.findById(id);

    const BMR = calculateBMR(user);

    const dailyGoalCalories = BMR;

    res.json({
      status: "success",
      code: 200,
      data: {
        value: dailyGoalCalories,
      },
    });
  } catch (error) {
    res.status(error.code || 500).json({
      status: "error",
      code: error.code || 500,
      message: error.message,
    });
  }
};

module.exports = dailyGoalCalories;
