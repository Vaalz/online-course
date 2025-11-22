import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/Authcompt/ButtonAuth";
import InputField from "../components/Authcompt/InputField";
import GradientButton from "../components/Authcompt/GradientButton";
import LoginAuth from "../services/auth";
import GambarLogin from "../assets/image/Gambar.png";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "1rem",
  textAlign: "center",
  boxShadow: "none",
}));

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSendCode = () => {
    if (!email.trim()) return setError("Email tidak boleh kosong");
    if (!validateEmail(email)) return setError("Format email tidak valid");

    sessionStorage.setItem("userEmail", email);
    navigate("/verify");
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

      if (role === "student") navigate("/DashboardStudent");
      else if (role === "teacher" || role === "instruktor")
        navigate("/DashboarTeacher");
      else navigate("/forbidden");
    } catch (err) {
      console.error(err);
      alert("Login Google gagal");
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Grid
        container
        sx={{
          height: "100%",
          display: "flex",
          
        }}
      >
        {/* ==== LEFT IMAGE ==== */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            p: 2,
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
        </Grid>

        {/* ==== RIGHT FORM ==== */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            height: "100%",
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
          {/* Title */}
          <Typography
            fontSize={{ xs: 26, sm: 32, md: 36 }}
            fontWeight={600}
            textAlign="center"
            sx={{ color: "#010E0A" }}
          >
            Masuk untuk mulai belajar
          </Typography>

          {/* Input */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "480px",
              display: "flex",
              flexDirection: "column",
              gap: "25px",
            }}
          >
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              helperText={error}
            />
          </Box>

          {/* Button Login */}
          <Box sx={{ width: "100%", maxWidth: "480px" }}>
            <GradientButton text="Dapatkan Kode" onClick={handleSendCode} />
          </Box>

          {/* OR Line */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "480px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Divider sx={{ flex: 1 }} />
            <Typography sx={{ mx: 2, color: "gray", fontSize: "18px" }}>
              Atau
            </Typography>
            <Divider sx={{ flex: 1 }} />
          </Box>

          {/* Google Login */}
          <Box sx={{ width: "100%", maxWidth: "480px" }}>
            <AuthButton
              text="Login dengan Google"
              onClick={handleGoogleLogin}
              icon={<GoogleIcon fontSize="25px" />}
            />
          </Box>

          {/* Register */}
          <Typography
            sx={{
              color: "#010E0A",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
            }}
          >
            Belum punya akun?{" "}
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
              onClick={() => navigate("/register")}
            >
              Register Disini
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
