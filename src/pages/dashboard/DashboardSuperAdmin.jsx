import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/UserSidebar";
import StatCard from "../../components/StatCard";
import NotificationPanel from "../../components/NotificationPanel";
import ProgresStudent from "../../components/Progres";
import { superadminMenu } from "../../components/Menu/SidebarMenu/superAdminMenu";
import styled from "@emotion/styled";
import { Paper, Box, Grid } from "@mui/material";
import Loading from "../../components/Loading";


import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

const statsData = [
  {
    label: "TOTAL KURSUS",
    value: 23,
    icon: <MenuBookRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
  },
  {
    label: "TOTAL SESI ZOOM",
    value: 23,
    icon: <VideocamRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
  },
  {
    label: "TOTAL SISWA",
    value: 23,
    icon: <PeopleAltRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
  },
  {
    label: "TOTAL QUIZ",
    value: 23,
    icon: <LightbulbRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
  },
];



const CardWrapper = styled(Paper)(({ theme }) => ({
  // textAlign: "center",
  // padding: 1,
  // color: (theme.vars ?? theme).palette.text.secondary,
}));

export default function DashboardSuperAdmin() {
    const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const progres = { progres: "PROGRES SEMUA SISWA" };


  const notifications = [
    "Saatnya melakukan sesi zoom hari ini",
    "Anda telah menyelesaikan kuis",
    "Kuis baru tersedia",
    "Jadwal zoom telah diupdate",
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) return (window.location.href = "/");
    if (role !== "super_admin") return (window.location.href = "/forbidden");

    async function checkProfile() {
      try {
        const res = await fetch(`${API_URL}profile/mybiodata`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 500) {
          console.log("PROFILE BELUM ADA");
          setIsProfileRequired(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    checkProfile();
  }, []);

  if (loading) return <Loading text="Memuat dashboard..." />;

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

  const handleCreateProfile = async (payload) => {
    const token = localStorage.getItem("token");

    await axios.post(`${API_URL}profile/biodata`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setIsProfileRequired(false);
  };
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <Navbar />
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          position: "fixed",
          top: "80px",
          left: 0,
          height: "calc(100vh - 80px)",
          overflowY: "auto",
          bgcolor: "#F1FCFA",
          borderRight: "1px solid #E0E0E0",
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar menus={superadminMenu} />
      </Box>

      <Box
        sx={{
          ml: { md: "319px", xs: 0 },
          pt: "110px",
          px: 3,
          pb: 5,
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {statsData.map((stat, i) => (
                <Grid key={i} item xs={12} sm={6} md={3}>
                  <StatCard
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                  />
                </Grid>
              ))}

              <Grid item xs={12}>
                <ProgresStudent />
              </Grid>

              <Grid item xs={12}>
                <CardWrapper>Konten Bagian Bawah</CardWrapper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={3}>
            <NotificationPanel notifications={notifications} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
