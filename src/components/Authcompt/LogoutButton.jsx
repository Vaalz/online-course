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
  Box,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

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
    localStorage.removeItem("user");

    setOpenConfirm(false);
    setOpenSnack(true);

    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  return (
    <>
      <ListItem
        button
        onClick={() => setOpenConfirm(true)}
        sx={{
          background: "linear-gradient(90deg, #4A6CF7 0%, #1E2A78 100%)",
          borderRadius: "15px",
          height: 52,
          width: "100%",
          justifyContent: "center",
          color: "#FFFFFF",
          fontWeight: 700,
          textAlign: "center",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          "&:hover": {
            background: "linear-gradient(90deg, #5C7BFF 0%, #23308A 100%)",
          },
        }}
      >
        <ListItemIcon sx={{ display: "none" }} />
        <ListItemText
          primary="LOG OUT"
          primaryTypographyProps={{
            sx: {
              textAlign: "center",
              fontSize: "14px",
              fontWeight: "bold",
              letterSpacing: 1,
            },
          }}
        />
      </ListItem>

      <Dialog
        open={openConfirm}
        onClose={() => setOpenConfirm(false)}
        maxWidth="xs"
        fullWidth
        TransitionComponent={SlideUpTransition}
        keepMounted
        PaperProps={{
          sx: {
            borderRadius: "16px",
            p: 1.5,
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF) border-box",
            border: "3px solid transparent",
            boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontWeight: 700,
            textAlign: "center",
            fontSize: "20px",
            pb: 1,
          }}
        >
          Konfirmasi Logout
        </DialogTitle>

        <DialogContent sx={{ pb: 1 }}>
          <Typography
            sx={{ textAlign: "center", fontSize: "16px", opacity: 0.8 }}
          >
            Apakah kamu yakin ingin keluar dari akun?
          </Typography>
        </DialogContent>

        <DialogActions sx={{ justifyContent: "center", pb: 2, gap: 1 }}>
          <Button
            variant="outlined"
            onClick={() => setOpenConfirm(false)}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              px: 3,
              borderColor: "#0072FF",
              color: "#0072FF",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "rgba(0,114,255,0.08)",
                borderColor: "#0059D1",
              },
            }}
          >
            Batal
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{
              borderRadius: "10px",
              textTransform: "none",
              px: 3,
              fontWeight: 600,
            }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnack}
        autoHideDuration={2000}
        TransitionComponent={SlideUpTransition}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setOpenSnack(false)}
      >
        <Alert
          severity="success"
          icon={false}
          sx={{
            width: "100%",
            borderRadius: "12px",
            background: "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
            color: "white",
            fontWeight: 600,
            boxShadow: "0px 6px 18px rgba(0,0,0,0.18)",
            zIndex: 99999
          }}
        >
          Anda berhasil logout
        </Alert>
      </Snackbar>
    </>
  );
}
