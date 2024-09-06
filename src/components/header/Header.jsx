import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, BackButton, Logo } from "./headerStyled";

const Header = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Regresa a la página anterior
  };

  return (
    <HeaderContainer>
      <BackButton onClick={handleBack}>Atrás</BackButton>
      <Logo src="public\utils\images\logo.png" alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
