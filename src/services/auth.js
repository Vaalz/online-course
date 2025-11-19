// src/services/auth.js
import { auth, provider } from "../services/Firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

const LoginAuth = async () => {
  try {
    // 1. Login Google
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();

    // 2. Panggil backend sesuai swagger
    const response = await axios.post(
      "http://192.168.100.247:8080/api/auth/firebase/login",
      {
        token: idToken,   // sesuai swagger BE
      }
    );

    console.log("Backend Response:", response.data);

    // 3. WAJIB return
    return response.data;

  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export default LoginAuth;
