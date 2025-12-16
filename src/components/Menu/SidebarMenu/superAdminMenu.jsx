import React from "react";

import { Box,  } from "@mui/material";

import Home from "../../../assets/icon/Home.png"
import Dashboard from "../../../assets/icon/Dashboard.png"
import EditProfile from "../../../assets/icon/Profile.png"
import ManageCourse from "../../../assets/icon/ManageCourse.png"
import Zoom from "../../../assets/icon/Zoom2.png"
import Quiz from "../../../assets/icon/Quiz.png"
import Revenue from "../../../assets/icon/Revenue.png"
import Report from "../../../assets/icon/Report.png"
import UserManagement from "../../../assets/icon/UserManagement.png"
import Configuration from "../../../assets/icon/settings.png"

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
    path: "/manage/course",
  },
  {
    icon: <Box 
              component="img" 
              src={Dashboard} 
              alt="Dashboard Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "DASHBOARD",
    path: "/dashboard/super-admin",
  },
  {
    icon: <Box 
              component="img" 
              src={EditProfile} 
              alt="Edit Profile Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "EDIT PROFILE",
    path: "/profile/super-admin",
  },
  {
    icon: <Box 
              component="img" 
              src={ManageCourse} 
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
