const express = require("express");
const {
  updateWeight
} = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const { schemaWeight } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const router = express.Router();

router.put(
    "/weight",
    authenticate,
    validateBody(schemaWeight.updateWeight),
    ctrlWrapper(updateWeight)
  );
  
module.exports = router;
