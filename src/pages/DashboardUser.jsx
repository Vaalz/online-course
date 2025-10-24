import React from "react";
import Navbar from "../components/Navbar";
import CardKelas from "../components/CardKelas";
import ButtonCategory from "../components/ButtonCategory";
import { Grid } from "@mui/material";
import {
  Box,
  Typography,
  LinearProgress,
  Paper,
  useTheme,
} from "@mui/material";
import NavbarDashboard from "../layout/DashboardLayout ";

function DashboardUser() {
  const theme = useTheme();

  return (
    <>
      <NavbarDashboard />

      <Box
        sx={{
          px: { xs: "20px", sm: "40px", md: "80px" },
          py: "30px",
          bgcolor: "#fff",
        }}
      >
        {/* === Bagian Progres Belajar === */}
        <Box sx={{ mb: 6 }}>
          <Typography
            fontSize={"48px"}
            sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}
          >
            Progres belajar kamu
          </Typography>

          <Paper
            elevation={3}
            sx={{
              height: "250px",
              p: { xs: 3, sm: 5 },
              borderRadius: "16px",
              backgroundColor: "#E5E7EB",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <Typography
              fontSize={"48px"}
              sx={{
                fontWeight: 600,
                color: "#333",
              }}
            >
              Judul Kelas
            </Typography>

            <LinearProgress
              variant="determinate"
              value={60}
              sx={{
                height: 10,
                borderRadius: 5,
                backgroundColor: "#fff",
                "& .MuiLinearProgress-bar": {
                  borderRadius: 5,
                  background: "linear-gradient(90deg, #6A11CB, #2575FC)",
                },
              }}
            />
          </Paper>
        </Box>

        {/* === Bagian Mulai Belajar === */}
        <Box>
          <Typography
            fontSize={"48px"}
            sx={{
              fontWeight: 600,
              mb: 3,
            }}
          >
            Mulai Belajar
          </Typography>

          {/* Tombol Kategori */}
          <Box sx={{ mb: 4 }}>
            <ButtonCategory />
          </Box>

          {/* Daftar Card Kelas */}
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "left",
            }}
          >
            <Grid item>
              <CardKelas />
            </Grid>
            <Grid item>
              <CardKelas />
            </Grid>
            <Grid item>
              <CardKelas />
            </Grid>
            <Grid item>
              <CardKelas />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default DashboardUser;
