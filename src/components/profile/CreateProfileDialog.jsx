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
  FormControl,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

export default function CreateProfileDialog({ open, onSubmit }) {
  const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#F8FCFB",
      borderRadius: 8,
      "& fieldset": { borderColor: "#E0E0E0" },
    },
  });

  const localUser = JSON.parse(localStorage.getItem("user") || "{}");

  const [form, setForm] = useState({
    name: "",
    firstName: "",
    lastName: "",
    contact: "",
    description: "",
    age: "",
    school: "",
    profile_picture: null,
    created_at: localUser.createdAt || new Date().toISOString(),
    email: localUser.email || "",
  });

  const [preview, setPreview] = useState(null);
  const [errors, setErrors] = useState({});


  const handleLettersOnly = (e, field, min = 3) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({
      ...p,
      [field]: value.length < min ? `Minimal ${min} huruf` : "",
    }));
  };

  const handleNumberOnly = (e, field, min = 2) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setForm((p) => ({ ...p, [field]: value }));
    setErrors((p) => ({
      ...p,
      [field]: value.length < min ? `Minimal ${min} digit` : "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size < 10_000) return alert("Ukuran foto minimal 10KB");
    if (file.size > 10_000_000) return alert("Ukuran foto maksimal 10MB");

    setPreview(URL.createObjectURL(file));
    setForm((p) => ({ ...p, profile_picture: file }));
  };

  const onChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      errors.name ||
      errors.contact ||
      errors.age ||
      !form.name ||
      !form.age ||
      !form.description
    ) {
      return alert("Periksa kembali input Anda");
    }

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => v && fd.append(k, v));
    fd.append("user_id", localUser.id);

    onSubmit(fd);
  };


  return (
    <Dialog open={open} fullWidth maxWidth="lg">
      <DialogTitle sx={{ textAlign: "center", fontWeight: 800 }}>
        MASUKAN INFORMASI TENTANG DIRI ANDA
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Username</Typography>
                <FormControl fullWidth size="small" error={!!errors.name}>
                  <OutlinedInput
                    value={form.name}
                    onChange={(e) => handleLettersOnly(e, "name", 3)}
                  />
                  <FormHelperText>{errors.name}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Nama Depan</Typography>
                <OutlinedInput
                  fullWidth
                  value={form.firstName}
                  onChange={(e) => handleLettersOnly(e, "firstName", 2)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Nama Belakang</Typography>
                <OutlinedInput
                  fullWidth
                  value={form.lastName}
                  onChange={(e) => handleLettersOnly(e, "lastName", 2)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Usia</Typography>
                <FormControl fullWidth size="small" error={!!errors.age}>
                  <OutlinedInput
                    value={form.age}
                    onChange={(e) => handleNumberOnly(e, "age", 2)}
                  />
                  <FormHelperText>{errors.age}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Contact</Typography>
                <FormControl fullWidth size="small" error={!!errors.contact}>
                  <OutlinedInput
                    value={form.contact}
                    placeholder="08xxxxxxxxxx"
                    onChange={(e) => handleNumberOnly(e, "contact", 10)}
                  />
                  <FormHelperText>{errors.contact}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Sekolah</Typography>
                <TextField
                  fullWidth
                  size="small"
                  value={form.school}
                  onChange={onChange("school")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#F8FCFB",
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography fontWeight={600}>Deskripsi</Typography>
                <TextField
                  id="outlined-multiline-static"
                  fullWidth
                  multiline
                  rows={5}
                  value={form.description}
                  onChange={onChange("description")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      backgroundColor: "#F8FCFB",
                      borderRadius: 2,
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4} textAlign="center">
            <Box sx={{ width: 200, height: 200, mx: "auto", mb: 2 }}>
              <Avatar
                src={preview || "/default-avatar.png"}
                sx={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Button component="label" variant="contained">
              Pilih Foto
              <input
                hidden
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </Button>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Button variant="contained" onClick={handleSubmit}>
            SIMPAN PROFIL
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
