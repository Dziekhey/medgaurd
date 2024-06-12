import React from "react";

const VitalCard = ({ vital }) => {
  return (
    <div className="flex justify-between mb-2">
      <div className="flex items-center">
        <img src={vital.icon} className="w-4 lg:w-8 sm:w-10 mr-2" /> {/* Adjusted image width */}
        <h1 className="font-medium text-sm text-martinique">{vital.title}</h1>
      </div>
      <div className="flex items-center">
        <h6 className="font-light text-xs text-martinique">{vital.value}</h6>
      </div>
    </div>
  );
};

export default VitalCard;
