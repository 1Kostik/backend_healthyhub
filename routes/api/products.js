const express = require("express");
const {
  createProducts  
} = require("../../controllers");
const { validateBody, authenticate } = require("../../middlewares");
const { productSchemas } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const router = express.Router();

router.post(
    "/food-intake",
    // authenticate,
    validateBody(productSchemas.addProduct),
    ctrlWrapper(createProducts)
  );
module.exports = router;
