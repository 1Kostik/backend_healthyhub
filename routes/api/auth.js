const express = require("express");
const {
  login,
  logout,
  verify,
  current,
  register,
  resendVerifyEmail,
} = require("../../controllers");
const { resetPassword } = require("../../controllers/auth");
const { checkEmail } = require("../../controllers/auth");

const { validateBody, authenticate } = require("../../middlewares");
const { userSchemas } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const router = express.Router();

router.post("/check-email", ctrlWrapper(checkEmail));

router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  ctrlWrapper(register)
);
router.get("/verify/:token", ctrlWrapper(verify));
router.post(
  "/verify",
  validateBody(userSchemas.emailSchema),
  ctrlWrapper(resendVerifyEmail)
);
router.post(
  "/login",
  validateBody(userSchemas.loginSchema),
  ctrlWrapper(login)
);
router.post("/forgot-password", ctrlWrapper(resetPassword));
router.post("/logout", authenticate, ctrlWrapper(logout));
router.get("/current", authenticate, ctrlWrapper(current));
router.patch(
  "/",
  authenticate,
  validateBody(userSchemas.updateSubscriptionSchema),
  ctrlWrapper(updateSubscriptionUser)
);
module.exports = router;
