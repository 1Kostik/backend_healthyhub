const express = require("express");
const router = express.Router();
const {
  createWaterRecord,
  getWaterByOwner,
} = require("../../controllers/water");
const { ctrlWrapper } = require("../../utils");

router.post("/", ctrlWrapper(createWaterRecord));
router.get("/:ownerId", ctrlWrapper(getWaterByOwner));

module.exports = router;
