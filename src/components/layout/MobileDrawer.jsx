import {
  Drawer,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Slide,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import LogoutButton from "../Authcompt/LogoutButton";

export default function MobileDrawer({
  open,
  onClose,
  menus = [],
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    onClose();
  };

  return (
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        transitionDuration={300}
        PaperProps={{
          sx: {
            borderRadius: "0px 20px 20px 0px",
            overflow: "hidden",
          },
        }}
      >
        <Box
          sx={{
            width: 270,
            p: 2,
            pt: 10,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* ==================== MENU UTAMA ==================== */}
          <Typography fontWeight={700} sx={{ mb: 1 }}>
            Menu Utama
          </Typography>

          <List sx={{ mb: 1 }}>
            {menus.map((item, i) => {
              const active = location.pathname === item.path;

              return (
                <ListItem
                  key={i}
                  button
                  onClick={() => {
                    navigate(item.path);
                    onClose();
                  }}
                  sx={{
                    borderRadius: 2,
                    mb: 1,
                    border: active
                      ? "1px solid #00E0A8"
                      : "1px solid transparent",
                    color: active ? "#00E0A8" : "#466EF1",
                    "&:hover": { bgcolor: "#E6FBF6" },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>

                  <ListItemText primary={item.text} />
                </ListItem>
              );
            })}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* ==================== NOTIFIKASI ==================== */}
          <Typography fontWeight={700} sx={{ mb: 1 }}>
            Notifikasi
          </Typography>

          {/* ==================== LOGOUT BUTTON (BOTTOM) ==================== */}
          <Box sx={{ px: 1, mb: 2 }}>
            <LogoutButton />
          </Box>
        </Box>
      </Drawer>
  );
}
