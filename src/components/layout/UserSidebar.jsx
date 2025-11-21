// src/components/layout/UserSidebar.jsx

import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeRounded";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

// Data Menu Sidebar (icon responsive)
const menuItems = [
  {
    icon: (
      <HomeOutlinedIcon
        sx={{ fontSize: { xs: "20px", sm: "24px", md: "30px" }, mr: "20px" }}
      />
    ),
    text: "HOME",
    path: "/",
  },
  {
    icon: (
      <GridViewOutlinedIcon
        sx={{ fontSize: { xs: "20px", sm: "24px", md: "30px" }, mr: "20px" }}
      />
    ),
    text: "DASHBOARD",
    path: "/DashboardStudent",
  },
  {
    icon: (
      <AccountCircleOutlinedIcon
        sx={{ fontSize: { xs: "20px", sm: "24px", md: "30px" }, mr: "20px" }}
      />
    ),
    text: "EDIT PROFILE",
    path: "/profile",
  },
  {
    icon: (
      <QuizOutlinedIcon
        sx={{ fontSize: { xs: "20px", sm: "24px", md: "30px" }, mr: "20px" }}
      />
    ),
    text: "QUIZ",
    path: "/Quiz",
  },
];

export default function UserSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        alignItems: "center",
        width: { xs: "120px", sm: "160px", md: "220px", lg: "280px" },
        bgcolor: "#F1FCFA",
        borderRight: "1px solid #E0E0E0",
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2 },
        height: "100%",
        flexShrink: 0,
        position: "relative",
      }}
    >
      <List>
        {menuItems.map((item, i) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem
              key={i}
              button
              onClick={() => navigate(item.path)}
              sx={{
                borderRadius: "10px",
                mb: { xs: 1, sm: 1.5 },
                border: isActive
                  ? "1px solid #00E0A8"
                  : "1px solid transparent",
                color: isActive ? "#00E0A8" : "#466EF1",
                "&:hover": { bgcolor: "#E6FBF6" },
                px: { xs: 1, sm: 2 },
                py: { xs: 0.8, sm: 1 },
              }}
            >
              {/* ICON */}
              <ListItemIcon
                sx={{
                  color: isActive ? "#00E0A8" : "#466EF1",
                  minWidth: { xs: 30, sm: 40 },
                }}
              >
                {item.icon}
              </ListItemIcon>

              {/* TEXT */}
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: { xs: "9px", sm: "11px", md: "15px" },
                  fontWeight: 600,
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
