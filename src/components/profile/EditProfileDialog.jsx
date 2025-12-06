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
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function EditProfileDialog({
  open,
  form,
  onChange,
  onClose,
  onSave,
  onFileChange,
}) {
  const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#F8FCFB",
      borderRadius: 8,
      "& fieldset": { borderColor: "#E0E0E0" },
      "&.Mui-focused fieldset": { borderColor: "#00C19D" },
    },
  });

  const handleNumberOnly = (e, field) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onChange(field)({ target: { value } });
  };

  const handleLettersOnly = (e, field) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    onChange(field)({ target: { value } });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          borderRadius: "28px",
          p: 4,
          bgcolor: "#F6FEFD",
        },
      }}
    >
      {/* TITLE */}
      <DialogTitle
        sx={{
          textAlign: "center",
          width: "100%",
          fontWeight: 800,
          fontSize: "32px",
          mb: 3,
          letterSpacing: 1,
        }}
      >
        MASUKAN INFORMASI TENTANG DIRI ANDA
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 20, top: 20 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Grid container spacing={4} justifyContent="space-between">
          {/* LEFT FORM */}
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Username</Typography>
                <StyledTextField
                  fullWidth
                  size="small"
                  value={form.name}
                  onChange={(e) => handleLettersOnly(e, "name")}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Nama Belakang</Typography>
                <StyledTextField
                  fullWidth
                  size="small"
                  value={form.lastName}
                  onChange={(e) => handleLettersOnly(e, "lastName")}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Nama Depan</Typography>
                <StyledTextField
                  fullWidth
                  size="small"
                  value={form.firstName}
                  onChange={(e) => handleLettersOnly(e, "firstName")}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Email</Typography>
                <StyledTextField
                  fullWidth
                  size="small"
                  value={form.email}
                  disabled
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Contact</Typography>
                <StyledTextField
                  fullWidth
                  size="small"
                  value={form.contact}
                  onChange={(e) => handleNumberOnly(e, "contact")}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Bergabung Pada</Typography>
                <StyledTextField
                  fullWidth
                  size="small"
                  disabled
                  value={form.joinDate}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography fontWeight={600}>Deskripsi</Typography>
                <StyledTextField
                  fullWidth
                  multiline
                  minRows={5}
                  value={form.description}
                  onChange={onChange("description")}
                />
              </Grid>
            </Grid>
          </Grid>

          {/* RIGHT PROFILE PHOTO */}
          <Grid
            item
            xs={12}
            md={4}
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              sx={{
                width: 220,
                height: 220,
                borderRadius: "50%",
                overflow: "hidden",
                border: "4px solid #DCE4E3",
                mb: 2,
              }}
            >
              <img
                src={form.profile_picture || "/default-avatar.png"}
                alt="Profile Preview"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Typography fontWeight={700} mb={1}>
              Photo Profile
            </Typography>

            <Button
              variant="contained"
              fullWidth
              component="label"
              sx={{
                maxWidth: 350,
                borderRadius: 2,
                py: 1.5,
                fontWeight: 800,
                textTransform: "none",
                background: "linear-gradient(90deg, #00C89E, #466EF1)",
              }}
            >
              Chose File
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={onFileChange}
              />
            </Button>
          </Grid>
        </Grid>
      </DialogContent>

      {/* ACTION BUTTONS */}
      <DialogActions sx={{ justifyContent: "center", mt: 4 }}>
        <Button
          onClick={onClose}
          sx={{
            width: 200,
            borderRadius: 3,
            fontWeight: 700,
            textTransform: "none",
            color: "#009C85",
            border: "2px solid #009C85",
          }}
        >
          BATAL
        </Button>

        <Button
          variant="contained"
          onClick={onSave}
          sx={{
            width: 200,
            borderRadius: 3,
            fontWeight: 700,
            ml: 2,
            background: "linear-gradient(90deg, #00C89E, #466EF1)",
            textTransform: "none",
          }}
        >
          SIMPAN
        </Button>
      </DialogActions>
    </Dialog>
  );
}
