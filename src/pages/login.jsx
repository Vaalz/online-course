import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/ButtonAuth";
import InputField from "../components/InputField";
import GradientButton from "../components/GradientButton";

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

    // Simpan email ke sessionStorage agar halaman verify tahu siapa yang login
    sessionStorage.setItem("userEmail", email);
    console.log("Mengirim kode ke backend:", email);

    // Arahkan ke halaman verifikasi
    navigate("/verify");
  };

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ height: "100%" }}
      >
        <Grid size={6}>
          <Item sx={{ height: "100%" }}>1</Item>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Item
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 4, md: 8 },
              gap: 1,
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
              textAlign="center"
              sx={{ color: "#010E0A", mb: 3 }}
            >
              Masuk untuk mulai belajar
            </Typography>

            <Box
              sx={{
                width: "100%",
                maxWidth: 480,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2.5,
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

              <GradientButton
                text="Dapatkan Kode"
                onClick={handleSendCode}
                sx={{ width: "100%", maxWidth: 480, mt: 3 }}
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                maxWidth: 480,
                display: "flex",
                alignItems: "center",
                mt: 3,
                mb: 1,
              }}
            >
              <Divider sx={{ flex: 1 }} />
              <Typography sx={{ mx: 2, color: "gray", fontSize: "14px" }}>
                Atau
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Box>

            <Box sx={{ width: "100%", maxWidth: 480 }}>
              <AuthButton text="Login dengan Google" icon={<GoogleIcon />} />
            </Box>

            <Typography sx={{ mt: 3, color: "#010E0A", fontSize: "14px" }}>
              Belum punya akun?{" "}
              <Typography
                component="span"
                fontWeight={600}
                sx={{
                  cursor: "pointer",
                  background:
                    "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Register Disini
              </Typography>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
