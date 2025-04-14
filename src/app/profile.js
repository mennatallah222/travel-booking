"use client"
import { useEffect } from "react";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  return <h1>Your Profile</h1>;
};

export default Profile;