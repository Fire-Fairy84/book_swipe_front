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
      <Title>Welcome to BookSwipe</Title>
      <Content>
        Welcome to our community of book lovers! Got books you no longer read?
        Looking for new literary gems? Here you can trade books with others, and
        find your next great read. Swipe left if it's not your thing, or right
        if you love what you see. If both of you match on books, the trade is
        on! Connect, explore, and let the pages keep turning.
      </Content>
      <Button onClick={handleLoginClick}>Let's explore!</Button>
    </HomeContainer>
  );
};

export default Home;
