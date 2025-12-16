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
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/logo/Logo.png";
import { Height } from "@mui/icons-material";

const handleSearchClick = () => {
  alert("search");
};

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const menuItems = ["Kelas", "Langganan", "Tentang Kami"];

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <Toolbar>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
            component="img"
              src={logo}
              alt="logo"
              sx={{
                width: "70px",
                height: "50px",
                m: "10px"
              }}
            />

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

          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2, pr: 8 }}>
              <Button 
              variant="text" 
              component={Link}
              to= "/login"
              sx={{ 
                  color: "#466EF1", 
                  fontWeight: 500, 
                  textTransform: "none" 
                }}>
                Masuk
              </Button>
              <Button
                component={Link}
                to="/register"
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

          {isMobile && (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}

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

                <ListItem disablePadding sx={{ mt: 2 }}>
                  <Button
                    component={Link}
                    to="/login"
                    fullWidth
                    variant="text"
                    sx={{ color: "#466EF1", fontWeight: 500, textTransform: "none" }}
                  >
                    Masuk
                  </Button>
                </ListItem>

                <ListItem disablePadding sx={{ mt: 1 }}>
                  <Button
                    fullWidth
                    component={Link}
                    to="/register"
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

