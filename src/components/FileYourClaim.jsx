import React from 'react'
import ClaimValue from './ClaimValue';
import Place from './Place';
import Language from './Language';
import Agreement from './Agreement';
import Additional from './Additional';
import Statement from './Statement';
const FileYourClaim = () => {
    return (
      <div className='pb-[11vh]'>
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800">File Your Claim</h2>
          <p className="text-sm text-gray-500">Approx 5 Minutes</p>
        </div>
  
        {/* Components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <ClaimValue />
          <Place />
          <Language />

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 ">
          <Statement/>
          <Agreement/>
          <Additional/>
        </div>
      </div>
    );
  };

export default FileYourClaim
