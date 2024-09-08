import React from "react";
import { NavbarContainer, NavButton } from "./navbarStyled";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavButton onClick={() => navigate("/profile")}>Profile</NavButton>
      <NavButton onClick={() => navigate("/messages")}>Messages</NavButton>
      <NavButton onClick={() => navigate("/favorites")}>Favorites</NavButton>
      <NavButton onClick={() => navigate("/mysettings")}>Settings</NavButton>
    </NavbarContainer>
  );
};

export default Navbar;
