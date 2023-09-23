require("dotenv").config();
const path = require("path");

const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const logger = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/api/auth");
const userProducts = require("./routes/api/products");
const userWeight = require("./routes/api/weight");
const userRouter = require("./routes/api/users");
const waterRouter = require("./routes/api/water");
const caloriesRouter = require("./routes/api/calories");
const recommendedFood = require("./routes/api/recommendedFood");
const updateGoal = require("./routes/api/goal");
const dailyGoalCalories = require("./routes/api/dailyGoalCalories");
const getUserStatistics = require("./routes/api/statistics");

const app = express();
app.use("/avatars", express.static(path.join(__dirname, "public", "avatars")));

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/users", authRouter);
app.use("/api/users", userRouter);
app.use("/api/user", userProducts);
app.use("/api/user", userWeight);
app.use("/api/user", caloriesRouter);
app.use("/api/user", waterRouter);
app.use("/api/user", dailyGoalCalories);
app.use("/api/recommended-food", recommendedFood);
app.use("/api/user", updateGoal);
app.use("/api/user", getUserStatistics);

app.use((req, res) => {
  res.status(404).json({ message: "Not found my page!" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

// Hello World !!!
// POST /api/user/food-intake
