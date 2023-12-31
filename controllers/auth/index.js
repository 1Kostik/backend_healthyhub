const register = require("./register");
const login = require("./login");
const current = require("./current");

const logout = require("./logout");
const resendVerifyEmail = require("./resendVerifyEmail");
const verify = require("./verify");
const { resetPassword } = require("./reset-password");
const { checkEmail } = require("./checkEmail");
module.exports = {
  login,
  verify,
  logout,
  current,
  register,
  checkEmail,
  resetPassword,
  resendVerifyEmail,
};
