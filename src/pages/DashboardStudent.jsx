// src/pages/DashboardStudent.jsx
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
import React, { useState, useEffect } from "react";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";

import NavbarDashboard from "../components/layout/DashboardLayout ";
import UserSidebar from "../components/layout/UserSidebar";

import CardKelas from "../components/CardKelas";
import ButtonCategory from "../components/ButtonCategory";

export default function DashboardStudent() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      window.location.href = "/";
      return;
    }

    if (role !== "student") {
      window.location.href = "/forbidden";
      return;
    }

    async function fetchData() {
      try {
        const res = await fetch(
          "http://192.168.100.247:8080/api/dashboard/student",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          console.log("STATUS:", res.status);
          throw new Error("Unauthorized or invalid token");
        }

        const json = await res.json();
        setStats(json.data);
      } catch (err) {
        console.error("Fetch dashboard error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography>Loading dashboard...</Typography>
      </Box>
    );
  }

  // STATS SETELAH DATA TERSEDIA
  const statsData = [
    {
      label: "KURSUS DI IKUTI",
      value: stats?.enrolled_courses || 0,
      icon: <MenuBookRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
    },
    {
      label: "SESI ZOOM DI IKUTI",
      value: stats?.zoom_sessions || 0,
      icon: <VideocamRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
    },
    {
      label: "KUIS DI SELESAIKAN",
      value: stats?.completed_quizzes || 0,
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

      {/* MAIN WRAPPER */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          pt: "80px",
          /* pl disesuaikan dengan lebar sidebar pada md/lg; tidak memaksa padding besar di layar kecil */
          pl: { xs: 0, sm: 0, md: "260px", lg: "300px" },
          pr: "0",
        }}
      >
        {/* SIDEBAR DESKTOP */}
        {!isMobile && (
          <Box
            sx={{
              /* Lebar sidebar disesuaikan di md/lg agar wrapper pl konsisten */
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
            <UserSidebar />
          </Box>
        )}

        {/* MAIN CONTENT */}
        <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
          <Grid
            container
            columnSpacing={3}
            alignItems="flex-start"
            sx={{
              pr: { xs: 1.5, sm: 2, md: 3 },
              pl: { xs: 1.5, sm: 2, md: 3 },
              py: { xs: 2, md: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "flex-end",
              }}
            >
              {/* === LEFT AREA === */}
              <Grid item xs={12} md={8} lg={8}>
                {/* STATS CARDS — scrollable */}
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

                {/* PROGRES BELAJAR */}
                <Box sx={{ mt: { xs: 3, md: 4 }, width: "100%" }}>
                  <Typography
                    fontSize={{ xs: 17, md: 20 }}
                    fontWeight={800}
                    sx={{ mb: 2 }}
                  >
                    Progres belajar kamu
                  </Typography>

                  <Box
                    sx={{
                      px: { xs: 2, md: 3 },
                      pt: { xs: 1.5, md: 2 },
                      pb: { xs: 2.5, md: 3 },
                      borderRadius: 3,
                      border: "1px solid #B9C2C0",
                      boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                      bgcolor: "#fff",
                    }}
                  >
                    <Box
                      sx={{
                        mb: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        fontWeight={700}
                        fontSize={{ xs: 14, md: 16 }}
                      >
                        Judul Kelas
                      </Typography>
                      <IconButton size="small" sx={{ color: "#4A90E2" }}>
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </Box>

                    <LinearProgress
                      variant="determinate"
                      value={70}
                      sx={{
                        height: "12px",
                        borderRadius: "50px",
                        "& .MuiLinearProgress-bar": {
                          background:
                            "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                        },
                      }}
                    />
                  </Box>
                </Box>

                {/* START LEARNING */}
                <Box
                  sx={{
                    mt: { xs: 3, sm: 3, md: 4 },
                    px: { xs: 1, sm: 1, md: 0 },
                    py: { xs: 1.5, sm: 2, md: 2 },
                    borderRadius: { xs: 2, sm: 3, md: 3 },
                    textAlign: "center",
                    fontWeight: 800,
                    border: "1px solid #B9C2C0",
                    width: "100%",
                    bgcolor: "#fff",

                    fontSize: { xs: 12, sm: 14, md: 18, lg: 20 },
                  }}
                >
                  MULAI BELAJAR KURSUS YANG ANDA IKUTI
                </Box>
              </Grid>

              {/* === RIGHT AREA — DESKTOP NOTIFICATION === */}

              {!isMobile && (
                <Box
                  sx={{
                    width: {
                      md: "500px",
                      lg: "500px",
                      xl: "500px",
                    },
                    height: {
                      md: "340px",
                      lg: "380px",
                      xl: "380px",
                    },

                    position: "sticky",
                    top: "100px",
                    alignSelf: "flex-start",
                    maxWidth: "100%",
                    ml: 4,
                  }}
                >
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
                </Box>
              )}
            </Box>
          </Grid>

          {/* CATEGORY BUTTON */}
          <Box
            sx={{
              mt: "20px",
              px: { xs: 1.5, md: 3 },
              display: "flex",
              overflowX: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              whiteSpace: "nowrap",
            }}
          >
            <ButtonCategory />
          </Box>

          {/* CARD LIST */}
          <Box
            sx={{
              mt: 4,
              px: { xs: 1.5, md: 3 },
              display: "flex",
              gap: { xs: 2, md: 3 },
              overflowX: "auto",
              pb: 2,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { height: 0 },
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                key={i}
                sx={{
                  minWidth: { xs: 240, sm: 260, md: 300, lg: 320 },
                  flexShrink: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  pb: 3,
                }}
              >
                <CardKelas />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
