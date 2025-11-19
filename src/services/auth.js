// src/services/auth.js
import { auth, provider } from "../services/Firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

const LoginAuth = async () => {
  try {
    // 1. Login Google
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();
    console.log("ID Token Firebase:", idToken);

    // 2. Panggil backend sesuai swagger
    const response = await axios.post(
      "http://192.168.100.247:8080/api/auth/firebase-login",
      {
        idToken: idToken, // BODY
      },
      {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
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
