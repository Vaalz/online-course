import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isNewProfile, setIsNewProfile] = useState(false);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  const getAuthHeaders = () => {
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
  };

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    setError(null);
    setIsNewProfile(false);

    try {
      const res = await axios.get(`${API_URL}profile/mybiodata`, {
        headers: getAuthHeaders(),
      });
      setProfile(res.data.data ?? res.data);
      setIsNewProfile(false);
    } catch (err) {
      console.warn("FETCH PROFILE ERROR:", err.response?.status, err.message);
      if (err.response?.status === 404 || err.response?.status === 400) {
        setIsNewProfile(true);
        setProfile(null);
      } else {
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  }, [token]);





  const createProfile = async (payload) => {
    if (!token) throw new Error("No token");
    try {
      const res = await axios.post(`${API_URL}profile/biodata`, payload, {
        headers: getAuthHeaders(),
      });
      setProfile(res.data.data ?? res.data);
      setIsNewProfile(false);
      return res;
    } catch (err) {
      setError(err);
      throw err;
    }
  };




  

  const updateProfile = async (payload) => {
    const token = localStorage.getItem("token");

    const fd = new FormData();
    Object.keys(payload).forEach((key) => {
      if (payload[key] !== undefined && payload[key] !== null) {
        fd.append(key, payload[key]);
      }
    });

    return axios.put(`${API_URL}profile/biodata`, fd, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    profile,
    loading,
    error,
    isNewProfile,
    fetchProfile,
    createProfile,
    updateProfile,
  };
};
