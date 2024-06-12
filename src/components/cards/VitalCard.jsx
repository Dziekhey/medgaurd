import React from "react";

const VitalCard = ({ vital }) => {
  return (
    <>
      <div className="flex  justify-between">
        <div className="w-[50%] flex items-center">
          <img src={vital.icon} className="w-10" />
          <h1 className="font-medium pl-1 text-martinique">{vital.title}</h1>
        </div>
        <div className="flex items-center">
          <h6 className="font-light text-sm text-martinique">{vital.value}</h6>
        </div>
      </div>
    </>
  );
};

export default VitalCard;
