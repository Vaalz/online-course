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
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import React from "react";
import { useState, useEffect } from "react";

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
    },
  });

  const [localEmail, setLocalEmail] = useState("");
  const [joinDate, setJoinDate] = useState("");

  useEffect(() => {
    if (open) {
      const email = localStorage.getItem("email");

      const userRaw = localStorage.getItem("user");
      let createdAtValue = "";

      if (userRaw) {
        try {
          const userObj = JSON.parse(userRaw);
          createdAtValue = userObj.createdAt || "";
        } catch {
          createdAtValue = "";
        }
      }

      setLocalEmail(email || "");
      setJoinDate(createdAtValue);
    }
  }, [open]);

  const handleNumberOnly = (e, field) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onChange(field)({ target: { value } });
  };

  const handleLettersOnly = (e, field) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    onChange(field)({ target: { value } });
  };

  function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
      if (focused) return "This field is being focused";
      return "Helper text";
    }, [focused]);
  }

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
          <Grid item xs={12} md={7}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Username</Typography>
                <FormControl fullWidth size="small">
                  <OutlinedInput
                    value={form.name}
                    onChange={(e) => handleLettersOnly(e, "name")}
                  />
                  <MyFormHelperText />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Nama Belakang</Typography>
                <FormControl fullWidth size="small">
                  <OutlinedInput
                    value={form.lastName}
                    onChange={(e) => handleLettersOnly(e, "lastName")}
                  />
                  <MyFormHelperText />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Nama Depan</Typography>
                <FormControl fullWidth size="small">
                  <OutlinedInput
                    value={form.firstName}
                    onChange={(e) => handleLettersOnly(e, "firstName")}
                  />
                  <MyFormHelperText />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Email</Typography>
                <StyledTextField
                  fullWidth
                  size="small"
                  value={localEmail}
                  disabled
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Contact</Typography>
                <FormControl fullWidth size="small">
                  <OutlinedInput
                    value={form.contact}
                    onChange={(e) => handleNumberOnly(e, "contact")}
                  />
                  <MyFormHelperText />
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography fontWeight={600}>Bergabung Pada</Typography>
                <StyledTextField
                  fullWidth
                  size="small"
                  disabled
                  value={joinDate}
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
