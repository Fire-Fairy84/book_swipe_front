import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redireccionar al usuario después de iniciar sesión
import axios from "axios"; // Importar Axios
import "./Login.css"; // Estilos opcionales para el formulario

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Para manejar el estado de carga
  const navigate = useNavigate(); // Hook para redirigir al usuario

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente
    setError(null); // Limpiar errores anteriores
    setLoading(true); // Comenzar el estado de carga

    try {
      // Realizar la solicitud de autenticación a tu API con Axios
      const response = await axios.post("https://api.tuapp.com/login", {
        email,
        password,
      });

      // Suponiendo que el token de autenticación está en `response.data.token`
      localStorage.setItem("token", response.data.token); // Guardar el token en el almacenamiento local

      // Redirigir al usuario a otra página (por ejemplo, la página principal)
      navigate("/"); // Redirige a la página de inicio o cualquier otra
    } catch (error) {
      // Manejar errores (muestra un mensaje de error si falla la autenticación)
      setError(
        error.response?.data?.message ||
          "Error al iniciar sesión, verifica tus credenciales"
      );
    } finally {
      setLoading(false); // Finalizar el estado de carga
    }
  };

  return (
    <div className="login-container">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Cargando..." : "Iniciar Sesión"}
        </button>
      </form>
    </div>
  );
}

export default Login;
