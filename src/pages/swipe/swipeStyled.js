import styled from "styled-components";

export const SwipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  padding: 0;
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 80px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const BookCover = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookInfo = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;

  h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;

export const SwipeButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 150px;
  margin: 20px 0;
`;

export const SwipeButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 24px;
  background-color: #4b4b4b;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #d0d0d0;
  }
`;
