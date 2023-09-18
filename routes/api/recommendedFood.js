const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
  try {
    const data = fs.readFileSync("RecommendedFood.json", "utf8");
    const recommendedFood = JSON.parse(data);

    res.json(recommendedFood);
  } catch (error) {
    console.error("Error reading of JSON:", error);
    res.status(500).json({ error: "Internal server" });
  }
});

module.exports = router;
