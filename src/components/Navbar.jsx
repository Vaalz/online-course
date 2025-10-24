import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Button,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";

const handleSearchClick = () => {
  alert("search");
};

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // mobile < 960px
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = ["Kursus", "Langganan", "Tentang Kami"];

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          
          {/* Bagian kiri: Logo + Search */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* LOGO */}
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 30,
                pl: 8,
                pr: 3,
                py: 2,
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

            {/* SEARCH */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                px: 2,
                py: 0.5,
                border: "1px solid #ccc",
                borderRadius: 5,
                backgroundColor: "white",
                ml: 2,
                width: isMobile ? 150 : 200,
              }}
            >
              <InputBase placeholder="Cari Kelas" sx={{ width: "100%", mr: 1 }} />
              <IconButton onClick={handleSearchClick} size="small">
                <SearchIcon sx={{ color: "gray" }} />
              </IconButton>
            </Box>

            {/* Desktop Menu */}
            {!isMobile && (
              <Grid container spacing={2} sx={{ pl: 4, width: "auto" }}>
                {menuItems.map((item) => (
                  <Grid item key={item}>
                    <Button
                      sx={{
                        color: "#6C757D",
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: "1rem",
                      }}
                    >
                      {item}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>

          {/* Desktop Buttons */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, pr: 8 }}>
              <Button variant="text" sx={{ color: "#466EF1", fontWeight: 500, textTransform: "none" }}>
                Masuk
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  background: "linear-gradient(90deg, #11DF9E, #466EF1)",
                  fontWeight: 500,
                  color: "white",
                  animation: "gradientMove 3s linear infinite",
                }}
              >
                Daftar
              </Button>
            </Box>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}

          {/* Mobile Drawer */}
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box sx={{ width: 250, p: 2 }} role="presentation" onClick={toggleDrawer(false)}>
              <List>
                {menuItems.map((text) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}

                {/* Tombol Masuk */}
                <ListItem disablePadding sx={{ mt: 2 }}>
                  <Button
                    fullWidth
                    variant="text"
                    sx={{ color: "#466EF1", fontWeight: 500, textTransform: "none" }}
                  >
                    Masuk
                  </Button>
                </ListItem>

                {/* Tombol Daftar */}
                <ListItem disablePadding sx={{ mt: 1 }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      background: "linear-gradient(90deg, #11DF9E, #466EF1)",
                      fontWeight: 500,
                      color: "white",
                      animation: "gradientMove 3s linear infinite",
                    }}
                  >
                    Daftar
                  </Button>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
