const express = require("express");
const router = express.Router();
const updateGoal = require("../../controllers/goal");
const ctrlWrapper = require("../../utils/ctrlWrapper");
const { authenticate } = require("../../middlewares");

router.put("/goal", authenticate, ctrlWrapper(updateGoal));

module.exports = router;
