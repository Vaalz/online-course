// src/pages/verify.jsx

import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
  // State
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // Custom Hook
  const { seconds, canResend, resetTimer } = useResendTimer(30); // <--- Perubahan: Penggunaan custom hook

  // Effects
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (!storedEmail) {
      // Lebih baik menggunakan `replace` untuk mencegah kembali ke halaman verifikasi
      navigate("/login", { replace: true });
      return;
    }
    setEmail(storedEmail);
  }, [navigate]);

  // Handlers
  const handleVerify = () => {
    if (code.trim().length !== 6) {
      alert("Kode harus 6 digit");
      return;
    }
    console.log(`Verifikasi kode ${code} untuk email ${email}`);
    // TODO: panggil API verifikasi OTP
  };

  const handleResend = async () => {
    if (!canResend) return;

    try {
      await resendOtp(email);
      alert("Kode baru telah dikirim ke email Anda");
      resetTimer();
    } catch (error) {
      alert(error.message || "Gagal terhubung ke server");
    }
  };

  // Rendering
  if (!email) return null; // Pre-render check

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Grid container columnSpacing={3} sx={{ height: "100%" }}>
        {/* Kolom Kiri (Hanya Muncul di layar MD ke atas) */}
        <Grid item xs={false} md={6}>
          <Item sx={{ height: "100%" }}>{/* Konten Gambar/Branding */}</Item>
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
            <Box sx={{ gap: "20px" }}>
              <Typography
                fontSize={36}
                fontWeight={600}
                textAlign="center"
                sx={{ color: "#010E0A" }}
              >
                Cek email anda
              </Typography>

              <Typography
                fontSize={24}
                textAlign="center"
                sx={{ color: "#010E0A", maxWidth: 560 }}
              >
                Masukkan kode 6 digit yang telah dikirim ke <b>{email}</b> untuk
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
                <GradientText onClick={handleResend} clickable>
                  Kirim ulang kode
                </GradientText>
              ) : (
                <GradientText>
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
