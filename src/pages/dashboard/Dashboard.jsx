import React, { useState } from "react";
import SideBar from "../../components/sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import Overview from "../overview/Overview";
import { IconButton, useMediaQuery, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AppointmentHistory from "../appointmenthistory/AppointmentHistory";
import BillsAndPayments from "../BillsAndPayments/BillsAndPayments";
import NotificationsPage from "../notifications/NotificationsPage";
import ReviewsPage from "../reviews/ReviewsPage";

const Dashboard = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const handleClose = () => {
    setOpenSideBar(false);
  };

  const handleOpen = () => {
    setOpenSideBar(true);
  };

  return (
    <div className="flex">
      <div className="lg:w-[20%]">
        {isSmallScreen ? (
          <div className="px-4">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <SideBar
              open={openSideBar}
              handleClose={handleClose}
              isSmallScreen={isSmallScreen}
            />
          </div>
        ) : (
          <SideBar
            open={openSideBar}
            handleClose={handleClose}
            isSmallScreen={isSmallScreen}
          />
        )}
      </div>
      <Divider orientation="vertical" flexItem sx={{height: '100vh'}} />
      <div className="w-[80%] ">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/appointment history" element={<AppointmentHistory />} />
          <Route path="/bills and payments" element={<BillsAndPayments />} />
          <Route path="/my reviews" element={<ReviewsPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
