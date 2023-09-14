const register = require("./register");
const login = require("./login");
const current = require("./current");
const updateSubscriptionUser = require("./updateSubscriptionUser");
const logout = require("./logout");
const resendVerifyEmail = require("./resendVerifyEmail");
const verify= require("./verify")
module.exports = {
  verify,
  resendVerifyEmail,
  register,
  login,
  current,
  updateSubscriptionUser,
  logout,
};
