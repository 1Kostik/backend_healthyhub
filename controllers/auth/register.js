const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../../models");
const { HttpError } = require("../../utils");
const gravatar = require("gravatar");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email already in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  const payload = {
    id: newUser._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "3h" });
  newUser.token = token;
  await newUser.save();

  res.status(201).json({
    status: "success",
    code: 201,
    token,
    user: {
    email: newUser.email,
    name: newUser.name,
    goal: newUser.goal,
        gender: newUser.gender,
        age: newUser.age,
        height: newUser.height,
        weight: newUser.weight,
        activity: newUser.activity,
    avatarURL: newUser.avatarURL,
    },
  });
};
module.exports = register;

// робочий варіант v1
// // const crypto = require("crypto");
// const bcrypt = require("bcrypt");
// // const { BASE_URL } = process.env;
// const { User } = require("../../models");
// const { HttpError } = require("../../utils");
// // const sendEmail = require("../../utils/sendEmail");
// const gravatar = require("gravatar");

// const register = async (req, res) => {
//   const { email, password} = req.body;
//   const user = await User.findOne({ email });
//   if (user) {
//     throw HttpError(409, "Email already in use");
//   }
//   const hashPassword = await bcrypt.hash(password, 10);
//   // const verifyToken = crypto.randomUUID();
//   const avatarURL = gravatar.url(email);

//   const newUser = await User.create({
//     ...req.body,
//     password: hashPassword,
//     // verifyToken,
//     avatarURL,
//   });
//   // await sendEmail({
//   //   to: email,
//   //   subject: `Welcom on board,${name}`,
//   //   html: `<p>To confirm your registration, please click on the link below</p>
//   // <a href="${BASE_URL}/api/users/verify/${verifyToken}">Click me</a>`,
//   //   text: `To confirm your registration, please click on the link below:\n
//   // ${BASE_URL}/api/users/verify/${verifyToken}`,
//   // });
//   res.status(201).json({
//     email: newUser.email,
//     name: newUser.name,
//     avatarURL: newUser.avatarURL,
//   });
// };
// module.exports = register;
