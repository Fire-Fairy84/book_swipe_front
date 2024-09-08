import React from "react";
import Button from "../../components/button/Button";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom"; // Asegúrate de tener useNavigate

// Estilos para la página MyProfile
const MyProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
`;

const MyProfile = ({ onEditProfile, onMyBooks, onMyAccount }) => {
  const navigate = useNavigate();

  // Agregar la lógica de logout para redirigir al componente de Logout
  const handleLogout = () => {
    navigate("/logout");
  };

  return (
    <MyProfileContainer>
      <Header />
      <Button text="Edit profile" onClick={onEditProfile} />
      <Button text="Book shelf" onClick={onMyBooks} />
      <Button text="My account" onClick={onMyAccount} />
      <Button text="Log out" onClick={handleLogout} />
      <Navbar />
    </MyProfileContainer>
  );
};

export default MyProfile;
