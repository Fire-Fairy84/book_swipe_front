import React from "react";
import { NavbarContainer, NavButton } from "../navbar/styles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavButton>Button 1</NavButton>
      <NavButton>Button 2</NavButton>
      <NavButton>Button 3</NavButton>
      <NavButton>Button 4</NavButton>
    </NavbarContainer>
  );
};

export default Navbar;
