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
import CloseIcon from "@mui/icons-material/Close";

import NavbarDashboard from "../components/layout/DashboardLayout";
import UserSidebar from "../components/layout/UserSidebar";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";

export default function ProfileStudent() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  // dialog state
  const [openEdit, setOpenEdit] = useState(false);

  // form state (local editable copy)
  const [form, setForm] = useState({
    full_name: "",
    last_name: "",
    email: "",
    phone: "",
    about: "",
    avatar: "",
  });

  // fallback static data (used if backend is down or returns nothing)
  const FALLBACK = {
    full_name: "Bayu Ramadhan",
    last_name: "Putra",
    email: "bayu@example.com",
    phone: "+62 8123-4567-890",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus lectus, dapibus ornare odio.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&auto=format&fit=crop",
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function fetchProfile() {
      try {
        if (!API_URL) throw new Error("API_URL not set");

        const res = await fetch(`${API_URL}profile/student`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          // server returned non-2xx --> fallback to static
          console.warn("Fetch profile failed, using fallback static profile");
          setProfile(FALLBACK);
        } else {
          const json = await res.json();
          // some backends nest data under .data
          const data = json?.data ?? json;
          // normalize fields (guard)
          setProfile({
            full_name: data.full_name ?? data.username ?? FALLBACK.full_name,
            last_name: data.last_name ?? "",
            email: data.email ?? FALLBACK.email,
            phone: data.phone ?? data.contact ?? FALLBACK.phone,
            about: data.about ?? data.bio ?? FALLBACK.about,
            avatar: data.avatar ?? data.profile_picture ?? FALLBACK.avatar,
          });
        }
      } catch (err) {
        console.error("fetchProfile error:", err);
        setProfile(FALLBACK);
      } finally {
        setLoadingProfile(false);
      }
    }

    fetchProfile();
  }, [API_URL]);

  // when profile is loaded, copy to form state
  useEffect(() => {
    if (profile) {
      setForm({
        full_name: profile.full_name || "",
        last_name: profile.last_name || "",
        email: profile.email || "",
        phone: profile.phone || "",
        about: profile.about || "",
        avatar: profile.avatar || "",
      });
    }
  }, [profile]);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => {
    // restore form from actual profile if user cancel
    setForm({
      full_name: profile.full_name || "",
      last_name: profile.last_name || "",
      email: profile.email || "",
      phone: profile.phone || "",
      about: profile.about || "",
      avatar: profile.avatar || "",
    });
    setOpenEdit(false);
  };

  const handleChange = (field) => (e) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSave = async () => {
    // saat ini: statik -> update local state only
    // nanti: panggil API untuk menyimpan perubahan
    const updated = { ...profile, ...form };
    setProfile(updated);
    setOpenEdit(false);

    // contoh komentar: jika mau panggil API untuk menyimpan, buat request PUT/PATCH di sini.
    // try {
    //   const token = localStorage.getItem("token");
    //   await fetch(`${API_URL}profile/student`, {
    //     method: "PUT",
    //     headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    //     body: JSON.stringify(form),
    //   });
    // } catch (err) { console.error(err); }
  };

  if (loadingProfile) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography>Loading profile...</Typography>
      </Box>
    );
  }

  // safety: if still no profile (shouldn't happen due to fallback) -> render fallback
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
        <Box sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
          <Grid container spacing={2}>
            {/* ==== LEFT SECTION ==== */}
            <Grid size={8}>
              {/* CARD PROFILE */}
              <Box
                sx={{
                  border: "1px solid #DCE4E3",
                  bgcolor: "#fff",
                  borderRadius: 3,
                  p: 3,
                }}
              >
                <Grid container spacing={3} alignItems="center">
                  <Grid item>
                    <Avatar
                      src={safeProfile.avatar}
                      sx={{
                        width: { xs: 100, md: 140 },
                        height: { xs: 100, md: 140 },
                        borderRadius: "50%",
                      }}
                    />
                  </Grid>

                  <Grid item xs>
                    <Typography fontSize={{ xs: 20, md: 26 }} fontWeight={800}>
                      {safeProfile.full_name}
                    </Typography>

                    <Typography sx={{ mt: 1, maxWidth: 550 }}>
                      {safeProfile.about}
                    </Typography>

                    <Button
                      size="small"
                      sx={{
                        mt: 2,
                        textTransform: "none",
                        px: 2.5,
                        bgcolor: "#11DF9E",
                        color: "#fff",
                        borderRadius: "50px",
                        fontWeight: 700,
                        "&:hover": { bgcolor: "#0FCF8D" },
                      }}
                    >
                      Student
                    </Button>

                    {/* tombol edit */}
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        mt: 2,
                        ml: 2,
                        textTransform: "none",
                        px: 2.5,
                        borderRadius: "50px",
                      }}
                      onClick={handleOpenEdit}
                    >
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
              <Box
                sx={{
                  border: "1px solid #DCE4E3",
                  bgcolor: "#fff",
                  borderRadius: 3,
                  p: 3,
                }}
              >
                <Typography fontSize={20} fontWeight={800} sx={{ mb: 2 }}>
                  Informasi Pribadi
                </Typography>

                <TextField
                  fullWidth
                  label="Nama Lengkap"
                  value={safeProfile.full_name}
                  sx={{ mb: 2 }}
                  InputProps={{ readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Nama Belakang"
                  value={safeProfile.last_name ?? ""}
                  sx={{ mb: 2 }}
                  InputProps={{ readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  value={safeProfile.email}
                  sx={{ mb: 2 }}
                  InputProps={{ readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Contact"
                  value={safeProfile.phone ?? ""}
                  sx={{ mb: 2 }}
                  InputProps={{ readOnly: true }}
                />
                <TextField
                  fullWidth
                  label="Bergabung Pada"
                  value="17 - 10 - 2025"
                  sx={{ mb: 2 }}
                  InputProps={{ readOnly: true }}
                />

                {/* tombol edit (duplikat agar mudah ditemukan) */}
                <Button
                  variant="outlined"
                  sx={{
                    mt: 1,
                    float: "right",
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                  onClick={handleOpenEdit}
                >
                  Edit Info
                </Button>
              </Box>

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
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

            <Grid item xs={12} md={4} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                  alert("Upload image belum diimplementasikan. Masukkan URL avatar di field.");
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
            sx={{ textTransform: "none", bgcolor: "#11DF9E", "&:hover": { bgcolor: "#0FCF8D" } }}
          >
            Simpan
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
