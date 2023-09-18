// const { User } = require("../../models");

const updateUserProfile = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { name, email, goal, gender, age, height, weight, activity } =
      req.body;

    req.user.name = name;
    req.user.email = email;
    req.user.goal = goal;
    req.user.gender = gender;
    req.user.age = age;
    req.user.height = height;
    req.user.weight = weight;
    req.user.activity = activity;

    await req.user.save();

    res.status(200).json({
      status: "success",
      message: "User profile updated successfully",
      user: {
        name: req.user.name,
        email: req.user.email,
        goal: req.user.goal,
        gender: req.user.gender,
        age: req.user.age,
        height: req.user.height,
        weight: req.user.weight,
        activity: req.user.activity,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUserProfile };
