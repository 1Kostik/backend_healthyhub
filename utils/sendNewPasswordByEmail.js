const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: process.env.META_USER,
    pass: process.env.META_PASSWORD,
  },
});
function sendNewPasswordByEmail(email, newPassword) {

    const mailOptions = {
      from: "sorochnkostya@meta.ua",
      to: email,
      subject: "Password Reset",
      html: `<p>To confirm your registration, please click on the link below:\n
      ${newPassword}"</p>`,     
    };

    return transport.sendMail(mailOptions);     
 
}

module.exports = {
  sendNewPasswordByEmail,
};
