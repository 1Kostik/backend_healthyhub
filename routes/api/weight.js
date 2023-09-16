const express = require("express");
const {
  updateWeight,createWeight
} = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemaWeight } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const router = express.Router();

router.post(
    "/weight",
    // authenticate,
    validateBody(schemaWeight.addWeight),
    ctrlWrapper(createWeight)
  );

router.put(
    "/weight/:id",
    // authenticate,
    validateBody(schemaWeight.addWeight),
    ctrlWrapper(updateWeight)
  );
module.exports = router;
