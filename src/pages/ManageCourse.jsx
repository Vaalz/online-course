import React from "react";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/UserSidebar";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CardKelas from "../components/CardKelas";
import CategoryButtons from "../components/AllCategoryButtons";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

// API
import BannerImage from "../assets/image/BennerManage.png";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";

export default function ManageCourseStudent() {
  const [courses, setCourses] = useState([]);

  // PAGINATION STATE
  const [page, setPage] = useState(1);
  const perPage = 10;

  // HITUNG DATA FINAL YANG DITAMPILKAN
  const start = (page - 1) * perPage;
  const end = start + perPage;
  const displayedCourses = courses.slice(start, end);

  const totalPages = Math.ceil(courses.length / perPage);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 2);
  };

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
                      <CategoryButtons
                        onSelectCategory={setCourses}
                        onResetPage={() => setPage(1)}
                      />
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
                        }}
                      >
                        <Box sx={{ mt: 4, width: "100%" }}>
                          {displayedCourses.length === 0 ? (
                            <Typography sx={{ fontSize: 18, color: "#999" }}>
                              Tidak ada kelas pada kategori ini
                            </Typography>
                          ) : (
                            <Grid container spacing={2}>
                              {displayedCourses.map((c) => (
                                <Grid
                                  item
                                  xs={12}
                                  sm={6}
                                  md={4}
                                  lg={3}
                                  key={c.id}
                                >
                                  <CardKelas
                                    id={c.id}
                                    image={c.thumbnail}
                                    title={c.name}
                                    description={c.description}
                                    lessons={c.lessons_count}
                                    creator={c.creator?.full_name}
                                  />
                                </Grid>
                              ))}
                            </Grid>
                          )}
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        my: 3,
                      }}
                    >
                      <Button
                        variant="outlined"
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                      >
                        Prev
                      </Button>

                      <Typography>
                        Page {page} / {totalPages}
                      </Typography>

                      <Button
                        variant="outlined"
                        disabled={page === totalPages || totalPages === 0}
                        onClick={() => setPage(page + 1)}
                      >
                        Next
                      </Button>
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
