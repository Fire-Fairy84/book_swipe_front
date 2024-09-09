import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

function UserProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Mensajes del Usuario {id}</h1>
      {/* Mostrar libros del usuario */}
      <Navbar />
    </div>
  );
}

export default UserProfile;
