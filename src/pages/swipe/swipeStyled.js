import styled from "styled-components";

export const SwipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 0;
  overflow: hidden;
  position: relative;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%; /* Ocupa todo el ancho */
  max-width: 400px;
  height: 450px; /* Ajustamos la altura */
  margin-top: 60px; /* Deja espacio para el header */
`;

export const BookCover = styled.div`
  background-color: #e0e0e0;
  width: 100%; /* Ancho total del contenedor */
  height: 100%; /* Altura completa */
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookInfo = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

export const SwipeButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 150px;
  margin: 20px 0;
`;

export const SwipeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  background-color: #f5f5f5;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #d0d0d0;
  }
`;
