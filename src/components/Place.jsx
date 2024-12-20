import React from 'react'
import { CiLocationOn } from "react-icons/ci";
    const Place = () => {
        return (
          <div className=" p-4">
                 <div className="flex items-center space-x-2">
                   <CiLocationOn className="text-blue-500 text-3xl" />
                   <h3 className="text-lg font-semibold text-gray-800">Place</h3>
                 </div>
            <p className="text-sm text-gray-600">
              Is the place for proceedings mentioned in the agreement?
            </p>
            <input
            type="text"
            id="Select the place for proceedings"
            placeholder="Select the place for proceedings"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
            <div className="mt-4">
              <label className="inline-flex items-center space-x-2">
                <input
                  type="radio"
                  name="place"
                  value="yes"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center space-x-2 ml-4">
                <input
                  type="radio"
                  name="place"
                  value="no"
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>
        );
      };

export default Place
