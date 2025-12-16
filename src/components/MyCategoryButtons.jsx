import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import axios from "axios";

export default function CategoryButtons({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");

  const token = localStorage.getItem("token");
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const res = await axios.get(`${API_URL}course-types`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCategories(res.data.data || []);
        fetchAllCourses();
        setActive("all");
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        onSelectCategory([]);
      }
    };

    fetchInitialData();
  }, []);

  const fetchCourses = async (id) => {
    try {
      const res = await axios.get(
        `${API_URL}mycourses/categories/${id}/courses`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const courses = res.data?.data?.courses || [];
      onSelectCategory(courses);
    } catch (err) {
      console.error("❌ ERROR MYCOURSES:", err);
      onSelectCategory([]);
    }
  };

  const fetchAllCourses = async () => {
    try {
      const res = await axios.get(`${API_URL}my/courses`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const courses = res.data?.data?.data || [];
      onSelectCategory(courses);
    } catch (err) {
      console.error("❌ ERROR ALL COURSES:", err);
      onSelectCategory([]);
    }
  };

  const handleClick = async (id) => {
    setActive(id);

    if (id === "all") {
      fetchAllCourses();
    } else {
      fetchCourses(id);
    }
  };

  const buttonStyle = (isActive) => ({
    borderRadius: "20px",
    textTransform: "none",
    fontWeight: 500,
    minWidth: { xs: "120px", sm: "150px", md: "290px" },
    height: { xs: "35px", md: "70px" },
    whiteSpace: "nowrap",
    flexShrink: 0,
    fontSize: { xs: "14px", md: "18px" },

    color: isActive ? "#000" : "#444",
    background: isActive
      ? "linear-gradient(white, white) padding-box, linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF) border-box"
      : "white",
    border: isActive ? "4px solid transparent" : "2px solid #ddd",
    boxShadow: isActive ? "0px 2px 8px rgba(0,0,0,0.1)" : "none",

    transition: "all 0.3s ease",
    "&:hover": {
      background: isActive
        ? "linear-gradient(white, white) padding-box, linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF) border-box"
        : "linear-gradient(white, white) padding-box, linear-gradient(90deg, #ccc, #999) border-box",
      border: "4px solid transparent",
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        overflowX: "auto",
        pb: 1,
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >

      <Button
        onClick={() => handleClick("all")}
        sx={buttonStyle(active === "all")}
      >
        Semua Kelas
      </Button>

      {/* 🔥 CATEGORY FROM BACKEND */}
      {categories.map((c) => (
        <Button
          key={c.id}
          onClick={() => handleClick(c.id)}
          sx={buttonStyle(active === c.id)}
        >
          {c.name}
        </Button>
      ))}
    </Box>
  );
}
