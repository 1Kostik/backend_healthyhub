const { Water } = require("../../models/water");
const { formattedDate } = require("../../utils");

const getWaterIntake = async (req, res, next) => {
  const { _id: owner } = req.user;
  const currentDate = formattedDate();
  try {
    const existingWater = await Water.findOne({ owner, date: currentDate });
    if (!existingWater) {
      const user= await Water.create({owner, date:currentDate, value:0})
      console.log(user)
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          date: currentDate,
          value: 0,
        },
      });
      return;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        date: currentDate,
        value: existingWater.value,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Some problem with fetching water intake",
    });
  }
};

module.exports = getWaterIntake;
