import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Estilos globales
import Layout from "./layout/Layout"; // Importamos Layout como el principal

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);
