const { Weight } = require("../../models");
const { formattedDate } = require("../../utils");

const current = async (req, res) => {
  const user = req.user;

  let currendWeightDate;
  const currentDate = formattedDate();
  const userWeightDate = await Weight.findOne({
    owner: user._id,
    date: currentDate,
  });
  if (!userWeightDate) {
    currendWeightDate = null;
  } else {
    currendWeightDate = currentDate;
  }

  res.status(200).json({
    status: "success",
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
    dateLastWeight: currendWeightDate,
  });
};

module.exports = current;
