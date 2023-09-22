const current = async (req, res) => {
  const user=req.user;

    res.status(200).json({
      status: "success",
      user: {
        name: user.name,
        email: user.email,
        goal: user.goal,
        gender: user.gender,
        age: user.age,
        height: user.height,
        weight: user.weight,
        activity: user.activity,
        avatarURL: user.avatarURL,
      }
    });
};

module.exports = current;
