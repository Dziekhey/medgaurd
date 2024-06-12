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
    }
  };

  return (
    <>
      <Box>
        <Card className="mt-1">
          <CardHeader
            title={"Appointment History"}
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-title": {
                color: "martinique",
                fontWeight: "bold",
              },
            }}
          />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Time
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Doctor
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Department
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appointments.map((appointment, index) => (
                  <TableRow
                  key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{appointment.date}</TableCell>
                    <TableCell align="left">{appointment.time}</TableCell>
                    <TableCell align="left">{appointment.doctor}</TableCell>
                    <TableCell align="left">{appointment.department}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <h3
                        className={`text-white shadow-md rounded-md font-bold px-3 py-2 ${getStatusClass(
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
    </>
  );
};

export default AppointmentHistory;
