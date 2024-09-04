import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redireccionar al usuario después del registro
import axios from "axios"; // Importamos Axios para hacer las solicitudes HTTP
import "./Register.css"; // Estilos opcionales para el formulario

function Register() {
  const [username, setUsername] = useState("");
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
      // Realizar la solicitud de registro a tu API usando Axios
      const response = await axios.post("https://api.tuapp.com/register", {
        username,
        email,
        password,
      });

      // Suponiendo que el token de autenticación está en `response.data.token`
      localStorage.setItem("token", response.data.token); // Guardar el token en el almacenamiento local

      // Redirigir al usuario a otra página (por ejemplo, la página de inicio o login)
      navigate("/login"); // Redirige al login o a cualquier otra ruta
    } catch (error) {
      // Manejar errores (mostrar un mensaje de error si falla el registro)
      setError(
        error.response?.data?.message ||
          "Error en el registro, verifica los datos ingresados"
      );
    } finally {
      setLoading(false); // Finalizar el estado de carga
    }
  };

  return (
    <div className="register-container">
      <h1>Crear Cuenta</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
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
        <button type="submit" className="register-button" disabled={loading}>
          {loading ? "Cargando..." : "Registrar"}
        </button>
      </form>
    </div>
  );
}

export default Register;
