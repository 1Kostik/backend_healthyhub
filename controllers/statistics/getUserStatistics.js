const { Calories, Water, Weight } = require("../../models");
const { getLastMonthStartDate, getLastYearStartDate } = require("../../utils");

const getUserStatistics = async (req, res, next) => {
  const { _id: owner } = req.user;

  const lastMonthStartDate = getLastMonthStartDate();
  const lastYearStartDate = getLastYearStartDate();

  const lastMonthCalories = await Calories.find({
    owner,
    date: { $gte: lastMonthStartDate },
  }).exec();

  const lastMonthWater = await Water.find({
    owner,
    date: { $gte: lastMonthStartDate },
  }).exec();

  const lastMonthWeight = await Weight.find({
    owner,
    date: { $gte: lastMonthStartDate },
  }).exec();

  const lastYearCalories = await Calories.find({
    owner,
    date: { $gte: lastYearStartDate },
  }).exec();

  const lastYearWater = await Water.find({
    owner,
    date: { $gte: lastYearStartDate },
  }).exec();

  const lastYearWeight = await Weight.find({
    owner,
    date: { $gte: lastYearStartDate },
  }).exec();

  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      water: {
        lastMonth: lastMonthWater,
        lastYear: lastYearWater,
      },
      weight: {
        lastMonth: lastMonthWeight,
        lastYear: lastYearWeight,
      },
      calories: {
        lastMonth: lastMonthCalories,
        lastYear: lastYearCalories,
      },
    },
  });
};

module.exports = getUserStatistics;
