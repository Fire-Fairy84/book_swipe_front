import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-bottom: 60px; /* Espacio para el Navbar */
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #007a8c;
  margin-bottom: 10px;
  text-align: center;
`;

export const Content = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #333;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #007a8c;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    opacity: 0.8;
  }
`;
