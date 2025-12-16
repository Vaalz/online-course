import React, { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/UserSidebar";
import { useParams } from "react-router-dom";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";
import { Box, Typography } from "@mui/material";
import MeetingItem from "../components/ui/MeetingItem";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export default function DetailCourses() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  const fetchCourseDetail = async () => {
    try {
      const res = await axios.get(`${API_URL}courses/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCourse(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat detail course");
    }
  };

  const fetchCourseModules = async () => {
    try {
      const res = await axios.get(`${API_URL}courses/${id}/modules`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setModules(res.data.data || []);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat modul");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      setError("Token tidak ditemukan. Silakan login ulang.");
      return;
    }

    fetchCourseDetail();
    fetchCourseModules();
  }, [id]);

  return (
    <Box sx={{ display: "flex", width: "100%", minHeight: "100vh" }}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <Navbar />
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: "260px",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Sidebar menus={studentMenu} />
      </Box>

      <Box component="main" sx={{ flexGrow: 1, px: { xs: 2, md: 4 }, py: 3 }}>
        {isLoading && <Typography>Memuat data...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {course && (
          <>
            <Typography variant="h5" fontWeight={700} sx={{ mt: 1 }}>
              {course.name}
            </Typography>

            <Typography sx={{ color: "#657575", mt: 1 }}>
              Course ID: {course.id}
            </Typography>

            <Typography sx={{ mt: 3, fontWeight: 600 }}>
              Jumlah Modul: {course.lessons_count}
            </Typography>

            <Box sx={{ mt: 3 }}>
              {modules.length > 0 ? (
                modules.map((m) => (
                  <MeetingItem
                    key={m.id}
                    title={m.name}
                    content={m.description}
                  />
                ))
              ) : (
                <Typography>Belum ada modul.</Typography>
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
