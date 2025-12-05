// src/components/profile/EditProfileDialog.jsx
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Avatar,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function EditProfileDialog({
  open,
  form,
  onChange,
  onClose,
  onSave,
}) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Edit Profil
        <IconButton onClick={onClose} size="small">
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
              onChange={onChange("full_name")}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Nama Belakang"
              value={form.last_name}
              onChange={onChange("last_name")}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              value={form.email}
              onChange={onChange("email")}
              disabled
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Contact"
              value={form.phone}
              onChange={onChange("phone")}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Deskripsi / About"
              value={form.about}
              onChange={onChange("about")}
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
              sx={{ width: 140, height: 140, mb: 2 }}
            />

            <TextField
              fullWidth
              label="URL Avatar"
              value={form.avatar}
              onChange={onChange("avatar")}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Batal</Button>
        <Button variant="contained" onClick={onSave}>
          Simpan
        </Button>
      </DialogActions>
    </Dialog>
  );
}
