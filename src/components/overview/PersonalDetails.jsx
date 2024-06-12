import { Divider } from "@mui/material";
import React from "react";
import { information } from "../../Data/ContactInfo";

const PersonalDetails = () => {
  return (
    <>
      <div className="shadow-md shadow-cobalt text-martinique rounded-xl w-full h-auto lg:h-40">
        <div className="flex justify-center text-azure px-2 pt-3">
          <h1>Personal Infomation and Contact Details</h1>
        </div>
        <Divider sx={{ color: "azure" }} />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 p-1 lg:p-3">
          {information.map((item, index) => (
            <div key={index} className="text-martinique">
              <h1 className="font-medium text-sm lg:text-md">{item.title}</h1>
              <h1 className="font-light text-xs lg:text-sm">{item.value}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
