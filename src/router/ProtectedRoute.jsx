import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");

  if (!token || !userId) {
    // Si no hay token o user_id, redirigir al login
    return <Navigate to="/login" />;
  }

  // Si el token y user_id están presentes, permitir acceso a la ruta protegida
  return children;
};

export default ProtectedRoute;
