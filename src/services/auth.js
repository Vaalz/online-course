// src/services/auth.js
import { auth, provider } from "../services/Firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

const LoginAuth = async () => {
  try {
    // 1. Login Google
    const result = await signInWithPopup(auth, provider);
    const API_URL = import.meta.env.VITE_API_BASE_URL;
    const idToken = await result.user.getIdToken();

    // 2. Panggil backend sesuai swagger
    const response = await axios.post(
      `${API_URL}auth/firebase-login`,
      {
        idToken: idToken, // BODY
      },
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      }
    );

    return {
      idToken,
      ...response.data,
    };
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export default LoginAuth;