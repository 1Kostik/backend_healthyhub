const { User,Water,Weight,Calories,Products } = require("../../models");

const getAllUserInfo = async (req, res) => {
  const { ownerId } = req.params;

  const userInfoUser = await User.find({ owner: ownerId });
  const userWater = await Water.find({ owner: ownerId });
  const userWeight= await Weight.find({ owner: ownerId });
  const userCalories = await Calories.find({ owner: ownerId });
  const userProducts = await Products.find({ owner: ownerId });

  res.status(200).json({
    status: "success",
    data: [
     { userInfoUser:userInfoUser},
     { userWater:userWater},
      {userWeight:userWeight},
     { userCalories:userCalories},
      {userProducts:userProducts}
    ]     
  });
};

module.exports = getAllUserInfo;
