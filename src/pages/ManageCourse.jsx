import React from "react";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/UserSidebar";
import { Box, Grid, Paper, Typography } from "@mui/material";
import CardKelas from "../components/ui/CardKelas";
import CategoryButtons from "../components/ui/AllCategoryButtons";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";

import BannerImage from "../assets/image/BennerManage.png";
import { studentMenu } from "../components/Menu/SidebarMenu/studentMenu";

export default function ManageCourseStudent() {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [activeCategory, setActiveCategory] = useState("all");

  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchCourses = async (pageNumber, category = "all") => {
    try {
      let url = `${API_URL}courses?page=${pageNumber}&limit=10`;

      if (category !== "all") {
        url = `${API_URL}courses/categories/${category}?page=${pageNumber}&limit=10`;
      }

      const res = await axios.get(url);

      setCourses(res.data.data.data);
      setPage(res.data.data.page);
      setTotalPages(res.data.data.total_pages);
    } catch (err) {
      console.error("Gagal fetch courses", err);
      setCourses([]);
    }
  };

  useEffect(() => {
    fetchCourses(1, "all");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        overflowX: "hidden",
        backgroundColor: "#F6FEFD",
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

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: { xs: 2, md: 4 },
          py: 3,
          width: "100%",
          height: "100vh",
          pl: { xs: 0, sm: "20px", md: "30px", lg: "50px" },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ flexWrap: "wrap", width: "100%", pt: "120px" }}
        >
          <Grid container spacing={2} width={"100%"} height={"100%"}>
            <Grid item sx={{ width: "100%", height: "100%" }}>
              <Grid container spacing={2} maxWidth={"100%"} height={"100%"}>
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
                    <Box
                      sx={{
                        display: "flex",
                        width: "100%",
                      }}
                    >
                      <CategoryButtons
                        onSelectCategory={(categoryId) => {
                          setActiveCategory(categoryId);
                          setPage(1);
                          fetchCourses(1, categoryId);
                        }}
                      />
                    </Box>

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
                      <Box
                        sx={{
                          display: "flex",
                          gap: { xs: 2, md: 3 },
                        }}
                      >
                        <Box sx={{ mt: 4, width: "100%" }}>
                          {courses.length === 0 ? (
                            <Typography sx={{ fontSize: 18, color: "#999" }}>
                              Tidak ada kelas pada kategori ini
                            </Typography>
                          ) : (
                            <Grid
                              container
                              spacing={2}
                              sx={{
                                display: "grid",
                                gridTemplateColumns: {
                                  xs: "1fr",
                                  sm: "repeat(2, 1fr)",
                                  md: "repeat(3, 1fr)",
                                  lg: "repeat(4, 1fr)",
                                },
                              }}
                            >
                              {courses.map((c) => (
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
                        onClick={() => fetchCourses(page - 1, activeCategory)}
                      >
                        Prev
                      </Button>

                      <Typography>
                        Page {page} / {totalPages}
                      </Typography>

                      <Button
                        variant="outlined"
                        disabled={page === totalPages}
                        onClick={() => fetchCourses(page + 1, activeCategory)}
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
