const mongoose = require("mongoose");

const employeeSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      username: {
        type: String,
        required: true,
      },

      role: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
        unique: true,
      },

      team: {
        type: String,
        required: true,
      },

      status: {
        type: String,
        enum: [
          "Active",
          "Inactive",
        ],
        default: "Active",
      },

      image: {
        type: String,
        default:
          "https://i.pravatar.cc/150",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Employee",
    employeeSchema
  );