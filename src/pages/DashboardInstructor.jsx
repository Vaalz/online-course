import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { useRef } from "react";

// Import komponen & aset Anda
import NavbarDashboard from "../components/layout/Navbar";
import Sidebar from "../components/layout/InstructorSidebar";
import ProgresStudent from "../components/ProgresStudent";
import NotificationPanel from "../components/NotificationPanel";
import Kelas from "../components/CardInstructor";

import UserSidebar from "../components/layout/UserSidebar";
import { instructorMenu } from "../components/Menu/SidebarMenu/adminMenu";
// import RiwayatAktifitas from "../components/RiwayatAktifitas"; // (Buat komponen ini nanti)

import Kursus from "../../src/assets/image/Kursus.png";
import Zoom from "../../src/assets/image/Zoom2.png";
import Siswa from "../../src/assets/image/Siswa.png";

function DashboardInstructor() {
  const [courses, setCourses] = useState([]);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const sidebarWidth = 270;
  const sliderRef = useRef(null);

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/instructor/my-courses`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setCourses(res.data.data.courses);
    } catch (error) {
      console.error("Gagal mengambil data course:", error);
    }
  };

  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh", p: "3px" }}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <NavbarDashboard />
      </Box>

      {!isMobile && (
        <Box
          sx={{
            flexShrink: 0,
            position: "fixed",
            left: 0,
            height: "calc(100vh - 80px)",
            overflowY: "hidden",
            bgcolor: "#F1FCFA",
            borderRight: "1px solid #E0E0E0",
          }}
        >
          <UserSidebar menus={instructorMenu} />
        </Box>
      )}

      <Box
        sx={{
          ml: { md: "319px", xs: 0 }, 
          pt: "110px", 
          px: 2,
          pb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid size={8}>
            <Box sx={{ display: "flex", gap: 1, mb: 3, height: 80 }}>
              <StatCard icon={Kursus} number="23" title="Kursus Anda" />
              <StatCard icon={Zoom} number="23" title="Sesi Zoom" />
              <StatCard icon={Siswa} number="23" title="Siswa Anda" />
            </Box>

            <ProgresStudent />

            <Box sx={{ mt: 1.5 }}>
              <SectionContainer title="KELAS KURSUS YANG ANDA MILIKI">
                <Box
                  sx={{
                    display: "flex",
                    gap: 2, // jarak antar card
                    overflowX: "auto", // enable scroll horizontal
                    pb: 1, // padding bawah agar tidak terpotong scrollbar
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      mt: 4,
                      px: { xs: 2, md: 6 },
                    }}
                  >
                    {/* BUTTON PREV */}
                    <Box
                      onClick={() =>
                        sliderRef.current.scrollBy({
                          left: -300,
                          behavior: "smooth",
                        })
                      }
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "white",
                        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
                        cursor: "pointer",
                      }}
                    >
                      {"<"}
                    </Box>

                    {/* WRAPPER HORIZONTAL */}
                    <Box
                      ref={sliderRef}
                      sx={{
                        display: "flex",
                        gap: { xs: 2, md: 3 },
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": { display: "none" },
                        py: 2,
                      }}
                    >
                      {courses.length === 0 ? (
                        <Typography sx={{ fontSize: 18, color: "#999" }}>
                          Tidak ada kelas pada kategori ini
                        </Typography>
                      ) : (
                        courses.map((c) => (
                          <Box
                            key={c.id}
                            sx={{
                              minWidth: { xs: 260, md: 320 },
                              flexShrink: 0,
                              scrollSnapAlign: "start",
                            }}
                          >
                            <Kelas
                              id={c.id}
                              image={c.thumbnail || Kursus}
                              title={c.name}
                              description={c.description}
                              lessons={c.lessons_count}
                              creator={c.instructor?.full_name}
                            />
                          </Box>
                        ))
                      )}
                    </Box>

                    {/* BUTTON NEXT */}
                    <Box
                      onClick={() =>
                        sliderRef.current.scrollBy({
                          left: 300,
                          behavior: "smooth",
                        })
                      }
                      sx={{
                        position: "absolute",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 10,
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "white",
                        boxShadow: "0px 2px 10px rgba(0,0,0,0.2)",
                        cursor: "pointer",
                      }}
                    >
                      {">"}
                    </Box>
                  </Box>
                </Box>
              </SectionContainer>
            </Box>
          </Grid>

          {/* === KOLOM KANAN (PANEL NOTIFIKASI) === */}
          {/* Gunakan md={4} agar cukup lebar untuk teks panjang */}
          <Grid size={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {/* Bagian Atas: Notifikasi */}
              <Box sx={{ height: 265 }}>
                <NotificationPanel />
              </Box>

              {/* Bagian Bawah: Riwayat Aktifitas (Sesuai Gambar) */}
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: "12px",
                  p: 2,
                  border: "1px solid #D9E2E1",
                  minHeight: "300px",
                }}
              >
                <Typography
                  fontWeight="bold"
                  sx={{ mb: 2, textAlign: "center", height: 387 }}
                >
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
        justifyContent: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Box
          component="img"
          src={icon}
          sx={{ width: "32px", height: "auto", mr: 1 }}
        />
        <Typography sx={{ fontSize: "28px", fontWeight: "900" }}>
          {number}
        </Typography>
      </Box>
      <Typography
        sx={{ fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}
      >
        {title}
      </Typography>
    </Box>
  );
}

// 2. Container Putih untuk Section (Progres/Kelas)
function SectionContainer({ title, children }) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "12px",
        border: "1px solid #D9E2E1",
        p: 3,
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography fontWeight="bold" sx={{ textTransform: "uppercase" }}>
          {title}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "primary.main", cursor: "pointer", fontWeight: "bold" }}
        >
          LIHAT SELENGKAPNYA
        </Typography>
      </Box>
      {children}
    </Box>
  );
}

export default DashboardInstructor;
