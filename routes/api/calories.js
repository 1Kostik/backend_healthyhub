const express = require("express");
const router = express.Router();
const {updateWater,
  createWaterRecord,
  getWaterByOwner,
} = require("../../controllers");
const { ctrlWrapper } = require("../../utils");

router.get("/:ownerId", ctrlWrapper(getWaterByOwner));
router.post("/calories", ctrlWrapper(createWaterRecord));
router.put("/calories/:id", ctrlWrapper(updateWater));

module.exports = router;