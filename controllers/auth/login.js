const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User, Weight } = require("../../models");
const { HttpError, formattedDate } = require("../../utils");

require("dotenv").config();

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password invalid");
  }
  // if (user.verified !== true) {
  //   return res.status(401).send({ message: "Please verify your email" });
  // }
  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password invalid");
  }
  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "3h" });

  await User.findByIdAndUpdate(user._id, { token });

  let currendWeightDate;
  const currentDate=formattedDate();
 const userWeightDate=await Weight.findOne({owner:user._id, date:currentDate});
 if(!userWeightDate){
  currendWeightDate=null;
 }else{
  currendWeightDate=currentDate;
 }

  res.json({
    status: "success",
    code: 200,
    token,
    user: {
      name: user.name,
        email: user.email,
        goal: user.goal,
        gender: user.gender,
        age: user.age,
        height: user.height,
        weight: user.weight,
        activity: user.activity,
        avatarURL: user.avatarURL,
     },
     dateLastWeight:currendWeightDate
  });
};
module.exports = login;
