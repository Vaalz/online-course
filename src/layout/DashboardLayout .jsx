import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  IconButton,
  Avatar,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function NavbarDashboard() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
        borderBottom: "1px solid #E5E5E5",
        py: 1.2,
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            px: 5,
          }}
        >
          {/* === BAGIAN KIRI: LOGO + SEARCH + MENU === */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            {/* LOGO */}
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 26,
                background: "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                WebkitTextFillColor: "transparent",
                animation: "gradientMove 3s linear infinite",
                "@keyframes gradientMove": {
                  "0%": { backgroundPosition: "0% center" },
                  "100%": { backgroundPosition: "200% center" },
                },
              }}
            >
              LOGO
            </Typography>

            {/* SEARCH BAR */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                border: "1px solid #ccc",
                borderRadius: 2,
                backgroundColor: "#fff",
                boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
              }}
            >
              <InputBase
                placeholder="Cari Kelas"
                sx={{ width: 200, fontSize: 14 }}
              />
              <IconButton size="small">
                <SearchIcon sx={{ color: "gray", fontSize: 20 }} />
              </IconButton>
            </Box>

            {/* MENU */}
            <Grid container spacing={3} sx={{ width: "auto" }}>
              {["Kelas", "Langganan", "Tentang Kami"].map((menu) => (
                <Grid item key={menu}>
                  <Typography
                    sx={{
                      color: "#6C757D",
                      fontWeight: 500,
                      fontSize: 15,
                      cursor: "pointer",
                      "&:hover": {
                        color: "#466EF1",
                        textDecoration: "underline",
                      },
                      transition: "color 0.2s ease",
                    }}
                  >
                    {menu}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* === BAGIAN KANAN: IKON & PROFIL === */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* ICON CART */}
            <IconButton
              sx={{
                border: "1px solid #11DF9E",
                borderRadius: "50%",
                p: 1,
                "&:hover": {
                  backgroundColor: "rgba(17, 223, 158, 0.1)",
                },
              }}
            >
              <ShoppingCartOutlinedIcon
                sx={{ color: "#11DF9E", fontSize: 22 }}
              />
            </IconButton>

            {/* ICON FAVORITE */}
            <IconButton
              sx={{
                border: "1px solid #466EF1",
                borderRadius: "50%",
                p: 1,
                "&:hover": {
                  backgroundColor: "rgba(70, 110, 241, 0.1)",
                },
              }}
            >
              <FavoriteBorderOutlinedIcon
                sx={{ color: "#466EF1", fontSize: 22 }}
              />
            </IconButton>

            {/* AVATAR PROFILE */}
            <Avatar
              alt="User Profile"
              src="https://i.pravatar.cc/40"
              sx={{
                width: 36,
                height: 36,
                cursor: "pointer",
                border: "2px solid #E0E0E0",
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavbarDashboard;
