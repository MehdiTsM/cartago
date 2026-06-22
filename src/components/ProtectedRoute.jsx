// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("loading"); // "loading" | "auth" | "unauth"

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setStatus(user ? "auth" : "unauth");
    });
    return unsub;
  }, []);

  if (status === "loading") return null;
  if (status === "unauth") return <Navigate to="/login" replace />;
  return children;
}