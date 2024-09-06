import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 100vw; /* Ocupa todo el ancho del viewport */
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #007a8c;

  &:hover {
    opacity: 0.8;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: auto;
  margin-right: 20px;
`;
