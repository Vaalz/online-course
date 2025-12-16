// src/pages/verify.jsx

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "../services/otp";
import useResendTimer from "../components/Authcompt/useResendTimer";
import GambarLogin from "../assets/image/PictureAuth.png";
import Loading from "../components/ui/Loading";
import GradientButton from "../components/Authcompt/GradientButton";
import InputField from "../components/Authcompt/InputField";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "1rem",
  textAlign: "center",
  boxShadow: "none",
}));

const GradientText = styled(Typography)(({ theme, clickable = false }) => ({
  component: "span",
  fontSize: "20px",
  background: "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: clickable ? 600 : 400,
  cursor: clickable ? "pointer" : "default",
}));

export default function VerifyPage() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { seconds, canResend, resetTimer } = useResendTimer(30);

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (!storedEmail) {
      sessionStorage.removeItem("userEmail");
      navigate("/login", { replace: true });
      return;
    }
    setEmail(storedEmail);
  }, [navigate]);

  const handleVerify = async () => {
    setLoading(true);

    if (code.trim().length !== 6) {
      setError("Kode harus 6 digit");
      return;
    }

    console.log("Payload terkirim:", { email, otp: code });

    setLoading(true);
    setError("");

    try {
      const { token, role, userData } = await verifyOtp(email, code);

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("email", email);
      localStorage.setItem("user", JSON.stringify(userData));

      if (role === "student") navigate("/dashboard/student");
      else if (role === "instruktor") navigate("/dashboard/instructor");
      else if (role === "admin") navigate("/dashboard/admin");
      else if (role === "super_admin") navigate("/dashboard/super-admin");
      else navigate("/forbidden");
    } catch (err) {
      console.error("ERROR VERIFY:", err);
      setError(err.message || "Verifikasi gagal");
    }
  };

  const handleResend = async () => {
    if (!canResend) return;

    try {
      await resendOtp(email);
      alert("Kode baru terkirim!");
      resetTimer();
    } catch (err) {
      alert(err.message);
    }
  };

  if (!email) return null;

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Grid
        container
        sx={{
          height: { xs: "auto", md: "100vh" },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: { xs: "center", sm: "center", md: "center" },
          p: { xs: 2, sm: 4, md: 8 },
        }}
      >
        {loading && <Loading text="Mohon tunggu..." fullscreen />}

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
            p: 2,
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "220px", sm: "350px", md: "500px", lg: "650px" },
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: "12px", md: "20px" },
                textAlign: "center",
              }}
            >
              <Typography
                fontWeight={600}
                textAlign="center"
                sx={{
                  color: "#010E0A",
                  fontSize: { xs: 24, sm: 32, md: 36 },
                }}
              >
                Cek email anda
              </Typography>

              <Typography
                textAlign="center"
                sx={{
                  color: "#010E0A",
                  maxWidth: { xs: "90%", sm: 400, md: 560 },
                  fontSize: { xs: 16, sm: 20, md: 24 },
                  mx: "auto",
                }}
              >
                Masukkan kode 6 digit yang telah dikirim ke **{email}** untuk
                masuk
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                maxWidth: "560px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <InputField
                label="Kode 6-digit"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
                inputProps={{ maxLength: 6 }}
              />
            </Box>

            <Box sx={{ width: "100%", maxWidth: 560 }}>
              <GradientButton text="Masuk" onClick={handleVerify} />
            </Box>

            <Typography
              variant="body2"
              sx={{ fontSize: "20px", color: "gray" }}
            >
              Belum mendapat kode?{" "}
              {canResend ? (
                <GradientText onClick={handleResend} component="span">
                  Kirim ulang kode
                </GradientText>
              ) : (
                <GradientText component="span">
                  Kirim ulang kode dalam <b>{seconds}s</b>
                </GradientText>
              )}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
