import React from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@mui/material";

import NavbarDashboard from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/UserSidebar";
import { InstructorMenu } from "../components/Menu/SidebarMenu/InstructorMenu";
import CardProfile from "../components/CardProfile";

function EditProfileInstructor() {
  const sidebarWidth = 270;

  return (
    <>
      {/* NAVBAR */}
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <NavbarDashboard />
      </Box>

      {/* SIDEBAR */}
      <Box
        sx={{
          flexShrink: 0,
          position: "fixed",
          top: "80px",
          left: 0,
          height: "calc(100vh - 80px)",
          overflowY: "auto",
          bgcolor: "#F1FCFA",
          borderRight: "1px solid #E0E0E0",
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar menus={InstructorMenu} />
      </Box>

      {/* MAIN WRAPPER */}
      <Box
        sx={{
          ml: { md: `${sidebarWidth + 20}px`, xs: 0 },
          pt: "110px",
          px: 1,
          pb: 5,
        }}
      >
        <CardProfile />

        <Grid
          sx={{
            border: "1px solid #B9C2C0",
            borderRadius: "25px",
            display: 'flex'
          }}
        >
          <Box>
          {/* PERSONAL INFO */}
          <Box sx={{ my: 2, mx: 2 }}>
            <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
              PERSONAL INFO
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontWeight: 400, color: "#00000059" }}
            >
              Tambahkan informasi pribadi anda untuk memudahkan pengguna
              menghubungi anda
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {/* LEFT INPUTS */}
              <Box sx={{ py: 3 }}>
                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, py: 1, px: 1.5 }}>
                    Nama Depan
                  </Typography>
                  <TextField
                    sx={{ borderRadius: "6px", width: "270px" }}
                    InputLabelProps={{ sx: { fontSize: "13px", height: "14px" } }}
                    label="Masukkan nama depan anda"
                    variant="outlined"
                  />
                </Box>

                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, py: 1, px: 1.5 }}>
                    Contact
                  </Typography>
                  <TextField
                    sx={{ borderRadius: "6px", width: "270px" }}
                    InputLabelProps={{ sx: { fontSize: "13px", height: "14px" } }}
                    label="Masukkan nomor handpone anda"
                    variant="outlined"
                  />
                </Box>

                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, py: 1, px: 1.5 }}>
                    Bergabung Pada
                  </Typography>
                  <TextField
                    sx={{ borderRadius: "6px", width: "270px" }}
                    InputLabelProps={{ sx: { fontSize: "13px", height: "14px" } }}
                    label="12-5-2025"
                    variant="outlined"
                  />
                </Box>
              </Box>

              {/* RIGHT INPUTS */}
              <Box sx={{ py: 3 }}>
                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, py: 1, px: 1.5 }}>
                    Nama Belakang
                  </Typography>
                  <TextField
                    sx={{ borderRadius: "6px", width: "270px" }}
                    InputLabelProps={{ sx: { fontSize: "13px", height: "14px" } }}
                    label="Masukkan nama depan anda"
                    variant="outlined"
                  />
                </Box>

                <Box>
                  <Typography sx={{ fontSize: "16px", fontWeight: 700, py: 1, px: 1.5 }}>
                    Email
                  </Typography>
                  <TextField
                    sx={{ borderRadius: "6px", width: "270px" }}
                    InputLabelProps={{ sx: { fontSize: "13px", height: "14px" } }}
                    label="BayuRmdhn@gmail.com"
                    variant="outlined"
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* PROFESSIONAL INFO */}
          <Box sx={{ my: 2, mx: 2 }}>
            <Box sx={{ py: "11px" }}>
              <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
                PROFESSIONAL INFO
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "#00000059",
                }}
              >
                Tambahkan professional info yang berhubungan dengan bidang yang
                anda jalani
              </Typography>
            </Box>

            <Box sx={{ display: "flex", gap: 2, maxWidth: "60%" }}>
              {/* PORTOFOLIO */}
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                  Portofolio
                </Typography>
                <TextField
                  placeholder="Masukan portofolio yang anda miliki sesuai bidang anda"
                  multiline
                  variant="outlined"
                  InputProps={{
                    sx: {
                      bgcolor: "#F8FFFE",
                      borderRadius: "12px",
                      height: "140px",
                      width: "270px",
                      alignItems: "flex-start",
                      "& textarea::placeholder": { fontSize: "12px", color: "#9BA6A5" },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root fieldset": { borderColor: "#C9D3D1" },
                    "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#AEB9B8" },
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "#8AA3A0" },
                  }}
                />
              </Box>

              {/* BIDANG */}
              <Box sx={{ width: "100%" }}>
                <Typography sx={{ fontWeight: 700, fontSize: "16px" }}>
                  Bidang
                </Typography>
                <TextField
                  placeholder="Masukan bidang keahlian yang anda miliki"
                  multiline
                  variant="outlined"
                  InputProps={{
                    sx: {
                      bgcolor: "#F8FFFE",
                      borderRadius: "6px",
                      height: "35px",
                      width: "270px",
                      display: "flex",
                      alignItems: "center",
                      "& textarea": {
                        padding: 0,
                        marginTop: "4px",
                        textAlign: "center",
                      },
                      "& textarea::placeholder": { fontSize: "12px", color: "#9BA6A5" },
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root fieldset": { borderColor: "#C9D3D1" },
                    "& .MuiOutlinedInput-root:hover fieldset": { borderColor: "#AEB9B8" },
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": { borderColor: "#8AA3A0" },
                  }}
                />

                {/* EDIT INFO BUTTON */}
                <Box
                  sx={{
                    p: "2px",
                    borderRadius: "12px",
                    background: "linear-gradient(90deg, #466EF1, #11DF9E)",
                    display: "inline-block",
                    mt: 12,
                    mr: 9,
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: "10px",
                      bgcolor: "white",
                      width: "120px",
                      height: "40px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: 700,
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      EDIT INFO
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          </Box>

          {/* SERTIFIKAT BOX */}
          <Box
            sx={{
              width: "400px",
              height: "350px",
              border: "1px solid #D9D9D9",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
              p: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              bgcolor: "white",
              m: 2
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ fontWeight: 700, textAlign: "center", mb: 1, color: "#333" }}
              >
                SERTIFIKAT
              </Typography>

              <Typography
                variant="body2"
                sx={{ textAlign: "center", color: "#808080", mb: 2 }}
              >
                Tambahkan sertifikat yang anda miliki sesuai dengan bidang anda
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <Box
                sx={{
                  p: "2px",
                  borderRadius: "10px",
                  background: "linear-gradient(90deg, #466EF1, #11DF9E)",
                  display: "inline-block",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: "8px",
                    bgcolor: "white",
                    color: "#11DF9E",
                    fontWeight: 700,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    boxShadow: "none",
                    "&:hover": {
                      bgcolor: "#f0f0f0",
                      boxShadow: "none",
                    },
                  }}
                >
                  TAMBAH SERTIFIKAT
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default EditProfileInstructor;
