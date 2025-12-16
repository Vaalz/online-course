import React from "react";

import { Box,  } from "@mui/material";

import Home from "../../../assets/icon/Home.png"
import Dashboard from "../../../assets/icon/Dashboard.png"
import EditProfile from "../../../assets/icon/Profile.png"
import ManageCourse from "../../../assets/icon/ManageCourse.png"
import Quiz from "../../../assets/icon/Quiz.png"

export const AdminMenu = [
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
    text: "Dashboard",
    path: "/dashboard/admin",
  },

  {
    icon: <Box 
              component="img" 
              src={EditProfile} 
              alt="Profile Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "Edit Profile",
    path: "/",
  },

  {
    icon: <Box 
              component="img" 
              src={ManageCourse} 
              alt="Course Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "Manage Course",
    path: "/",
  },
  
  {
    icon: <Box 
              component="img" 
              src={Quiz} 
              alt="Quiz Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "Manage Quiz",
    path: "/",
  },
];