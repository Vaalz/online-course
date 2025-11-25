import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

// Data Menu Sidebar Super Admin
export const studentMenu = [
  {
    icon: <HomeOutlinedIcon sx={{ fontSize: "30px", mr: "20px" }} />,
    text: "HOME",
    path: "/",
  },
  {
    icon: <GridViewOutlinedIcon sx={{ fontSize: "30px", mr: "20px" }} />,
    text: "DASHBOARD",
    path: "/DashboardStudent",
  },
  {
    icon: <AccountCircleOutlinedIcon sx={{ fontSize: "30px", mr: "20px" }} />,
    text: "EDIT PROFILE",
    path: "/profile",
  },
  {
    icon: <QuizOutlinedIcon sx={{ fontSize: "30px", mr: "20px" }} />,
    text: "QUIZ",
    path: "/Quiz",
  },
];
