import React from "react";

const Progressbar = ({ steps, currentStep }) => {
  return (
    <div className="w-full  py-4 px-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isActive = index === currentStep;

          return (
            <div key={index} className="flex items-center w-full">
              {/* Step Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold text-sm ${
                  isCompleted
                    ? "bg-blue-600 text-white"
                    : isActive
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {index + 1}
              </div>

              {/* Step Label */}
              <div
                className={`ml-2 text-sm font-medium ${
                  isCompleted || isActive
                    ? "text-gray-800"
                    : "text-gray-500"
                }`}
              >
                {step}
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    isCompleted ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Progressbar;
