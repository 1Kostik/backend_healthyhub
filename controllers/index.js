const {
  register,
  login,
  updateSubscriptionUser,
  logout,
  current,
  verify,
  resendVerifyEmail,
} = require("./auth");
const { updateProducts, createProducts,getAllProducts} = require("./products");
const { uploadAvatar,updateUserInfo } = require("./user");
const { updateWeight, createWeight } = require("./weight");
const { createWaterRecord, getWaterByOwner, updateWater } = require("./water");
module.exports = {
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
  updateUserInfo
};
