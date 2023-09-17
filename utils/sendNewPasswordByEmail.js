const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendNewPasswordByEmail(email, newPassword) {
  try {
    const msg = {
      to: email,
      from: 'petro.shutak.ua@gmail.com', 
      subject: 'Password Reset',
      text: `Your new password is: ${newPassword}`,
    };

    await sgMail.send(msg);

    console.log("Password reset email sent successfully");
  } catch (error) {
    console.error("Error sending password reset email:", error);
    throw error;
  }
}

module.exports = {
  sendNewPasswordByEmail,
};

// const nodemailer = require("nodemailer");

// async function sendNewPasswordByEmail(email, newPassword) {
//   try {
//     const transporter = nodemailer.createTransport({
//       host: "sandbox.smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: process.env.MAILTRAP_USER,
//         pass: process.env.MAILTRAP_PASSWORD,
//       },
//     });

//     const mailOptions = {
//       from: "sorochankostya@gmail.com",
//       to: email,
//       subject: "Password Reset",
//       text: `Your new password is: ${newPassword}`,
//     };

//     await transporter.sendMail(mailOptions);

//     console.log("Password reset email sent successfully");
//   } catch (error) {
//     console.error("Error sending password reset email:", error);
//     throw error;
//   }
// }

// module.exports = {
//   sendNewPasswordByEmail,
// };
