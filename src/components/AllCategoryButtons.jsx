import React, { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import axios from "axios";

export default function CategoryButtons({ onSelectCategory, onResetPage }) {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState("all");

  const API_URL = import.meta.env.VITE_API_BASE_URL;


  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const res = await axios.get(`${API_URL}course-types`);
        setCategories(res.data.data || []);

        // default load semua course
        const all = await axios.get(`${API_URL}courses`);
        onSelectCategory(all.data.data.data || []);
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        onSelectCategory([]);
      }
    };

    fetchInitialData();
  }, []);

  const fetchCourses = async (id) => {
    try {
      const res = await axios.get(`${API_URL}courses/categories/${id}`);
      const courses = res.data?.data?.courses || [];
      onSelectCategory(courses);
    } catch (err) {
      console.error("Gagal mengambil course:", err);
      onSelectCategory([]);
    }
  };

  const handleClick = async (id) => {
    setActive(id);
    onResetPage();

    if (id === "all") {
      const res = await axios.get(`${API_URL}courses`);
      onSelectCategory(res.data.data.data || []);
    } else {
      fetchCourses(id);
    }
  };

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

      {/* --- STATIC BUTTON SEMUA KELAS --- */}
      <Button
        onClick={() => handleClick("all")}
        variant="outlined"
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          fontWeight: 500,
          minWidth: { xs: "120px", sm: "150px", md: "200px" },
          height: { xs: "24px", md: "48px" },
          whiteSpace: "nowrap",
          flexShrink: 0,

          color: active === "all" ? "#000" : "#444",
          background: active === "all"
            ? "linear-gradient(white, white) padding-box, linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF) border-box"
            : "white",
          border: active === "all" ? "4px solid transparent" : "2px solid #ddd",
          boxShadow: active === "all" ? "0px 2px 8px rgba(0,0,0,0.1)" : "none",
        }}
      >
        Semua Kelas
      </Button>

      {/* --- dynamic categories button --- */}
      {categories.map((c) => {
        const isActive = active === c.id;

        return (
          <Button
            key={c.id}
            onClick={() => handleClick(c.id)}
            variant="outlined"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 500,
              minWidth: { xs: "120px", sm: "150px", md: "200px" },
              height: { xs: "24px", md: "48px" },
              whiteSpace: "nowrap",
              flexShrink: 0,

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
              fontSize: { xs: "14px", md: "18px" },
            }}
          >
            {c.name}
          </Button>
        );
      })}
    </Box>
  );
}
