import React from "react";

const AppointmentCard = ({ schedule }) => {
  return (
    <>
      <div className="grid grid-cols-4">
        <div>
          <h1 className="text-martinique font-medium">Date</h1>
          <h1 className="text-martinique font-light text-sm">{schedule.date}</h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium">Time</h1>
          <h1 className="text-martinique font-light text-sm">{schedule.time}</h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium">Doctor</h1>
          <h1 className="text-martinique font-light text-sm">{schedule.doctor}</h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium">Department</h1>
          <h1 className="text-martinique font-light text-sm">{schedule.department}</h1>
        </div>
      </div>
    </>
  );
};

export default AppointmentCard;
