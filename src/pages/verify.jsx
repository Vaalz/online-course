import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GradientButton from "../components/GradientButton";
import InputField from "../components/InputField";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "1rem",
  textAlign: "center",
  boxShadow: "none",
}));

export default function VerifyPage() {
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // ✅ Cegah akses langsung ke /verify tanpa email
  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (!storedEmail) {
      navigate("/login");
      return;
    }
    setEmail(storedEmail);
  }, [navigate]);

  const handleVerify = () => {
    if (code.trim().length !== 6) {
      alert("Kode harus 6 digit");
      return;
    }
    console.log(`Verifikasi kode ${code} untuk email ${email}`);
    // TODO: panggil API verifikasi OTP
  };

  const handleResend = () => {
    console.log(`Kirim ulang kode ke ${email}`);
    // TODO: panggil API resend OTP
  };

  if (!email) return null;

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
            <Typography variant="h5" fontWeight={600} textAlign="center" sx={{ color: "#010E0A" }}>
              Cek email anda
            </Typography>

            <Typography variant="body2" textAlign="center" sx={{ color: "#010E0A", maxWidth: 400 }}>
              Masukkan kode 6 digit yang telah dikirim ke <b>{email}</b> untuk masuk
            </Typography>

            <Box
              sx={{
                width: "100%",
                maxWidth: 480,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <InputField
                label="Kode 6-digit"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="text"
              />
            </Box>
            <Box sx={{ width: "100%", maxWidth: 480, mt: 2}}>
                <GradientButton
                text="Masuk"
                onClick={handleVerify}
                />
            </Box>


            <Typography variant="body2" sx={{ mt: 2, color: "gray" }}>
              Belum mendapat kode?{" "}
              <Typography
                component="span"
                sx={{
                  cursor: "pointer",
                  color: "#0072FF",
                  fontWeight: 500,
                }}
                onClick={handleResend}
              >
                Kirim ulang kode
              </Typography>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
