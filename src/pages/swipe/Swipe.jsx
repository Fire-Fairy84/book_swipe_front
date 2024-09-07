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
} from "../../config/urls"; // Importa los endpoints actualizados
import {
  SwipeContainer,
  CardContainer,
  BookCover,
  BookInfo,
  SwipeButtonContainer,
  SwipeButton,
} from "./swipeStyled";
import "./swipe.css";

const SwipePage = () => {
  const [books, setBooks] = useState([]); // Estado para almacenar los libros
  const [lastDirection, setLastDirection] = useState(null);
  const navigate = useNavigate();

  // Función para obtener los libros desde la API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem("token"); // Obtén el token desde localStorage

        const response = await axios.get(BOOKS_ENDPOINT, {
          headers: {
            Authorization: `Token ${token}`, // Enviar el token en los encabezados
          },
        });
        setBooks(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Función para enviar el "like" cuando el usuario desliza hacia la derecha
  const sendLike = async (bookId) => {
    try {
      const token = localStorage.getItem("token"); // Obtener el token de autenticación
      const userId = localStorage.getItem("user_id"); // Obtener el ID del usuario autenticado desde localStorage

      // Verifica si el ID del usuario está presente
      if (!userId) {
        throw new Error("User ID is not available.");
      }

      const response = await axios.post(
        SWIPES_ENDPOINT, // Endpoint correcto
        {
          user: userId, // Agregar el ID del usuario
          book: bookId, // Agregar el ID del libro
          liked: true, // Indicar que el libro ha recibido un "like"
        },
        {
          headers: {
            Authorization: `Token ${token}`, // Enviar el token en los encabezados
          },
        }
      );
      console.log(`Like registrado para el libro con ID: ${bookId}`);
    } catch (error) {
      console.error(
        "Error al enviar el like:",
        error.response?.data || error.message
      );
    }
  };

  // Función que se ejecuta cuando se hace swipe en una dirección
  const swiped = (direction, bookId) => {
    setLastDirection(direction);
    console.log("Swiped " + direction + " on book with ID " + bookId);

    if (direction === "right") {
      sendLike(bookId); // Enviar el like si se desliza hacia la derecha
    }
  };

  const outOfFrame = (bookTitle) => {
    console.log(bookTitle + " left the screen");
  };

  return (
    <SwipeContainer>
      <Header />
      <CardContainer>
        {books.map((book) => (
          <TinderCard
            className="swipe"
            key={book.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, book.id)} // Pasar el ID del libro a la función
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
