const jwt = require("jsonwebtoken");
const { User } = require("../../models");

require("dotenv").config();

const { SECRET_KEY } = process.env;

const current = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    res.json({
      status: "success",
      code: 200,
      user: {
        name: user.name,
        email: user.email,
        goal: user.goal,
        gender: user.gender,
        age: user.age,
        height: user.height,
        weight: user.weight,
        activity: user.activity,
      },
    });
  } catch (error) {
    res.status(401).send({ message: "Unauthorized" });
  }
};

module.exports = current;
