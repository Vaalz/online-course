import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  InputBase,
  Avatar,
  Drawer,
  Divider,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { useNavigate } from "react-router-dom";

const navbarMenu = ["Kelas", "Langganan", "Tentang Kami"];
const sidebarMenu = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/DashboardStudent" },
  { label: "Edit Profil", path: "/EditProfil" },
  { label: "Quiz", path: "/Quiz" },
];

const notificationsData = [
  "Kelas baru tersedia!",
  "Jadwal Zoom dimulai 1 jam lagi.",
  "Tugas baru telah diupload.",
];

function NavbarDashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menu) => {
    console.log("Clicked:", menu);

    if (menu === "Kelas") navigate("/kelas");
    if (menu === "Langganan") navigate("/langganan");
    if (menu === "Tentang Kami") navigate("/tentang");

    setOpenDrawer(false); // menutup drawer setelah dipencet
  };

  const handleSidebarClick = (path) => {
    navigate(path);
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#F6FEFD",
          boxShadow: "none",
          borderBottom: "1px solid #E5E5E5",
          py: 1,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              px: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                sx={{
                  fontSize: 32,
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                LOGO
              </Typography>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  px: 2,
                  py: 0.6,
                  border: "1px solid #ccc",
                  borderRadius: "40px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <InputBase placeholder="Cari kelas..." sx={{ width: 180 }} />
                <SearchIcon sx={{ fontSize: 20, color: "gray" }} />
              </Box>

              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: 3 }}>
                {navbarMenu.map((menu) => (
                  <Typography
                    key={menu}
                    onClick={() => handleMenuClick(menu)}
                    sx={{
                      fontSize: 16,
                      color: "#6C757D",
                      cursor: "pointer",
                      "&:hover": { color: "#466EF1" },
                    }}
                  >
                    {menu}
                  </Typography>
                ))}
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <IconButton>
                <ShoppingCartOutlinedIcon sx={{ color: "#11DF9E" }} />
              </IconButton>

              <IconButton>
                <FavoriteBorderOutlinedIcon sx={{ color: "#466EF1" }} />
              </IconButton>

              <IconButton sx={{ display: { xs: "none", md: "flex" } }}>
                <NotificationsNoneIcon />
              </IconButton>

              <Avatar src="https://i.pravatar.cc/40" />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ==================== DRAWER (HP) ==================== */}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 270, p: 2, pt: 10 }}>
          {/* === NAVBAR MENU === */}
          <Typography fontWeight={700} sx={{ mb: 1 }}>
            Menu Utama
          </Typography>

          {navbarMenu.map((item) => (
            <Typography
              key={item}
              sx={{ py: 1, cursor: "pointer" }}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </Typography>
          ))}

          <Divider sx={{ my: 2 }} />

          {/* === SIDEBAR MENU === */}
          <Typography fontWeight={700} sx={{ mb: 1 }}>
            Navigasi
          </Typography>

          {sidebarMenu.map((item) => (
            <Typography
              key={item.label}
              sx={{ py: 1, cursor: "pointer" }}
              onClick={() => handleSidebarClick(item.path)}
            >
              {item.label}
            </Typography>
          ))}

          <Divider sx={{ my: 2 }} />

          {/* === NOTIFIKASI === */}
          <Typography fontWeight={700} sx={{ mb: 1 }}>
            Notifikasi
          </Typography>

          {notificationsData.map((notif, i) => (
            <Typography key={i} sx={{ py: 1 }}>
              {notif}
            </Typography>
          ))}

          <Button
            fullWidth
            variant="outlined"
            sx={{
              mt: 2,
              borderRadius: 3,
              textTransform: "none",
              borderColor: "#00C9A7",
              color: "#00C9A7",
            }}
          >
            Baca Semua
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default NavbarDashboard;
