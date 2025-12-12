import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material"; // Tambahkan Card & CardContent untuk antisipasi konten bawah

import Navbar from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/UserSidebar";
import StatCard from "../components/StatCard";
import NotificationPanel from "../components/NotificationPanel";
import ProgresStudent from "../components/Progres";
import { AdminMenu } from "../components/Menu/SidebarMenu/AdminMenu";

// Icons
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

// --- DATA STATISTIK ---
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

// DATA PROGRES
const progres = {progres: "PROGRES SEMUA SISWA"}

// --- DATA NOTIFIKASI ---
const notifications = [
  "Saatnya melakukan sesi zoom …",
  "Anda telah menyelesaikan kuis yang diberikan",
  "Selesaikan kuis yang tersedia",
  "Saatnya melakukan sesi zoom …",
];

// --- FUNGSI UTAMA KOMPONEN ---
export default function DashboardAdmin() {
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      
      {/* 1. NAVBAR FIXED */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <Navbar />
      </Box>

      {/* 2. SIDEBAR FIXED */}
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
        <Sidebar menus={AdminMenu} />
      </Box>

      {/* 3. MAIN CONTENT WRAPPER */}
      <Box
        sx={{
          ml: { md: "319px", xs: 0 }, // Offset content for sidebar
          pt: "110px", // Spacing from navbar
          px: 3,
          pb: 5,
        }}
      >
        <Grid container spacing={3}>
              {statsData.map((stat, i) => (
                <Grid item sx={{mt: 1}}>
                  <StatCard
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                  />
                </Grid>
              ))}
          {/* LEFT AREA (Main Content: Stats & Progress) */}
          <Grid size={8}>
            <Grid container spacing={2}>
              
              {/* STATS 4 CARD */}

              {/* PROGRESS SEMUA ORANG */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "#FFFFFF",
                    borderRadius: 3,
                    border: "1px solid #DCE4E3",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography fontWeight={700} fontSize={16}>
                        {progres.progres}
                    </Typography>
                    
                    <Typography
                      fontSize={14}
                      color="#466EF1"
                      sx={{ cursor: "pointer" }}
                    >
                      LIHAT SELENGKAPNYA
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: 3, overflowX: "auto" }}>
                    {Array(10)
                      .fill(0)
                      .map((_, i) => (
                        <Box key={i} sx={{ textAlign: "center" }}>
                          <img
                            src="https://i.pravatar.cc/80"
                            alt={`User ${i + 1}`} // Tambahkan alt
                            style={{
                              width: 70,
                              height: 70,
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                          <Typography
                            fontSize={12}
                            fontWeight={600}
                            sx={{ mt: 1 }}
                          >
                            USERNAME
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                </Box>
              </Grid>

              {/* BAGIAN BAWAH (Konten Tambahan) */}
              <Grid item xs={12}>
                {/* Placeholder untuk konten seperti Grafik atau Tabel */}
                <Card sx={{ borderRadius: 3, border: "1px solid #DCE4E3", height: 200, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <CardContent>
                         <Typography color="text.secondary">Konten Bagian Bawah</Typography>
                    </CardContent>
                </Card>
              </Grid>
              
            </Grid>
          </Grid>

          {/* RIGHT AREA (Notifications) */}
          <Grid size={4}>
            <NotificationPanel notifications={notifications} />
          </Grid>
          
        </Grid>
      </Box>
      
    </Box>
  );
}