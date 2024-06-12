import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { appointments } from "../../Data/Schedule";

const AppointmentHistory = () => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-pink-500";
      case "Visited":
        return "bg-green-500";
      case "Cancelled":
        return "bg-red-500";
      default:
        return "";
    }
  };

  return (
    <Box className="max-w-screen-lg mx-auto mt-4">
      <Card>
        <CardHeader
          title={"Appointment History"}
          sx={{
            pt: 2,
            alignItems: "center",
            "& .MuiCardHeader-title": {
              color: '#383961',
              fontWeight: "bold",
            },
          }}
        />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: '#383961' }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: '#383961' }}
                >
                  Time
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: '#383961' }}
                >
                  Doctor
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", color: '#383961' }}
                >
                  Department
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ fontWeight: "bold", color: '#383961' }}
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {appointments.map((appointment, index) => (
                <TableRow key={index}>
                  <TableCell sx={{color: '#383961'}} align="left">{appointment.date}</TableCell>
                  <TableCell sx={{color: '#383961'}} align="left">{appointment.time}</TableCell>
                  <TableCell sx={{color: '#383961'}} align="left">{appointment.doctor}</TableCell>
                  <TableCell sx={{color: '#383961'}} align="left">{appointment.department}</TableCell>
                  <TableCell sx={{color: '#383961'}} align="center">
                    <h3
                      className={`text-white rounded-md font-bold px-3 py-2 ${getStatusClass(
                        appointment.status
                      )}`}
                    >
                      {appointment.status}
                    </h3>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default AppointmentHistory;
