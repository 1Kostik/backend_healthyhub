// const { Contact } = require("../../models/contacts");


const addProduct = async (req, res, next) => {
  const { _id: owner } = req.user;
  const body = req.body;
  const newProduct = await Product.create({ ...body, owner });
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      newContact,
    },
  });
};
module.exports = addProduct;
// hi 