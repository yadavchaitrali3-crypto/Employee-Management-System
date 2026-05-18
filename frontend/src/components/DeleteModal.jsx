import React from "react";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const DeleteModal = ({
  employee,
  onClose,
  onDelete,
}) => {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center px-4">

      <div className="bg-white w-full max-w-md rounded-[32px] shadow-2xl p-8 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition"
        >
          <IoClose className="text-2xl text-gray-600" />
        </button>

        {/* Delete Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">

            <MdDeleteOutline className="text-red-500 text-5xl" />

          </div>
        </div>

        {/* Title */}
        <div className="text-center mt-6">

          <h2 className="text-2xl font-bold text-gray-800">
            Delete Employee?
          </h2>

          <p className="text-gray-500 mt-3 leading-7">
            Are you sure you want to delete
            <span className="font-semibold text-gray-800">
              {" "}
              {employee.name}
            </span>
            ? This action cannot be undone.
          </p>

        </div>

        {/* Employee Card */}
        <div className="bg-gray-50 rounded-3xl p-5 mt-7 flex items-center gap-4">

          {/* Letter Avatar */}
          <div className="w-14 h-14 rounded-full bg-[#6C63FF] text-white flex items-center justify-center text-xl font-bold">

            {employee.name
              ?.charAt(0)
              .toUpperCase()}

          </div>

          <div>
            <h3 className="font-semibold text-gray-800 text-lg">
              {employee.name}
            </h3>

            <p className="text-gray-500 text-sm">
              {employee.role}
            </p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <button
            onClick={onClose}
            className="flex-1 border border-gray-300 py-4 rounded-2xl font-medium text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-semibold transition shadow-md"
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default DeleteModal;