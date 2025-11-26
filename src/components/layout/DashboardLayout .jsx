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
import SearchBar from "../Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MobileDrawer from "./MobileDrawer";
import { studentMenu } from "../Menu/SidebarMenu/studentMenu";
import Logo from "../../assets/image/Logo.png";

import { useNavigate } from "react-router-dom";

const navbarMenu = ["Kelas", "Langganan", "Tentang Kami"];

function NavbarDashboard() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();

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
          borderBottom: "1px solid #E5E5E5",
          py: { xs: 0.5, md: 1 },
        }}
      >
        {" "}
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 2 },
              }}
            >
              {/* Hamburger */}
              <IconButton
                sx={{ display: { xs: "flex", md: "none" } }}
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>

              {/* Logo */}
              <Box
                component="img"
                src={Logo}
                alt="logo"
                sx={{
                  width: "80px",
                  height: "50px",
                  m: "10px",
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              />

              {/* Search Bar (md ke atas) */}
              <SearchBar placeholder="Cari kelas..." />

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
      {/* DRAWER */}
      <MobileDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        menus={studentMenu}
      />
      ;
    </>
  );
}

export default NavbarDashboard;
