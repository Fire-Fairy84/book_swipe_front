import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../config/urls";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const ChatPage = () => {
  const { matchId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }
        const response = await axios.get(
          `${API_BASE_URL}messages/?user1_id=${localStorage.getItem(
            "user_id"
          )}&user2_id=${matchId}`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [matchId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }
      const response = await axios.post(
        `${API_BASE_URL}messages/`,
        { receiver_id: matchId, content: newMessage },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      setMessages([...messages, response.data]);
      setNewMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>
              <strong>{message.sender_name}</strong>: {message.content}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write a message..."
        />
        <button type="submit">Send</button>
      </form>
      <Navbar />
    </div>
  );
};

export default ChatPage;
