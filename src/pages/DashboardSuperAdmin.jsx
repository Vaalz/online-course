import React from "react";
import Navbar from "../components/layout/DashboardLayout ";
import Sidebar from "../components/layout/UserSidebar";
import StatCard from "../components/StatCard";
import NotificationPanel from "../components/NotificationPanel";
import { superadminMenu } from "../components/Menu/SidebarMenu/superAdminMenu";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

// DATA STATISTIK
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

// DATA NOTIFIKASI
const notifications = [
  "Saatnya melakukan sesi zoom …",
  "Anda telah menyelesaikan kuis yang diberikan",
  "Selesaikan kuis yang tersedia",
  "Saatnya melakukan sesi zoom …",
];

// Contoh styled component (optional)
const CardWrapper = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(1),
  color: (theme.vars ?? theme).palette.text.secondary,
}));

export default function DashboardSuperAdmin() {
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      {/* NAVBAR FIXED */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <Navbar />
      </Box>

      {/* SIDEBAR FIXED */}
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
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar menus={superadminMenu} />
      </Box>

      {/* MAIN CONTENT WRAPPER */}
      <Box
        sx={{
          ml: { md: "319px", xs: 0 }, // geser konten agar tidak menempel sidebar
          pt: "110px",                // jarak dari navbar
          px: 3,
          pb: 5,
        }}
      >
        <Grid container spacing={3}>
          {/* LEFT AREA (Konten Utama) */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {/* STATS 4 CARD */}
              {statsData.map((stat, i) => (
                <Grid item xs={12} sm={6} md={3} key={i}>
                  <StatCard
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                  />
                </Grid>
              ))}

              {/* PROGRESS SEMUA ORANG */}
              <Grid item xs={12}>
                {/* TODO: Masukkan konten progress */}
              </Grid>

              {/* BAGIAN BAWAH */}
              <Grid item xs={12}>
                {/* TODO: Masukkan konten bagian bawah */}
              </Grid>
            </Grid>
          </Grid>

          {/* RIGHT AREA (Notifikasi) */}
          <Grid item xs={12} md={3}>
            <NotificationPanel notifications={notifications} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
