import React from "react";

import { Box,  } from "@mui/material";

import Home from "../../../assets/icon/Home.png"
import Dashboard from "../../../assets/icon/Dashboard.png"
import EditProfile from "../../../assets/icon/Profile.png"
import Zoom from "../../../assets/icon/Zoom.png"

export const InstructorMenu = [
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
    path: "/dashboard/instructor",
  },

  {
    icon: <Box 
              component="img" 
              src={EditProfile} 
              alt="Profile Icon" 
              sx={{ width: "30px", height: "30px", mr: "20px" }}
          />,
    text: "Edit Profile",
    path: "/dashboard/instructor/edit-profile",
  },

  {
    icon: <Box 
              component="img" 
              src={Zoom} 
              alt="Zoom Icon" 
              sx={{ width: "30px", height: "20px", mr: "20px" }}
          />,
    text: "Manage Zoom",
    path: "/",
  },
];