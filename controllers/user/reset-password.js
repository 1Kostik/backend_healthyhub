const crypto = require('crypto'); 
const User = require('../models/user'); 
const { sendNewPasswordByEmail } = require('../utils'); 
async function resetPassword(req, res) {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found (email not registered)' });
    }

    const newPassword = crypto.randomBytes(4).toString('hex'); 
    user.password = newPassword;
    await user.save();

    sendNewPasswordByEmail(user.email, newPassword); 

    return res.status(200).json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(422).json({ message: 'Unprocessable entity (password reset email failed)' });
  }
}

module.exports = {
  resetPassword,
};
