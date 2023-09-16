const { Weight } = require("../../models");


const updateWeight = async (req, res, next) => {
  // const { _id: owner } = req.user; 
  const id = req.params;
  const body = req.body;
  const updateWt = await Weight.findByIdAndUpdate(id,body,{new: true});
  res.status(201).json({
    status: "success",
    code: 200,
    data: {
      updateWt,
    },
  });
};
module.exports = updateWeight;
// const updatedContact = await Contact.findByIdAndUpdate(contactId, body, {
//     new: true,
//   });