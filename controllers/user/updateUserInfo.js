const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const { SECRET_KEY } = process.env;

const updateUserInfo = async (req, res) => {

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, SECRET_KEY);
    const id = decoded.id;
    // const user = await User.findById(id);
console.log(id)
// console.log(user._id)
 
    const body = req.body;
    const updateUserInfo = await User.findByIdAndUpdate(id, body,{ new: true, });

    res.status(200).json({
      status: "success",
      data: {
        updateUserInfo,
      },
    });

  
 
};

module.exports = updateUserInfo;
