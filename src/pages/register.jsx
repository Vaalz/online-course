import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/Authcompt/ButtonAuth";
import InputField from "../components/Authcompt/InputField";
import GradientButton from "../components/Authcompt/GradientButton";
import GambarLogin from "../assets/image/Gambar.png";
import LoginAuth from "../services/auth";
import Loading from "../components/Loading";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "1rem",
  textAlign: "center",
  boxShadow: "none",
}));

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const API_URL = import.meta.env.VITE_API_BASE_URL;

  const handleRegister = async () => {
    const newErrors = {};

    if (!username.trim()) newErrors.username = "Username tidak boleh kosong";

    if (!email.trim()) {
      newErrors.email = "Email tidak boleh kosong";
    } else if (!validateEmail(email)) {
      newErrors.email = "Format email tidak valid";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}auth/otp/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        setErrors({ email: data.message || "Gagal mengirim kode OTP" });
        return;
      }

      sessionStorage.setItem("userEmail", email);
      sessionStorage.setItem("username", username);

      navigate("/verify");
    } catch (err) {
      console.error("OTP Error:", err);
      setErrors({ email: "Terjadi kesalahan, coba lagi" });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await LoginAuth();
      const backendData = res.data;

      const token = res.idToken;
      const role = backendData.roles?.[0]?.name;
      const email = backendData.email;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);

      if (role === "student") navigate("/dashboard/student");
      else if (role === "teacher" || role === "instruktor")
        navigate("/dashboard/instructor");
      else navigate("/forbidden");
    } catch (err) {
      console.error(err);
      alert("Login Google gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Grid
        container
        direction={{ xs: "row", sm: "colum", md: "row", lg: "row" }}
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "100%",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
          },
          justifyContent: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
          },
          p: { xs: 2, sm: 4, md: 8 },
        }}
      >
        {loading && <Loading text="Mohon tunggu..." fullscreen />}
        {/* ==== LEFT IMAGE ==== */}
        <Box display={"flex"}>
          <Grid
            item
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              justifyContent: "center",
              alignItems: "center",
              p: 2,
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: {
                  xs: "220px", // HP kecil
                  sm: "350px", // HP besar & tablet kecil
                  md: "500px", // Laptop kecil
                  lg: "650px", // Laptop besar
                },
                height: "auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img
                src={GambarLogin}
                alt="Gambar Login"
                style={{
                  width: "100%",
                  maxWidth: "650px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>

          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: { xs: "center", md: "center" },
              alignItems: "center",
              px: { xs: 4, sm: 6, md: 8 },
              py: { xs: 4, md: 0 },
              backgroundColor: "#fff",
              gap: "30px",
            }}
          >
            <Item
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                px: { xs: 4, md: 8 },
                gap: "30px",
                backgroundColor: "#fff",
                padding: "50px",
              }}
            >
              {/* Judul */}
              <Typography
                fontSize={36}
                fontWeight={600}
                fontStyle={"semibold"}
                textAlign="center"
                sx={{ mb: 1, color: "#010E0A" }}
              >
                Masuk Untuk Mulai Belajar
              </Typography>

              {/* Input Fields */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "560px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                }}
              >
                <Box>
                  <InputField
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    error={Boolean(errors.username)}
                    helperText={errors.username || ""}
                  />
                </Box>
                <Box>
                  <InputField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={Boolean(errors.email)}
                    helperText={errors.email || ""}
                  />
                </Box>
              </Box>

              {/* Tombol daftar */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 560,
                }}
              >
                <GradientButton text="Dapatkan kode" onClick={handleRegister} />
              </Box>

              {/* Pembatas */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 560,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Divider sx={{ flex: 1 }} />
                <Typography
                  sx={{
                    mx: 2,
                    color: "gray",
                    fontSize: "20px",
                  }}
                >
                  Atau
                </Typography>
                <Divider
                  sx={{
                    flex: 1,
                  }}
                />
              </Box>

              {/* Login dengan Google */}
              <Box sx={{ width: "100%", maxWidth: "480px" }}>
                <AuthButton
                  text="Login dengan Google"
                  onClick={handleGoogleLogin}
                  icon={<GoogleIcon fontSize="25px" />}
                />
              </Box>

              {/* Sudah punya akun */}
              <Typography
                sx={{
                  color: "#010E0A",
                  fontSize: "20px",
                  fontStyle: "regular",
                }}
              >
                Sudah punya akun?{" "}
                <Typography
                  component="span"
                  fontWeight={400}
                  fontSize={"20px"}
                  sx={{
                    cursor: "pointer",
                    background:
                      "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Login Disini
                </Typography>
              </Typography>
            </Item>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}
