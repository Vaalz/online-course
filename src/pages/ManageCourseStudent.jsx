import React from "react";
import Navbar from "../components/layout/DashboardLayout";
import Sidebar from "../components/layout/UserSidebar";
import { superadminMenu } from "../components/Menu/SidebarMenu/superAdminMenu";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CardKelas from "../components/CardKelas";
import CategoryButtons from "../components/AllCategoryButtons";
import { useState, useEffect } from "react";

// API
import BannerImage from "../assets/image/BennerManage.png";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";

export default function ManageCourseStudent() {
  const [courses, setCourses] = useState([]);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#f5f6fa",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1300,
        }}
      >
        <Navbar />
      </Box>
      {/* SIDEBAR */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          flexShrink: 0,
          position: "sticky",
          top: 0,
          pt: "80px",
          height: "100vh",
          overflowY: "auto",
          bgcolor: "#fff",
          borderRight: "1px solid #e0e0e0",
        }}
      >
        <Sidebar menus={studentMenu} />
      </Box>

      {/* MAIN CONTENT */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 2, md: 4 },
          py: 3,
          width: "100%",
          height: "100vh",
        }}
      >
        {/* GRID KONTEN */}
        <Grid
          container
          spacing={2}
          sx={{ flexWrap: "wrap", width: "100%", pt: "120px" }}
        >
          {/* Card Konten Lebar */}
          <Grid container spacing={2} width={"100%"} height={"100%"}>
            {/* LEFT CONTENT*/}
            <Grid item sx={{ width: "100%", height: "100%" }}>
              <Grid container spacing={2} maxWidth={"100%"} height={"100%"}>
                {/* Bagian atas */}
                <Grid item xs={12} md={8} lg={8} width={"100%"}>
                  <Box
                    sx={{
                      width: "100%",
                      height: { xs: 180, md: 300 },
                      borderRadius: 3,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={BannerImage}
                      alt="Banner Kelas"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} sx={{ width: "100%", maxWidth: "100%" }}>
                  <Box
                    sx={{ maxWidth: "100%", flexGrow: 1, overflowX: "hidden" }}
                  >
                    {/* CATEGORY BUTTON */}
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                      }}
                    >
                      <CategoryButtons onSelectCategory={setCourses} />
                    </Box>

                    {/* CARD LIST */}
                    <Box
                      sx={{
                        mt: 4,
                        overflowX: "auto",
                        pb: 2,
                        pr: 2,
                        width: "100%",
                        maxWidth: "100%",
                        display: "flex",
                        justifyContent: "flex-start",

                        scrollbarWidth: "none",
                        "&::-webkit-scrollbar": {
                          height: 0,
                        },
                      }}
                    >
                      {/* WRAPPER YANG MEMBATASI WIDTH */}
                      <Box
                        sx={{
                          display: "flex",
                          gap: { xs: 2, md: 3 },
                          width: "1500px", // FIX WIDTH UNTUK AREA CARD
                        }}
                      >
                        {courses.length === 0 ? (
                          <Typography sx={{ fontSize: 18, color: "#999" }}>
                            Tidak ada kelas pada kategori ini
                          </Typography>
                        ) : (
                          courses.map((c) => (
                            <Box
                              key={c.id}
                              sx={{ minWidth: 280, flexShrink: 0 }}
                            >
                              <CardKelas
                                image={c.thumbnail}
                                title={c.name}
                                description={c.description}
                                lessons={c.lessons_count}
                                creator={c.creator?.full_name}
                              />
                            </Box>
                          ))
                        )}
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
