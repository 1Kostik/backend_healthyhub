const {
  register,
  login,
  updateSubscriptionUser,
  logout,
  current,
  verify,
  resendVerifyEmail,
} = require("./auth");
const { addProduct } = require("./products");
const { uploadAvatar } = require("./user");
const { addWeight } = require("./weight");
module.exports = {
  addWeight,
  addProduct,
  verify,
  resendVerifyEmail,
  uploadAvatar,
  current,
  logout,
  updateSubscriptionUser,
  register,
  login,
};
