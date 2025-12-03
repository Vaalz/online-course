// src/components/profile/useProfile.js
import { useEffect, useState } from "react";

export function useProfile(API_URL) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  const FALLBACK = {
    full_name: "User",
    last_name: "",
    email: "example@email.com",
    phone: "-",
    about: "Belum ada deskripsi.",
    avatar: "https://via.placeholder.com/150",
  };

  // GET PROFILE
  const fetchProfile = async () => {
    try {
      const biodataRes = await fetch(`${API_URL}profile/biodata`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      let biodata = null;
      if (biodataRes.ok) {
        biodata = (await biodataRes.json())?.data;
      }

      let finalProfile = biodata;

      if (biodata?.firstName || biodata?.name) {
        const myBioRes = await fetch(`${API_URL}profile/mybiodata`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (myBioRes.ok) {
          finalProfile = (await myBioRes.json())?.data;
        }
      }

      if (!finalProfile) {
        setProfile(FALLBACK);
        return;
      }

      setProfile({
        full_name: finalProfile.firstName || finalProfile.name,
        last_name: finalProfile.lastName || "",
        email: finalProfile.email,
        phone: finalProfile.contact,
        about: finalProfile.description,
        avatar: finalProfile.profile_picture,
      });
    } catch (err) {
      console.error("fetchProfile error:", err);
      setProfile(FALLBACK);
    } finally {
      setLoading(false);
    }
  };

  // PUT PROFILE
  const updateProfile = async (form) => {
    const payload = {
      firstName: form.full_name,
      lastName: form.last_name,
      contact: form.phone,
      description: form.about,
      profile_picture: form.avatar,
      school: "",
      age: 0,
    };

    await fetch(`${API_URL}profile/biodata`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    await fetchProfile(); // refresh setelah update
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return { profile, loading, updateProfile };
}
