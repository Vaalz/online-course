// src/pages/ProfileStudent.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  TextField,
  Button,
  useMediaQuery,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import NavbarDashboard from "../components/layout/DashboardLayout";
import UserSidebar from "../components/layout/UserSidebar";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";

import ProfileInfo from "../components/profile/ProfileInfo";
import ProfileEditDialog from "../components/profile/ProfileInfo";
import { useProfile } from "../components/profile/useProfile";

export default function ProfileStudent() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const { profile, loading, updateProfile } = useProfile(API_URL);

  const [openEdit, setOpenEdit] = useState(false);
  const [form, setForm] = useState({});

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  const handleEditOpen = () => {
    setForm(profile);
    setOpenEdit(true);
  };

  const handleSave = async () => {
    await updateProfile(form);
    setOpenEdit(false);
  };

  const safeProfile = profile ?? FALLBACK;
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1300,
        }}
      >
        <NavbarDashboard />
      </Box>

      {/* WRAPPER */}
      <Box
        sx={{
          display: "flex",
          pt: "80px",
          pl: { xs: 0, md: "260px", lg: "300px" },
        }}
      >
        {/* SIDEBAR */}
        {!isMobile && (
          <Box
            sx={{
              width: { md: "260px", lg: "300px" },
              position: "fixed",
              left: 0,
              top: "80px",
              height: "calc(100vh - 80px)",
              borderRight: "1px solid #E0E0E0",
              bgcolor: "#F1FCFA",
            }}
          >
            <UserSidebar menus={studentMenu} />
          </Box>
        )}

        {/* MAIN CONTENT */}
        <Box sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
          <Grid container spacing={3}>
            {/* ==== LEFT SECTION ==== */}
            <Grid size={8}>
              {/* Profile Card */}
              <Box sx={{ p: 3, bgcolor: "#fff", borderRadius: 3 }}>
                <Grid container spacing={2}>
                  <Grid item>
                    <Avatar
                      src={profile.avatar}
                      sx={{ width: 120, height: 120 }}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography fontSize={26} fontWeight={800}>
                      {profile.full_name}
                    </Typography>
                    <Typography>{profile.about}</Typography>

                    <Button sx={{ mt: 2 }} onClick={handleEditOpen}>
                      Edit Info
                    </Button>
                  </Grid>
                </Grid>
              </Box>

              {/* TABLE RIWAYAT BELAJAR */}
              <Box
                sx={{
                  mt: 3,
                  border: "1px solid #DCE4E3",
                  bgcolor: "#fff",
                  borderRadius: 3,
                  p: 3,
                }}
              >
                <Typography
                  textAlign="center"
                  fontSize={20}
                  fontWeight={800}
                  sx={{ mb: 2 }}
                >
                  Riwayat Belajar Kamu
                </Typography>

                {/* HEADER TABLE */}
                <Grid container sx={{ fontWeight: 700, mb: 1 }}>
                  <Grid item xs={2}>
                    No
                  </Grid>
                  <Grid item xs={4}>
                    Nama Kelas
                  </Grid>
                  <Grid item xs={3}>
                    Waktu Mulai
                  </Grid>
                  <Grid item xs={3}>
                    Waktu Selesai
                  </Grid>
                </Grid>

                <Divider sx={{ mb: 1 }} />

                {[...Array(10)].map((_, i) => (
                  <Grid
                    key={i}
                    container
                    sx={{
                      py: 1,
                      "&:nth-of-type(odd)": { bgcolor: "#E9F7F4" },
                    }}
                  >
                    <Grid item xs={2}>
                      0{i + 1}
                    </Grid>
                    <Grid item xs={4}>
                      Materi UI/UX by Bayu
                    </Grid>
                    <Grid item xs={3}>
                      17-10-2025
                    </Grid>
                    <Grid item xs={3}>
                      15-12-2025
                    </Grid>
                  </Grid>
                ))}
              </Box>
            </Grid>

            {/* ==== RIGHT SECTION ==== */}
            <Grid size={4}>
              {/* INFORMASI PRIBADI */}
              <Grid item xs={12} md={4}>
                <ProfileInfo profile={profile} onEdit={handleEditOpen} />
              </Grid>

              {/* SEDANG BERLANGSUNG */}
              <Box
                sx={{
                  mt: 3,
                  border: "1px solid #DCE4E3",
                  bgcolor: "#fff",
                  borderRadius: 3,
                  p: 3,
                  textAlign: "center",
                }}
              >
                <Typography fontSize={20} fontWeight={800} sx={{ mb: 1 }}>
                  Sedang Berlangsung
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Saat ini kamu sedang belajar "Judul Kelas"
                </Typography>

                {/* PROGRESS CIRCLE */}
                <Box
                  sx={{
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    border: "12px solid #11DF9E",
                    borderRightColor: "#466EF1",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    fontWeight: 700,
                  }}
                >
                  85%
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* ==== DIALOG EDIT PROFILE (statik save ke state) ==== */}
      <Dialog open={openEdit} onClose={handleCloseEdit} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Edit Profil
          <IconButton onClick={handleCloseEdit} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Nama Lengkap"
                value={form.full_name}
                onChange={handleChange("full_name")}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Nama Belakang"
                value={form.last_name}
                onChange={handleChange("last_name")}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                value={form.email}
                onChange={handleChange("email")}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Contact"
                value={form.phone}
                onChange={handleChange("phone")}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                multiline
                minRows={4}
                label="Deskripsi / About"
                value={form.about}
                onChange={handleChange("about")}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                src={form.avatar}
                sx={{ width: 140, height: 140, mb: 2, borderRadius: "50%" }}
              />
              <TextField
                fullWidth
                label="URL Avatar"
                value={form.avatar}
                onChange={handleChange("avatar")}
                sx={{ mb: 2 }}
              />

              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  // simple placeholder: you could open file input and upload then set URL
                  alert(
                    "Upload image belum diimplementasikan. Masukkan URL avatar di field."
                  );
                }}
                sx={{ textTransform: "none", borderRadius: 2 }}
              >
                Pilih File (tidak aktif)
              </Button>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={handleCloseEdit} sx={{ textTransform: "none" }}>
            Batal
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{
              textTransform: "none",
              bgcolor: "#11DF9E",
              "&:hover": { bgcolor: "#0FCF8D" },
            }}
          >
            Simpan
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
