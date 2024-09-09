import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL, BOOKS_ENDPOINT } from "../../config/urls";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BookCard from "../../components/bookcard/BookCard";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const BookShelfContainer = styled.div`
  margin-top: 90px;
  padding: 20px, 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  width: 100%;
  max-width: 1200px;
`;

const AddBookButton = styled.button`
  background-color: #007a8c;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005f6b;
  }
`;

const BookShelf = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${API_BASE_URL}mybooks/`, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });
        setBooks(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response && err.response.data && err.response.data.detail) {
          setError(err.response.data.detail);
        } else {
          setError(err.message);
        }
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Función para eliminar un libro
  const handleDelete = async (bookId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${BOOKS_ENDPOINT}${bookId}/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });

      // Actualizar la lista de libros después de eliminar uno
      setBooks(books.filter((book) => book.id !== bookId));
    } catch (err) {
      console.error("Error deleting book:", err.message);
    }
  };

  if (loading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <BookShelfContainer>
      <Header />
      <h2>My Book Shelf</h2>
      <AddBookButton onClick={() => navigate("/addbook")}>
        Add New Book
      </AddBookButton>
      <GridContainer>
        {books.length > 0 ? (
          books.map((book) => (
            <BookCard key={book.id} book={book} onDelete={handleDelete} />
          ))
        ) : (
          <p>You have no books in your shelf.</p>
        )}
      </GridContainer>
      <Navbar />
    </BookShelfContainer>
  );
};

export default BookShelf;
