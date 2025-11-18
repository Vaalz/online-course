import axios from "axios";

export async function getStudentDashboard() {
  const token = localStorage.getItem("token"); // ambil token

  if (!token) {
    throw new Error("Token tidak ditemukan. User belum login");
  }

  const response = await axios.get(
    "http://192.168.100.247:8080/api/dashboard/student", // ganti PORT sesuai backend
    {
      headers: {
        Authorization: `Bearer ${token}`, // kirim token ke BE
      },
    }
  );

  return response.data;
}
