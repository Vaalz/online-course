// src/pages/QuizDashboard.jsx
import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  CircularProgress,
  Alert,
} from "@mui/material";
import NavbarDashboard from "../components/layout/Navbar";
import UserSidebar from "../components/layout/UserSidebar";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";
import QuizCard from "../components/QuizComponent/cardQuiz";
import quizService from "../components/QuizComponent/cardQuizServices";

export default function QuizDashboard() {
  const [quizzes, setQuizzes] = useState([]);
  const [filteredQuizzes, setFilteredQuizzes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchQuizzes();
  }, []);

  const fetchQuizzes = async () => {
    try {
      setLoading(true);
      const res = await quizService.getMyQuizzes();

      if (res.status) {
        setQuizzes(res.data.quizzes || []);
        setFilteredQuizzes(res.data.quizzes || []);
        setCategories(res.data.course_types || []);
      } else {
        setError(res.message || "Gagal memuat quiz");
      }
    } catch (err) {
      console.log(err);
      setError("Terjadi kesalahan saat memuat quiz");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryFilter = async (id) => {
    try {
      setLoading(true);
      setSelectedCategory(id);
      
      if (!id) {
        // Fetch semua quiz
        const res = await quizService.getMyQuizzes();
        if (res.status) {
          setFilteredQuizzes(res.data.quizzes || []);
        }
      } else {
        // Fetch quiz by category dari API
        const res = await quizService.getMyQuizzesByCategory(id);
        if (res.status) {
          setFilteredQuizzes(res.data.quizzes || []);
        } else {
          setError(res.message || "Gagal memuat quiz kategori");
        }
      }
    } catch (err) {
      console.log(err);
      setError("Terjadi kesalahan saat filter kategori");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <NavbarDashboard />
      </Box>

      {/* SIDEBAR */}
      <Box
        sx={{
          width: 270,
          position: "fixed",
          top: "80px",
          height: "calc(100vh - 80px)",
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
          ml: { xs: 0, md: "270px" },
          mr: { xs: 0, lg: "340px" },
          pt: "100px",
          px: { xs: 2, sm: 2.5, md: 3, lg: 3 },
          pb: 6,
          minHeight: "100vh",
        }}
      >
        {/* QUIZ LIST */}
        <Box sx={{ width: "100%", mt: 3 }}>
          {loading ? (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <CircularProgress size={50} />
            </Box>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : filteredQuizzes.length === 0 ? (
            <Typography textAlign="center" color="text.secondary" py={8}>
              Tidak ada quiz tersedia
            </Typography>
          ) : (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(auto-fill, minmax(280px, 1fr))",
                  sm: "repeat(auto-fill, minmax(300px, 1fr))",
                  md: "repeat(auto-fill, minmax(280px, 1fr))",
                  lg: "repeat(auto-fill, minmax(300px, 1fr))",
                  xl: "repeat(auto-fill, minmax(320px, 1fr))",
                },
                gap: { xs: 2, sm: 2, md: 2.5, lg: 2.5 },
                width: "100%",
                justifyItems: "center",
              }}
            >
              {filteredQuizzes.map((quiz) => (
                <Box 
                  key={quiz.id}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <QuizCard quiz={quiz} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>

      {/* RIGHT - FILTER (FIXED POSITION) */}
      <Box
        sx={{
          width: 320,
          position: "fixed",
          right: 0,
          top: "100px",
          height: "calc(100vh - 100px)",
          bgcolor: "#fff",
          borderLeft: "1px solid #DCE4E3",
          p: 3,
          overflowY: "auto",
          display: { xs: "none", lg: "block" },
          zIndex: 1200,
          boxShadow: "-2px 0 8px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Typography 
          fontWeight={800} 
          fontSize={17} 
          mb={2.5}
          sx={{ 
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            color: "#1A1A1A"
          }}
        >
          FILTER SESUAI KATEGORI
        </Typography>

        <Button
          fullWidth
          variant={selectedCategory === null ? "contained" : "outlined"}
          onClick={() => handleCategoryFilter(null)}
          sx={{ 
            mb: 1.5, 
            fontWeight: 700, 
            textTransform: "uppercase",
            fontSize: 12.5,
            py: 1.5,
            px: 2,
            borderRadius: 2,
            bgcolor: selectedCategory === null ? "#00BFA6" : "transparent",
            color: selectedCategory === null ? "#fff" : "#565656",
            borderColor: "#DCE4E3",
            "&:hover": {
              bgcolor: selectedCategory === null ? "#00A88F" : "#F6FEFD",
              borderColor: "#00BFA6",
            }
          }}
        >
          Lihat Semua Kategori
        </Button>

        {categories.map((cat) => (
          <Button
            key={cat.id}
            fullWidth
            variant={selectedCategory === cat.id ? "contained" : "outlined"}
            onClick={() => handleCategoryFilter(cat.id)}
            sx={{ 
              mb: 1.5, 
              fontWeight: 700, 
              textTransform: "uppercase",
              fontSize: 12.5,
              py: 1.5,
              px: 2,
              borderRadius: 2,
              bgcolor: selectedCategory === cat.id ? "#00BFA6" : "transparent",
              color: selectedCategory === cat.id ? "#fff" : "#565656",
              borderColor: "#DCE4E3",
              "&:hover": {
                bgcolor: selectedCategory === cat.id ? "#00A88F" : "#F6FEFD",
                borderColor: "#00BFA6",
              }
            }}
          >
            {cat.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
}