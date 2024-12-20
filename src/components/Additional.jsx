import React from "react";
import { BsFiles } from "react-icons/bs";
const Additional = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Title */}
<div className="flex items-center space-x-2">
                           <BsFiles className="text-blue-500 text-3xl" />
                           <h3 className="text-lg font-semibold text-gray-800">Additonal Documents</h3>
                         </div>
    {/*Upload document */}
      <div className="flex ">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center h-[13rem] w-[10rem] mt-[1rem] border-2 border-blue-400 border-dashed rounded-lg cursor-pointer bg-white"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-blue-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Upload the contract</span>
          </p>
          <p className="text-xs text-blue-400 dark:text-gray-400">
            MAX 2MB PDF
          </p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>





    </div>
    
  );
};

export default Additional;
