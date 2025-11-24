// src/components/layout/UserSidebar.jsx

import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

// Sidebar reusable untuk semua role
export default function UserSidebar({ menus = [] }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: { xs: "180px", sm: "220px", md: "319px" },
        bgcolor: "#F1FCFA",
        borderRight: "1px solid #E0E0E0",
        py: 4,
        px: 2,
        flexShrink: 0,
        top: 0,
        height: "100%",
      }}
    >
      <List>
        {menus.map((item, i) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem
              key={i}
              button
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: "10px",
                mb: 1.5,
                border: isActive ? "1px solid #00E0A8" : "1px solid transparent",
                color: isActive ? "#00E0A8" : "#466EF1",
                "&:hover": { bgcolor: "#E6FBF6" },
              }}
            >
              <ListItemIcon
                sx={{
                  color: isActive ? "#00E0A8" : "#466EF1",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
