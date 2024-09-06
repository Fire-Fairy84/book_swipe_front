import React, { useState, useEffect } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { BOOKS_ENDPOINT } from "../../config/urls";
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
        setBooks(response.data); // Almacenar los libros obtenidos
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
    <SwipeContainer>
      <Header />
      <CardContainer>
        {books.map((book) => (
          <TinderCard
            key={book.id}
            onSwipe={(dir) => swiped(dir, book.title)}
            onCardLeftScreen={() => outOfFrame(book.title)}
          >
            <BookCover>
              <img
                src={`http://127.0.0.1:8000${book.cover_image}`} // Usamos la imagen del libro
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
