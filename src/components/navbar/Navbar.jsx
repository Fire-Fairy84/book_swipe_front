import React from "react";
import { NavbarContainer, NavButton } from "./navbarStyled";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavButton onClick={() => navigate("/profile")}>Profile</NavButton>
      <NavButton>Button 2</NavButton>
      <NavButton>Button 3</NavButton>
      <NavButton>Button 4</NavButton>
    </NavbarContainer>
  );
};

export default Navbar;
