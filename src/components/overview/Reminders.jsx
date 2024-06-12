import { Divider } from "@mui/material";
import React from "react";
import AppointmentCard from "../cards/AppointmentCard";
import { pendingReviews, schedules } from "../../Data/Schedule";
import PendingCard from "../cards/PendingCard";

const Reminders = () => {
  return (
    <>
      <div className="shadow-md shadow-cobalt rounded-xl w-full lg:h-60">
        <div className="flex justify-center text-azure pt-2">
          <h1>Reminders</h1>
        </div>
        <Divider />
        <div className="px-3">
          <div>
            <h1 className="font-semibold text-martinique">Upcoming Appointments</h1>
            <div className="space-y-1 py-2">

            {schedules.map((schedule, index) => (
              <AppointmentCard key={index} schedule={schedule} />
            ))}
            </div>
          </div>
          <Divider />
          <div>
            <h1 className="font-semibold text-martinique">Pending Reviews</h1>
            <div>
                {
                    pendingReviews.map((review, index) => (
                        <PendingCard key={index} review={review} />
                    ))
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reminders;
