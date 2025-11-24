import React, { useState, useEffect } from "react";
import { Button, Box, useTheme } from "@mui/material";
import axios from "axios";

export default function CategoryButtons() {
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState(null);

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_URL}course-types`);

        const list = res.data.data || [];
        setCategories(list);

        // set default active category
        if (list.length > 0) setActive(list[0].name);

      } catch (err) {
        console.error("Gagal mengambil kategori:", err);
      }
    };

    fetchCategories();
  }, []);

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
        const isActive = active === category.name;

        return (
          <Button
            key={category.id}
            onClick={() => setActive(category.name)}
            variant="outlined"
            sx={{
              borderRadius: "20px",
              textTransform: "none",
              fontWeight: 500,
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
            {category.name}
          </Button>
        );
      })}
    </Box>
  );
}
