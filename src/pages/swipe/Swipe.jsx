import React, { useState, useEffect } from "react";
import axios from "axios";
import TinderCard from "react-tinder-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {
  BOOKS_ENDPOINT,
  SWIPES_ENDPOINT,
  MEDIA_BASE_URL,
} from "../../config/urls";
import {
  SwipeContainer,
  CardContainer,
  BookCover,
  BookInfo,
  SwipeButtonContainer,
  SwipeButton,
  MatchMessage,
} from "./swipeStyled";
import "./swipe.css";

const SwipePage = () => {
  const [books, setBooks] = useState([]);
  const [lastDirection, setLastDirection] = useState(null);
  const [receivedLikes, setReceivedLikes] = useState([]);
  const [matchMessage, setMatchMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("user_id");

        const response = await axios.get(BOOKS_ENDPOINT, {
          headers: {
            Authorization: `Token ${token}`,
          },
        });

        const filteredBooks = response.data.filter(
          (book) => book.user !== parseInt(userId)
        );
        setBooks(filteredBooks);

        const receivedLikesResponse = await axios.get(
          `${SWIPES_ENDPOINT}?received_likes=true`,
          {
            headers: {
              Authorization: `Token ${token}`,
            },
          }
        );
        setReceivedLikes(receivedLikesResponse.data);
      } catch (error) {
        console.error("Error fetching books or likes:", error);
      }
    };

    fetchBooks();
  }, []);

  const sendLike = async (bookId, bookOwnerId, bookOwnerName) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("user_id");

      if (!userId) {
        throw new Error("User ID is not available.");
      }

      const response = await axios.post(
        SWIPES_ENDPOINT,
        {
          user: userId,
          book: bookId,
          liked: true,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(`Like registered for the book with ID: ${bookId}`);

      checkForMatch(bookOwnerId, bookOwnerName);
    } catch (error) {
      console.error(
        "Error trying to send the like:",
        error.response?.data || error.message
      );
    }
  };

  const checkForMatch = (bookOwnerId, bookOwnerName) => {
    const matchFound = receivedLikes.some(
      (like) => like.user === bookOwnerId && like.liked === true
    );

    if (matchFound) {
      setMatchMessage(`¡You have a match with ${bookOwnerName}!`);
      setTimeout(() => {
        setMatchMessage("");
      }, 2500);
    }
  };

  const swiped = (direction, bookId, bookOwnerId, bookOwnerName) => {
    setLastDirection(direction);
    console.log("Swiped " + direction + " on book with ID " + bookId);

    if (direction === "right") {
      sendLike(bookId, bookOwnerId, bookOwnerName);
    }
  };

  const outOfFrame = (bookTitle) => {
    console.log(bookTitle + " left the screen");
  };

  return (
    <SwipeContainer>
      <Header />
      {matchMessage && <MatchMessage>{matchMessage}</MatchMessage>}{" "}
      {/* Mostrar mensaje de match */}
      <CardContainer>
        {books.map((book) => (
          <TinderCard
            className="swipe"
            key={book.id}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, book.id, book.user, book.user_name)}
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
        <SwipeButton>
          <FontAwesomeIcon icon={faThumbsDown} />
        </SwipeButton>
        <SwipeButton>
          <FontAwesomeIcon icon={faThumbsUp} />
        </SwipeButton>
      </SwipeButtonContainer>
      <Navbar />
    </SwipeContainer>
  );
};

export default SwipePage;
