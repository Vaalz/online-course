// src/pages/ProfileStudent.jsx
import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Button,
  useMediaQuery,
  Divider,
} from "@mui/material";

import NavbarDashboard from "../components/layout/Navbar";
import UserSidebar from "../components/layout/UserSidebar";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";
import EditProfileDialog from "../components/profile/EditProfileDialog";
import CardProfile from "../components/CardProfile";

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

      <Box
        sx={{
          display: "flex",
          pt: "100px",
          pl: { xs: 0, md: "260px", lg: "300px" },
        }}
      >
        {!isMobile && (
          <Box
            sx={{
              flexShrink: 0,
              position: "fixed",
              left: 0,
              height: "calc(100vh - 80px)",
              overflowY: "hidden",
              bgcolor: "#F1FCFA",
              borderRight: "1px solid #E0E0E0",
            }}
          >
            <UserSidebar menus={studentMenu} />
          </Box>
        )}

        <Box sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2, md: 3 } }}>
          <Grid container spacing={3}>
            <Grid size={8}>
              <Grid item xs={12} md={4} sx={{ bgcolor: "#fff" }}>
                <CardProfile profile={profile} />
              </Grid>

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

            <Grid size={4}>
              <Grid item xs={12} md={4}>
                <ProfileInfo profile={profile} onEdit={handleEditOpen} />
              </Grid>

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

      <EditProfileDialog
        open={openEdit}
        form={form}
        onChange={handleChange}
        onClose={handleCloseEdit}
        onSave={handleSave}
        onFileChange={handleFileChange}
      />
    </Box>
  );
}
