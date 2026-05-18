const Employee = require("../models/Employee");

// Get All Employees
const getEmployees = async (
  req,
  res
) => {
  try {
    const employees =
      await Employee.find();

    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({
      message:
        "Error fetching employees",
    });
  }
};

// Add Employee
const addEmployee = async (
  req,
  res
) => {
  try {
    const {
      name,
      username,
      role,
      email,
      team,
      status,
      image,
    } = req.body;

    const employee =
      await Employee.create({
        name,
        username,
        role,
        email,
        team,
        status,
        image,
      });

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({
      message:
        "Error adding employee",
    });
  }
};

// Update Employee
const updateEmployee =
  async (req, res) => {
    try {
      const updatedEmployee =
        await Employee.findByIdAndUpdate(
          req.params.id,
          req.body,
          {
            new: true,
          }
        );

      res
        .status(200)
        .json(updatedEmployee);
    } catch (error) {
      res.status(500).json({
        message:
          "Error updating employee",
      });
    }
  };

// Delete Employee
const deleteEmployee =
  async (req, res) => {
    try {
      await Employee.findByIdAndDelete(
        req.params.id
      );

      res.status(200).json({
        message:
          "Employee deleted successfully",
      });
    } catch (error) {
      res.status(500).json({
        message:
          "Error deleting employee",
      });
    }
  };

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};