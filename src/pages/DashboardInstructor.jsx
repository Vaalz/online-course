import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Divider,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";

import NavbarDashboard from "../components/layout/DashboardLayout ";
import Sidebar from "../components/layout/InstructorSidebar";



function DashboardInstructor() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  // DATA DUMMY (karena backend belum jadi)
  const stats = {
    enrolled_courses: 5,
    zoom_sessions: 3,
    completed_quizzes: 12,
  };

  const statsData = [
    {
      label: "KURSUS DI IKUTI",
      value: stats.enrolled_courses,
      icon: <MenuBookRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
    },
    {
      label: "SESI ZOOM DI IKUTI",
      value: stats.zoom_sessions,
      icon: <VideocamRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
    },
    {
      label: "KUIS DI SELESAIKAN",
      value: stats.completed_quizzes,
      icon: <LightbulbRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
    },
  ];

  return (
    <>
          <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1300,
        }}
      >
        <NavbarDashboard />
      </Box>

      {/* WRAPPER */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          pt: "80px",
          pl: { md: "330px", xs: "0" },
          pr: "0",
        }}
      >
        {/* SIDEBAR */}
        {!isMobile && (
          <Box
            sx={{
              width: 319,
              flexShrink: 0,
              position: "fixed",
              top: "80px",
              left: 0,
              height: "calc(100vh - 80px)",
              overflowY: "auto",
              bgcolor: "#F1FCFA",
              borderRight: "1px solid #E0E0E0",
            }}
          >
            <Sidebar />
          </Box>
        )}

        {/* MAIN CONTENT */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: 2, sm: 2.5, md: 4 },
              overflowX: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
            }}
          >
            {statsData.map((stat, i) => (
              <Box
                key={i}
                sx={{
                  minWidth: { xs: 140, sm: 180, md: 240, lg: 316 },
                  width: { xs: 150, sm: 180, md: 240, lg: 316 },
                  height: { xs: "80px", md: "103px" },
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    px: { xs: 2, md: 4 },
                    py: { xs: 1.5, md: 2 },
                    border: "1px solid #B9C2C0",
                    borderRadius: 3,
                    height: "100%",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: { xs: 1, md: 2 },
                    mt: 3
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: { xs: 0.5, md: 1.5 },
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 30, md: 40 },
                        height: { xs: 30, md: 40 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {stat.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      fontSize={{ xs: 16, md: 20 }}
                    >
                      {stat.value}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      color="text.secondary"
                      fontSize={{ xs: 10, sm: 12, md: 14 }}
                      ml={{ xs: 0, md: 0 }}
                      sx={{ mt: 0 }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              
            ))}
          </Box>

          
        
      </Box>
    </Box>
    </>
  );
}

export default DashboardInstructor;
