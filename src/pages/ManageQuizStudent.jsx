// src/pages/DashboardStudent.jsx
import React from "react";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";
import NavbarDashboard from "../components/layout/Navbar";
import UserSidebar from "../components/layout/UserSidebar";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";
import QuizCard from "../components/QuizComponent/cardQuiz";

export default function DashboardStudent() {
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      {/* NAVBAR FIXED */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <NavbarDashboard />
      </Box>

      {/* SIDEBAR LEFT */}
      <Box
        sx={{
          width: 270,
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
        <UserSidebar menus={studentMenu} />
      </Box>

      {/* MAIN CONTENT */}
      <Box
        sx={{
          width: "100%",
          ml: { md: "270px" }, // ruang untuk sidebar kiri milikmu
          pt: "100px",
          px: 4,
          pb: 5,
        }}
        spacing={4}
      >
        <Grid item xs={12} sm={7}>
          <Box width={"100%"}>
            {Array.from({ length: 12 }).map((_, i) => (
              <Grid item sx={{ minWidth: 280, flexShrink: 0 }} key={i}>
                <QuizCard
                  image="https://via.placeholder.com/350x170"
                  title={`Judul Kuis ${i + 1}`}
                  category="Kategori"
                  accuracy={45}
                  completion={75}
                  uploaded="12 jam lalu"
                  questionCount={15}
                />
              </Grid>
            ))}
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: { xs: "none", lg: "block" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              bgcolor: "#fff",
              borderRadius: 3,
              p: 3,
              border: "1px solid #DCE4E3",
              height: "fit-content",
            }}
          >
            <Typography fontWeight={800} fontSize={18} sx={{ mb: 2 }}>
              FILTER SESUAI KATEGORI
            </Typography>

            <Button
              fullWidth
              variant="outlined"
              sx={{
                mb: 2,
                borderRadius: 2,
                fontWeight: 700,
                textTransform: "none",
              }}
            >
              Lihat Semua Kategori
            </Button>

            {[
              "UI / UX DESIGNER",
              "PROGRAMMING",
              "INFRASTRUKTUR",
              "BACKEND",
              "CYBER SECURITY",
            ].map((cat, i) => (
              <Button
                key={i}
                fullWidth
                variant="outlined"
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  fontWeight: 600,
                  color: "#666",
                  textTransform: "none",
                }}
              >
                {cat}
              </Button>
            ))}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}
