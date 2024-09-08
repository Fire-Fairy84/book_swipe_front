import React, { useState } from "react";
import axios from "axios";
import { BOOKS_ENDPOINT } from "../../config/urls";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const AddBookContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Button = styled.button`
  background-color: #007a8c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #005f6b;
  }
`;

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    cover_image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(BOOKS_ENDPOINT, formData, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      navigate("/bookshelf"); // Redirigir a la estantería después de añadir el libro
    } catch (err) {
      console.error("Error adding book:", err.message);
    }
  };

  return (
    <AddBookContainer>
      <h2>Add a New Book</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <Input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <Input
          type="text"
          name="cover_image"
          value={formData.cover_image}
          onChange={handleChange}
          placeholder="Cover Image URL"
        />
        <Button type="submit">Add Book</Button>
      </Form>
    </AddBookContainer>
  );
};

export default AddBook;
