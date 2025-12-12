import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

// Import komponen & aset Anda
import NavbarDashboard from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/UserSidebar";
import ProgresStudent from "../components/Progres"; 
import NotificationPanel from "../components/NotificationPanel";
import Kelas from "../components/CardInstructor"
import Statistik from "../components/StatistikInstructor"
import { InstructorMenu } from "../components/Menu/SidebarMenu/InstructorMenu";

function DashboardInstructor() {
  const [courses, setCourses] = useState([]);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const sidebarWidth = 270;

  const progres = {progres: "PROGRES  SISWA"}

  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh", p: '3px' }}>
      
      {/* 1. NAVBAR */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <NavbarDashboard />
      </Box>

      {/* 2. SIDEBAR */}
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
        <Sidebar menus={InstructorMenu} />
      </Box>

      {/* 3. MAIN CONTENT WRAPPER */}
      <Box
        sx={{
          ml: { md: `${sidebarWidth + 20}px`, xs: 0 }, 
          pt: "110px", 
          px: 2,
          pb: 5,
        }}
      >
        {/* GRID SYSTEM UTAMA */}
        <Grid container spacing={2}>
          
          {/* === KOLOM KIRI (KONTEN UTAMA) === */}
          <Grid size={{ xs: 12, md: 8 }}>
            
            {/* A. Baris Kartu Statistik */}
            <Statistik />
            
            {/* B. Progres Siswa */}
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
                            alt={`User ${i + 1}`} 
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


            {/* C. Kelas Kursus */}
            <Box sx={{ mt: 1.5 }}>
              <SectionContainer title="KELAS KURSUS YANG ANDA MILIKI">
                {/* Masukkan Grid Card Kursus di sini */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    overflowX: "auto",
                    pb: 1,
                  }}
                >
                  <Kelas />
                  <Kelas />
                  <Kelas />
                  <Kelas />
                  <Kelas />
                  <Kelas />
                </Box>
              </SectionContainer>
            </Box>

          </Grid>

          {/* === KOLOM KANAN (PANEL NOTIFIKASI) === */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              
              {/* Bagian Atas: Notifikasi */}
              <Box sx={{ height: 330 }}>
                <NotificationPanel />
              </Box>

              {/* Bagian Bawah: Riwayat Aktifitas */}
              <Box sx={{ bgcolor: "white", borderRadius: "12px", p: 2, border: "1px solid #D9E2E1", height: 460 }}>

                <Typography fontWeight="bold" sx={{ mb: 2, textAlign: 'center' }}> 
                  RIWAYAT AKTIVITAS
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Membuat kelas kursus "Judul Kelas" baru...
                </Typography>
              </Box>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

// Container Putih untuk Section (Progres/Kelas)
function SectionContainer({ title, children }) {
  return (
    <Box sx={{ 
      bgcolor: "white", 
      borderRadius: "12px", 
      border: "1px solid #D9E2E1", 
      p: 3 
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography fontWeight="bold" sx={{ textTransform: 'uppercase' }}>{title}</Typography>
        <Typography variant="caption" sx={{ color: 'primary.main', cursor: 'pointer', fontWeight: 'bold' }}>
          LIHAT SELENGKAPNYA
        </Typography>
      </Box>
      {children}
    </Box>
  )
}


export default DashboardInstructor;