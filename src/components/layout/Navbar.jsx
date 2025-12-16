// src/components/layout/DashboardLayout.jsx

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Avatar,
  InputBase,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

import MobileDrawer from "./MobileDrawer";
import { studentMenu } from "../Menu/SidebarMenu/studentMenu";
import { useProfile } from "../profile/useProfile";

import Sampah from "../../assets/image/Sampah.png";
import Love from "../../assets/image/Favorite.png";
import Keranjang from "../../assets/image/Keranjang.png";
import Logo from "../../assets/image/Logo.png";

const navbarMenu = ["Kelas", "Langganan", "Tentang Kami"];

function NavbarDashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const { profile } = useProfile();

  const handleMenuClick = (menu) => {
    if (menu === "Kelas") navigate("/kelas");
    if (menu === "Langganan") navigate("/langganan");
    if (menu === "Tentang Kami") navigate("/tentang");
    setOpenDrawer(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#F6FEFD",
          boxShadow: "none",
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 2 },
              }}
            >
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              <Box
                component="img"
                src={Logo}
                alt="logo"
                sx={{
                  width: { xs: 30, sm: 34, md: 80 },
                  height: { xs: 30, sm: 34, md: 75 },
                  m: "10px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
              />

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  width: 300,
                  height: 40,
                  alignItems: "center",
                  px: 2,
                  border: "1px solid #ccc",
                  borderRadius: "40px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <InputBase placeholder="Cari kelas..." sx={{ width: "100%" }} />
                <IconButton>
                  <SearchIcon sx={{ fontSize: 20, color: "gray" }} />
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  gap: 2,
                  ml: 2,
                }}
              >
                {navbarMenu.map((menu) => (
                  <Typography
                    key={menu}
                    onClick={() => handleMenuClick(menu)}
                    sx={{
                      fontSize: 14,
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

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 0.5, sm: 1 },
              }}
            >
              <IconButton size="small">
                <Box component="img" src={Keranjang} sx={{ width: 30 }} />
              </IconButton>

              <IconButton size="small">
                <Box component="img" src={Love} sx={{ width: 30 }} />
              </IconButton>

              <IconButton size="small">
                <Box component="img" src={Sampah} sx={{ width: 28 }} />
              </IconButton>

              <Avatar
                src={profile?.profile_picture ?? "https://i.pravatar.cc/40"}
                sx={{
                  width: { xs: 30, sm: 34, md: 40 },
                  height: { xs: 30, sm: 34, md: 40 },
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <MobileDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        menus={studentMenu}
      />
    </>
  );
}

export default NavbarDashboard;
