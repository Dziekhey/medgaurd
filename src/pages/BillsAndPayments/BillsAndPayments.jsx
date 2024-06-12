import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardHeader
} from "@mui/material";
import { bills } from "../../Data/Bills";
import BillsSection from "../../components/billsAndpayments/BillsSection";
import PaymentSection from "../../components/billsAndpayments/PaymentSection";

const BillsAndPayments = () => {
  const [totalBalance, setTotalBalance] = useState(0);

  const calculateTotalAmount = (services) =>
    services.reduce((total, service) => total + service.amount, 0);

  const calculateTotalPaid = (paymentHistory) =>
    paymentHistory.reduce((total, payment) => total + payment.amount, 0);

  useEffect(() => {
    const calculateTotalBalance = () => {
      let balance = 0;
      bills.forEach((bill) => {
        const totalAmount = calculateTotalAmount(bill.services);
        const totalPaid = calculateTotalPaid(bill.paymentHistory);
        balance += totalAmount - totalPaid;
      });
      setTotalBalance(balance);
    };

    calculateTotalBalance();
  }, [bills, calculateTotalAmount, calculateTotalPaid]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Visited":
        return "bg-green-500";
      case "Cancelled":
        return "bg-red-500";
    }
  };

  return (
    <>
      <BillsSection
        calculateTotalAmount={calculateTotalAmount}
        calculateTotalPaid={calculateTotalPaid}
        getStatusClass={getStatusClass}
        totalBalance={totalBalance}
      />

      <PaymentSection />
      <Box mt={4}>
        <Card className="mt-1">
          <CardHeader
            title={`Total Outstanding Bill: GH₵${totalBalance.toFixed(2)}`}
            sx={{
              pt: 2,
              alignItems: "center",
              "& .MuiCardHeader-title": {
                color: "martinique",
                fontWeight: "bold",
              },
            }}
          />
        </Card>
      </Box>
    </>
  );
};

export default BillsAndPayments;
