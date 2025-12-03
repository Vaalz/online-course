import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/Authcompt/ButtonAuth";
import InputField from "../components/Authcompt/InputField";
import GradientButton from "../components/Authcompt/GradientButton";
import LoginAuth from "../services/auth";
import { sendOtp } from "../services/otp";
import GambarLogin from "../assets/image/Gambar.png";
import Loading from "../components/Loading";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "1rem",
  textAlign: "center",
  boxShadow: "none",
}));

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // =============== SEND OTP ===============
  const handleSendCode = async () => {
    setError("");
    setLoading(true); // ⏳ tampilkan

    if (!email.trim()) {
      setLoading(false);
      return setError("Email tidak boleh kosong");
    }
    if (!validateEmail(email)) {
      setLoading(false);
      return setError("Format email tidak valid");
    }

    try {
      const res = await sendOtp(email);
      console.log("OTP Sent Response:", res);

      sessionStorage.setItem("userEmail", email);
      if (res?.data?.tempToken)
        sessionStorage.setItem("tempToken", res.data.tempToken);

      navigate("/verify");
    } catch (err) {
      console.error("OTP Error:", err);
      setError(
        err.response?.data?.message || err.message || "Gagal mengirim kode OTP"
      );
    } finally {
      setLoading(false); // selesai
    }
  };

  // =============== GOOGLE LOGIN ===============
  const handleGoogleLogin = async () => {
    setLoading(true);
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
        navigate("/DashboarTeacher");
      else navigate("/forbidden");
    } catch (err) {
      console.error(err);
      alert("Login Google gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: "100%", height: { xs: "auto", md: "100vh" } }}>
      <Grid
        container
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "100%",
          display: "flex",
          p: { xs: 2, sm: 4, md: 8 },
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "center" },
        }}
      >
        {loading && <Loading text="Mohon tunggu..." fullscreen />}
        {/* ==== LEFT IMAGE ==== */}
        <Grid
          item
          xs={false}
          md={6}
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
            p: { xs: 0, sm: 0, md: "80px" },
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
        {/* ==== RIGHT FORM ==== */}
        <Grid
          item
          xs={12}
          md={6}
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
              textAlign: "center",
            }}
          >
            Belum punya akun?{" "}
            <Typography
              component="span"
              fontWeight={400}
              fontSize={"20px"}
              sx={{
                cursor: "pointer",
                background: "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
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
