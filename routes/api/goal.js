const express = require("express");
const router = express.Router();
const updateGoal = require("../../controllers/goal");
const ctrlWrapper = require("../../utils/ctrlWrapper");

router.put("/goal/:id", ctrlWrapper(updateGoal));

module.exports = router;
