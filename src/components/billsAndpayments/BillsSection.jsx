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
import { bills } from "../../Data/Bills";

const BillsSection = ({
  calculateTotalAmount,
  calculateTotalPaid,
  getStatusClass,
}) => {
  return (
    <>
      <Box>
        <Card className="mt-1">
          <CardHeader
            title={"Bills and Payment History"}
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-title": {
                color: "martinique",
                fontWeight: "bold",
              },
            }}
          />
          <CardHeader
            title={"Bills"}
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
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Total Amount
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Balance
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bills.map((bill, index) => {
                  const totalAmount = calculateTotalAmount(bill.services);
                  const totalPaid = calculateTotalPaid(bill.paymentHistory);
                  const balance = totalAmount - totalPaid;

                  return (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" sx={{ color: "martinique" }}>
                        {bill.date}
                      </TableCell>
                      <TableCell align="left" sx={{ color: "martinique" }}>
                        {bill.time}
                      </TableCell>
                      <TableCell align="left" sx={{ color: "martinique" }}>
                        {bill.doctor}
                      </TableCell>
                      <TableCell align="left" sx={{ color: "martinique" }}>
                        {bill.department}
                      </TableCell>
                      <TableCell align="center" sx={{ color: "martinique" }}>
                        <h3
                          className={`text-white shadow-md rounded-md font-bold px-3 py-2 ${getStatusClass(
                            bill.status
                          )}`}
                        >
                          {bill.status}
                        </h3>
                      </TableCell>
                      <TableCell align="center" sx={{ color: "martinique" }}>
                        GH₵{totalAmount.toFixed(2)}
                      </TableCell>
                      <TableCell align="center" sx={{ color: "martinique" }}>
                        GH₵{balance.toFixed(2)}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
};

export default BillsSection;
