import React from "react";
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CardKelas from "../components/CardKelas";
import ButtonCategory from "../components/ButtonCategory";

export default function DashboardUser() {
  return (
    <Box sx={{ display: "flex", bgcolor: "#F9FAFB", minHeight: "100vh" }}>
      {/* === Sidebar === */}
      <Box
        sx={{
          width: "319px",
          bgcolor: "#F1FCFA",
          borderRight: "1px solid #E0E0E0",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          py: 4,
          px: 2,
          gap: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "left",
            fontWeight: 700,
            pl: 1.5,
            pb: 3,
            background: "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
            backgroundSize: "200% auto",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
            animation: "gradientMove 3s linear infinite",
            "@keyframes gradientMove": {
              "0%": { backgroundPosition: "0% center" },
              "100%": { backgroundPosition: "200% center" },
            },
          }}
        >
          LOGO
        </Typography>

        {/* Sidebar Menu */}
        <List sx={{ width: "100%" }}>
          {[
            { icon: <HomeIcon />, text: "Home", active: true },
            { icon: <DashboardIcon />, text: "Dashboard" },
            { icon: <PersonIcon />, text: "Edit Profile" },
          ].map((item, i) => (
            <ListItem
              key={i}
              button
              sx={{
                borderRadius: "10px",
                mb: 1.5,
                border: item.active ? "1px solid #00E0A8" : "none",
                color: item.active ? "#00E0A8" : "#6C757D",
                "&:hover": { bgcolor: "#E6FBF6" },
              }}
            >
              <ListItemIcon
                sx={{
                  color: item.active ? "#00E0A8" : "#6C757D",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* === Main Content === */}
      <Box sx={{ flexGrow: 1, p: 3, minWidth: "1200px" }}>
        {/* === Navbar Dashboard === */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          {/* Kiri */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                animation: "gradientMove 3s linear infinite",
              }}
            >
              LOGO
            </Typography>

            <TextField
              placeholder="Cari Kelas"
              size="small"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#888" }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: "20px",
                  bgcolor: "#fff",
                  width: 220,
                },
              }}
            />

            {["Kelas", "Langganan", "Tentang Kami"].map((menu, i) => (
              <Typography
                key={i}
                sx={{
                  color: "#6C757D",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  "&:hover": { color: "#000" },
                }}
              >
                {menu}
              </Typography>
            ))}
          </Box>

          {/* Kanan */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton>
              <ShoppingCartIcon sx={{ color: "#00BFA6" }} />
            </IconButton>
            <IconButton>
              <FavoriteBorderIcon sx={{ color: "#00BFA6" }} />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon sx={{ color: "#00BFA6" }} />
            </IconButton>
            <Box
              component="img"
              src="https://i.pravatar.cc/40"
              sx={{ width: 40, height: 40, borderRadius: "50%" }}
            />
          </Box>
        </Box>

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
            sx={{
              flexGrow: 1, // isi ruang tersisa
              minWidth: 0, // mencegah overflow
            }}
          >
            {/* Statistik */}
            <Grid container spacing={2} sx={{gap: "40px"}}>
              {[
                { label: "KURSUS", value: 23, icon: "📘" },
                { label: "SESI ZOOM", value: 23, icon: "🎥" },
                { label: "KUIS", value: 23, icon: "❓" },
              ].map((stat, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Paper
                    sx={{
                      width: "316px",
                      height: "103px",
                      p: 2.5,
                      borderRadius: 3,
                      textAlign: "left",
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
                </Grid>
              ))}
            </Grid>

            {/* Progres Belajar */}
            <Typography fontSize={"20px"} fontWeight={800}  fontStyle={"extrabold"}  sx={{ mb: "12px",mt: "45px",}}>
              Progres belajar kamu
            </Typography>

            <Paper sx={{ p: "30px", borderRadius: 3, height: "125px" }}>
              <Typography fontSize={"16px"} fontWeight={700} sx={{ mb: 1, fontStyle: "bold" }}>
                Judul Kelas
              </Typography>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{
                  height: "20px",
                  borderRadius: "50px",
                  "& .MuiLinearProgress-bar": {
                    background:
                      "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                  },
                }}
              />
            </Paper>

            {/* Judul Kursus */}
            <Typography
              fontSize="24px"
              fontStyle={"extrabold"}
              fontWeight={800}
              textAlign="center"
              sx={{
                mt: "45px",
                border: "1px solid #B9C2C0",
                borderRadius: "15px",
                py: "30px",
              }}
            >
              MULAI BELAJAR KURSUS YANG ANDA IKUTI
            </Typography>
          </Grid>

          {/* KANAN — Notifikasi lebar tetap */}
          <Grid
            item
            sx={{
              width: "484px",
              height: "432px", // lebar tetap
              flexShrink: 0, // agar tidak mengecil
            }}
          >
            <Paper sx={{ p: 3, borderRadius: 3, height: "100%" }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
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
        <Box sx={{ mb: 3 }}>
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
  );
}
