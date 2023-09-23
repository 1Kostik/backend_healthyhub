const express = require("express");
const router = express.Router();
const getUserStatistics = require("../../controllers/statistics");
const ctrlWrapper = require("../../utils/ctrlWrapper");
const { authenticate } = require("../../middlewares");

router.get("/statistics", authenticate, ctrlWrapper(getUserStatistics));

module.exports = router;
