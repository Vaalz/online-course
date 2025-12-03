import React, { useState } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Snackbar,
  Slide,
  Alert,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

// Transition slide dari bawah
function SlideUpTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function LogoutButton() {
  const navigate = useNavigate();

  const [openConfirm, setOpenConfirm] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("email");

    setOpenConfirm(false);
    setOpenSnack(true);

    // delay sedikit agar snackbar sempat muncul
    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  return (
    <>
      {/* Button Sidebar */}
      <ListItem
        button
        onClick={() => setOpenConfirm(true)}
        sx={{
          borderRadius: "10px",
          border: "1px solid transparent",
          color: "#d9534f",
          "&:hover": { bgcolor: "#FFE9E9", borderColor: "#d9534f" },
        }}
      >
        <ListItemIcon sx={{ color: "#d9534f", minWidth: 40 }}>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="LOGOUT" />
      </ListItem>

      {/* Dialog Konfirmasi */}
      <Dialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        maxWidth="xs"
        fullWidth
        TransitionComponent={SlideUpTransition}
        keepMounted
      >
        <DialogTitle sx={{ fontWeight: 600, textAlign: "center" }}>
          Konfirmasi Logout
        </DialogTitle>

        <DialogContent>
          <Typography sx={{ textAlign: "center", fontSize: "16px" }}>
            Apakah kamu yakin ingin keluar dari akun?
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
          <Button
            variant="outlined"
            onClick={() => setOpenConfirm(false)}
            sx={{ borderRadius: 2, textTransform: "none" }}
          >
            Batal
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{ borderRadius: 2, textTransform: "none" }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Notifikasi */}
      <Snackbar
        open={openSnack}
        autoHideDuration={2000}
        TransitionComponent={SlideUpTransition}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setOpenSnack(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Anda berhasil logout
        </Alert>
      </Snackbar>
    </>
  );
}
