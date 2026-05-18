import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="p-8">
          <div className="bg-white border border-gray-200 rounded-xl h-[80vh] p-5 shadow-sm">
            
            <h1 className="text-4xl font-bold text-gray-900">
              Welcome, Jane Doe!
            </h1>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;