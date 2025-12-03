import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, useMediaQuery, Card, CardMedia, CardContent } from "@mui/material";

// Import komponen & aset Anda
import NavbarDashboard from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/InstructorSidebar";
import ProgresStudent from "../components/ProgresStudent";
import NotificationPanel from "../components/NotificationPanel";
import Kelas from "../components/CardInstructor"
// import RiwayatAktifitas from "../components/RiwayatAktifitas"; // (Buat komponen ini nanti)

import Kursus from "../../src/assets/image/Kursus.png";
import Zoom from "../../src/assets/image/Zoom2.png";
import Siswa from "../../src/assets/image/Siswa.png";

function DashboardInstructor() {
  const [courses, setCourses] = useState([]);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const sidebarWidth = 270;

  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh", p: '3px' }}>
      
      {/* 1. NAVBAR */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <NavbarDashboard />
      </Box>

      {/* 2. SIDEBAR */}
      {!isMobile && (
        <Box
          sx={{
            width: `${sidebarWidth}px`,
            position: "fixed",
            top: "90px", // Sesuaikan tinggi navbar
            left: 0,
            height: "calc(100vh - 90px)",
            bgcolor: "white", // Sesuai gambar background putih
            borderRight: "1px solid #E0E0E0",
          }}
        >
          <Sidebar />
        </Box>
      )}

      {/* 3. MAIN CONTENT WRAPPER */}
      <Box
        sx={{
          ml: { md: "319px", xs: 0 }, // offset dari sidebar
          pt: "110px",                // offset dari navbar
          px: 2,
          pb: 5,
        }}
      >
        {/* GRID SYSTEM UTAMA */}
        <Grid container spacing={2}>
          
          {/* === KOLOM KIRI (KONTEN UTAMA) === */}
          <Grid size={8}>
            
            {/* A. Baris Kartu Statistik */}
            <Box sx={{ display: "flex", gap: 1, mb: 3, height: 80 }}>
              {/* Note: Agar responsif, kartu bisa dibungkus Grid kecil atau flex-grow */}
              <StatCard icon={Kursus} number="23" title="Kursus Anda" />
              <StatCard icon={Zoom} number="23" title="Sesi Zoom" />
              <StatCard icon={Siswa} number="23" title="Siswa Anda" />
            </Box>

            {/* B. Progres Siswa */}
               <ProgresStudent />

            {/* C. Kelas Kursus */}
            <Box sx={{ mt: 1.5 }}>
               <SectionContainer title="KELAS KURSUS YANG ANDA MILIKI">
                  {/* Masukkan Grid Card Kursus di sini */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 2,               // jarak antar card
                      overflowX: "auto",    // enable scroll horizontal
                      pb: 1,                // padding bawah agar tidak terpotong scrollbar
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
          {/* Gunakan md={4} agar cukup lebar untuk teks panjang */}
          <Grid size={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              
              {/* Bagian Atas: Notifikasi */}
              <Box sx={{ height: 265 }}>
                 <NotificationPanel />
              </Box>

              {/* Bagian Bawah: Riwayat Aktifitas (Sesuai Gambar) */}
              <Box sx={{ bgcolor: "white", borderRadius: "12px", p: 2, border: "1px solid #D9E2E1", minHeight: "300px" }}>
                 <Typography fontWeight="bold" sx={{ mb: 2, textAlign: 'center', height: 387 }}>
                    RIWAYAT AKTIVITAS
                 </Typography>
                 {/* Masukkan list riwayat disini */} 
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

// --- Komponen Kecil untuk Styling ---

// 1. Kartu Statistik Atas
function StatCard({ icon, number, title }) {
  return (
    <Box
      sx={{
        flex: 1, // Agar lebar terbagi rata
        border: "1px solid #D9E2E1",
        borderRadius: "12px",
        bgcolor: "white",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Box component="img" src={icon} sx={{ width: "32px", height: "auto", mr: 1 }} />
        <Typography sx={{ fontSize: "28px", fontWeight: "900" }}>{number}</Typography>
      </Box>
      <Typography sx={{ fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>
        {title}
      </Typography>
    </Box>
  );
}

// 2. Container Putih untuk Section (Progres/Kelas)
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