const {
  login,
  logout,
  verify,
  current,
  register,
  resendVerifyEmail,
} = require("./auth");
const {
  updateProducts,
  createProducts,
  getAllProducts,
} = require("./products");
const { uploadAvatar, updateUserInfo } = require("./user");
const { updateWeight, createWeight, getAllWeight } = require("./weight");
const { createWaterRecord, getWaterIntake, updateWater } = require("./water");
const { getAllCalories, dailyGoalCalories } = require("./calories");

const updateGoal = require("./goal");
module.exports = {
  login,
  verify,
  logout,
  current,
  register,
  updateGoal,
  updateWater,
  updateWeight,
  getAllWeight,
  createWeight,
  uploadAvatar,
  createProducts,
  updateProducts,
  getWaterIntake,
  getAllProducts,
  updateUserInfo,
  getAllCalories,
  resendVerifyEmail,
  createWaterRecord,
  dailyGoalCalories,
};
