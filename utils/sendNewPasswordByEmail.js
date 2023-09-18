const nodemailer = require("nodemailer");

async function sendNewPasswordByEmail(email, newPassword) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.meta.ua",
      port: 465,
      secure: true,
      auth: {
        user: process.env.META_USER,
        pass: process.env.META_PASSWORD,
      },
    });

    const mailOptions = {
      from: "sorochnkostya@meta.ua",
      to: email,
      subject: "Password Reset",
      text: `Your new password is: ${newPassword}`,
      html: `<p>Your new password is:\n ${newPassword}</p>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw error;
  }
}

module.exports = {
  sendNewPasswordByEmail,
};
