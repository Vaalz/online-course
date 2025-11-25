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
import DashboardInstructor from "./pages/DashboardInstructor";

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/landing-page" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/dashboard/student" element={<DashboardStudent />} />
        <Route path="/dashboard/instructor" element={<DashboardInstructor />} />
        <Route path="/dashboard/super-admin" element={<DashboardSuperAdmin />} />


      </Routes>
    </>
  );
}

export default App;
