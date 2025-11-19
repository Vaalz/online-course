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

  const notificationsData = [];
  const API_URL = import.meta.env.VITE_API_URL;

  // STATE DIBUAT DULU
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    if (role !== "student") {
      window.location.href = "/forbidden";
      return;
    }
  }, []);

  // AMBIL DATA API
  useEffect(() => {
    async function fetchDashboard() {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${API_URL}/dashboard/student`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          // token invalid → logout user
          localStorage.clear();
          window.location.href = "/login";
          return;
        }

        const json = await res.json();
        setStats(json.data);
      } catch (err) {
        console.error("Dashboard fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  // LOADING VIEW
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
          pl: { md: "330px", xs: "0" },
          pr: "0",
        }}
      >
        {/* SIDEBAR DESKTOP */}
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
            <UserSidebar />
          </Box>
        )}

        {/* MAIN CONTENT */}
        <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
          <Grid container columnSpacing={3} sx={{ pr: 0, pl: 3, py: 3 }}>
            {/* === LEFT AREA === */}
            <Grid item xs={12} md={8}>
              {/* STATS CARDS — scrollable */}
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "16px", md: "39px" }, // gap mengecil di HP
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
                        display: "flex-column",
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

                      <Box>
                        <Typography
                          color="text.secondary"
                          fontSize={{ xs: 10, sm: 12, md: 14 }}
                          ml={{ xs: "-5px", md: "-10px" }}
                          sx={{ mt: "0" }}
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
                    <Typography fontWeight={700} fontSize={{ xs: 14, md: 16 }}>
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
                fontSize={{ xs: 10, md: 20 }}
                sx={{
                  mt: 4,
                  px: 0,
                  py: 2,
                  borderRadius: 3,
                  textAlign: "center",
                  fontWeight: 800,
                  border: "1px solid #B9C2C0",
                  width: "full",
                  bgcolor: "#fff",
                }}
              >
                MULAI BELAJAR KURSUS YANG ANDA IKUTI
              </Box>
            </Grid>

            {/* === RIGHT AREA — DESKTOP NOTIFICATION === */}
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

                  {notificationsData.map((notif, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        mb: 2,
                      }}
                    >
                      <Typography sx={{ fontSize: 14, lineHeight: 1.4 }}>
                        {notif}
                      </Typography>

                      <Box
                        sx={{
                          cursor: "pointer",
                          fontSize: 18,
                          ml: 2,
                          color: "#333",
                          "&:hover": { color: "#000" },
                        }}
                      >
                        ✕
                      </Box>
                    </Box>
                  ))}

                  <Box
                    textAlign="end"
                    width="100%"
                    height="full"
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

          {/* CATEGORY BUTTON */}
          <Box
            sx={{
              mt: "20px",
              px: 3,
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
              px: 3,
              display: "flex",
              gap: 3,
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
                  minWidth: 320,
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
