const { Products } = require("../../models");

const createProducts = async (req, res, next) => {
  const { _id: owner } = req.user;

  const body = req.body;

  const userProducts = await Products.findOne({ owner });

  const id = userProducts._id;

  if ("breakfast" === body.type) {
    const breakfast = { breakfast: [...body.products] };
    const newProducts = await Products.findByIdAndUpdate(
      id,
      { ...breakfast },
      { new: true }
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        type: "breakfast",
        product: newProducts.breakfast,
      },
    });
  }
  if ("snack" === body.type) {
    const snack = { snack: [...body.products] };
    const newProducts = await Products.findByIdAndUpdate(
      id,
      { ...snack },
      { new: true }
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        type: "snack",
        product: newProducts.snack,
      },
    });
  }
  if ("lunch" === body.type) {
    const lunch = { lunch: [...body.products] };
    const newProducts = await Products.findByIdAndUpdate(
      id,
      { ...lunch },
      { new: true }
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        type: "lunch",
        product: newProducts.lunch,
      },
    });
  }
  if ("dinner" === body.type) {
    const dinner = { dinner: [...body.products] };
    const newProducts = await Products.findByIdAndUpdate(
      id,
      { ...dinner },
      { new: true }
    );
    res.json({
      status: "success",
      code: 200,
      data: {
        type: "dinner",
        product: newProducts.dinner,
      },
    });
  }
};
module.exports = createProducts;
