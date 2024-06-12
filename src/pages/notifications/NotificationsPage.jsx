import React from "react";
import {
  Box,
  Card,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
} from "@mui/material";
import { notifications } from "../../Data/Notifications";
import AppointmentIcon from "@mui/icons-material/CalendarToday";
import BillingIcon from "@mui/icons-material/AttachMoney";
import MedicalIcon from "@mui/icons-material/Healing";
import AnnouncementIcon from "@mui/icons-material/Announcement";
import HealthTipIcon from "@mui/icons-material/FitnessCenter";

const getIcon = (type) => {
  switch (type) {
    case "Appointment":
      return <AppointmentIcon />;
    case "Billing":
      return <BillingIcon />;
    case "Medical":
      return <MedicalIcon />;
    case "Announcement":
      return <AnnouncementIcon />;
    case "HealthTip":
      return <HealthTipIcon />;
    default:
      return null;
  }
};

const NotificationsPage = () => {
  return (
    <>
        <Box>
          <CardHeader
            title="Notifications"
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-title": {
                color: '#383961',
                fontWeight: "bold",
              },
            }}
          />
          <List>
            {notifications.map((notification) => (
              <Card key={notification.id} sx={{ mb: 1 }}>
                <ListItem alignItems="flex-start">
                  <ListItemIcon sx={{color: '#383961'}}>{getIcon(notification.type)}</ListItemIcon>
                  <ListItemText
                    primary={notification.type}
                    secondary={
                      <>
                        <div className="flex justify-between">
                          <Typography
                            component="span"
                            variant="body2"
                            sx={{color: '#383961'}}
                          >
                            {notification.message}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: '#383961', fontWeight: "bold" }}
                          >
                            {notification.date}
                          </Typography>
                        </div>
                      </>
                    }
                  />
                </ListItem>
                <Divider />
              </Card>
            ))}
          </List>
        </Box>
    </>
  );
};

export default NotificationsPage;
