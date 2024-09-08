import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Estilo para el botón
const StyledButton = styled.button`
  background-color: #007a8c;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  width: 80%;
  margin: 10px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Componente Button que recibe props
const Button = ({ text, onClick }) => {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
