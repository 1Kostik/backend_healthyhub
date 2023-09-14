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
  updateFavorite,
  updateById,
  addContact,
  deleteById,
  getById,
  getAll,
} = require("./contacts");
const { uploadAvatar } = require("./user");
module.exports = {
  verify,
  resendVerifyEmail,
  uploadAvatar,
  current,
  logout,
  updateSubscriptionUser,
  updateFavorite,
  updateById,
  addContact,
  deleteById,
  getById,
  getAll,
  register,
  login,
};
