import React, {
  useState,
  useEffect,
} from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import EmployeeTable from "../components/EmployeeTable";
import AddEmployeeModal from "../components/AddEmployeeModal";
import { IoSearchOutline } from "react-icons/io5";
import API from "../services/api";

const PeopleDirectory = () => {
  const [showModal, setShowModal] =
    useState(false);

  const [editEmployee, setEditEmployee] =
    useState(null);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [employees, setEmployees] =
    useState([]);

  // Get Employees
  const fetchEmployees =
    async () => {
      try {
        const res =
          await API.get(
            "/employees"
          );

        setEmployees(res.data);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Add Employee
  const addEmployee = async (
    employeeData
  ) => {
    try {
      await API.post(
        "/employees",
        employeeData
      );

      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  // Update Employee
  const updateEmployee =
    async (
      updatedEmployee
    ) => {
      try {
        await API.put(
          `/employees/${updatedEmployee._id}`,
          updatedEmployee
        );

        fetchEmployees();
      } catch (error) {
        console.log(error);
      }
    };

  // Delete Employee
  const deleteEmployee =
    async (id) => {
      try {
        await API.delete(
          `/employees/${id}`
        );

        fetchEmployees();
      } catch (error) {
        console.log(error);
      }
    };

  // Search
  const filteredEmployees =
    employees.filter(
      (employee) =>
        employee.name
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        employee.email
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          ) ||
        employee.role
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          )
    );

  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-8">

          {/* Header */}
          <div className="flex justify-between items-center mb-8">

            <div>
              <h1 className="text-3xl font-bold">
                Team Members
              </h1>

              <p className="text-gray-500">
                Manage employees
              </p>
            </div>

            <div className="flex gap-4">

              {/* Search */}
              <div className="bg-white rounded-2xl px-4 flex items-center border">

                <IoSearchOutline className="text-gray-400 text-xl" />

                <input
                  type="text"
                  placeholder="Search..."
                  value={
                    searchTerm
                  }
                  onChange={(e) =>
                    setSearchTerm(
                      e.target.value
                    )
                  }
                  className="p-3 outline-none"
                />
              </div>

              {/* Add Button */}
              <button
                onClick={() => {
                  setEditEmployee(
                    null
                  );

                  setShowModal(
                    true
                  );
                }}
                className="bg-purple-600 text-white px-6 rounded-2xl"
              >
                + Add Member
              </button>

            </div>
          </div>

          {/* Table */}
          <EmployeeTable
            employees={
              filteredEmployees
            }
            setEmployees={
              setEmployees
            }
            onEdit={(
              employee
            ) => {
              setEditEmployee(
                employee
              );

              setShowModal(
                true
              );
            }}
            onDelete={
              deleteEmployee
            }
          />

          {/* Modal */}
          {showModal && (
            <AddEmployeeModal
              onClose={() => {
                setShowModal(
                  false
                );

                setEditEmployee(
                  null
                );
              }}
              onAdd={
                addEmployee
              }
              editEmployee={
                editEmployee
              }
              onUpdate={
                updateEmployee
              }
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default PeopleDirectory;