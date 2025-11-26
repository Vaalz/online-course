// src/components/Search/SearchBar.jsx

import React, { useState, useRef } from "react";
import { Box, InputBase, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function SearchBar({ placeholder = "Cari kategori (UUID)..." }) {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const debounceRef = useRef(null);

  // 🔥 Fetch course berdasarkan category ID
  const fetchSearch = async (categoryId) => {
    setLoading(true);
    setErrorMsg("");
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    try {
      const response = await fetch(`${API_URL}courses/category/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Role: role,
        },
      });

      if (!response.ok) {
        setErrorMsg(`Error ${response.status} - Tidak dapat memuat data`);
        setResults([]);
        return;
      }

      const json = await response.json();

      if (!json.data || !json.data.courses || json.data.courses.length === 0) {
        setErrorMsg("Tidak ada hasil ditemukan");
        setResults([]);
      } else {
        setResults(json.data.courses);
      }
    } catch (err) {
      console.error("Search Error:", err);
      setErrorMsg("Gagal terhubung ke server");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setKeyword(value);

    clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (value.trim() !== "") fetchSearch(value);
      else {
        setResults([]);
        setErrorMsg("");
      }
    }, 500);
  };

  return (
    <Box
      sx={{ position: "relative", display: "flex", flexDirection: "column" }}
    >
      {/* Search input */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 0.6,
          border: "1px solid #ccc",
          borderRadius: "40px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <InputBase
          placeholder={placeholder}
          value={keyword}
          onChange={handleChange}
          sx={{ width: 180 }}
        />

        <IconButton>
          <SearchIcon sx={{ fontSize: 20, color: "gray" }} />
        </IconButton>
      </Box>

      {/* Loading */}
      {loading && <Loading text="Mencari kelas..." fullscreen={false} />}

      {/* Results Dropdown */}
      {keyword && (results.length > 0 || errorMsg) && (
        <Box
          sx={{
            position: "absolute",
            top: "52px",
            background: "rgba(255,255,255,0.45)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 3,
            p: 1,
            width: "260px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
            zIndex: 2000,
            maxHeight: 320,
            overflowY: "auto",
          }}
        >
          {results.length > 0 ? (
            results.map((item) => (
              <Box
                key={item.id}
                onClick={() => navigate(`/course/${item.id}`)}
                sx={{
                  p: 1.4,
                  borderRadius: 2,
                  cursor: "pointer",
                  transition: "0.25s",
                  "&:hover": {
                    background: "linear-gradient(90deg,#11DF9E15,#466EF115)",
                  },
                }}
              >
                <Typography sx={{ fontWeight: 600 }}>{item.name}</Typography>
                <Typography sx={{ fontSize: 13, color: "gray" }}>
                  by {item.creator?.full_name}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography
              sx={{ p: 1, textAlign: "center", fontSize: 14, color: "red" }}
            >
              {errorMsg}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}
