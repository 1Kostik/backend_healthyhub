const express = require("express");
const router = express.Router();
const { dailyGoalCalories } = require("../../controllers");
const ctrlWrapper = require("../../utils/ctrlWrapper");
const { authenticate } = require("../../middlewares");

router.get("/daily-goal-calories", authenticate, ctrlWrapper(dailyGoalCalories));

module.exports = router;
