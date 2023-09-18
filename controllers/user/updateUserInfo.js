const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { SECRET_KEY } = process.env;

const updateUserInfo = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const decoded = jwt.verify(token, SECRET_KEY);
  const id = decoded.id;

  const body = req.body;
  const updateUserInfo = await User.findByIdAndUpdate(id,{...body}, { new: true });
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
