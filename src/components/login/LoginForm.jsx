import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormWrapper,
  Title,
  Input,
  Button,
  LinkStyled,
} from "../login/loginStyled";
import useApi from "../../services/useApi";
import { API_BASE_URL } from "../../config/urls";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate(); // Hook para la navegación
  const { request, loading, error } = useApi({
    apiEndpoint: `${API_BASE_URL}login/`,
    method: "POST",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await request(formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", formData.username);

      // Redirige a la página de Swipe tras un login exitoso
      navigate("/swipe"); // Redirige al usuario a la página de swipe
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  const renderError = () => {
    if (!error) return null;
    if (typeof error === "object") {
      return (
        <ul style={{ color: "red" }}>
          {Object.entries(error).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      );
    }
    return <p style={{ color: "red" }}>{error}</p>;
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Log In</Title>
        {renderError()}
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Logging In..." : "Log In"}
        </Button>
        <LinkStyled to="/register">Don't have an account? Register</LinkStyled>
      </FormWrapper>
    </Container>
  );
};

export default LoginForm;
