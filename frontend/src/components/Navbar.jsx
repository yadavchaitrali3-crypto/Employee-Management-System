import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-end px-8">

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Notification Icon */}
        <button className="text-gray-600 hover:text-black transition">
          <IoNotificationsOutline size={22} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">

          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />

          <span className="text-gray-800 font-medium">
            Jane Doe
          </span>
        </div>

      </div>
    </div>
  );
};

export default Navbar;