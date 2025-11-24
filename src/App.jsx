import React from "react";
import LandingPage from "./pages/LandingPage";
import { CssBaseline } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyPage from "./pages/verify";
import "./App.css";
import DashboardStudent from "./pages/DashboardStudent";
import DashboardSuperAdmin from "./pages/DashboardSuperAdmin";

function App() {
  return (
    <>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Navigate to="/LandingPage" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/DashboardStudent" element={<DashboardStudent />} />
        <Route path="/DashboardSuperAdmin" element={<DashboardSuperAdmin />} />
      </Routes>
    </>
  );
}

export default App;
