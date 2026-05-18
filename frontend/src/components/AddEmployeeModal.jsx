import React, {
  useState,
  useEffect,
} from "react";
import { IoClose } from "react-icons/io5";

const AddEmployeeModal = ({
  onClose,
  onAdd,
  editEmployee,
  onUpdate,
}) => {
  const [formData, setFormData] =
    useState({
      name: "",
      username: "",
      role: "",
      email: "",
      team: "",
      status: "Active",
    });

  // Fill form for edit
  useEffect(() => {
    if (editEmployee) {
      setFormData(editEmployee);
    } else {
      setFormData({
        name: "",
        username: "",
        role: "",
        email: "",
        team: "",
        status: "Active",
      });
    }
  }, [editEmployee]);

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editEmployee) {
      onUpdate(formData);
    } else {
      const newEmployee = {
        ...formData,
      };

      onAdd(newEmployee);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center px-5">

      <div className="bg-white w-full max-w-5xl rounded-[36px] shadow-[0_20px_70px_rgba(0,0,0,0.15)] overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-10 py-8 border-b border-gray-100">

          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              {editEmployee
                ? "Edit Employee"
                : "Add Employee"}
            </h2>

            <p className="text-gray-500 mt-2">
              {editEmployee
                ? "Update employee information"
                : "Fill employee details"}
            </p>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition"
          >
            <IoClose className="text-2xl text-gray-700" />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-10"
        >

          <div className="grid md:grid-cols-2 gap-7">

            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={
                  handleChange
                }
                placeholder="Enter full name"
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-[#6C63FF] focus:bg-white transition"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={
                  formData.username
                }
                onChange={
                  handleChange
                }
                placeholder="@username"
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-[#6C63FF] focus:bg-white transition"
                required
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Role
              </label>

              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={
                  handleChange
                }
                placeholder="Software Engineer"
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-[#6C63FF] focus:bg-white transition"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="example@gmail.com"
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-[#6C63FF] focus:bg-white transition"
                required
              />
            </div>

            {/* Team */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Team
              </label>

              <input
                type="text"
                name="team"
                value={formData.team}
                onChange={
                  handleChange
                }
                placeholder="Development"
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-[#6C63FF] focus:bg-white transition"
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Status
              </label>

              <select
                name="status"
                value={
                  formData.status
                }
                onChange={
                  handleChange
                }
                className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-gray-50 outline-none focus:border-[#6C63FF]"
              >
                <option>
                  Active
                </option>

                <option>
                  Inactive
                </option>
              </select>
            </div>

          </div>

          {/* Footer Buttons */}
          <div className="flex justify-end gap-4 mt-10 border-t border-gray-100 pt-7">

            <button
              type="button"
              onClick={onClose}
              className="px-8 py-3 rounded-2xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-[#6C63FF] hover:bg-[#5c55e8] text-white px-9 py-3 rounded-2xl font-semibold shadow-md transition"
            >
              {editEmployee
                ? "Update Employee"
                : "Add Employee"}
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;