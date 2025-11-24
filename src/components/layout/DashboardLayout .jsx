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
import Logo from "../../assets/image/Logo.png"

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
    if (menu === "Kelas") navigate("/kelas");
    if (menu === "Langganan") navigate("/langganan");
    if (menu === "Tentang Kami") navigate("/tentang");
    setOpenDrawer(false);
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
          py: { xs: 0.5, md: 1 },
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              px: { xs: 1, sm: 2 },
            }}
          >
            {/* LEFT */}
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 2 } }}>
              {/* Hamburger (HP) */}
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

<<<<<<< HEAD
              {/* Logo */}
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 26, md: 32 },
                  fontWeight: 700,
                  background:
                    "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  whiteSpace: "nowrap",
                }}
              >
                LOGO
              </Typography>
=======
            <Box
            component="img"
              src={Logo}
              alt="logo"
              sx={{
                width: "80px",
                height: "50px",
                m: "10px"
              }}
            />
>>>>>>> 73eacdb (commit)

              {/* Search Bar (Hanya muncul di md ke atas) */}
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
<<<<<<< HEAD
                <InputBase
                  placeholder="Cari kelas..."
                  sx={{ width: { md: 200, lg: 260 } }}
                />
                <SearchIcon sx={{ fontSize: 20, color: "gray" }} />
=======
                <InputBase placeholder="Cari kelas..." sx={{ width: 180 }} />
                <IconButton onClick={() => alert('search di klik')}>
                  <SearchIcon sx={{ fontSize: 20, color: "gray" }} />
                </IconButton>
>>>>>>> 73eacdb (commit)
              </Box>

              {/* Menu Link (desktop) */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: { md: 2, lg: 3 },
                  ml: 2,
                }}
              >
                {navbarMenu.map((menu) => (
                  <Typography
                    key={menu}
                    onClick={() => handleMenuClick(menu)}
                    sx={{
                      fontSize: { md: 14, lg: 16 },
                      color: "#6C757D",
                      cursor: "pointer",
                      "&:hover": { color: "#466EF1" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {menu}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* RIGHT BUTTONS */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0, sm: 1 },
              }}
            >
              <IconButton size="small">
                <ShoppingCartOutlinedIcon sx={{ color: "#11DF9E" }} />
              </IconButton>

              <IconButton size="small">
                <FavoriteBorderOutlinedIcon sx={{ color: "#466EF1" }} />
              </IconButton>

              <Avatar
                src="https://i.pravatar.cc/40"
                sx={{
                  width: { xs: 30, sm: 34, md: 40 },
                  height: { xs: 30, sm: 34, md: 40 },
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ============ DRAWER ============ */}
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box sx={{ width: 270, p: 2, pt: 10 }}>
          {/* Navbar Menu */}
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

          {/* Sidebar Menu */}
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

          {/* Notifications */}
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
