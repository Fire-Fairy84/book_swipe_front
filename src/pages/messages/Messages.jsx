import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config/urls";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

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
        const response = await axios.get(`${API_BASE_URL}matches/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  const handleMatchClick = (match) => {
    const userId = localStorage.getItem("user_id");
    const otherUserId = match.user1 === userId ? match.user2 : match.user1;
    navigate(`/chat/${otherUserId}`);
  };

  return (
    <div>
      <Header />
      <h1>Your Matches</h1>
      <div>
        {matches.length > 0 ? (
          matches.map((match) => (
            <button key={match.id} onClick={() => handleMatchClick(match)}>
              Chat with{" "}
              {match.user1 === localStorage.getItem("user_id")
                ? match.user2_name
                : match.user1_name}
            </button>
          ))
        ) : (
          <p>No matches yet!</p>
        )}
      </div>
      <Navbar />
    </div>
  );
};

export default MessagesPage;
