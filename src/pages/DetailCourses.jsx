import React from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/UserSidebar";
import { useParams } from "react-router-dom";
import { superadminMenu } from "../components/Menu/SidebarMenu/superAdminMenu";
import { Box, Grid, Typography } from "@mui/material";
import MeetingItem from "../components/MeetingItem";
import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function DetailCourses() {
  const { id } = useParams(); // DARI URL
  const [course, setCourse] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ambil token dari localStorage
  const token = localStorage.getItem("token");

  const fetchCourseDetail = async () => {
    try {
      const res = await axios.get(`${API_URL}courses/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCourse(res.data.data);
    } catch (err) {
      setError("Gagal memuat detail course");
      console.error(err);
    }
  };

  const fetchMeetings = async () => {
    try {
      const res = await axios.get(`${API_URL}courses/${id}/meetings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMeetings(res.data.data || []);
    } catch (err) {
      setError("Gagal memuat daftar pertemuan");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!token) return setError("Token tidak ditemukan, silakan login ulang");
    fetchCourseDetail();
    fetchMeetings();
  }, [id]);

  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh", backgroundColor: "#f5f6fa" }}>
      {/* NAVBAR */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
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
          bgcolor: "#fff",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Sidebar menus={superadminMenu} />
      </Box>

      {/* MAIN CONTENT */}
      <Box component="main" sx={{ flexGrow: 1, px: { xs: 2, md: 4 }, py: 3 }}>
        {isLoading && <Typography>Memuat data...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {/* Jika course berhasil didapat */}
        {course && (
          <>
            <img
              src={course.thumbnail}
              alt={course.name}
              style={{ width: "100%", borderRadius: 8 }}
            />

            <Typography variant="h5" fontWeight="700" sx={{ mt: 2, mb: 1 }}>
              {course.name}
            </Typography>

            <Typography sx={{ mb: 2, color: "#657575", lineHeight: 1.6 }}>
              {course.description}
            </Typography>

            <Typography fontWeight={600}>
              Instructor: {course.instructor?.full_name}
            </Typography>

            <Box sx={{ mt: 3 }}>
              {meetings.length > 0 ? (
                meetings.map((m) => (
                  <MeetingItem
                    key={m.id}
                    title={m.title}
                    content={m.description}
                    imageSrc={m.image_url}
                  />
                ))
              ) : (
                <Typography>Kursus ini belum memiliki pertemuan.</Typography>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
