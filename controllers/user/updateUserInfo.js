const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { SECRET_KEY } = process.env;

const updateUserInfo = async (req, res) => {
  const { _id: id } = req.user;

  const body = req.body;
  const updateUserInfo = await User.findByIdAndUpdate(
    id,
    { ...body },
    { new: true }
  ).exec();
  res.status(200).json({
    status: "success",
    data: {
      name: updateUserInfo.name,
      goal: updateUserInfo.goal,
      gender: updateUserInfo.gender,
      age: updateUserInfo.age,
      height: updateUserInfo.height,
      weight: updateUserInfo.weight,
      activity: updateUserInfo.activity,
    },
  });
};

module.exports = updateUserInfo;
