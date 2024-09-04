import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Estilos específicos para la navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/swipe">Swipe</Link>
        </li>
        <li>
          <Link to="/account">Mi Cuenta</Link>
        </li>
        <li>
          <Link to="/profile">Perfil</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
