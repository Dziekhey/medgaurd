import React from "react";

const AnalysisCard = ({ item }) => {
  return (
    <>
      <div className="shadow-md shadow-cobalt rounded-3xl flex justify-center items-center w-32 h-20 lg:w-48 lg:h-28">
        <div>
          <h1 className="text-sm lg:text-xl font-semibold">{item.name}</h1>
          <div className="flex items-center justify-center">
            <h1 className="text-sm lg:text-lg font-medium text-azure">{item.total}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnalysisCard;
