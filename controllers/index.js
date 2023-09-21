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
const { createWaterRecord, getWaterByOwner, updateWater } = require("./water");
const {
  updateCalories,
  createCalories,
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
  getWaterByOwner,
  updateWater,
  getAllProducts,
  updateUserInfo,
  updateCalories,
  createCalories,
  getAllCalories,
  dailyGoalCalories,
  updateGoal,
};
