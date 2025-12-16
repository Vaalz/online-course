import React from "react";
import LandingPage from "./pages/LandingPage";
import { CssBaseline } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyPage from "./pages/verify";
import "./App.css";
import DashboardStudent from "./pages/dashboard/DashboardStudent";
import DashboardSuperAdmin from "./pages/dashboard/DashboardSuperAdmin";
import DashboardInstructor from "./pages/dashboard/DashboardInstructor";
import Profile from "./pages/profile/ProfileStudents";
import ManageCourse from "./pages/ManageCourse";
import { Details } from "@mui/icons-material";
import DetailCourses from "./pages/DetailCourses";
import Testi2 from "./pages/ManageQuizStudent";
import DashboardAdmin from "./pages/dashboard/DashboardAdmin";
import EditProfileInstructor from "./pages/profile/ProfileInstructor";
import Profilesuperadmin from "./pages/profile/ProfileSuperAdmin";

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
        <Route path="/dashboard/admin" element={<DashboardAdmin />} />
        <Route
          path="/dashboard/super-admin"
          element={<DashboardSuperAdmin />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/super-admin" element={<Profilesuperadmin />} />
        <Route path="/course/:id" element={<DetailCourses />} />
        <Route path="/quiz" element={<Testi2 />} />
        <Route path="/manage/course" element={<ManageCourse />} />
        <Route
          path="/dashboard/instructor/edit-profile"
          element={<EditProfileInstructor />}
        />
      </Routes>
    </>
  );
}

export default App;
