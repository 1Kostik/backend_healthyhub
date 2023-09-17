const { Products } = require("../../models");


const addProducts = async (req, res, next) => {
  console.log(req.body)
  const id = req.params
  // const { _id: owner } = req.user;
  console.log(id)
  const body = req.body;
  console.log(body)
  const newProducts = await Products.findByIdAndUpdate({body,id});
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newProducts,
    },
  });
};
module.exports = addProducts;
// hi 