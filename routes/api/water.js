const express = require("express");
const router = express.Router();
const { updateWater, getWaterIntake } = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemaWater } = require("../../models/water");
const { ctrlWrapper } = require("../../utils");

router.post(
  "/water-intake",
  authenticate,
  validateBody(schemaWater.updateWater),
  ctrlWrapper(updateWater)
);

router.get(
  "/water-intake",
  authenticate,
  validateBody(schemaWater.getWater),
  ctrlWrapper(getWaterIntake)
);

module.exports = router;
