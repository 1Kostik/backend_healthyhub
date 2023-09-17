const { User } = require("../../models");

const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({
        status: "existing",
        message: "User with this email already exists in the database",
      });
    } else {
      res.status(200).json({
        status: "available",
        message: "Accept for registration",
      });
    }
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  checkEmail,
};

