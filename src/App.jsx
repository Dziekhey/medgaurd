import React from "react";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import SignupPage from "./pages/auth/SignupPage";
import LoginPage from "./pages/auth/LoginPage";
import AuthProvider from "./services/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
    <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
