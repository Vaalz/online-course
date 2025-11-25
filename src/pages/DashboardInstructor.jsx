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

import CardKelas from "../components/CardKelas";
import ButtonCategory from "../components/ButtonCategory";

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
        <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
          <Grid container columnSpacing={3} sx={{ pr: 0, pl: 3, py: 3 }}>
            {/* LEFT AREA */}
            <Grid item xs={12} md={8}>
              {/* STATS */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "16px", md: "39px" },
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { height: 0 },
                }}
              >
                {statsData.map((stat, i) => (
                  <Box
                    key={i}
                    sx={{
                      minWidth: { xs: "120px", sm: "150px", md: "316px" },
                      width: { xs: "150px", sm: "150px", md: "316px" },
                      height: { xs: "80px", md: "103px" },
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      sx={{
                        px: { xs: 3, md: 4 },
                        py: { xs: 2, md: 2 },
                        border: "1px solid #B9C2C0",
                        borderRadius: 3,
                        height: "100%",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: { xs: 1, md: 2 },
                      }}
                    >
                      <Box
                        sx={{
                          width: { xs: 30, md: 40 },
                          height: { xs: 30, md: 40 },
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "center",
                          fontSize: { xs: 24, md: 32 },
                          gap: { xs: 0.5, md: 1 },
                        }}
                      >
                        {stat.icon}
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          fontSize={{ xs: 16, md: 20 }}
                        >
                          {stat.value}
                        </Typography>
                      </Box>

                      <Typography
                        color="text.secondary"
                        fontSize={{ xs: 10, sm: 12, md: 14 }}
                        ml={{ xs: "-5px", md: "-10px" }}
                      >
                        {stat.label}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            {/* RIGHT AREA */}
            {!isMobile && (
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 4,
                    width: "100%",
                    height: "100%",
                    border: "1px solid #B9C2C0",
                    bgcolor: "#FFFFFF",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 1,
                      mb: 2,
                    }}
                  >
                    <NotificationsNoneIcon sx={{ fontSize: 20 }} />
                    <Typography
                      fontWeight={700}
                      sx={{ textTransform: "uppercase", fontSize: 14 }}
                    >
                      Notifikasi
                    </Typography>
                  </Box>

                  <Divider sx={{ mb: 2 }} />

                  <Box
                    textAlign="end"
                    width="100%"
                    sx={{
                      mt: 3,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                    }}
                  >
                    <Button
                      sx={{
                        px: 4,
                        py: 1,
                        borderRadius: 20,
                        fontWeight: 600,
                        textTransform: "none",
                        border: "2px solid #00C9A7",
                        color: "#00C9A7",
                        bgcolor: "#FFFFFF",
                        "&:hover": {
                          bgcolor: "#E6FFFB",
                          borderColor: "#009f86",
                        },
                      }}
                    >
                      Baca Semua
                    </Button>
                  </Box>
                </Box>
              </Grid>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default DashboardInstructor;
