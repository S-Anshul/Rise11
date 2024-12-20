import React from 'react';
import { NavLink } from 'react-router-dom';
import { GrDashboard } from "react-icons/gr";
import { PiSuitcaseSimple } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import { LuFileSpreadsheet } from "react-icons/lu";
import { PiHandFistLight } from "react-icons/pi";
import { FiActivity } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg flex flex-col p-9">
      {/* Wrapper to distribute sections */}
      <div className="flex flex-col h-full justify-between">
        

        {/* Navigation Links */}
        <nav className="mt-6 flex flex-col space-y-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center space-x-3 text-gray-700 font-medium px-4 py-2 rounded-md ${
                isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-blue-100'
              }`
            }
          >
            <GrDashboard className="text-blue-300 text-3xl" />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/my-cases"
            className={({ isActive }) =>
              `flex items-center space-x-3 text-gray-700 font-medium px-4 py-2 rounded-md ${
                isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-blue-100'
              }`
            }
          >
            <PiSuitcaseSimple className="text-blue-300 text-4xl" />
            <span>My Cases</span>
          </NavLink>

          <NavLink
            to="/activities"
            className={({ isActive }) =>
              `flex items-center space-x-3 text-gray-700 font-medium px-4 py-2 rounded-md ${
                isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-blue-100'
              }`
            }
          >
            <FiActivity className="text-blue-300 text-4xl" />
            <span>Activities</span>
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `flex items-center space-x-3 text-gray-700 font-medium px-4 py-2 rounded-md ${
                isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-blue-100'
              }`
            }
          >
            <SlCalender className="text-blue-300 text-4xl" />
            <span>Calendar</span>
          </NavLink>

          <NavLink
            to="/files"
            className={({ isActive }) =>
              `flex items-center space-x-3 text-gray-700 font-medium px-4 py-2 rounded-md ${
                isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-blue-100'
              }`
            }
          >
            <LuFileSpreadsheet className="text-blue-300 text-4xl" />
            <span>Files</span>
          </NavLink>

          <NavLink
            to="/open-a-dispute"
            className={({ isActive }) =>
              `flex items-center space-x-3 text-gray-700 font-medium px-4 py-2 rounded-md ${
                isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-blue-100'
              }`
            }
          >
            <PiHandFistLight className="text-blue-300 text-4xl" />
            <span>Open a Dispute</span>
          </NavLink>
        </nav>

        {/* Footer */}
        <div className="flex items-center justify-center">
          <img src="./Assets/justice.png" alt="Illustration" className=" w-[30rem] h-[22rem] mb-[6rem] ml-[2rem]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
