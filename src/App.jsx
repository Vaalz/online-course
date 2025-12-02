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
import Profile from "./pages/Profilestuudents";
import ManageCourseStudent from "./pages/ManageCourseStudent";
import { Details } from "@mui/icons-material";
import DetailCourses from "./pages/DetailCourses";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/Manage/student" element={<ManageCourseStudent />} />
        <Route path="/detailcours" element={<DetailCourses />} />


      </Routes>
    </>
  );
}

export default App;
