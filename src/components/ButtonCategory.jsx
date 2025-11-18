// src/components/CategoryButtons.jsx

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
        display: "flex",
        width: "100%",
        overflowX: { xs: "auto", md: "visible" },
        gap: 2,
        pb: 1,
        "&::-webkit-scrollbar": { display: "none" },
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
              fontWeight: 500,

              // 🔥 Perubahan utama agar muat 3 kotak
              minWidth: { xs: "120px", sm: "150px", md: "290px" },
              height: { xs: "60px", md: "80px" },

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
            {category}
          </Button>
        );
      })}
    </Box>
  );
}
