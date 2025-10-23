
import React from 'react'
import LandingPage from './pages/LandingPage'
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <>
    <CssBaseline />
    <LandingPage />
    </>
  )

import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import VerifyPage from "./pages/verify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* redirect ke login */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify" element={<VerifyPage />} />

    </Routes>
  );

}

export default App;
