import React from "react";
import LandingPage from "./pages/LandingPage";
import { CssBaseline } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyPage from "./pages/verify";
import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />

      <Routes>
        <Route path="/" element={<Navigate to="/Landing-page" />} />{" "}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/Landing-page" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;