const express = require("express");
const {
  
  getAllCalories,
} = require("../../controllers");
const { authenticate } = require("../../middlewares");
const { ctrlWrapper } = require("../../utils");

const router = express.Router();

router.get(
  "/calories/:ownerId",
  authenticate,
  ctrlWrapper(getAllCalories)
);

module.exports = router;
