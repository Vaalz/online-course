import React from "react";
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import CardKelas from "../components/CardKelas";
import { useLocation } from "react-router-dom";
import ButtonCategory from "../components/ButtonCategory";
import NavbarDashboard from "../layout/DashboardLayout ";

export default function DashboardUser() {
  const location = useLocation();
  const navigate = useNavigate();

  const menu = [
    { icon: <HomeIcon />, text: "Home", path: "/" },
    { icon: <DashboardIcon />, text: "Dashboard", path: "/DashboardUser" },
    { icon: <PersonIcon />, text: "Edit Profile", path: "/profile" },
  ];
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      <NavbarDashboard />
      <Box sx={{ display: "flex" }}>
        {/* === Sidebar === */}
        <Box
          sx={{
            width: { xs: "180px", sm: "220px", md: "319px" },
            bgcolor: "#F1FCFA",
            borderRight: "1px solid #E0E0E0",
            display: "flex",
            flexDirection: "column",
            py: 4,
            px: 2,
            flexShrink: 0,
          }}
        >
          <List sx={{ width: "100%" }}>
            {menu.map((item, i) => {
              const isActive = location.pathname === item.path;
              return (
                <ListItem
                  key={i}
                  button
                  onClick={() => navigate(item.path)}
                  sx={{
                    borderRadius: "10px",
                    mb: 1.5,
                    border: isActive
                      ? "1px solid #00E0A8"
                      : "1px solid transparent",
                    color: isActive ? "#00E0A8" : "#6C757D",
                    "&:hover": {
                      bgcolor: "#E6FBF6",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? "#00E0A8" : "#6C757D",
                      minWidth: 40,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* === Main Content === */}
        <Box sx={{ flexGrow: 1, p: 3, width: "100%" }}>
          {/* === Grup Hijau: isi utama (dibagi kiri & kanan) === */}
          <Grid
            container
            spacing={3}
            sx={{
              alignItems: "flex-start", // biar atasnya sejajar
            }}
          >
            {/* KONTEN KIRI — auto fill */}
            <Grid
              item
              xs={12}
              md
              sx={{
                flexGrow: 1,
                minWidth: 0,
              }}
            >
              {/* Statistik */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  width: "100%",
                  mt: 0,
                }}
              >
                {[
                  { label: "KURSUS", value: 23, icon: "📘" },
                  { label: "SESI ZOOM", value: 23, icon: "🎥" },
                  { label: "KUIS", value: 23, icon: "❓" },
                ].map((stat, i) => (
                  <Paper
                    key={i}
                    sx={{
                      flex: {
                        xs: "1 1 100%",
                        sm: "1 1 calc(50% - 16px)",
                        md: "1 1 calc(33% - 16px)",
                      },
                      minWidth: "200px",
                      p: 2.5,
                      borderRadius: 3,
                      boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Typography variant="h5" fontWeight={700}>
                      {stat.icon} {stat.value}
                    </Typography>
                    <Typography color="text.secondary" fontSize={14}>
                      {stat.label}
                    </Typography>
                  </Paper>
                ))}
              </Box>

              {/* Progres Belajar */}
              <Box
                sx={{
                  flexGrow: 1,
                  width: "100%", // 100% dari parent (tidak akan terpotong)
                  mt: 4,
                }}
              >
                <Typography
                  fontSize={{ xs: "18px", sm: "20px" }}
                  fontWeight={800}
                  sx={{ mb: "12px" }}
                >
                  Progres belajar kamu
                </Typography>

                <Paper
                  sx={{ p: { xs: 2, sm: 3 }, borderRadius: 3, width: "100%", height: "125px", alignSelf: "center" }}
                >
                  <Typography

                    fontSize={{ xs: "14px", sm: "16px" }}
                    fontWeight={700}
                    sx={{ mb: 1,mt: 1 }}
                  >
                    Judul Kelas
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{
                      height: { xs: "14px", sm: "20px" },
                      borderRadius: "50px",
                      width: "100%", // TIDAK akan terpotong
                      "& .MuiLinearProgress-bar": {
                        background:
                          "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                      },
                    }}
                  />
                </Paper>
              </Box>

              {/* Judul Kursus */}
              <Typography
                fontWeight={800}
                textAlign="center"
                sx={{
                  mt: { xs: "25px", md: "45px" }, // responsive margin top
                  py: { xs: "18px", sm: "24px", md: "30px" }, // responsive padding
                  px: { xs: "12px", sm: "18px", md: "0px" }, // padding horizontal untuk mobile
                  fontSize: { xs: "16px", sm: "20px", md: "24px" }, // responsive font size
                  border: "1px solid #B9C2C0",
                  borderRadius: "15px",
                  width: "100%", // memastikan tidak overflow
                  boxSizing: "border-box",
                }}
              >
                MULAI BELAJAR KURSUS YANG ANDA IKUTI
              </Typography>
            </Grid>

            {/* KANAN — Notifikasi lebar tetap */}
            <Grid
              item
              sx={{
                height: "432px",
                width: { xs: "100%", sm: "320px", md: "484px" },
                flexShrink: 0,
              }}
            >
              <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    alignContent: "center",
                    textAlign: "center",
                    gap: 1,
                    mb: 2,
                  }}
                >
                  <NotificationsNoneIcon sx={{ color: "#000" }} />
                  <Typography variant="h6" fontWeight={600}>
                    Notifikasi
                  </Typography>
                </Box>
                <Divider sx={{ mb: 2 }} />

                {[
                  "Saatnya melakukan sesi Zoom pada tanggal ... jam ...",
                  "Anda telah menyelesaikan kuis yang diberikan",
                  "Selesaikan kuis yang tersedia",
                ].map((notif, i) => (
                  <Paper
                    key={i}
                    sx={{
                      p: 2,
                      mb: 2,
                      bgcolor: "#F9FAFB",
                      borderRadius: 2,
                      fontSize: "14px",
                    }}
                  >
                    {notif}
                  </Paper>
                ))}

                <Box textAlign="center" sx={{ mt: 2 }}>
                  <Button
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 8,
                      bgcolor: "#001E1D",
                      color: "#fff",
                      textTransform: "none",
                      "&:hover": { bgcolor: "#00332E" },
                    }}
                  >
                    Baca Semua
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* === Kelas yang diikuti === */}
          <Box sx={{ mb: 3, mt: "30px" }}>
            <ButtonCategory />
          </Box>
          <Grid container spacing={2}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <CardKelas />
                <CardKelas />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
