const crypto = require("crypto");
const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { sendNewPasswordByEmail } = require("../../utils");

async function resetPassword(req, res) {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res
      .status(404)
      .json({ message: "User not found (email not registered)" });
  }

  const newPassword = crypto.randomBytes(8).toString("hex");

  const unhashedPassword = newPassword;
  console.log("unhashedPassword", unhashedPassword);

  const hashPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashPassword;

  user.save();

  const emailUser = user.email;
  await sendNewPasswordByEmail(emailUser, unhashedPassword);

  return res
    .status(200)
    .json({ message: "Password reset email sent successfully" });
}

module.exports = {
  resetPassword,
};
