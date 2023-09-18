const { User } = require("../../models");

const getAllUserInfo = async (req, res) => {
  const { ownerId } = req.params;

  const info = await User.find({ owner: ownerId });

  // res.status(200).json({
  //   status: "success",
  //   data: [
  //     {
  //       user: {
  //         name: info.name,
  //         goal: info.goal,
  //         gender: info.gender,
  //         age: info.age,
  //         height: info.height,
  //         weight: info.weight,
  //         activity: info.activity,
  //       },
  //     },
  //     // { weight: [{}] },
  //     // { calories: [{}] },
  //     // { water: [{}] },
  //   ],
  // });
};

module.exports = getAllUserInfo;
