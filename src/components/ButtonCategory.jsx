// src/components/CategoryButtons.jsx (Perbaikan)

import React, { useState } from "react";
import { Button, Box, useTheme } from "@mui/material";

const categories = [
  "Programing",
  "UI/UX",
  "Infrastruktur",
  "Backend",
  "Cyber Security",
];

export default function CategoryButtons() {
  const [active, setActive] = useState("Programing");
  const theme = useTheme();

  return (
    <Box
      sx={{
        justifyContent: "space-between",
        display: "flex",
        gap: 2,        
        mt: 2,
        width: '100%', 
      }}
    >
      {categories.map((category) => {
        const isActive = active === category;
        return (
          <Button
            key={category}
            onClick={() => setActive(category)}
            variant="outlined"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 600,
              
              // >>> PERBAIKAN LEBAR & FLEX <<<
              minWidth: "150px", // Cukup minWidth, jangan gunakan max/fixed width
              height: "50px", // Tinggi lebih realistis
              whiteSpace: 'nowrap', // PENTING: Mencegah teks turun baris
              flexShrink: 0, // PENTING: MENCEGAH TOMBOL MENYUSUT
              // >>> AKHIR PERBAIKAN LEBAR & FLEX <<<

              color: isActive ? "#000" : "#444",
              background: isActive
                ? "linear-gradient(white, white) padding-box, linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF) border-box"
                : "white",
              border: isActive ? "2px solid transparent" : "2px solid #ddd",
              boxShadow: isActive ? "0px 2px 8px rgba(0,0,0,0.1)" : "none",
              transition: "all 0.3s ease",
              "&:hover": {
                background: isActive
                  ? "linear-gradient(white, white) padding-box, linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF) border-box"
                  : "linear-gradient(white, white) padding-box, linear-gradient(90deg, #ccc, #999) border-box",
                border: "2px solid transparent",
              },

              // Hapus semua custom breakpoints width, biarkan flexShrink: 0 dan minWidth yang bekerja
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            {category}
          </Button>
        );
      })}
    </Box>
  );
}