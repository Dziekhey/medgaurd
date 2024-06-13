import React, { useEffect } from "react";
import { analysis } from "../../Data/Analysis";
import AnalysisCard from "../../components/cards/AnalysisCard";
import PersonalDetails from "../../components/overview/PersonalDetails";
import Reminders from "../../components/overview/Reminders";
import VitalAssessment from "../../components/overview/VitalAssessment";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const first_name = localStorage.getItem("first_name");
  const last_name = localStorage.getItem("last_name");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/login");
  }, []);
  return (
    <>
      <div className="p-2 w-full">
        <div className="border lg:h-16 md:flex lg:flex items-center p-2 lg:p-5 rounded-2xl border-azure">
          <h1 className="text-xl lg:text-3xl font-bold text-cobalt">
            Welcome {first_name} {last_name}!
          </h1>
          <div className="lg:flex pt-2 pl-2">
            <h1 className="text-sm lg:text-md"> Your health and well-being are our priority.</h1>
            <h1 className="text-sm lg:pl-1 lg:text-md">Here's your data from your latest visit.</h1>
          </div>
        </div>
        <div className="hidden pt-4 px-2 md:grid md:grid-cols-4 lg:grid-cols-4 justify-center lg:gap-16">
          {analysis.map((item, index) => (
            <AnalysisCard key={index} item={item} />
          ))}
        </div>
        <div className="pt-4 px-2 lg:flex lg:space-x-5">
          <div className="lg:w-[50vw]">
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
