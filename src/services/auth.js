// src/services/auth.js
import { auth, provider } from "../services/Firebase";
import { signInWithPopup } from "firebase/auth";
import axios from "axios";

const LoginAuth = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();

    const API_URL = import.meta.env.VITE_API_URL;
    console.log("API_URL:", API_URL);

    // sesuai swagger:
    // POST /api/auth/firebase/login
    const response = await axios.post(

      `${API_URL}/api/auth/firebase/login`,
      {
        token: idToken, // BE expects this
      }
    );

    console.log("Backend Response:", response.data);

    return response.data;  // kembalikan data sesuai BE

  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export default LoginAuth;
