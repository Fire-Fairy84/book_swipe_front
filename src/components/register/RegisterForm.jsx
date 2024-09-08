import React, { useState } from "react";
import {
  Container,
  FormWrapper,
  Title,
  Input,
  Button,
  LinkStyled,
} from "../login/loginStyled";
import { useNavigate } from "react-router-dom";
import useApi from "../../services/useApi";
import { API_BASE_URL } from "../../config/urls";
import Header from "../header/Header";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { request, loading, error } = useApi({
    apiEndpoint: `${API_BASE_URL}register/`,
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
      await request(formData);
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err);
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
      <Header />
      <FormWrapper onSubmit={handleSubmit}>
        <Title>Create your account</Title>
        {renderError()}
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <Input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
        <LinkStyled to="/login">Already have an account? Log In</LinkStyled>
      </FormWrapper>
    </Container>
  );
};

export default RegisterForm;
