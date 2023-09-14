const { User } = require("../../models");
const { HttpError } = require("../../utils");
const { BASE_URL } = process.env;
const {sendEmail} = require("../../utils");

async function resendVerifyEmail(req, res, next) {
  const { email } = req.body;
  const user = await User.findOne({ email }).exec();
  if (!user) {
    throw HttpError(401, "Email not found");
  }
  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }
  const verifyEmail = {
    to: email,
    subject: "Confirm your email",
    html: `<a href="${BASE_URL}/api/users/verify/${user.verifyToken}">Click here to varify your email</a>`,
  };
  await sendEmail(verifyEmail);
  res.json({ message: "Verification email sent" });
}
module.exports = resendVerifyEmail;
