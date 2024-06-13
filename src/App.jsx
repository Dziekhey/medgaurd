import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
