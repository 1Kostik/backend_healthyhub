const express = require("express");
const {
  resendVerifyEmail,
  verify,
  register,
  login,
  logout,
  current,
  updateSubscriptionUser,
} = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const { userSchemas } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const router = express.Router();
router.post(
  "/register",
  validateBody(userSchemas.registerSchema),
  ctrlWrapper(register)
);
router.get("/verify/:token",ctrlWrapper(verify));
router.post('/verify', validateBody(userSchemas.emailSchema), ctrlWrapper(resendVerifyEmail));
router.post("/login", validateBody(userSchemas.loginSchema), ctrlWrapper(login));
router.post("/logout", authenticate, ctrlWrapper(logout));
router.get("/current", authenticate, ctrlWrapper(current));
router.patch(
  "/",
  authenticate,
  validateBody(userSchemas.updateSubscriptionSchema),
  ctrlWrapper(updateSubscriptionUser)
);
module.exports = router;
