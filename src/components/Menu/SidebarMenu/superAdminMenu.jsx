import React from "react";

import { Box,  } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

import Home from "../../../assets/image/Home.png"
import Dashboard from "../../../assets/image/Dashboard.png"
import EditProfile from "../../../assets/image/Profile.png"
import Manage from "../../../assets/image/ManageCourse.png"
import Zoom from "../../../assets/image/Zoom2.png"
import Quiz from "../../../assets/image/Quiz.png"
import Revenue from "../../../assets/image/Revenue.png"
import Report from "../../../assets/image/Report.png"
import UserManagement from "../../../assets/image/UserManagement.png"
import Configuration from "../../../assets/image/settings.png"

// Data Menu Sidebar Super Admin
export const superadminMenu = [
  {
    icon: <Box 
              component="img" 
              src={Home} 
              alt="Home Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "HOME",
    path: "/",
  },
  {
    icon: <Box 
              component="img" 
              src={Dashboard} 
              alt="Dashboard Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "DASHBOARD",
    path: "/DashboardStudent",
  },
  {
    icon: <Box 
              component="img" 
              src={EditProfile} 
              alt="Edit Profile Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "EDIT PROFILE",
    path: "/profile",
  },
  {
    icon: <Box 
              component="img" 
              src={Manage} 
              alt="Manage Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "MANAGE COURSE",
    path: "/Quiz",
  },
  {
    icon: <Box 
              component="img" 
              src={Zoom} 
              alt="Zoom Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "MANAGE ZOOM",
    path: "/Quiz",
  },

  {
    icon: <Box 
              component="img" 
              src={Quiz} 
              alt="Home Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "MANAGE QUIZ",
    path: "/Quiz",
  },

  {
    icon: <Box 
              component="img" 
              src={Revenue} 
              alt="Revenue Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "REVENUE TRACKING",
    path: "/Quiz",
  },

  {
    icon: <Box 
              component="img" 
              src={Report} 
              alt="Report Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "REPORT & ANALYTICS",
    path: "/Quiz",
  },

  {
    icon: <Box 
              component="img" 
              src={UserManagement} 
              alt="User Management Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "USER MANAGEMENT",
    path: "/Quiz",
  },

  {
    icon: <Box 
              component="img" 
              src={Configuration} 
              alt="Configuration Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "CONFIGURATION SYSTEM & BRANDING",
    path: "/Quiz",
  },
];
