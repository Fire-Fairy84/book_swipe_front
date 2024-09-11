import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config/urls";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import styled from "styled-components";

// Estilos para la lista de chats
const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  max-width: 600px;
  margin: 0 auto;
`;

const ChatButton = styled.button`
  display: block;
  background-color: #f0f0f0;
  color: #333;
  border: none;
  padding: 15px;
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const NoMatchesMessage = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
`;

const MessagesPage = () => {
  const [matches, setMatches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        // Obtener los matches desde la API
        const response = await axios.get(`${API_BASE_URL}matches/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        // Filtrar matches duplicados basados en el ID de usuario
        const uniqueMatches = response.data.filter(
          (match, index, self) =>
            index ===
            self.findIndex(
              (m) =>
                (m.user1 === match.user1 && m.user2 === match.user2) ||
                (m.user1 === match.user2 && m.user2 === match.user1)
            )
        );

        setMatches(uniqueMatches);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  // Manejo del clic en un chat
  const handleMatchClick = (match) => {
    const userId = localStorage.getItem("user_id");
    const otherUserId =
      match.user1 === parseInt(userId) ? match.user2 : match.user1;
    navigate(`/chat/${otherUserId}`);
  };

  return (
    <div>
      <Header />
      <MessagesContainer>
        <h1>Your Matches</h1>
        {matches.length > 0 ? (
          matches.map((match) => (
            <ChatButton key={match.id} onClick={() => handleMatchClick(match)}>
              Chat with{" "}
              {match.user1 === parseInt(localStorage.getItem("user_id"))
                ? match.user2_name
                : match.user1_name}
            </ChatButton>
          ))
        ) : (
          <NoMatchesMessage>No matches yet!</NoMatchesMessage>
        )}
      </MessagesContainer>
      <Navbar />
    </div>
  );
};

export default MessagesPage;
