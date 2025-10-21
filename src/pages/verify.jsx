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
  const [seconds, setSeconds] = useState(30);
  const [canResend, setCanResend] = useState(false);

  const source = sessionStorage.getItem("verifySource");
  const titleText =
    source === "register"
      ? "Cek email anda untuk aktivasi akun"
      : "Cek email anda untuk masuk";

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("userEmail");
    if (!storedEmail) {
      navigate("/login");
      return;
    }
    setEmail(storedEmail);
  }, [navigate]);
  useEffect(() => {
    if (seconds > 0) {
      setCanResend(false);
      const timerId = setTimeout(() => {
        setSeconds((s) => s - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      setCanResend(true);
    }
  }, [seconds]);
  // ...existing code...

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
    setSeconds(30);
    setCanResend(false);
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
              gap: "30px",
              backgroundColor: "#fff",
              padding: "50px",
            }}
          >
            <Box 
            sx={{
              gap: "20px",
            }}>
              <Typography
                fontSize={36}
                fontStyle={"semibold"}
                fontWeight={600}
                textAlign="center"
                sx={{ color: "#010E0A" }}
              >
                Cek email anda
              </Typography>

              <Typography
                fontSize={24}
                fontStyle={"regular"}
                textAlign="center"
                sx={{ color: "#010E0A", maxWidth: 560 }}
              >
                Masukkan kode 6 digit yang telah dikirim ke <b>{email}</b> untuk
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
              />
            </Box>

            <Box
              sx={{
                width: "100%",
                maxWidth: 560,
              }}
            >
              <GradientButton text="Masuk" onClick={handleVerify} />
            </Box>

            <Typography variant="body2" sx={{ 
              fontSize: "20px",
              fontStyle: "regular",
              color: "gray" 
              }}>
              Belum mendapat kode?{" "}
              {seconds > 0 ? (
                <Typography
                  component="span"
                  fontSize={"20px"}
                  sx={{
                    background:
                      "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 400,
                  }}
                >
                  Kirim ulang kode dalam <b>{seconds}s</b>
                </Typography>
              ) : (
                <Typography
                  component="span"
                  onClick={handleResend}
                  sx={{
                    cursor: "pointer",
                    background:
                      "linear-gradient(90deg, #11DF9E, #7AC2F5, #0072FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 600,
                  }}
                >
                  Kirim ulang kode
                </Typography>
              )}
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
