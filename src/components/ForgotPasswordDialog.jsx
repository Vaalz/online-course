import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import GradientButton from "./GradientButton";
import InputField from "./InputField";

export default function ForgotPasswordDialog({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  // ✅ Validasi email benar
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const sendCode = async () => {
    if (!email) return setError("Email tidak boleh kosong");
    if (!validateEmail(email))
      return setError("Format email tidak valid (contoh: nama@gmail.com)");

    setError("");
    console.log("Kirim kode ke backend:", email);
    // Backend endpoint: POST /auth/forgot-password { email }
    setStep(2);
  };

  const verifyCode = async () => {
    if (code.some((c) => c === "")) return setError("Semua kode harus diisi");
    setError("");
    console.log("Verifikasi kode:", code.join(""));
    // Backend endpoint: POST /auth/verify-code { email, code }
    setStep(3);
  };

  const handleReset = async () => {
    if (!password) return setError("Password tidak boleh kosong");
    if (password.length < 8)
      return setError("Password minimal 8 karakter");
    if (password !== confirm)
      return setError("Konfirmasi password tidak sama");

    setError("");
    console.log("Reset password:", password);
    // Backend endpoint: POST /auth/reset-password { email, password }
    setStep(4);
  };

  const handleChangeCode = (value, index) => {
    if (!/^[0-9]*$/.test(value)) return; // hanya angka
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);
  };

  const resetAll = () => {
    setStep(1);
    setEmail("");
    setCode(["", "", "", "", "", ""]);
    setPassword("");
    setConfirm("");
    setError("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={resetAll}>
      <DialogContent
        sx={{
          p: 4,
          minWidth: 400,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "16px",
        }}
      >
        {/* STEP 1 - Masukkan Email */}
        {step === 1 && (
          <>
            <DialogTitle>Masukkan Email Anda</DialogTitle>
            <InputField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              helperText={error}
              sx={{ mt: 2, mb: 3 }}
            />
            <GradientButton
              text="Dapatkan Kode"
              onClick={sendCode}
              disabled={!email}
              sx={{
                mt: 2,
                opacity: !email ? 0.5 : 1,
                cursor: !email ? "not-allowed" : "pointer",
              }}
            />
          </>
        )}

        {/* STEP 2 - Masukkan Kode */}
        {step === 2 && (
          <>
            <DialogTitle>Masukkan Kode Verifikasi</DialogTitle>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Kode telah dikirim ke <strong>{email}</strong>
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "center",
                mb: 2,
              }}
            >
              {code.map((c, i) => (
                <TextField
                  key={i}
                  value={c}
                  onChange={(e) => handleChangeCode(e.target.value, i)}
                  inputProps={{
                    maxLength: 1,
                    style: {
                      textAlign: "center",
                      width: "2rem",
                      height: "2.5rem",
                      fontSize: "18px",
                    },
                  }}
                />
              ))}
            </Box>
            {error && (
              <Typography color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <GradientButton
              text="Lanjutkan"
              onClick={verifyCode}
              disabled={code.some((c) => c === "")}
              sx={{
                mt: 2,
                opacity: code.some((c) => c === "") ? 0.5 : 1,
              }}
            />
          </>
        )}

        {/* STEP 3 - Ubah Password */}
        {step === 3 && (
          <>
            <DialogTitle>Ubah Password</DialogTitle>
            <InputField
              label="Password Baru"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mt: 2 }}
            />
            <InputField
              label="Konfirmasi Password"
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              sx={{ mt: 2 }}
            />
            {error && (
              <Typography color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <GradientButton
              text="Ubah Password"
              onClick={handleReset}
              disabled={!password || !confirm}
              sx={{
                mt: 3,
                opacity: !password || !confirm ? 0.5 : 1,
              }}
            />
          </>
        )}

        {/* STEP 4 - Berhasil */}
        {step === 4 && (
          <>
            <DialogTitle>Password Berhasil Diubah 🎉</DialogTitle>
            <GradientButton text="Tutup" onClick={resetAll} sx={{ mt: 3 }} />
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
