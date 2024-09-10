import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import UserNotification from "../../components/userNotification/UserNotification";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post("https://api.tuapp.com/register", {
        username,
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);

      // Mostrar notificación de éxito
      setIsSuccess(true);
      setNotificationMessage("Register successful!");
      setShowNotification(true);

      // Retrasar la redirección al login hasta que se muestre la notificación
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setIsSuccess(false);
      setNotificationMessage(
        error.response?.data?.message || "Register error, verify the entry data"
      );
      setShowNotification(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <UserNotification
        message={notificationMessage}
        success={isSuccess}
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
      <h1>Create an account</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="register-button" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Register;
