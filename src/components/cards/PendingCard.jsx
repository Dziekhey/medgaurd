import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PendingCard = ({ review }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-4">
        <div>
          <h1 className="text-martinique font-medium">Date</h1>
          <h1 className="text-martinique font-light text-sm">{review.date}</h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium">Doctor</h1>
          <h1 className="text-martinique font-light text-sm">
            {review.doctor}
          </h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium">Department</h1>
          <h1 className="text-martinique font-light text-sm">
            {review.department}
          </h1>
        </div>
        <div className="flex items-center">
          <Button
            variant="contained"
            onClick={() => navigate("/appointment history")}
          >
            View History
          </Button>
        </div>
      </div>
    </>
  );
};

export default PendingCard;
