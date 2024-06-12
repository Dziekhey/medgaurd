import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PendingCard = ({ review }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4">
        <div>
          <h1 className="text-martinique font-medium text-sm lg:text-md">Date</h1>
          <h1 className="text-martinique font-light text-xs lg:text-sm">{review.date}</h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium text-sm lg:text-md">Doctor</h1>
          <h1 className="text-martinique font-light text-xs lg:text-sm">
            {review.doctor}
          </h1>
        </div>
        <div>
          <h1 className="text-martinique font-medium text-sm lg:text-md">Department</h1>
          <h1 className="text-martinique font-light text-xs lg:text-sm">
            {review.department}
          </h1>
        </div>
        <div className="hidden lg:flex items-center">
          <Button
            variant="contained"
            onClick={() => navigate("/my reviews")}
          >
            View Reviews
          </Button>
        </div>
      </div>
    </>
  );
};

export default PendingCard;
