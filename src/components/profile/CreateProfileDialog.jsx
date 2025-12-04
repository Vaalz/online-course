import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function CreateProfileDialog({ open, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    description: "",
    age: "",
    school: "",
    profile_picture: "",
    joinDate: new Date().toLocaleDateString("id-ID"), // static auto Today
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      setForm({ ...form, profile_picture: url });
    }
  };

  const handleSubmit = () => {
    for (const key in form) {
      if (!form[key]) return alert("Semua field wajib diisi!");
    }

    onSubmit({
      ...form,
      age: parseInt(form.age),
    });
  };

  return (
    <Dialog
      open={open}
      onClose={() => {}}
      disableEscapeKeyDown
      PaperProps={{
        sx: {
          minWidth: "900px",
          borderRadius: "16px",
          p: 1,
          bgcolor: "#F6FEFD",
        },
      }}
    >
      <DialogTitle
        sx={{ textAlign: "center", fontWeight: 800, fontSize: "28px", mb: 2 }}
      >
        MASUKAN INFORMASI TENTANG DIRI ANDA
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={3}>
          {/* LEFT SIDE INPUT */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography fontWeight={600}>Username</Typography>
                <TextField
                  placeholder="Masukan nama anda"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontWeight={600}>Nama Belakang</Typography>
                <TextField
                  placeholder="Masukan nama anda"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontWeight={600}>Nama Depan</Typography>
                <TextField
                  placeholder="Masukan nama anda"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontWeight={600}>Email</Typography>
                <TextField
                  placeholder="Masukan email anda"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontWeight={600}>Contact</Typography>
                <TextField
                  placeholder="Masukan nomer handphone anda"
                  name="contact"
                  value={form.contact}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontWeight={600}>Bergabung Pada</Typography>
                <TextField value={form.joinDate} fullWidth disabled />
              </Grid>
              <Grid item xs={6}>
                <Typography fontWeight={600}>usi</Typography>
                <TextField
                  placeholder="Masukan nama anda"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <Typography fontWeight={600}>school</Typography>
                <TextField
                  placeholder="Masukan nama anda"
                  name="school"
                  value={form.school}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Typography fontWeight={600}>Deskripsi</Typography>
                <TextField
                  placeholder="Masukan deskripsi sesuai diri anda"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* RIGHT SIDE PHOTO */}
          <Grid item xs={12} md={4} textAlign="center">
            <Box
              sx={{
                width: 200,
                height: 200,
                mx: "auto",
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #e0e0e0",
                mb: 2,
              }}
            >
              <img
                src={preview || "/default-avatar.png"}
                alt="preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Typography fontWeight={600}>Photo Profile</Typography>

            <Button
              variant="contained"
              fullWidth
              component="label"
              sx={{
                mt: 1,
                background: "linear-gradient(90deg, #00C89E, #466EF1)",
                fontWeight: 600,
              }}
            >
              Choose File
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
        </Grid>

        {/* ACTION BUTTONS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            sx={{
              background: "#00C89E",
              width: 200,
            }}
          >
            BATAL
          </Button>

          <Button
            variant="contained"
            sx={{
              background: "#466EF1",
              width: 200,
            }}
            onClick={handleSubmit}
          >
            SIMPAN
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
