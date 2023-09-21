const { Weight } = require("../../models");
const { getCurrentDate } = require("../../utils");


const updateWeight = async (req, res, next) => {
const {_id:owner}=req.user;
  const body = req.body;
  const currentDate=getCurrentDate();
  try {
    const existingWeight = await Weight.findOne({ owner, date: currentDate });
    if (!existingWeight) {
      // Если вес на текущую дату не найден, создаем новую запись
      const newWeight = await Weight.create({ ...body, date: currentDate, owner });
      res.status(201).json({
        status: "success",
        code: 201,
        data: {
          date: currentDate,
          weight: newWeight.weight,
        },
      });
    } else {
      // Если вес на текущую дату найден, обновляем его
      existingWeight.weight = body.weight;
      await existingWeight.save();

      res.status(200).json({
        status: "success",
        code: 200,
        data: {
          date: currentDate,
          weight: existingWeight.weight,
        },
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Some problem with updating weight ",
    });
  }
};
module.exports = updateWeight;
