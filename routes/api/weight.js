const express = require("express");
const {
    addWeight
} = require("../../controllers/weight");
const { validateBody, authenticate } = require("../../middlewares");
const { schemaWeight } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const router = express.Router();

router.post(
    "/weigth",
    // authenticate,
    validateBody(schemaWeight.addWeight),
    ctrlWrapper(addWeight)
  );
module.exports = router;
