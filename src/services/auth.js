// src/services/auth.js
import { auth, provider } from "../services/Firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

const LoginAuth = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    const API_URL = import.meta.env.VITE_API_URL;

    console.log("ID Token Firebase:", idToken);

    const response = await axios.post(
      "http://API_URL/auth/firebase-login",
      {},
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    console.log("Backend Response:", response.data);
    alert("Login berhasil!");
  } catch (error) {
    console.error("Login error:", error);
    if (error.code === "auth/popup-blocked") {
      alert("Popup diblokir oleh browser. Tolong izinkan popup untuk situs ini.");
    } else if (error.code === "auth/cancelled-popup-request") {
      console.log("Login dibatalkan karena popup sebelumnya masih terbuka.");
    } else {
      alert("Terjadi kesalahan saat login. Coba lagi.");
    }
  }
};

export default LoginAuth;
