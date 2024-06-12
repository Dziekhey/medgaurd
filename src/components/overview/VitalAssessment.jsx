import { Divider } from "@mui/material";
import React from "react";
import { vitals } from "../../Data/Vitals";
import VitalCard from "../cards/VitalCard";

const VitalAssessment = () => {
  return (
    <div className="lg:h-[420px] w-68 lg:w-96">
      <div className="shadow-md shadow-cobalt rounded-xl h-full">
        <div className="flex justify-center text-azure pt-3">
          <h1>Vital Signs Assessment</h1>
        </div>
        <Divider sx={{ color: "azure" }} />
        <div className="pt-3 px-3 lg:space-y-4 sm:space-y-2 md:space-y-1">
          {vitals.map((vital, index) => (
            <VitalCard key={index} vital={vital} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VitalAssessment;
