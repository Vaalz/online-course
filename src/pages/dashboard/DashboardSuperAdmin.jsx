import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Navbar from "../../components/layout/Navbar";
import Sidebar from "../../components/layout/UserSidebar";
import StatCard from "../../components/ui/StatCard";
import NotificationPanel from "../../components/ui/NotificationPanel";
import ProgresStudent from "../../components/ui/Progres";
import { superadminMenu } from "../../components/Menu/SidebarMenu/superAdminMenu";
import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import CreateProfileDialog from "../../components/profile/CreateProfileDialog";

import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import VideocamRoundedIcon from "@mui/icons-material/VideocamRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

const statsData = [
  {
    label: "TOTAL KURSUS",
    value: 23,
    icon: <MenuBookRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
  },
  {
    label: "TOTAL SESI ZOOM",
    value: 23,
    icon: <VideocamRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
  },
  {
    label: "TOTAL SISWA",
    value: 23,
    icon: <PeopleAltRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
  },
  {
    label: "TOTAL QUIZ",
    value: 23,
    icon: <LightbulbRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
  },
];

const progres = { progres: "PROGRES SEMUA SISWA" };

export default function DashboardSuperAdmin() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [isProfileRequired, setIsProfileRequired] = useState(false);

  const API_URL = import.meta.env.VITE_API_BASE_URL;
  const progres = { progres: "PROGRES SEMUA SISWA" };

  const notifications = [
    "Saatnya melakukan sesi zoom hari ini",
    "Anda telah menyelesaikan kuis",
    "Kuis baru tersedia",
    "Jadwal zoom telah diupdate",
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) return (window.location.href = "/");
    if (role !== "super_admin") return (window.location.href = "/forbidden");

    async function checkProfile() {
      try {
        const res = await fetch(`${API_URL}profile/mybiodata`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (res.status === 500) {
          console.log("PROFILE BELUM ADA");
          setIsProfileRequired(true);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    checkProfile();
  }, []);

  if (loading) return <Loading text="Memuat dashboard..." />;

  const statsData = [
    {
      label: "KURSUS DI IKUTI",
      value: stats?.enrolled_courses || 0,
      icon: <MenuBookRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
    },
    {
      label: "SESI ZOOM DI IKUTI",
      value: stats?.zoom_sessions || 0,
      icon: <VideocamRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
    },
    {
      label: "KUIS DI SELESAIKAN",
      value: stats?.completed_quizzes || 0,
      icon: <LightbulbRoundedIcon sx={{ fontSize: 40, color: "#466EF1" }} />,
    },
  ];

  const handleCreateProfile = async (payload) => {
    const token = localStorage.getItem("token");

    await axios.post(`${API_URL}profile/biodata`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setIsProfileRequired(false);
  };
  return (
    <Box sx={{ bgcolor: "#F6FEFD", minHeight: "100vh" }}>
      <Box sx={{ position: "fixed", top: 0, width: "100%", zIndex: 1300 }}>
        <Navbar />
      </Box>

      <Box
        sx={{
          flexShrink: 0,
          position: "fixed",
          top: "80px",
          left: 0,
          height: "calc(100vh - 80px)",
          overflowY: "auto",
          bgcolor: "#F1FCFA",
          borderRight: "1px solid #E0E0E0",
          display: { xs: "none", md: "block" },
        }}
      >
        <Sidebar menus={superadminMenu} />
      </Box>

      <Box
        sx={{
          ml: { md: "319px", xs: 0 },
          pt: "110px",
          px: 3,
          pb: 5,
        }}
      >
        <Grid container spacing={3}>
          {statsData.map((stat, i) => (
            <Grid item key={i} sx={{ mt: 1 }}>
              <StatCard
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            </Grid>
          ))}

          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    p: 3,
                    bgcolor: "#FFFFFF",
                    borderRadius: 3,
                    border: "1px solid #DCE4E3",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 2,
                    }}
                  >
                    <Typography fontWeight={700} fontSize={16}>
                      {progres.progres}
                    </Typography>

                    <Typography
                      fontSize={14}
                      color="#466EF1"
                      sx={{ cursor: "pointer" }}
                    >
                      LIHAT SELENGKAPNYA
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", gap: 3, overflowX: "auto" }}>
                    {Array(10)
                      .fill(0)
                      .map((_, i) => (
                        <Box key={i} sx={{ textAlign: "center" }}>
                          <img
                            src="https://i.pravatar.cc/80"
                            alt={`User ${i + 1}`}
                            style={{
                              width: 70,
                              height: 70,
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                          />
                          <Typography
                            fontSize={12}
                            fontWeight={600}
                            sx={{ mt: 1 }}
                          >
                            USERNAME
                          </Typography>
                        </Box>
                      ))}
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Card
                  sx={{
                    borderRadius: 3,
                    border: "1px solid #DCE4E3",
                    height: 200,
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CardContent>
                    <Typography color="text.secondary">
                      Konten Bagian Bawah
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <NotificationPanel notifications={notifications} />
          </Grid>
        </Grid>
      </Box>
      <CreateProfileDialog
        keepMounted
        open={isProfileRequired}
        onSubmit={handleCreateProfile}
      />
    </Box>
  );
}
