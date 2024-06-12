import React from "react";

const AppointmentCard = ({ schedule }) => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4">
        <div>
          <h1 className="text-martinique font-medium text-sm lg:text-md">Date</h1>
          <h1 className="text-martinique font-light text-xs lg:text-sm">{schedule.date}</h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium text-sm lg:text-md">Time</h1>
          <h1 className="text-martinique font-light text-xs lg:text-sm">{schedule.time}</h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium text-sm lg:text-md">Doctor</h1>
          <h1 className="text-martinique font-light text-xs lg:text-sm">{schedule.doctor}</h1>
        </div>
        <div className="hidden lg:flex flex-col">
          <h1 className="text-martinique font-medium text-sm lg:text-md">Department</h1>
          <h1 className="text-martinique font-light text-xs lg:text-sm">{schedule.department}</h1>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
