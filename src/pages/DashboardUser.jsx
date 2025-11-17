// src/pages/DashboardUser.jsx

import React from "react";
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Paper,
  Divider,
  Button,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

// Import komponen kustom
import NavbarDashboard from "../components/layout/DashboardLayout ";
import UserSidebar from "../components/layout/UserSidebar";
import CardKelas from "../components/CardKelas";
import ButtonCategory from "../components/ButtonCategory";

// --- Data Dummy ---
const statsData = [
  { label: "KURSUS", value: 23, icon: "📘" },
  { label: "SESI ZOOM", value: 23, icon: "🎥" },
  { label: "KUIS", value: 23, icon: "❓" },
];

const notificationsData = [
  "Saatnya melakukan sesi Zoom pada tanggal ... jam ...",
  "Anda telah menyelesaikan kuis yang diberikan",
  "Selesaikan kuis yang tersedia",
];

export default function DashboardUser() {
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      <NavbarDashboard />

      <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
        {/* SIDEBAR */}
        <UserSidebar />

        {/* MAIN CONTENT */}
        {/* Pastikan ini flexGrow 1, tanpa padding horizontal agar konten full width bisa mengambil ruang penuh */}
        <Box sx={{ flexGrow: 1, overflowX: "hidden" }}>
          {/* GRID UTAMA - Konten 8/4. Tambahkan padding p:3 di sini */}
          <Grid container spacing={3} sx={{ p: 3 }}>
            {/* BAGIAN KIRI — (Statistik, Progres, Mulai Belajar) */}
            <Grid
              size={{ xs: 12, md: 8 }}
              order={{ xs: 1, md: 1 }}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              {/* STATISTIK */}
              <Box
                sx={{
                  display: "flex",
                  gap: "39px",
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": { height: 0 },
                }}
              >
                {statsData.map((stat, i) => (
                  <Box
                    key={i}
                    sx={{
                      minWidth: "316px",
                      flexShrink: 0,
                      width: "316px",
                    }}
                  >
                    <Paper
                      sx={{
                        p: 2.5,
                        borderRadius: 3,
                        height: "100%",
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
                  </Box>
                ))}
              </Box>

              {/* PROGRES BELAJAR */}
              <Box sx={{ mt: 4, width: "100%" }}>
                <Typography fontSize={20} fontWeight={800} sx={{ mb: 2 }}>
                  Progres belajar kamu
                </Typography>

                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Typography fontWeight={700} sx={{ mb: 1 }}>
                    Judul Kelas
                  </Typography>

                  <LinearProgress
                    variant="determinate"
                    value={70}
                    sx={{
                      height: "16px",
                      borderRadius: "50px",
                      "& .MuiLinearProgress-bar": {
                        background:
                          "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                      },
                    }}
                  />
                </Paper>
              </Box>

              {/* MULAI BELAJAR — masih berada di kolom kiri */}
              <Paper
                sx={{
                  mt: 4,
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
                  fontWeight: 800,
                  border: "1px solid #B9C2C0",
                  width: "100%",
                }}
              >
                MULAI BELAJAR KURSUS YANG ANDA IKUTI
              </Paper>
            </Grid>

            {/* BAGIAN KANAN — NOTIFIKASI */}
            <Grid
              size={{ xs: 12, md: 4 }}
              order={{ xs: 2, md: 2 }}
              sx={{ mt: { xs: 3, md: 0 } }}
            >
              <Paper sx={{ p: 3, borderRadius: 3, width: "100%" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <NotificationsNoneIcon />
                  <Typography variant="h6" fontWeight={600}>
                    Notifikasi
                  </Typography>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {notificationsData.map((notif, i) => (
                  <Paper
                    key={i}
                    sx={{
                      p: 2,
                      mb: 2,
                      bgcolor: "#F9FAFB",
                      borderRadius: 2,
                    }}
                  >
                    {notif}
                  </Paper>
                ))}

                <Box textAlign="center">
                  <Button
                    sx={{
                      px: 3,
                      py: 1,
                      borderRadius: 8,
                      bgcolor: "#001E1D",
                      color: "#fff",
                      "&:hover": { bgcolor: "#00332E" },
                    }}
                  >
                    Baca Semua
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* AKHIR GRID UTAMA */}

          {/* BUTTON CATEGORY — FULL WIDTH */}
          <Box
            sx={{
              mt: 4,
              px: 3,
              display: "flex",
              gap: 2,
              overflowX: "auto",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" },
              whiteSpace: "nowrap",
              pb: 1,
            }}
          >
            <ButtonCategory />{" "}
          </Box>

          {/* LIST CARD — HORIZONTAL SCROLL */}
          <Box
            sx={{
              mt: 4,
              px: 3,
              display: "flex", // Container utama adalah baris horizontal
              gridTemplateRows: "auto auto", // 2 baris
              gap: 3,
              overflowX: "auto",
              pb: 2,
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                height: 0, // Chrome, Safari, Edge
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                key={i}
                sx={{
                  minWidth: 320,
                  flexShrink: 0,

                  // 🔥 PERBAIKAN PENTING DI SINI:
                  display: "flex",
                  flexDirection: "column", // Susun kartu secara vertikal (kolom)
                  gap: 3, // Spasi antara dua CardKelas

                  pb: 3, // Padding bawah, jika diperlukan
                }}
              >
                <CardKelas />
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              mt: 0,
              px: 3,
              display: "flex", // Container utama adalah baris horizontal
              gridTemplateRows: "auto auto", // 2 baris
              gap: 3,
              overflowX: "auto",
              pb: 2,
              scrollbarWidth: "none", // Firefox
              "&::-webkit-scrollbar": {
                height: 0, // Chrome, Safari, Edge
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Box
                key={i}
                sx={{
                  minWidth: 320,
                  flexShrink: 0,

                  // 🔥 PERBAIKAN PENTING DI SINI:
                  display: "flex",
                  flexDirection: "column", // Susun kartu secara vertikal (kolom)
                  gap: 3, // Spasi antara dua CardKelas

                  pb: 3, // Padding bawah, jika diperlukan
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
