import { Box, Typography, TextField } from "@mui/material";

export default function PersonalInfoView({ profile }) {
  return (
    <Box sx={{ my: 2, mx: 2 }}>
      <Typography sx={{ fontSize: 17, fontWeight: 700 }}>
        PERSONAL INFO
      </Typography>
      <Typography sx={{ fontSize: 13, color: "#00000059" }}>
        Tambahkan informasi pribadi anda untuk memudahkan pengguna menghubungi anda
      </Typography>

      <Box sx={{ display: "flex", gap: 2 }}>
        {/* LEFT */}
        <Box sx={{ py: 3 }}>
          <Field label="Nama Depan" value={profile.name} />
          <Field label="Contact" value={profile.contact} />
          <Field label="Bergabung Pada" value={profile.created_at} />
        </Box>

        {/* RIGHT */}
        <Box sx={{ py: 3 }}>
          <Field label="Nama Belakang" value={profile.lastName} />
          <Field label="Email" value={profile.email} />
        </Box>
      </Box>
    </Box>
  );
}

function Field({ label, value }) {
  return (
    <Box mb={2}>
      <Typography sx={{ fontSize: 14, fontWeight: 700, px: 1.5 }}>
        {label}
      </Typography>
      <TextField
        value={value || "-"}
        disabled
        fullWidth
        sx={{ maxWidth: 270 }}
      />
    </Box>
  );
}
