import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";

export default function EditPersonalInfoDialog({
  open,
  onClose,
  profile,
  onSave,
}) {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    contact: "",
    description: "",
  });

  useEffect(() => {
    if (profile) {
      setForm({
        name: profile.name || "",
        lastName: profile.lastName || "",
        contact: profile.contact || "",
        description: profile.description || "",
      });
    }
  }, [profile]);

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle fontWeight={700}>
        MASUKKAN INFORMASI TENTANG DIRI ANDA
      </DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", gap: 3 }}>
          <Box flex={1}>
            <Field label="Nama Depan" value={form.name} onChange={handleChange("name")} />
            <Field label="Contact" value={form.contact} onChange={handleChange("contact")} />
          </Box>

          <Box flex={1}>
            <Field
              label="Nama Belakang"
              value={form.lastName}
              onChange={handleChange("lastName")}
            />
            <Field
              label="Deskripsi"
              value={form.description}
              onChange={handleChange("description")}
              multiline
              rows={4}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 3 }}>
          <Button variant="outlined" onClick={onClose}>
            BATAL
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            SIMPAN
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, ...props }) {
  return (
    <Box mb={2}>
      <Typography>{label}</Typography>
      <TextField fullWidth {...props} />
    </Box>
  );
}
