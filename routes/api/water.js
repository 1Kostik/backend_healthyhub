const express = require("express");
const router = express.Router();
const {
  createWaterRecord,
  getWaterByOwner,
} = require("../../controllers/wate");

router.post("/", createWaterRecord);
router.get("/:ownerId", getWaterByOwner);

module.exports = router;
