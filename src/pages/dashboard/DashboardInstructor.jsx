import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

import NavbarDashboard from "../../components/layout/Navbar";
import UserSidebar from "../../components/layout/UserSidebar";
import ProgresStudent from "../../components/Progres";
import NotificationPanel from "../../components/NotificationPanel";
import Kelas from "../../components/CardInstructor";
import { InstructorMenu } from "../../components/Menu/SidebarMenu/InstructorMenu";
import Statistik from "../../components/StatistikInstructor";
import Loading from "../../components/Loading";
import CreateProfileDialog from "../../components/profile/CreateProfileDialog";

import Kursus from "../../assets/image/Kursus.png";
import Zoom from "../../assets/image/Zoom2.png";
import Siswa from "../../assets/image/Siswa.png";

function DashboardInstructor() {
  const [courses, setCourses] = useState([]);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const sidebarWidth = 270;
  const sliderRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isProfileRequired, setIsProfileRequired] = useState(false);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchMyCourses();
  }, []);

  const fetchMyCourses = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}instructor/my-courses`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setCourses(res.data.data.courses || []);
    } catch (error) {
      console.error("Gagal mengambil data course:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) return (window.location.href = "/");
    if (role !== "instructor") return (window.location.href = "/forbidden");

    async function checkProfile() {
      try {
        const res = await fetch(`${API_URL}profile/mybiodata`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 500) {
          console.log("PROFILE BELUM ADA");
          setIsProfileRequired(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    checkProfile();
  }, []);

  const handleCreateProfile = async (payload) => {
    const token = localStorage.getItem("token");

    await axios.post(`${API_URL}profile/biodata`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setIsProfileRequired(false);
  };

  if (loading) return <Loading text="Memuat dashboard..." />;

  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh", p: "3px" }}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <NavbarDashboard />
      </Box>

      {!isMobile && (
        <Box
          sx={{
            position: "fixed",
            left: 0,
            top: "80px",
            height: "calc(100vh - 80px)",
            overflowY: "auto",
            bgcolor: "#F1FCFA",
            borderRight: "1px solid #E0E0E0",
          }}
        >
          <UserSidebar menus={InstructorMenu} />
        </Box>
      )}

      <Box
        sx={{
          ml: { md: `${sidebarWidth}px`, xs: 0 },
          pt: "110px",
          px: 2,
          pb: 5,
        }}
      >
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Statistik />

            <ProgresStudent />

            <Box sx={{ mt: 1.5 }}>
              <SectionContainer title="KELAS KURSUS YANG ANDA MILIKI">
                <Box sx={{ position: "relative", width: "100%" }}>
                  <Box
                    onClick={() =>
                      sliderRef.current?.scrollBy({
                        left: -300,
                        behavior: "smooth",
                      })
                    }
                    sx={navButtonStyle("left")}
                  >
                    {"<"}
                  </Box>

                  <Box
                    ref={sliderRef}
                    sx={{
                      display: "flex",
                      gap: 3,
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
                          }}
                        >
                          <Kelas
                            id={c.id}
                            image={c.thumbnail || Kursus}
                            title={c.name}
                            description={c.description}
                            lessons={c.lessons_count}
                            creator={c.instructor?.full_name}
                            price={c.price}
                          />
                        </Box>
                      ))
                    )}
                  </Box>

                  <Box
                    onClick={() =>
                      sliderRef.current?.scrollBy({
                        left: 300,
                        behavior: "smooth",
                      })
                    }
                    sx={navButtonStyle("right")}
                  >
                    {">"}
                  </Box>
                </Box>
              </SectionContainer>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              <Box sx={{ height: 265 }}>
                <NotificationPanel />
              </Box>

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
                  sx={{ mb: 2, textAlign: "center" }}
                >
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
      <CreateProfileDialog
        keepMounted
        open={isProfileRequired}
        onSubmit={handleCreateProfile}
      />
    </Box>
  );
}

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

const navButtonStyle = (position) => ({
  position: "absolute",
  [position]: 0,
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
});

export default DashboardInstructor;
