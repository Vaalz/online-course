import React from "react";

import { Box,  } from "@mui/material";

import Home from "../../../assets/image/Home.png"
import Dashboard from "../../../assets/image/Dashboard.png"
import EditProfile from "../../../assets/image/Profile.png"
import Zoom from "../../../assets/image/Zoom.png"

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
    path: "/profile/instructor",
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