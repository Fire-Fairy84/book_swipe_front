import React from "react";
import { useParams } from "react-router-dom";

function Match() {
  const { id } = useParams();
  return (
    <div>
      <h1>¡Tienes un Match con el Usuario {id}!</h1>
    </div>
  );
}

export default Match;
