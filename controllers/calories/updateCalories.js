const { Calories } = require("../../models");


const updateCalories = async (req, res, next) => {
  // const { _id: owner } = req.user; 
  const {id} = req.params;
  const body = req.body;
  const updateWt = await Calories.findByIdAndUpdate(body,{new: true});
  res.status(201).json({
    status: "success",
    code: 200,
    data: {
      updateWt,
    },
  });
};
module.exports = updateCalories;
