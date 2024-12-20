import React from 'react'
import { AiOutlineCalculator } from "react-icons/ai";
const ClaimValue = () => {
    return (
      <div className=" p-4">
      <div className="flex items-center space-x-2">
        <AiOutlineCalculator className="text-blue-500 text-3xl"/>
        <h3 className="text-lg font-semibold text-gray-800">Claim Value</h3>
      </div>

  
        {/* Contract Value */}
        <div className="mb-4">
          <label
            htmlFor="contract-value"
            className="block text-sm font-medium text-gray-600"
          >
            Contract Value
          </label>
          <div className="flex items-center mt-2">
            <input
              type="text"
              id="contract-value"
              placeholder="Enter contract value"
              className="flex-1 p-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            />
            <select
              className="ml-2 p-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
            >
              <option>USD</option>
              <option>EUR</option>
              <option>INR</option>
            </select>
          </div>
        </div>
  
        {/* Claim Value */}
        <div>
          <label
            htmlFor="claim-value"
            className="block text-sm font-medium text-gray-600"
          >
            Claim Value
          </label>
          <input
            type="number"
            id="claim-value"
            placeholder="Enter claim value"
            className="w-full mt-2 p-2 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
          />
          <span className='text-orange-500 text-[12px]'>150% of Contract value</span>
        </div>
      </div>
    );
  };

export default ClaimValue
