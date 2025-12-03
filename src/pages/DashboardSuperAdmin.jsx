import React from "react";
import Navbar from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/UserSidebar";

import { superadminMenu } from "../components/Menu/SidebarMenu/superAdminMenu";
import StatCard from "../components/StatCard";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import NotificationPanel from "../components/NotificationPanel";

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

const notifications = [
  "Saatnya melakukan sesi zoom …",
  "Anda telah menyelesaikan kuis yang diberikan",
  "Selesaikan kuis yang tersedia",
  "Saatnya melakukan sesi zoom …",
];

const CardWrapper = styled(Paper)(({ theme }) => ({
  backgroundColor: "",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "",
  }),
}));

export default function DashboardSuperAdmin() {
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      {/* NAVBAR FIXED */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1300,
        }}
      >
        <Navbar />
      </Box>
      {/* SIDEBAR */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: { xs: 0, md: "260px" },
          flexShrink: 0,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          bgcolor: "#fff",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Sidebar menus={superadminMenu} />
      </Box>

      {/* PAGE WRAPPER */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          pt: "80px",
          pl: { md: "330px", xs: 0 },
        }}
      >
        {/* SIDEBAR LEFT */}
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
          <UserSidebar menus={superadminMenu} />
        </Box>

        {/* CONTENT */}
        <Box sx={{ flexGrow: 1, pr: 3, pl: 3, py: 3 }}>
          <Grid container spacing={3}>
            {/* LEFT AREA (stats, progress list, large box) */}
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
                        PROGRES SEMUA ORANG
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

                {/* Bagian bawah */}
                <Grid item xs={12} width={"100%"}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "120px",
                      borderRadius: 2,
                      border: "1px solid #DCE4E3",
                    }}
                  >
                    Bagian Bawah
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            {/* RIGHT AREA — NOTIFIKASI */}
            <Grid item xs={12} md={3}>
              <NotificationPanel notifications={notifications} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
