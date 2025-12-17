import { useState, useEffect } from "react";
import { checkProfileStatus, createProfileBiodata } from "../../dashboard/Services/dashboardAdminService";

export const useDashboardAdmin = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [isProfileRequired, setIsProfileRequired] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) return (window.location.href = "/");
    if (role !== "admin") return (window.location.href = "/forbidden");

    const fetchData = async () => {
      try {
        const res = await checkProfileStatus(token);
        if (res.status === 500) setIsProfileRequired(true);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateProfile = async (payload) => {
    const token = localStorage.getItem("token");
    try {
      await createProfileBiodata(payload, token);
      setIsProfileRequired(false);
    } catch (err) {
      alert("Gagal menyimpan profil");
    }
  };

  return {
    loading,
    stats,
    isProfileRequired,
    handleCreateProfile
  };
};