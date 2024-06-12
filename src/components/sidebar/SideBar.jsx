import React from "react";
import { Divider, Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navigations } from "../../Data/NavLinks";
import logo from "../../assets/Logo.png";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const SideBar = ({ open, handleClose, isSmallScreen }) => {
  const navigate = useNavigate();

  const handleNavigate = (navigation) => {
    navigate(navigation.route);
    if (isSmallScreen) handleClose();
  };

  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      onClose={handleClose}
      open={open}
      anchor="left"
      PaperProps={{
        sx: {
          boxSizing: "border-box",
          width: isSmallScreen ? "60vw" : "20vw",
          backgroundColor: '#004AAD'
        }
      }}
    >
      <div className="flex flex-col justify-between h-[100vh]">
        <div className="w-full h-[30vh]">
          <img src={logo} alt="Logo" className="h-full w-full object-contain" />
        </div>
        <div className="flex flex-col space-y-3 pt-2 pb-10 text-md gap-2 justify-center">
          {navigations.map((navigation, index) => (
            <>
              <div
                onClick={() => handleNavigate(navigation)}
                className="px-3 text-white flex space-x-2 cursor-pointer"
                key={index}
              >
                {navigation.icon}
                <span>{navigation.title}</span>
              </div>
              {index !== navigations.length - 1 && <Divider />}
            </>
          ))}
        </div>
        <div className="pb-3">
          <div className="flex flex-col text-white px-4">
            <h5 className="font-bold">Need Help?</h5>
            <div className="flex space-x-2">
              <CallIcon />
              <h6>+233 208 547 123</h6>
            </div>
            <div className="flex space-x-2">
              <EmailIcon />
              <h6>medgaurd@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SideBar;
