import React from "react";
import { analysis } from "../../Data/Analysis";
import AnalysisCard from "../../components/cards/AnalysisCard";
import PersonalDetails from "../../components/overview/PersonalDetails";
import Reminders from "../../components/overview/Reminders";
import VitalAssessment from "../../components/overview/VitalAssessment";

const Overview = () => {
  return (
    <>
      <div className="p-2">
        <div className="border h-16 flex items-center p-5 rounded-2xl border-azure">
          <h1 className="text-3xl font-bold text-cobalt">
            Welcome Abena Fosu!
          </h1>
          <div className="flex pt-2 pl-2">
            <h1> Your health and well-being are our priority.</h1>
            <h1 className="pl-1">Here's your data from your latest visit.</h1>
          </div>
        </div>
        <div className="pt-4 px-2 flex flex-row justify-center gap-16">
          {analysis.map((item, index) => (
            <AnalysisCard key={index} item={item} />
          ))}
        </div>
        <div className="pt-4 px-2 flex space-x-5">
          <div className="w-[50vw]">
            <div>
              <PersonalDetails />
            </div>
            <div className="pt-4">
              <Reminders />
            </div>
          </div>
          <div>
            <VitalAssessment />
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
