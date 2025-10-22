import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import AuthButton from "../components/Authcompt/ButtonAuth";
import InputField from "../components/Authcompt/InputField";
import GradientButton from "../components/Authcompt/GradientButton";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "1rem",
  textAlign: "center",
  boxShadow: "none",
}));

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Hapus data session ketika masuk ke halaman register
  useEffect(() => {
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("verifySource");
  }, []);

  // Validasi email sederhana
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = () => {
    const newErrors = {};

    // Validasi input
    if (!email) newErrors.email = "Email tidak boleh kosong";
    else if (!validateEmail(email))
      newErrors.email = "Format email tidak valid";

    if (!username) newErrors.username = "Username tidak boleh kosong";
    if (!password) newErrors.password = "Password tidak boleh kosong";
    if (!confirmPassword)
      newErrors.confirmPassword = "Konfirmasi password tidak boleh kosong";
    else if (password !== confirmPassword)
      newErrors.confirmPassword = "Password tidak sama";

    setErrors(newErrors);

    // Jika masih ada error, hentikan
    if (Object.keys(newErrors).length > 0) return;

    // ✅ Simpan data email ke sessionStorage agar VerifyPage tahu siapa user-nya
    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("verifySource", "register"); // Tandai sumber halaman

    console.log("📨 Mengirim kode verifikasi ke:", email);

    // ⏩ Arahkan ke halaman verify
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
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "16px",
                    textAlign: "left",
                    fontStyle: "regular",
                    mb: "10px",
                  }}
                >
                  Username
                </Typography>
                <InputField
                  label={"Username"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  error={!!errors.username}
                  helperText={errors.username}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "black",
                    fontSize: "16px",
                    textAlign: "left",
                    fontStyle: "regular",
                    mb: "10px",
                  }}
                >
                  Email
                </Typography>
                <InputField
                  label={"Email"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
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
            <Box
              sx={{
                width: "100%",
                maxWidth: 560,
              }}
            >
              <AuthButton
                text="Login dengan Google"
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
      </Grid>
    </Box>
  );
}
