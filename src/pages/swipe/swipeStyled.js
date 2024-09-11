import styled from "styled-components";

export const SwipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding: 0;
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 80px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const BookCover = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookInfo = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const SwipeButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 150px;
  margin: 20px 0;
`;

export const SwipeButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 30px; // Tamaño del ícono
  background-color: #4b4b4b;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #d0d0d0;
  }
`;

// Nuevo estilo para el mensaje de match
export const MatchMessage = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ff5a5f;
  color: white;
  font-size: 24px;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  text-align: center;
  width: 90%; // Ajustar para móviles
  max-width: 400px; // Limitar tamaño máximo
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  animation: fade-in-out 3s ease-in-out; // Añadir una animación para el mensaje
`;

// Animación para desvanecer el mensaje de match
export const fadeInOut = styled.div`
  @keyframes fade-in-out {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
