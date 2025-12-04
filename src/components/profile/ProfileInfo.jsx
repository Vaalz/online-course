// src/components/profile/ProfileInfo.jsx
import { Box, TextField, Typography, Button } from "@mui/material";

export default function ProfileInfo({ profile, onEdit }) {
  return (
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
        value={profile.name}
        sx={{ mb: 2 }}
        InputProps={{ readOnly: true }}
      />
      <TextField
        fullWidth
        label="Nama Belakang"
        value={profile.lastName}
        sx={{ mb: 2 }}
        InputProps={{ readOnly: true }}
      />
      <TextField
        fullWidth
        label="Email"
        value={profile.email}
        sx={{ mb: 2 }}
        InputProps={{ readOnly: true }}
      />
      <TextField
        fullWidth
        label="Contact"
        value={profile.contact}
        sx={{ mb: 2 }}
        InputProps={{ readOnly: true }}
      />

      <Button
        variant="outlined"
        sx={{ mt: 1, float: "right", textTransform: "none", borderRadius: 2 }}
        onClick={onEdit}
      >
        Edit Info
      </Button>
    </Box>
  );
}
