const express = require("express");
const {
    addProduct  
} = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const { schema } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const router = express.Router();

router.post(
    "/food-intake",
    // authenticate,
    validateBody(schema.addProduct),
    ctrlWrapper(addProduct)
  );
module.exports = router;
