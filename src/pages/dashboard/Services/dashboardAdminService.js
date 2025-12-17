import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const checkProfileStatus = async (token) => {
  try {
    const res = await fetch(`${API_URL}profile/mybiodata`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res;
  } catch (err) {
    throw err;
  }
};

export const createProfileBiodata = async (payload, token) => {
  try {
    const res = await axios.post(`${API_URL}profile/biodata`, payload, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};