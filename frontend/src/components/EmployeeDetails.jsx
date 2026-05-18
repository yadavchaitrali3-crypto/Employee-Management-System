import React from "react";
import { IoClose } from "react-icons/io5";

const EmployeeDetails = ({
  employee,
  onClose,
}) => {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-end">

      {/* Side Panel */}
      <div className="bg-white w-full max-w-md h-screen shadow-2xl p-8 overflow-y-auto relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition"
        >
          <IoClose className="text-2xl text-gray-700" />
        </button>

        {/* Heading */}
        <div className="mt-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Employee Details
          </h2>

          <p className="text-gray-500 mt-2">
            Complete employee information
          </p>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center mt-10">

          <div className="w-28 h-28 rounded-full bg-[#6C63FF] text-white flex items-center justify-center text-5xl font-bold shadow-md">
            {employee.name
              ?.charAt(0)
              .toUpperCase()}
          </div>

          <h3 className="mt-5 text-2xl font-semibold text-gray-800">
            {employee.name}
          </h3>

          <p className="text-gray-500">
            @{employee.username}
          </p>
        </div>

        {/* Employee Info */}
        <div className="mt-10 space-y-5">

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-1">
              Role
            </p>

            <h4 className="font-semibold text-gray-800">
              {employee.role}
            </h4>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-1">
              Email
            </p>

            <h4 className="font-semibold text-gray-800 break-all">
              {employee.email}
            </h4>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-1">
              Team
            </p>

            <h4 className="font-semibold text-gray-800">
              {employee.team}
            </h4>
          </div>

          <div className="bg-gray-50 rounded-2xl p-5">
            <p className="text-sm text-gray-500 mb-2">
              Status
            </p>

            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold
              ${
                employee.status ===
                "Active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {employee.status}
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default EmployeeDetails;