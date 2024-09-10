import React, { useState, useEffect } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {
  BOOKS_ENDPOINT,
  SWIPES_ENDPOINT,
  MEDIA_BASE_URL,
} from "../../config/urls";
import {
  SwipeContainer,
  CardContainer,
  BookCover,
  BookInfo,
  SwipeButtonContainer,
  SwipeButton,
  MatchMessage,
} from "./swipeStyled";
import "./swipe.css";

const SwipePage = () => {
  const [books, setBooks] = useState([]);
  const [lastDirection, setLastDirection] = useState(null);
  const [receivedLikes, setReceivedLikes] = useState([]); // Para almacenar los likes recibidos
  const [matchMessage, setMatchMessage] = useState(""); // Para almacenar el mensaje de match
  const navigate = useNavigate();

  // Función para obtener los libros desde la API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_id");

        const response = await axios.get(BOOKS_ENDPOINT, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        // Filtrar los libros que no pertenecen al usuario autenticado
        const filteredBooks = response.data.filter(
          (book) => book.user !== parseInt(userId)
        );
        setBooks(filteredBooks);

        // También obtener los likes recibidos
        const receivedLikesResponse = await axios.get(
          `${SWIPES_ENDPOINT}?received_likes=true`, // Endpoint para obtener likes recibidos
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setReceivedLikes(receivedLikesResponse.data);
      } catch (error) {
        console.error("Error fetching books or likes:", error);
      }
    };

    fetchBooks();
  }, []);

  // Función para enviar el "like" cuando el usuario desliza hacia la derecha
  const sendLike = async (bookId, bookOwnerId) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("user_id");

      if (!userId) {
        throw new Error("User ID is not available.");
      }

      // Enviar like al libro
      const response = await axios.post(
        SWIPES_ENDPOINT,
        {
          user: userId,
          book: bookId,
          liked: true,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(`Like registered for the book with ID: ${bookId}`);

      // Verificar si existe un match
      checkForMatch(bookOwnerId);
    } catch (error) {
      console.error(
        "Error trying to send the like:",
        error.response?.data || error.message
      );
    }
  };

  // Función para verificar si existe un match
  const checkForMatch = (bookOwnerId) => {
    // Verificar si el usuario propietario del libro ha dado like a alguno de los libros del usuario autenticado
    const matchFound = receivedLikes.some(
      (like) => like.user === bookOwnerId && like.liked === true
    );

    if (matchFound) {
      setMatchMessage("¡Has hecho match con el usuario!");
      setTimeout(() => {
        setMatchMessage("");
      }, 2500);
    }
  };

  // Función que se ejecuta cuando se hace swipe en una dirección
  const swiped = (direction, bookId, bookOwnerId) => {
    setLastDirection(direction);
    console.log("Swiped " + direction + " on book with ID " + bookId);

    if (direction === "right") {
      sendLike(bookId, bookOwnerId); // Pasar también el ID del dueño del libro
    }
  };

  const outOfFrame = (bookTitle) => {
    console.log(bookTitle + " left the screen");
  };

  return (
    <SwipeContainer>
      <Header />
      {matchMessage && <MatchMessage>{matchMessage}</MatchMessage>}{" "}
      {/* Mostrar mensaje de match */}
      <CardContainer>
        {books.map((book) => (
          <TinderCard
            className="swipe"
            key={book.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, book.id, book.user)} // Pasar el ID del dueño del libro
            onCardLeftScreen={() => outOfFrame(book.title)}
          >
            <BookCover>
              <img
                src={book.cover_image}
                alt={`Portada de ${book.title}`}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "contain",
                }}
              />
            </BookCover>
            <BookInfo>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </BookInfo>
          </TinderCard>
        ))}
      </CardContainer>
      <SwipeButtonContainer>
        <SwipeButton>X</SwipeButton>
        <SwipeButton>V</SwipeButton>
      </SwipeButtonContainer>
      <Navbar />
    </SwipeContainer>
  );
};

export default SwipePage;
