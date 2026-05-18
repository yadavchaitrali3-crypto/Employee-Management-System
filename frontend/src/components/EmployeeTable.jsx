import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import EmployeeDetails from "./EmployeeDetails";
import DeleteModal from "./DeleteModal";

const EmployeeTable = ({
  employees,
  onEdit,
  onDelete,
}) => {
  const [selectedEmployee, setSelectedEmployee] =
    useState(null);

  const [deleteEmployee, setDeleteEmployee] =
    useState(null);

  // Delete Employee
  const handleDelete = async (id) => {
    try {
      await onDelete(id);
      setDeleteEmployee(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-md border border-gray-200 overflow-hidden">
        <table className="w-full">

          {/* Table Header */}
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-600 text-sm">
              <th className="p-5">Name</th>
              <th>Status</th>
              <th>Role</th>
              <th>Email</th>
              <th>Team</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee._id}
                onClick={() =>
                  setSelectedEmployee(employee)
                }
                className="border-t hover:bg-gray-50 transition cursor-pointer"
              >

                {/* Profile */}
                <td className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                    {employee.name?.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {employee.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {employee.username}
                    </p>
                  </div>
                </td>

                {/* Status */}
                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {employee.status}
                  </span>
                </td>

                {/* Role */}
                <td className="text-gray-700">
                  {employee.role}
                </td>

                {/* Email */}
                <td className="text-gray-700">
                  {employee.email}
                </td>

                {/* Team */}
                <td>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {employee.team}
                  </span>
                </td>

                {/* Actions */}
                <td>
                  <div className="flex gap-4 text-xl">

                    {/* Delete */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteEmployee(employee);
                      }}
                      className="text-red-500 hover:scale-110 transition"
                    >
                      <MdDeleteOutline />
                    </button>

                    {/* Edit */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onEdit(employee);
                      }}
                      className="text-blue-500 hover:scale-110 transition"
                    >
                      <FiEdit2 />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Employee Details */}
      <EmployeeDetails
        employee={selectedEmployee}
        onClose={() =>
          setSelectedEmployee(null)
        }
      />

      {/* Delete Modal */}
      <DeleteModal
        employee={deleteEmployee}
        onClose={() =>
          setDeleteEmployee(null)
        }
        onDelete={() =>
          handleDelete(deleteEmployee?._id)
        }
      />
    </>
  );
};

export default EmployeeTable;