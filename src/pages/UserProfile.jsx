import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { id } = useParams();
  return (
    <div>
      <h1>Libros del Usuario {id}</h1>
      {/* Mostrar libros del usuario */}
    </div>
  );
}

export default UserProfile;
