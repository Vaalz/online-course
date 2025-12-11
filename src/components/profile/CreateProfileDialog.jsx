import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Grid,
  Typography,
  styled,
  Avatar,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

export default function CreateProfileDialog({ open, onSubmit }) {
  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");

  const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#F8FCFB",
      borderRadius: 8,
      "& fieldset": {
        borderColor: "#E0E0E0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#00C19D",
      },
    },
  });

  const StyledAvatar = styled(Avatar)({
    border: "none",
  });

  const localUser = localStorage.getItem("user");

  const [form, setForm] = useState({
    name: "",
    firstName: "",
    lastName: "",
    contact: "",
    description: "",
    age: "",
    school: "",
    profile_picture: "",
    created_at: localUser?.createdAt || new Date().toISOString(),
    email: localUser?.email || "",
  });

  const [preview, setPreview] = useState(null);

  // VALIDASI: hanya huruf / hanya angka
  const handleChange = (e) => {
    const { name, value } = e.target;

    // hanya huruf
    if (
      ["name", "firstName", "lastName"].includes(name) &&
      /[^A-Za-z\s]/.test(value)
    ) {
      return;
    }

    // hanya angka
    if (["age", "contact"].includes(name) && /[^0-9]/.test(value)) {
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const minSize = 10 * 1000;
    const maxSize = 10 * 1000 * 1000;

    if (file.size < minSize) {
      alert("Ukuran foto minimal 10KB");
      return;
    }

    if (file.size > maxSize) {
      alert("Ukuran foto maksimal 10MB");
      return;
    }

    setPreview(URL.createObjectURL(file));
    setForm((prev) => ({
      ...prev,
      profile_picture: file,
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.age || !form.description) {
      return alert("Semua field wajib diisi!");
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("firstName", form.firstName);
    formData.append("lastName", form.lastName);
    formData.append("school", form.school);
    formData.append("description", form.description);
    formData.append("contact", form.contact);
    formData.append("age", form.age);
    formData.append("user_id", localUser.id);
    formData.append("profile_picture", form.profile_picture);

    onSubmit(formData);
  };

  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          p: 1,
          bgcolor: "#F6FEFD",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 800,
          fontSize: "28px",
          mb: 2,
          color: "#333",
        }}
      >
        MASUKAN INFORMASI TENTANG DIRI ANDA
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12}>
                <Typography fontWeight={600} mb={1}>
                  Username
                </Typography>
                <StyledTextField
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  placeholder="Masukan nama anda"
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Typography fontWeight={600} mb={1}>
                  Nama Belakang
                </Typography>
                <StyledTextField
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  placeholder="Masukan nama anda"
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Typography fontWeight={600} mb={1}>
                  Nama Depan
                </Typography>
                <StyledTextField
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Typography fontWeight={600} mb={1}>
                  Usia
                </Typography>
                <StyledTextField
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  placeholder="Contoh: 17"
                  error={form.age !== "" && isNaN(form.age)}
                  helperText={
                    form.age !== "" && isNaN(form.age)
                      ? "Hanya angka diperbolehkan"
                      : ""
                  }
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Typography fontWeight={600} mb={1}>
                  Sekolah
                </Typography>
                <StyledTextField
                  name="school"
                  value={form.school}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Typography fontWeight={600} mb={1}>
                  Email
                </Typography>
                <StyledTextField
                  name="email"
                  value={form.email}
                  disabled
                  fullWidth
                  size="small"
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Typography fontWeight={600} mb={1}>
                  Deskripsi
                </Typography>
                <StyledTextField
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  multiline
                  minRows={5}
                  maxRows={10}
                  fullWidth
                />
              </Grid>

              <Grid item sm={6} xs={12}>
                <Typography fontWeight={600} mb={1}>
                  Contact
                </Typography>
                <StyledTextField
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  fullWidth
                  size="small"
                  placeholder="08xxxxxxxxxx"
                />

                <Typography fontWeight={600} mt={3}>
                  Bergabung Pada
                </Typography>
                <StyledTextField
                  value={new Date(form.created_at).toLocaleDateString("id-ID")}
                  fullWidth
                  size="small"
                  disabled
                />
              </Grid>
            </Grid>
          </Grid>

          {/* AVATAR */}
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              sx={{
                width: 200,
                height: 200,
                mx: "auto",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #DCE4E3",
                mb: 2,
              }}
            >
              <img
                src={preview || "/default-avatar.png"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Button
              component="label"
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                borderRadius: 2,
                fontWeight: 700,
                background: "linear-gradient(90deg, #00C89E, #466EF1)",
              }}
            >
              Pilih Foto
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{
              width: 260,
              borderRadius: 3,
              fontWeight: 700,
              background: "#466EF1",
              textTransform: "none",
            }}
          >
            SIMPAN PROFIL
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
