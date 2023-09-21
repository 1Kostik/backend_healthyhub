const express = require("express");
const {
  createProducts,
  updateProducts,
  getAllProducts,
} = require("../../controllers");

const { validateBody, authenticate } = require("../../middlewares");
const { productSchemas } = require("../../models");
const { ctrlWrapper } = require("../../utils");
const router = express.Router();

router.get(
  "/food-intake",
  authenticate,
  validateBody(productSchemas.addProduct),
  ctrlWrapper(getAllProducts)
);
router.post(
  "/food-intake",
  authenticate,
  validateBody(productSchemas.createProduct),
  ctrlWrapper(createProducts)
);
router.put(
  "/food-intake/:id",
  authenticate,
  validateBody(productSchemas.updateProduct),
  ctrlWrapper(updateProducts)
);

module.exports = router;
