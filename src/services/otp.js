// for verify page

// src/services/otp.js
const API_URL = import.meta.env.VITE_API_BASE_URL;

export async function sendOtp(email) {
  const res = await fetch(`${API_URL}auth/otp/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  if (!res.ok) {
    throw new Error("Gagal mengirim OTP");
  }

  return res.json();
}

export async function resendOtp(email) {
  const res = await fetch(`${API_URL}auth/otp/resend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  if (!res.ok) {
    throw new Error("Gagal mengirim ulang OTP");
  }

  return res.json();
}

export async function verifyOtp(email, otp) {
  const res = await fetch(`${API_URL}auth/otp/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp })
  });

  if (!res.ok) {
    throw new Error("Kode OTP salah atau kadaluarsa");
  }

  return res.json();
}
