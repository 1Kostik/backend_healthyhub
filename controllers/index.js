const {
  register,
  login,
  updateSubscriptionUser,
  logout,
  current,
  verify,
  resendVerifyEmail,
} = require("./auth");
const { addProducts, createProducts } = require("./products");
const { uploadAvatar } = require("./user");
const { updateWeight, createWeight } = require("./weight");
module.exports = {
  createWeight,
  createProducts,
  updateWeight,
  addProducts,
  verify,
  resendVerifyEmail,
  uploadAvatar,
  current,
  logout,
  updateSubscriptionUser,
  register,
  login,
};
