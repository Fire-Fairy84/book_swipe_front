import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #987d7a;
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const FormWrapper = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 300px;
  width: 100%;
  background-color: #bbbbbb;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #007a8c;
  margin-bottom: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 80%;
  padding: 15px;
  margin: 15px;
  margin-bottom: 30px;
  border-radius: 15px;
  border: 1px solid #ddd;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #007a8c;
  color: white;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 35px;
`;

export const LinkStyled = styled(Link)`
  text-align: center;
  display: block;
  color: #33415c;
  font-size: 16px;
  margin-top: 25px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
