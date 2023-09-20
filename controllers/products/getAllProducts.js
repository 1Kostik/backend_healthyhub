const { Products } = require("../../models");
const { formattedDate } = require("../../utils");

const getAllProducts = async (req, res, next) => {
  const { _id: owner } = req.user;

  const currentDate = formattedDate();

  const userProducts = await Products.findOne({ owner });
  
  if(!userProducts){
    const newProducts = await Products.create({
        lunch: [],
        snack: [],
        dinner: [],
        breakfast: [],
        owner,
        date: currentDate,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        newProducts,
      },
    });
  }
  
  
  const id = userProducts._id;

  if (currentDate !== userProducts.date) {
    const newProducts = await Products.findByIdAndUpdate(
      id,
      {
        lunch: [],
        snack: [],
        dinner: [],
        breakfast: [],
        owner,
        date: currentDate,
      },
      { new: true }
    );

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        newProducts,
      },
    });
  } else {
    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        userProducts,
      },
    });
  }
};
module.exports = getAllProducts;
