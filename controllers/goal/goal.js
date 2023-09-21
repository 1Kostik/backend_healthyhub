const { User } = require("../../models");

const updateGoal = async (req, res, next) => {
  const { userId } = req.params; // Отримуємо ідентифікатор користувача
  const { newGoal } = req.body; // Отримуємо нову ціль з тіла запиту

  try {
    const user = await User.findById(userId); // Знаходимо користувача по id

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.goal = newGoal; // Оновлюємо та зберігаємо ціль користувача
    await user.save();

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        goal: user.goal, // Повертаємо ціль користувача
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateGoal;
