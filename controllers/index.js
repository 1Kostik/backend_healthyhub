const {
  register,
  login,
  updateSubscriptionUser,
  logout,
  current,
  verify,
  resendVerifyEmail,
} = require("./auth");
const {addProduct}=require("./products")
const { uploadAvatar } = require("./user");
module.exports = {
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
