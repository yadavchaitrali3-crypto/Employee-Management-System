const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB =
  require("./config/db");

const employeeRoutes =
  require("./routes/employeeRoutes");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Employee Routes
app.use(
  "/api/employees",
  employeeRoutes
);

// Test Route
app.get("/", (req, res) => {
  res.send(
    "Employee Management Backend Running 🚀"
  );
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});