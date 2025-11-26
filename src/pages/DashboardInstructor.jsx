import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  LinearProgress,
  Divider,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import Kursus from "../../src/assets/image/Kursus.png"
import Zoom from "../../src/assets/image/Zoom2.png"
import Siswa from "../../src/assets/image/Siswa.png"

import NavbarDashboard from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/InstructorSidebar";


function DashboardInstructor() {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <>
      <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      {/* NAVBAR */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1300,
        }}
      >
        <NavbarDashboard />
      </Box>

      {/* WRAPPER */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          pt: "80px",
          pl: { md: "330px", xs: "0" },
          pr: "0",
        }}
      >
        {/* SIDEBAR */}
        {!isMobile && (
          <Box
            sx={{
              width: 'auto',
              flexShrink: 0,
              position: "fixed",
              top: "80px",
              left: 0,
              height: "calc(100vh - 80px)",
              overflowY: "hiden",
              bgcolor: "#F1FCFA",
              borderRight: "1px solid #E0E0E0",
            }}
          >
            <Sidebar />
          </Box>
        )}

        {/* Main Content */}
        <Box sx={{border: '2px solid #B9C2C0', borderRadius: '15px', width: '320px', height: '103px', mt: '13px', mx: '11px'}}>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <Box
              component= "img"
              src= {Siswa}
              sx={{
                width: '45px',
                height: '52px',
                alignItems: 'center'
              }}
            />
            <Box>
              <Typography sx={{fontSize: '36px', fontWeight: '900'}}>23</Typography>
            </Box>
          </Box>
          <Box></Box>
        </Box>

      </Box>
    </Box>
    </>
  );
}

export default DashboardInstructor;
