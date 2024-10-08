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
import UserNotification from "../../components/userNotification/UserNotification";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();
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
      localStorage.setItem("user_id", response.data.user_id);

      setIsSuccess(true);
      setNotificationMessage("Login successful!");
      setShowNotification(true);

      setTimeout(() => {
        navigate("/swipe");
      }, 2000);
    } catch (err) {
      setIsSuccess(false);
      setNotificationMessage("Login failed. Please check your credentials.");
      setShowNotification(true);
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
      <UserNotification
        message={notificationMessage}
        success={isSuccess}
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
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
