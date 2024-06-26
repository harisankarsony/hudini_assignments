"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  return isAuthenticated;
};

export default useAuth;
