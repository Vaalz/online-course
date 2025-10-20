import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import AuthButton from "../components/ButtonAuth";
import { Typography, Divider } from "@mui/material";
import InputField from "../components/InputField";
import GradientButton from "../components/GradientButton";
import ForgotPasswordDialog from "../components/ForgotPasswordDialog";

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

export default function RowAndColumnSpacing() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [openForgot, setOpenForgot] = useState(false); 

  const handleLogin = () => {
    let newErrors = { username: "", password: "" };

    if (!username.trim()) newErrors.username = "Username tidak boleh kosong";
    if (!password.trim()) newErrors.password = "Password tidak boleh kosong";

    setErrors(newErrors);

    if (!newErrors.username && !newErrors.password) {
      alert("Login berhasil ");
    }
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
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              px: { xs: 4, md: 8 },
              gap: 2,
              backgroundColor: "#fff",
            }}
          >
            {/* Judul dan Deskripsi */}
            <Box
              sx={{
                width: "100%",
                maxWidth: 480,
                textAlign: "left",
              }}
            >
              <Typography
                fontSize={36}
                fontWeight={500}
                textAlign={"center"}
                sx={{ mb: 1, alignSelf: "center", color: "#010E0A" }}
              >
                Halaman Login
              </Typography>

              <Typography
                fontWeight={0}
                fontSize={20}
                sx={{
                  mt: 2,  
                  color: "#010E0A",
                  lineHeight: 1.4,
                  maxWidth: 480,
                }}
              >
                Masukkan username dan password anda untuk melakukan login
              </Typography>
            </Box>

            {/* Inputan */}
            <Box
              sx={{
                width: "100%",
                maxWidth: 480,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  mt: 2,
                  color: "#010E0A",
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

              <Typography
                sx={{
                  mt: 2,
                  color: "#010E0A",
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

              {/* 🔹 Tambah teks “Lupa password?” rata kanan */}
              <Typography
                      sx={{
                        mt: 1,
                        cursor: "pointer",
                        background: "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        alignSelf: "flex-end",
                        fontWeight: 550,
                      }}
                      onClick={() => setOpenForgot(true)} 
                    >
                      Lupa password?
              </Typography>
              <ForgotPasswordDialog
        open={openForgot}
        onClose={() => setOpenForgot(false)}
      />
            </Box>

            {/* Tombol Masuk */}
            <Box sx={{ width: "100%", maxWidth: 480, mt: 2 }}>
              <GradientButton text="Masuk" onClick={handleLogin} />
            </Box>

            {/* Garis Pembatas */}
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

            {/* Login dengan Google */}
            <Box sx={{ width: "100%", maxWidth: 480 }}>
              <AuthButton text="Login dengan Google" icon={<GoogleIcon />} />
            </Box>

            {/* Sudah punya akun */}
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
