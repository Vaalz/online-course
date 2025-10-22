// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD17tB8CU9oIq4GgXxFvnVmhjlJsunaJ-0",
  authDomain: "course-online-b74c3.firebaseapp.com",
  projectId: "course-online-b74c3",
  storageBucket: "course-online-b74c3.firebasestorage.app",
  messagingSenderId: "757108399553",
  appId: "1:757108399553:web:555bd9d759593f8ff12340",
  measurementId: "G-4RF7NB6T91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🧩 Baru dipakai di sini
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();