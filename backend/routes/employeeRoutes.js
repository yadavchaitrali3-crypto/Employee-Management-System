const express = require("express");

const {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require(
  "../controllers/employeeController"
);

const router = express.Router();

// Get All Employees
router.get("/", getEmployees);

// Add Employee
router.post("/", addEmployee);

// Update Employee
router.put(
  "/:id",
  updateEmployee
);

// Delete Employee
router.delete(
  "/:id",
  deleteEmployee
);

module.exports = router;
