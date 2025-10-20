import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import AuthButton from "../components/ButtonAuth";
import { Typography, Divider } from "@mui/material";
import InputField from "../components/InputField";
import GradientButton from "../components/GradientButton";
import { useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const [errors, setErrors] = useState({});

  //  Fungsi validasi email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = () => {
    setTouched(true);
    const newErrors = {};

    if (!email) newErrors.email = "Email tidak boleh kosong";
    else if (!validateEmail(email)) newErrors.email = "Format email tidak valid";

    if (!username) newErrors.username = "Username tidak boleh kosong";
    if (!password) newErrors.password = "Password tidak boleh kosong";
    if (!confirmPassword)
      newErrors.confirmPassword = "Konfirmasi password tidak boleh kosong";
    else if (password && confirmPassword !== password)
      newErrors.confirmPassword = "Password tidak sama";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("Berhasil daftar:", { email, username, password });
    alert(`Akun berhasil dibuat untuk ${username}`);
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
            {/*  Judul */}
            <Typography
                fontSize={36}
                fontWeight={500}
                textAlign={"center"}
                sx={{ mb: 1, alignSelf: "center", color: "#010E0A" }}
            >
              Halaman Register
            </Typography>

            {/*  Input Fields */}
            <Box
              sx={{
                width: "100%",
                maxWidth: 480,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              {/* Email */}
              <Typography
                sx={{
                  mt: 2,
                  color: "black",
                  fontSize: "14px",
                  alignSelf: "flex-start",
                }}
              >
                Email
              </Typography>
              <InputField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={() => setTouched(true)}
                error={!!errors.email}
                helperText={errors.email}
              />

              {/* Username */}
              <Typography
                sx={{
                  mt: 2,
                  color: "black",
                  fontSize: "14px",
                  alignSelf: "flex-start",
                }}
              >
                Username
              </Typography>
              <InputField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                error={!!errors.username}
                helperText={errors.username}
              />

              {/* Password */}
              <Typography
                sx={{
                  mt: 2,
                  color: "black",
                  fontSize: "14px",
                  alignSelf: "flex-start",
                }}
              >
                Password
              </Typography>
              <InputField
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
              />

              {/* Konfirmasi Password */}
              <Typography
                sx={{
                  mt: 2,
                  color: "black",
                  fontSize: "14px",
                  alignSelf: "flex-start",
                }}
              >
                Konfirmasi Password
              </Typography>
              <InputField
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
              />
            </Box>

            {/*  Tombol daftar */}
            <Box sx={{ width: "100%", maxWidth: 480, mt: 2}}>
              <GradientButton text="Daftar" onClick={handleRegister} />
            </Box>

            {/*  Pembatas */}
            <Box
              sx={{
                width: "100%",
                maxWidth: 480,
                display: "flex",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Divider sx={{ flex: 1 }} />
              <Typography sx={{ mx: 2, color: "gray", fontSize: "14px" }}>
                Atau
              </Typography>
              <Divider sx={{ flex: 1 }} />
            </Box>

            {/*  Login Google */}
            <Box sx={{ width: "100%", maxWidth: 480 }}>
              <AuthButton text="Login dengan Google" icon={<GoogleIcon />} />
            </Box>

            {/*  Sudah punya akun */}
            <Typography sx={{ mt: 3, color: "#010E0A", fontSize: "14px" }}>
              Sudah punya akun?{" "}
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
                Login Disini
              </Typography>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
