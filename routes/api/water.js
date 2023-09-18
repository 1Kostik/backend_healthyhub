const express = require("express");
const router = express.Router();
const {updateWater,
  createWaterRecord,
  getWaterByOwner,
} = require("../../controllers/water");
const { ctrlWrapper } = require("../../utils");

router.post("/water-intake", ctrlWrapper(createWaterRecord));
router.get("/:ownerId", ctrlWrapper(getWaterByOwner));
router.put("/water-intake/:id", ctrlWrapper(updateWater));

module.exports = router;
