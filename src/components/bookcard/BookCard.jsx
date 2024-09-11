import React from "react";
import styled from "styled-components";
import { MEDIA_BASE_URL } from "../../config/urls";

const CardContainer = styled.div`
  background-color: #313131;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
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
  color: #a3a3a3;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
`;

const BookCard = ({ book, onDelete }) => {
  return (
    <CardContainer>
      <DeleteButton onClick={() => onDelete(book.id)}>Delete</DeleteButton>
      <BookImage
        src={`${MEDIA_BASE_URL}${book.cover_image}`}
        alt={book.title}
        style={{
          objectFit: "contain",
        }}
      />
      <BookTitle>{book.title}</BookTitle>
      <BookAuthor>{book.author}</BookAuthor>
    </CardContainer>
  );
};

export default BookCard;
