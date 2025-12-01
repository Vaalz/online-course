import { Box, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

import Home from "../../assets/image/Home.png";
import Dashboard from "../../assets/image/Dashboard.png";
import Profile from "../../assets/image/Profile.png";
import Zoom from "../../assets/image/Zoom.png";

const menuItems = [
  { icon: <img src={Home} />, text: "HOME", path: "/" },
  { icon: <img src={Dashboard} />, text: "DASHBOARD", path: "/DashboardStudent" },
  { icon: <img src={Profile} />, text: "EDIT PROFILE", path: "/profile" },
  { icon: <img src={Zoom} />, text: "MANAGE ZOOM", path: "/Quiz" },
];

function InstructorSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          width: { xs: "180px", sm: "220px", md: "270px" },
          bgcolor: "#F6FEFD",
          borderRight: "1px solid #E0E0E0",
          py: 4,
          px: 3,
          flexShrink: 0,
          top: 0,
          height: "100%",
          overflowY: "hidden",  // FIX 1
        }}
      >
        <List sx={{ overflowY: "hidden" }}> {/* FIX 2 */}
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
    </>
  );
}

export default InstructorSidebar;
