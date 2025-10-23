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

function DashboardUser() {
  const theme = useTheme();

  return (
    <>
      <Navbar />

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
            variant="h5"
            sx={{ fontWeight: 700, mb: 2, textAlign: "center" }}
          >
            Progres belajar kamu
          </Typography>

          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: "16px",
              backgroundColor: "#E5E7EB",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="h6"
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
            variant="h5"
            sx={{
              fontWeight: 700,
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
