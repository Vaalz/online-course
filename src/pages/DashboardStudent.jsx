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
import NotificationPanel from "../components/NotificationPanel";
import Loading from "../components/Loading";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";

import NavbarDashboard from "../components/layout/DashboardLayout";
import UserSidebar from "../components/layout/UserSidebar";

import CardKelas from "../components/CardKelas";
import StatCard from "../components/StatCard";
import CategoryButtons from "../components/MyCategoryButtons";

export default function DashboardStudent() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const notifications = [
    "Saatnya melakukan sesi zoom hari ini",
    "Anda telah menyelesaikan kuis",
    "Kuis baru tersedia",
    "Jadwal zoom telah diupdate",
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      console.log("No token found, redirecting to home");
      window.location.href = "/";
      return;
    }

    if (role !== "student") {
      window.location.href = "/forbidden";
      return;
    }

    async function fetchData() {
      try {
        // FETCH DASHBOARD STUDENT
        const res = await fetch(`${API_URL}dashboard/student`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          console.log("STATUS:", res.status);
          throw new Error("Unauthorized or invalid token");
        }

        const json = await res.json();
        setStats(json.data);

        // FETCH COURSE LIST
        const resCourse = await fetch(`${API_URL}mycourses/categories/${id}/courses`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!resCourse.ok) {
          console.log("STATUS COURSE:", resCourse.status);
          throw new Error("Failed to fetch courses");
        }

        const jsonCourse = await resCourse.json();
        console.log(jsonCourse.data);
        setCourses(jsonCourse.data);
      } catch (err) {
        console.error("Fetch dashboard error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loading text="Memuat dashboard..." />;

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
          pl: { xs: 0, sm: 0, md: "260px", lg: "300px" },
        }}
      >
        {/* SIDEBAR DESKTOP */}
        {!isMobile && (
          <Box
            sx={{
              flexShrink: 0,
              position: "fixed",
              left: 0,
              height: "calc(100vh - 80px)",
              overflowY: "hidden",
              bgcolor: "#F1FCFA",
              borderRight: "1px solid #E0E0E0",
            }}
          >
            <UserSidebar menus={studentMenu} />
          </Box>
        )}

        {/* MAIN CONTENT */}
        <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
          <Grid
            container
            columnSpacing={3}
            alignItems="flex-start"
            sx={{
              pl: { xs: 1.5, sm: 2, md: 3 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "flex-end",
                px: { xs: 2, md: 4 },
                pt: "50px",
              }}
            >
              {/* === LEFT AREA === */}
              <Grid item xs={12} md={8} lg={8}>
                {/* STATS CARDS — scrollable */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    gap: { xs: 2, sm: 2.5, md: 4 },
                    overflowX: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": { display: "none" },
                  }}
                >
                  {statsData.map((stat, i) => (
                    <StatCard
                      key={i}
                      icon={stat.icon}
                      value={stat.value}
                      label={stat.label}
                    />
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
                  <NotificationPanel notifications={notifications} />
                </Box>
              )}
            </Box>
            <Box
              sx={{
                mt: "20px",
                px: { xs: 2, md: 4 },
                display: "flex",
                overflowX: "auto",
                scrollbarWidth: "auto",
                "&::-webkit-scrollbar": { display: "none" },
                whiteSpace: "nowrap",
              }}
            >
              <CategoryButtons onSelectCategory={setCourses} />
            </Box>

            {/* CARD LIST */}
            <Box
              sx={{
                mt: 4,
                px: { xs: 2, md: 4 },
                display: "flex",
                gap: { xs: 2, md: 3 },
                overflowX: "auto",
                scrollbarWidth: "none",
                width: "1500px", // FIX WIDTH UNTUK AREA CARD

                "&::-webkit-scrollbar": { height: 0 },
              }}
            >
              {courses.length === 0 ? (
                <Typography sx={{ fontSize: 18, color: "#999" }}>
                  Tidak ada kelas pada kategori ini
                </Typography>
              ) : (
                courses.map((c) => (
                  <Box key={c.id} sx={{ minWidth: 280, flexShrink: 0 }}>
                    <CardKelas
                      image={c.thumbnail}
                      title={c.name}
                      description={c.description}
                      lessons={c.lessons_count}
                      creator={c.creator?.full_name}
                    />
                  </Box>
                ))
              )}
            </Box>
          </Grid>

          {/* CATEGORY BUTTON */}
        </Box>
      </Box>
    </Box>
  );
}
