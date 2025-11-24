import { Box, Typography, Divider, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

export default function NotificationPanel({ notifications = [] }) {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #D9E2E1",
        borderRadius: "12px",
        p: 2,
        bgcolor: "#FFFFFF",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
        }}
      >
        <NotificationsNoneIcon sx={{ color: "#466EF1" }} />
        <Typography fontWeight={700}>NOTIFIKASI</Typography>
      </Box>

      <Divider />

      {/* LIST */}
      <Box sx={{ mt: 2, overflowY: "auto", flex: 1 }}>
        {notifications.map((notif, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #F1F1F1",
              py: 1,
            }}
          >
            <Typography sx={{ fontSize: 14 }}>{notif}</Typography>
            <IconButton size="small">
              <CloseIcon sx={{ fontSize: 16 }} />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* BUTTON */}
      <Box sx={{ mt: 2, textAlign: "right" }}>
        <Box
          component="button"
          style={{
            padding: "8px 20px",
            borderRadius: "20px",
            border: "1px solid #00C9A7",
            background: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          Baca Semua
        </Box>
      </Box>
    </Box>
  );
}
