const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: process.env.META_USER,
    pass: process.env.META_PASSWORD,
  },
});
function sendEmail(message) {
  message["from"] = "sorochnkostya@meta.ua";
  return transport.sendMail(message);
}
module.exports = sendEmail;
