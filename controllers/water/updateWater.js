const { Water } = require("../../models/water");
const { formattedDate } = require("../../utils");

const updateWater = async (req, res, next) => {
  const { _id: owner } = req.user;
  const body = req.body;
  const currentDate = formattedDate();
  try {
    const existingWater = await Water.findOne({ owner, date: currentDate });
    if (!existingWater) {
      const newWater = await Water.create({
        ...body,
        date: currentDate,
        owner,
      });
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          date: currentDate,
          value: newWater.value,
        },
      });
    } else {
      existingWater.value += body.value;
      await existingWater.save();

      res.status(200).json({
        status: "success",
        code: 200,
        data: {
          date: currentDate,
          value: existingWater.value,
        },
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Some problem with updating water ",
    });
  }
};
module.exports = updateWater;
