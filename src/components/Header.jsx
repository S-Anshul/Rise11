import React from 'react'
import { FiBell } from 'react-icons/fi';
import { FiUser } from "react-icons/fi";
const Header = () => {
    return (
      <div className="w-full h-16 bg-white flex items-center justify-between px-6 pt-5">
        {/* Logo or Title */}
        <div className="flex items-center ml-3">
          <img src="./Assets/logo.webp" alt="Logo" className="h-28" />
          <h1 className="text-lg font-bold ">Jur</h1>
        </div>

  
        {/* Icons Section */}
        <div className="flex items-center space-x-6 mr-9">
          {/* Notification Icon */}
          <div className="relative">
            <FiBell className=" text-xl cursor-pointer text-blue-600" />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-600 rounded-full border border-white"></span>
          </div>
  
          {/* User Profile */}
          <div className="text-xl cursor-pointer text-blue-600">
           <FiUser/>

          </div>
        </div>
      </div>
    );
  };

export default Header
