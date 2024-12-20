import React from "react";
import Sidebar from "./Sidebar";
import Progressbar from "./Progressbar";
import Header from "./Header";
import FileYourClaim from "./FileYourClaim";

const Home = () => {
  const steps = [
    "Preliminary",
    "Your Details",
    "KYC",
    "Parties",
    "Claim",
    "Review",
    "Payment",
  ];
  const currentStep = 3; // Example: Step 4 is active (index starts from 0)

  return (
    <div className="flex flex-col h-screen bg-blue-50">
      {/* Header */}
      <div className="sticky bg-white">
        <Header />
      </div>

      {/* Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-blue-100 shadow-md">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-blue-50 space-y-6">
          {/* Progress Bar */}
          <div >
            <Progressbar steps={steps} currentStep={currentStep} />
          </div>

          {/* File Your Claim Section */}
          <div className="bg-white p-11 rounded-lg">
            <FileYourClaim />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
