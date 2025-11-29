// src/pages/verify.jsx

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { verifyOtp, resendOtp } from "../services/otp";
import useResendTimer from "../components/Authcompt/useResendTimer";
import GambarLogin from "../assets/image/Gambar.png";

// Import Komponen & Service
import GradientButton from "../components/Authcompt/GradientButton";
import InputField from "../components/Authcompt/InputField";
// --- Styling (Dipindahkan ke bagian bawah agar komponen utama lebih fokus) ---

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

// --- Komponen Utama ---

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

      console.log("HASIL VERIFY:", { token, role, userData }); // <-- Tambahkan ini

      if (!token || !role) {
        throw new Error("Data login tidak valid");
      }

      if (role === "student") navigate("/dashboard/student");
      else if (role === "teacher") navigate("/dashboard/teacher");
      else navigate("/forbidden");
    } catch (err) {
      console.error("ERROR VERIFY:", err); // <--- tampilkan error asli
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

  // Rendering
  if (!email) return null; // Pre-render check

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Grid
        container
        sx={{
          height: "100%",
          display: "flex",
          p: {
            xs: "24px",
            sm: "40px",
            md: "80px",
          },
          justifyContent: "space-between",
        }}
      >
        {/* Kolom Kiri (Hanya Muncul di layar MD ke atas) */}
        <Grid
          item
          xs={false}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
            // // Perbaikan: Gunakan display responsif jika xs={false} tidak berfungsi penuh
            // display: { xs: "none", md: "flex" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "650px",
              height: "auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={GambarLogin}
              alt="Gambar Login"
              // Hapus style inline dan pindahkan ke sx
              style={{
                width: "100%",
                maxWidth: "650px", // Ini sekarang redundan karena ada di Box
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </Grid>

        {/* Kolom Kanan (Form Verifikasi) */}
        <Grid item xs={12} md={6}>
          <Item
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 4, md: 8 },
              gap: "30px",
              padding: "50px",
            }}
          >
            {/* Header Text */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: { xs: "12px", md: "20px" },
                textAlign: "center",
              }}
            >
              {/* === JUDUL UTAMA: Cek email anda === */}
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

              {/* === DESKRIPSI: Masukkan kode 6 digit === */}
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
            {/* Input Form */}
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

            {/* Tombol */}
            <Box sx={{ width: "100%", maxWidth: 560 }}>
              <GradientButton text="Masuk" onClick={handleVerify} />
            </Box>

            {/* Resend Timer/Button */}
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
