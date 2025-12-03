import React from "react";
import Navbar from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/UserSidebar";

import { superadminMenu } from "../components/Menu/SidebarMenu/superAdminMenu";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MeetingItem from "../components/MeetingItem";
import axios from "axios";
import { useState, useEffect } from "react";


const ImagePlaceholder = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  borderRadius: "8px",
  height: "350px", // Tinggi placeholder gambar utama
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(3),
  border: "1px solid #e0e0e0",
}));


export default function DashboardSuperAdmin() {
  const courseTitle = "JUDUL KURSUS CONTOH MATERI PROGRAMING PERTEMUAN 1";
  const instructorName = "USERNAME INSTRUKTUR";
  const dummyDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales maximus leo, id euismod urna pellentesque ut. Maecenas non pulvinar ex. Sed finibus, magna mattis tempor suscipit, massa metus placerat nisi, eget pretium libero lectus in urna. Duis luctus dignissim ligula a ultricies. Suspendisse commodo, libero et tincidunt cursus, lorem felis mattis quam, nec consectetur leo nunc ac erat. Integer venenatis, eros et eleifend maximus, tortor lectus efficitur neque, vitae posuere nunc ligula nec ipsum. Proin rhoncus urna felis, eget sollicitudin purus laoreet eget.";

  const [ setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Endpoint API (Ganti dengan endpoint BE Anda yang sebenarnya)
  const COURSE_ID = "123"; // Ambil ID kursus dari URL params
  const API_ENDPOINT = `/api/courses/${COURSE_ID}/meetings`;

  const meetings = [
        { title: "PERTEMUAN 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." },
        { title: "PERTEMUAN 2", content: "Sed finibus, magna mattis tempor suscipit, massa metus placerat nisi..." },
        // ... pertemuan lainnya
    ];

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const response = await axios.get(API_ENDPOINT);
        setMeetings(response.data.meetings || response.data); // Asumsi BE mengembalikan array pertemuan
        setError(null);
      } catch (err) {
        console.error("Error fetching meetings:", err);
        setError("Gagal memuat daftar pertemuan.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMeetings();
  }, [API_ENDPOINT]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#f5f6fa",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1300,
        }}
      >
        <Navbar />
      </Box>
      {/* SIDEBAR */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: { xs: 0, md: "260px" },
          flexShrink: 0,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflowY: "auto",
          bgcolor: "#fff",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Sidebar menus={superadminMenu} />
      </Box>

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 2, md: 4 },
          py: 3,
          width: "100%",
          height: "100vh",
        }}
      >
        {/* TITLE */}
        <Typography variant="h5" fontWeight="700" sx={{ mt: 2, mb: 3 }}>
          kk
        </Typography>

        {/* GRID KONTEN */}
        <Grid container spacing={2} width={"100%"}>
          <Grid item xs={12} width={"100%"}>
            <Box
              sx={{
                pt: "80px",
                pb: 3,
                width: "100%",
                minHeight: "100vh",
                // maxWidth: { md: "calc(100% - 260px)" }, // Batasan lebar
              }}
            >
              {/* 1. IMAGE PLACEHOLDER ATAS */}
              <ImagePlaceholder>{/*  */}</ImagePlaceholder>

              {/* 2. JUDUL KURSUS */}
              <Typography
                variant="h5"
                fontWeight="700"
                sx={{ mt: 2, mb: 1, color: "#010E0A" }}
              >
                {courseTitle}
              </Typography>

              {/* 3. DESKRIPSI UTAMA */}
              <Typography
                variant="body1"
                sx={{ mb: 2, color: "#657575", lineHeight: 1.6 }}
              >
                {dummyDescription}
              </Typography>


              {/* Tampilkan Loading/Error State */}
              {isLoading && <Typography>Memuat daftar pertemuan...</Typography>}
              {error && <Typography color="error">{error}</Typography>}

              {/* Render komponen jika data sudah ada */}
              {!isLoading &&
                !error &&
                meetings.length > 0 &&
                meetings.map((meeting) => (
                  <MeetingItem
                    key={meeting.id} // Gunakan ID unik dari BE sebagai key
                    title={meeting.title}
                    content={meeting.description}
                    // Asumsi BE memberikan URL gambar (meeting.image_url)
                    imageSrc={meeting.image_url}
                  />
                ))}

              {!isLoading && !error && meetings.length === 0 && (
                <Typography color="#657575">
                  Kursus ini belum memiliki pertemuan.
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
