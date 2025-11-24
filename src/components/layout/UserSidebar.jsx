// src/components/layout/UserSidebar.jsx

import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";


// Sidebar reusable untuk semua role

import Home from "../../assets/image/Home.png";
import Dashboard from "../../assets/image/Dashboard.png";
import Profile from "../../assets/image/Profile.png";
import Quiz from "../../assets/image/Quiz.png";

export default function UserSidebar({ menus = [] }) {


// Data Menu Sidebar
const menuItems = [
  { icon: <img src={Home} alt="home" style={{ width: 24, height: 24, marginRight: 20 }} />, text: "HOME", path: "/" },
    { icon: <img src={Dashboard} alt="dashboard" style={{ width: 24, height: 24, marginRight: 20 }} />, text: "DASHBOARD", path: "/DashboardStudent" },
    { icon: <img src={Profile} alt="profile" style={{ width: 28, height: 28, marginRight: 20 }} />, text: "EDIT PROFILE", path: "/profile" },
  { icon: <img src={Quiz} alt="quiz" style={{ width: 26, height: 26, marginRight: 20 }} />, text: "QUIZ", path: "/Quiz" },

];


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
