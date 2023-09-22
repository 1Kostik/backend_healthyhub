const fs = require("fs/promises");
const path = require("path");
const { HttpError } = require("../../utils");
const { User } = require("../../models/user");

async function uploadAvatar(req, res, next) {
  try {
    await fs.rename(
      req.file.path,
      path.join(__dirname, "..", "..", "public", "avatars", req.file.filename)
    );
    const doc = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: req.file.filename },
      { new: true }
    ).exec();
    if (doc === null) {
      return res.status(404).send({ message: "User not found" });
    }

    const avatarURL = `/avatars/${req.file.filename}`; 

    res.status(200).json({
      status: "success",
      code: 200,
      avatarURL: avatarURL,
    });
  } catch (error) {
    next(HttpError(404));
  }
}

module.exports = uploadAvatar;
