// src/components/layout/UserSidebar.jsx

import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeRounded';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';

// Data Menu Sidebar
const menuItems = [
  { icon: <HomeOutlinedIcon  sx={{fontSize:"30px", mr: "20px"}}/>, text: "HOME", path: "/" },
  { icon: <GridViewOutlinedIcon sx={{fontSize:"30px", mr: "20px"}}/>, text: "DASHBOARD", path: "/DashboardStudent" },
  { icon: <AccountCircleOutlinedIcon sx={{fontSize:"30px", mr: "20px"}}/>, text: "EDIT PROFILE", path: "/profile" },
  { icon: <QuizOutlinedIcon sx={{fontSize:"30px", mr: "20px"}}/>, text: "QUIZ", path: "/Quiz" },

];

export default function UserSidebar() {
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
        height: "full",
        
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
                mb: 1.5,
                border: isActive
                  ? "1px solid #00E0A8"
                  : "1px solid transparent",
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