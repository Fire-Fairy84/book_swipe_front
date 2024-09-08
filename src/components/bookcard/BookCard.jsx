import React from "react";
import styled from "styled-components";

// Estilos para la tarjeta del libro
const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const BookImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const BookTitle = styled.h3`
  font-size: 16px;
  margin: 10px 0;
`;

const BookAuthor = styled.p`
  font-size: 14px;
  color: #555;
`;

const BookCard = ({ book }) => {
  return (
    <CardContainer>
      <BookImage src={book.cover_image} alt={`Cover of ${book.title}`} />
      <BookTitle>{book.title}</BookTitle>
      <BookAuthor>{book.author}</BookAuthor>
    </CardContainer>
  );
};

export default BookCard;
