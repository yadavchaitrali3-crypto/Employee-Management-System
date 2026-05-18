import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-5">

      {/* Logo */}
      <h1 className="text-3xl font-bold text-purple-600 mb-10">
        PEOPLE.CO
      </h1>

      {/* Menu */}
      <div className="flex flex-col gap-4">

        {/* Overview */}
        <Link
          to="/"
          className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-all
          ${
            location.pathname === "/"
              ? "bg-purple-100 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <MdDashboard size={22} />
          Overview
        </Link>

        {/* People Directory */}
        <Link
          to="/people"
          className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-all
          ${
            location.pathname === "/people"
              ? "bg-purple-100 text-purple-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <FaUsers size={18} />
          People Directory
        </Link>

      </div>
    </div>
  );
};

export default Sidebar;