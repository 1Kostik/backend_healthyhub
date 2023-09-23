const express = require("express");
const {
  
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

module.exports = router;
