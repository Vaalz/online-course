import React from "react";
import Navbar from "../components/layout/DashboardLayout ";
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
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#f5f6fa",
      }}
    >
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

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 2, md: 4 },
          py: 3,
          width: "100%",
          height: "100vh",
        }}
      >
        {/* TITLE */}
        <Typography variant="h5" fontWeight="700" sx={{ mt: 2, mb: 3 }}>
          kk
        </Typography>

        {/* GRID KONTEN */}
        <Grid container spacing={2} width={"100%"} >
          {/* STATS 4 CARD */}
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
              <Box
                key={i}
                sx={{
                  minWidth: { xs: 140, sm: 180, md: 240, lg: 316 },
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

          {/* Card Konten Lebar */}
          <Grid container spacing={2} width={"100%"} height={"100vh"}>
            {/* LEFT CONTENT*/}
            <Grid item sx={{ width: "1045px", height: "100%" }}>
              <Grid container spacing={2}>
                {/* Bagian atas */}
                <Grid item xs={12} width={"100%"}>
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

            {/* RIGHT CONTENT: REMAINING SPACE */}
            <Grid item height={"100%"} sx={{ flexGrow: 1, minWidth: 0 }}>
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 2,
                }}
              >
                <NotificationPanel notifications={notifications} />{" "}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
