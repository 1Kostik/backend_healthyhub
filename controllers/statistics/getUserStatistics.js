const { Calories, Water, Weight } = require("../../models");
const getLastMonthStatistics = require("../../utils/lastMonth");
const getLastYearStatistics = require("../../utils/lastYear");

async function getUserStatistics(req, res, next) {
  // Отримуємо ідентифікатор користувача
  const { _id: owner } = req.user;

  // Отримуємо статистику за останній рік та останній місяць
  try {
    const waterLastYear = await getLastYearStatistics(owner, Water);
    const waterLastMonth = await getLastMonthStatistics(owner, Water);

    const weightLastYear = await getLastYearStatistics(owner, Weight);
    const weightLastMonth = await getLastMonthStatistics(owner, Weight);

    const caloriesLastYear = await getLastYearStatistics(owner, Calories);
    const caloriesLastMonth = await getLastMonthStatistics(owner, Calories);

    // Формуємо об'єкт відповіді, який містить статистику
    res.json({
      status: "success",
      code: 200,
      data: {
        water: {
          lastMonth: waterLastMonth,
          lastYear: waterLastYear,
        },
        weight: {
          lastMonth: weightLastMonth,
          lastYear: weightLastYear,
        },
        calories: {
          lastMonth: caloriesLastMonth,
          lastYear: caloriesLastYear,
        },
      },
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ status: "error", code: 500, message: "Internal Server Error" });
  }
}

module.exports = getUserStatistics;
