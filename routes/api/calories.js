const express = require("express");
const {
  updateCalories,
  createCalories,
  getAllCalories,
} = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const { addCaloriesShema } = require("../../models");
const { ctrlWrapper } = require("../../utils");

const router = express.Router();

router.get(
  "/calories/:ownerId",
  authenticate,
  ctrlWrapper(getAllCalories)
);
router.post(
  "/calories",
  authenticate,
  validateBody(addCaloriesShema),
  ctrlWrapper(createCalories)
);
router.put(
  "/calories/:id",
  authenticate,
  validateBody(addCaloriesShema),
  ctrlWrapper(updateCalories)
);

module.exports = router;
