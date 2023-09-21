const { User } = require("../../models");

const updateGoal = async (req, res, next) => {
  const { _id: id } = req.user; 
  const { newGoal } = req.body; 

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { goal: newGoal },
      { new: true }
    ).exec();

    if (!updatedUser) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "User not found",
      });
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        goal: updatedUser.goal,
      },

    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateGoal;
