import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
