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

import NavbarDashboard from "../components/layout/Navbar";
import UserSidebar from "../components/layout/UserSidebar";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";
import EditProfileDialog from "../components/profile/EditProfileDialog";

import ProfileInfo from "../components/profile/ProfileInfo";
import { useProfile } from "../components/profile/useProfile";

export default function ProfileStudent() {
  const { profile, loading, updateProfile, fetchProfile } = useProfile();
  const isMobile = useMediaQuery("(max-width: 900px)");

  const [openEdit, setOpenEdit] = useState(false);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    contact: "",
    description: "",
    profile_picture: "",
    age: 0,
    school: "",
  });

  const handleChange = (field) => (e) => {
    const value = e.target ? e.target.value : e;

    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleFileChange = (e) => {
    setForm({
      ...form,
      profile_picture_file: e.target.files[0],
    });
  };

  const handleEditOpen = () => {
    if (profile)
      setForm({
        name: profile.name ?? "",
        lastName: profile.lastName ?? "",
        contact: profile.contact ?? "",
        description: profile.description ?? "",
        school: profile.school ?? "",
        age: profile.age ?? 0,
        profile_picture: profile.profile_picture ?? "",
      });
    setOpenEdit(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);

  const handleSave = async () => {
    const payload = {
      name: form.name,
      lastName: form.lastName,
      contact: form.contact,
      description: form.description,
      age: form.age,
      school: form.school,
      profile_picture: form.profile_picture_file, 
    };

    await updateProfile(payload); 
    await fetchProfile(); 
    setOpenEdit(false); 
  };

  if (loading) return <Typography sx={{ p: 4 }}>Loading...</Typography>;
  if (!profile)
    return <Typography sx={{ p: 4 }}>Data profil tidak tersedia.</Typography>;

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
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <Box textAlign="center">
                    <Avatar
                      src={profile.profile_picture}
                      sx={{ width: 140, height: 140, mb: 2 }}
                    />
                    <Typography fontSize={26} fontWeight={800}>
                      {profile.name}
                    </Typography>
                    <Typography fontSize={18} sx={{ color: "gray" }}>
                      {profile.description}
                    </Typography>

                    <Button
                      variant="contained"
                      sx={{ mt: 2, borderRadius: 2 }}
                      onClick={handleEditOpen}
                    >
                      Edit Profile
                    </Button>
                  </Box>
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
      <EditProfileDialog
        open={openEdit}
        form={form}
        onChange={handleChange}
        onClose={handleCloseEdit}
        onSave={handleSave}
        onFileChange={handleFileChange} // <-- tambahkan ini
      />
    </Box>
  );
}
