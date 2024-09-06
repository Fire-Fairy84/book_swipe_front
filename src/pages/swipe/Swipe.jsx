import React, { useState, useEffect } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { BOOKS_ENDPOINT, MEDIA_BASE_URL } from "../../config/urls"; // Importa MEDIA_BASE_URL
import {
  SwipeContainer,
  CardContainer,
  BookCover,
  BookInfo,
  SwipeButtonContainer,
  SwipeButton,
} from "./swipeStyled";

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
        console.log(response.data); // Almacenar los libros obtenidos
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  const swiped = (direction, bookTitle) => {
    setLastDirection(direction);
    console.log("Swiped " + direction + " on " + bookTitle);
  };

  const outOfFrame = (bookTitle) => {
    console.log(bookTitle + " left the screen");
  };

  return (
    <SwipeContainer class="tinderCards">
      <CardContainer class="tinderCards_container">
        {books.map((book) => (
          <TinderCard
            style={{
              position: "absolute",
              top: 0,
            }}
            key={book.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, book.title)}
            onCardLeftScreen={() => outOfFrame(book.title)}
          >
            <BookCover classname="card">
              <img
                src={book.cover_image}
                alt={`Portada de ${book.title}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
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
