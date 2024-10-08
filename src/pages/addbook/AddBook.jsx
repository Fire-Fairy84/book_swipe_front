import React, { useState } from "react";
import axios from "axios";
import { BOOKS_ENDPOINT } from "../../config/urls";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const AddBookContainer = styled.div`
  margin-top: 90px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  margin-top: 20px;
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

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
`;

const FileInput = styled.input`
  padding: 10px;
  border: none;
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
    description: "",
    cover_image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cover_image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("title", formData.title);
      data.append("author", formData.author);
      data.append("description", formData.description);
      if (formData.cover_image) {
        data.append("cover_image", formData.cover_image);
      }

      await axios.post(BOOKS_ENDPOINT, data, {
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/bookshelf");
    } catch (err) {
      if (err.response) {
        console.error("Error adding book:", err.response.data);
      } else {
        console.error("Error adding book:", err.message);
      }
    }
  };

  return (
    <AddBookContainer>
      <Header />
      <h2>Add a New Book</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <Input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Author"
          required
        />
        <TextArea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          rows="4"
          required
        />
        <FileInput
          type="file"
          name="cover_image"
          onChange={handleFileChange}
          accept="image/*"
        />
        <Button type="submit">Add Book</Button>
      </Form>
      <Navbar />
    </AddBookContainer>
  );
};

export default AddBook;
