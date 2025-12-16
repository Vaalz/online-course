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

import NavbarDashboard from "../../components/layout/Navbar";
import UserSidebar from "../../components/layout/UserSidebar";
import { superadminMenu } from "../../components/Menu/SidebarMenu/superAdminMenu";
import EditProfileDialog from "../../components/profile/EditProfileDialog";
import CardProfile from "../../components/LandingpageCompt/CardProfile";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import ProfileInfo from "../../components/profile/ProfileInfo";
import { useProfile } from "../../components/profile/useProfile";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function ProfileSuperAdmin() {
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
            <UserSidebar menus={superadminMenu} />
          </Box>
        )}

        <Box sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2, md: 3 } }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <Grid sx={{ width: "100%" }}>
                <Grid sx={{ bgcolor: "#fff", width: "100%" }}>
                  <CardProfile profile={profile} />
                </Grid>
                <Grid
                  sx={{
                    mt: 3,
                    border: "1px solid #DCE4E3",
                    bgcolor: "#fff",
                    borderRadius: 3,
                    p: 3,
                    width: "100%",
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
                    <Grid Item xs={2}>
                      No
                    </Grid>
                    <Grid Item xs={4}>
                      Nama Kelas
                    </Grid>
                    <Grid Item xs={3}>
                      Waktu Mulai
                    </Grid>
                    <Grid Item xs={3}>
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
                      <Grid Item xs={2}>
                        0{i + 1}
                      </Grid>
                      <Grid Item xs={4}>
                        Materi UI/UX by Bayu
                      </Grid>
                      <Grid Item xs={3}>
                        17-10-2025
                      </Grid>
                      <Grid Item xs={3}>
                        15-12-2025
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12, lg: 4 }}>
              <Box sx={{ height: "100%" }}>
                <ProfileInfo profile={profile} onEdit={handleEditOpen} />
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
