const {
  register,
  login,
  updateSubscriptionUser,
  logout,
  current,
  verify,
  resendVerifyEmail,
} = require("./auth");
const {
  updateProducts,
  createProducts,
  getAllProducts,
} = require("./products");
const { uploadAvatar, updateUserInfo, getAllUserInfo } = require("./user");
const { updateWeight, createWeight, getAllWeight } = require("./weight");
const { createWaterRecord, getWaterIntake, updateWater } = require("./water");
const {
  getAllCalories,
  dailyGoalCalories,
} = require("./calories");

const updateGoal = require("./goal");
module.exports = {
  getAllUserInfo,
  getAllWeight,
  createWeight,
  createProducts,
  updateWeight,
  updateProducts,
  verify,
  resendVerifyEmail,
  uploadAvatar,
  current,
  logout,
  updateSubscriptionUser,
  register,
  login,
  createWaterRecord,
  getWaterIntake,
  updateWater,
  getAllProducts,
  updateUserInfo,
  getAllCalories,
  dailyGoalCalories,
  updateGoal,
};
