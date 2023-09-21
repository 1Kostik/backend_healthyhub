const { Water } = require("../../models/water");
const { formattedDate } = require("../../utils");

const getWaterIntake = async (req, res, next) => {
  const { _id: owner } = req.user;
  const currentDate = formattedDate();
  try {
    const existingWater = await Water.findOne({ owner, date: currentDate });

    if (!existingWater) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: "Water intake not found for the current date",
      });
      return;
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        date: currentDate,
        value: existingWater.water,
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
