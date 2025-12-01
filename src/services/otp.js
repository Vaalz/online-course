// src/services/otp.js
import axios from "axios";
import { signInWithCustomToken } from "firebase/auth";
import { auth } from "../services/Firebase";

const API_URL = import.meta.env.VITE_API_BASE_URL;

// SEND OTP

export const sendOtp = async (email) => {
  const response = await axios.post(`${API_URL}auth/otp/send`, { email });
  console.log("Email terkirim untuk OTP:", email);

  return response.data;
};

// RESEND OTP
export async function resendOtp(email) {
  try {
    const res = await axios.post(`${API_URL}auth/otp/resend`, { email });
    return res.data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Gagal mengirim ulang OTP");
  }
}
// VERIFY OTP + Firebase custom token + return user/token
export async function verifyOtp(email, otp) {
  try {
    // Verify OTP ke backend
    const verifyResponse = await axios.post(`${API_URL}auth/otp/verify`, {
      email,
      otp,
    });

    // Ambil customToken dan user data
    const customToken = verifyResponse.data.data.customToken;
    const userData = verifyResponse.data.data.user;

    // Login Firebase pakai customToken
    const userCredential = await signInWithCustomToken(auth, customToken);

    // Ambil Firebase ID Token
    const idToken = await userCredential.user.getIdToken();

    // Kirim token ke backend untuk login
    const loginResponse = await axios.post(
      `${API_URL}auth/firebase-login`,
      {},
      { headers: { Authorization: `Bearer ${idToken}` } }
    );

    // Token final dari server
    const token = loginResponse.data.data?.token ?? idToken; // fallback kalau BE belum kirim token
    const role = userData.roles?.[0]?.name;

    return { token, role, userData };
  } catch (err) {
    console.error("Verify OTP error:", err);
    throw err;
  }
}
