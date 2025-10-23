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
        flexWrap: "wrap",
        mt: 2,
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
              fontSize: { xs: "18px", sm: "19px", md: "20px" },
              maxWidth: "400px",
              minWidth: "250px",
              height: "65px",
              flexShrink: 1,
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

              // ✅ Responsif di layar kecil
              [theme.breakpoints.down("md")]: {
                width: "260px",
                height: "70px",
                fontSize: "1rem",
              },
              [theme.breakpoints.down("sm")]: {
                width: "100%", // full width di mobile
                height: "60px",
                fontSize: "0.95rem",
              },
            }}
          >
            {category}
          </Button>
        );
      })}
    </Box>
  );
}
