import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookShelf from "../../pages/bookshelf/BookShelf";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

vi.mock("axios");

test("loads and displays books, allows deleting and navigating to add book", async () => {
  /**
   * Feature: BookShelf page
   *
   * Scenario 1: Loading books
   *   Given the user is logged in
   *   When the user opens the BookShelf page
   *   Then a list of books should be loaded and displayed
   *
   * Scenario 2: No books available
   *   Given the user has no books
   *   When the BookShelf page is loaded
   *   Then the message "You have no books in your shelf." should be displayed
   *
   * Scenario 3: Deleting a book
   *   Given a list of books is displayed
   *   When the user clicks the delete button for a book
   *   Then the book should be removed from the list
   */

  const booksData = [
    { id: 1, title: "Book 1", author: "Author 1", cover_image: "/book1.jpg" },
    { id: 2, title: "Book 2", author: "Author 2", cover_image: "/book2.jpg" },
  ];

  axios.get.mockResolvedValue({ data: booksData });

  render(
    <BrowserRouter>
      <BookShelf />
    </BrowserRouter>
  );

  // Scenario 1: Loading books
  expect(screen.getByText(/Loading books.../i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/My Book Shelf/i)).toBeInTheDocument();
    expect(screen.getByText(/Book 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Book 2/i)).toBeInTheDocument();
  });

  // Scenario 2: No books available
  axios.get.mockResolvedValue({ data: [] });
  render(
    <BrowserRouter>
      <BookShelf />
    </BrowserRouter>
  );

  await waitFor(() => {
    expect(
      screen.getByText(/You have no books in your shelf/i)
    ).toBeInTheDocument();
  });

  // Scenario 3: Deleting a book
  axios.delete.mockResolvedValue({});
  fireEvent.click(screen.getAllByText(/delete/i)[0]);

  await waitFor(() => {
    expect(screen.queryByText(/Book 1/i)).not.toBeInTheDocument();
  });
});
