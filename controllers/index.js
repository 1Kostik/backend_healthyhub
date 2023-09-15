const {
  register,
  login,
  updateSubscriptionUser,
  logout,
  current,
  verify,
  resendVerifyEmail,
} = require("./auth");

const { uploadAvatar } = require("./user");
module.exports = {
  verify,
  resendVerifyEmail,
  uploadAvatar,
  current,
  logout,
  updateSubscriptionUser,
  register,
  login,
};
