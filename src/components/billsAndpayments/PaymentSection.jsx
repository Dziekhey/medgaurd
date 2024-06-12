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

const PaymentSection = () => {
  return (
    <>
      <Box mt={4}>
        <Card className="mt-1">
          <CardHeader
            title={"Payment History"}
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
                    Payment Date
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Method
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Amount
                  </TableCell>
                  <TableCell
                    align="left"
                    sx={{ fontWeight: "bold", color: "martinique" }}
                  >
                    Reference Number
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {bills.map((bill, index) =>
                  bill.paymentHistory.map((payment, idx) => (
                    <TableRow
                      key={`${index}-${idx}`}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="left" className="text-martinique">
                        {payment.date}
                      </TableCell>
                      <TableCell align="left" sx={{ color: "martinique" }}>
                        {payment.method}
                      </TableCell>
                      <TableCell align="left" sx={{ color: "martinique" }}>
                        GH₵{payment.amount.toFixed(2)}
                      </TableCell>
                      <TableCell align="left" sx={{ color: "martinique" }}>
                        {payment.referenceNumber}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </>
  );
};

export default PaymentSection;
