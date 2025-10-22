
import React from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  InputBase,
  IconButton,
  Button,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const handleSearchClick = () => {
  alert("search");
};

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {/* Wrapper utama untuk kiri & kanan */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Bagian kiri: logo, search, menu */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* LOGO */}
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: 30,
                pl: 8,
                pr: 3,
                py: 2,
                background:
                  "linear-gradient(90deg, #11DF9E, #466EF1, #11DF9E)",
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
              }}
            >
              <InputBase placeholder="Cari Kelas" sx={{ width: 200, mr: 2 }} />
              <IconButton onClick={handleSearchClick} size="small">
                <SearchIcon sx={{ color: "gray" }} />
              </IconButton>
            </Box>

            {/* MENU */}
            <Grid container spacing={2} sx={{ pl: 4, width: "auto" }}>
              <Grid item>
                <Button sx={{ color: "#6C757D", fontWeight: 500, textTransform: 'none', fontSize: '1rem' }}>
                  Kursus
                </Button>
              </Grid>
              <Grid item>
                <Button sx={{ color: "#6C757D", fontWeight: 500, textTransform: 'none', fontSize: '1rem' }}>
                  Langganan
                </Button>
              </Grid>
              <Grid item>
                <Button sx={{ color: "#6C757D", fontWeight: 500, textTransform: 'none', fontSize: '1rem' }}>
                  Tentang Kami
                </Button>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ display: "flex", gap: 2, pr: 8 }}>
            <Button variant="text" sx={{ color: "#466EF1", fontWeight: 500, textTransform: 'none' }}>
              Masuk
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: 'none',
                background:
                  "linear-gradient(90deg, #11DF9E, #466EF1)",
                fontWeight: 500,
                color: "white",
                animation: "gradientMove 3s linear infinite",
                "@keyframes gradientMove": {
                  "0%": { backgroundPosition: "0% center" },
                  "100%": { backgroundPosition: "200% center" },
                },
              }}
            >
              Daftar
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}



export default Navbar

