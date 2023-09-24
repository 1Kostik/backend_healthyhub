const fs = require("fs/promises");
const { HttpError } = require("../../utils");
const { User } = require("../../models/user");

const cloudinary = require("cloudinary").v2;
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET,
  secure: true,
});

const uploadCloud = (pathFile) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      pathFile,
      {
        folder: "Avatars",
        transformation: { width: 250, crop: "fit", angle: 0, auto: true },
      },
      (error, result) => {
        if (error) {
          reject(error);
        }
        if (result) {
          resolve(result);
        }
      }
    );
  });
};

async function uploadAvatar(req, res, next) {
  const { _id: id } = req.user;
  const { file } = req;

  if (!file) {
    next(HttpError(500, "Problem with upload avatar"));
  }
  const { secure_url: avatarURL, public_id: idCloudAvatar } = await uploadCloud(
    req.file.path
  );

  const { idCloudAvatar: oldAvatarId } = await User.findById(id).exec();
  if (oldAvatarId) {
    await cloudinary.uploader
      .destroy(oldAvatarId)
      .then((result, error) => console.log(result, error));
  }
  await User.findByIdAndUpdate(
    id,
    { avatarURL, idCloudAvatar },
    { new: true }
  ).exec();
  await fs.unlink(req.file.path);
  res.json({
    status: "success",
    code: 200,
    avatarURL,
  });
}

module.exports = uploadAvatar;
