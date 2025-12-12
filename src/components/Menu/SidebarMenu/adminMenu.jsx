import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

import Home from "../../../assets/image/Home.png";
import Dashboard from "../../../assets/image/Dashboard.png";
import Profile from "../../../assets/image/Profile.png";
import Quiz from "../../../assets/image/Quiz.png";

export const instructorMenu = [
  {
    icon: (
      <img
        src={Home}
        alt="home"
        style={{ width: 24, height: 24, marginRight: 20 }}
      />
    ),
    text: "HOME",
    path: "/Manage/student",
  },
  {
    icon: (
      <img
        src={Dashboard}
        alt="dashboard"
        style={{ width: 24, height: 24, marginRight: 20 }}
      />
    ),
    text: "DASHBOARD",
    path: "/dashboard/instructor",
  },
  {
    icon: (
      <img
        src={Profile}
        alt="profile"
        style={{ width: 30, height: 30, marginRight: 19 }}
      />
    ),
    text: "EDIT PROFILE",
    path: "/profile",
  },
  {
    icon: (
      <img
        src={Quiz}
        alt="quiz"
        style={{ width: 26, height: 26, marginRight: 20 }}
      />
    ),
    text: "QUIZ",
    path: "/Quiz",
  },
];
