import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { HomeContainer, Logo, Title, Content, Button } from "./homeStyled";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <HomeContainer>
      <Logo src="public/utils/images/logo.png" alt="Logo" />{" "}
      {/* Ruta de la imagen del logo */}
      <Title>Bienvenido/a a BookSwipe</Title>
      <Content>
        ExpUt aliqua dolor elit proident ex aliquip commodo laborum cillum ad.
        Reprehenderit irure irure voluptate et commodo. Non ut amet irure cillum
        culpa adipisicing veniam id aute eu esse tempor dolore mollit.ora libros
        para intercambiar con otros usuarios. Inicia sesión para comenzar.
      </Content>
      <Button onClick={handleLoginClick}>Entrar</Button>
      <Navbar />
    </HomeContainer>
  );
};

export default Home;
