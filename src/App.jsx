import React from "react";
import LandingPage from "./pages/LandingPage";
import { CssBaseline } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyPage from "./pages/verify";
import "./App.css";
import DashboardUser from "./pages/DashboardUser";

function App() {
  return (
    <>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Navigate to="/landing-page" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/DashboardUser" element={<DashboardUser />} />
      </Routes>
    </>
  );
}

export default App;
