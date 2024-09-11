import React from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams();
  return (
    <div>
      <h1>Descripción del Libro {id}</h1>
    </div>
  );
}

export default BookDetail;
