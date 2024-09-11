import { render, screen, fireEvent } from "@testing-library/react";
import BookCard from "../../components/bookcard/BookCard";

test("renders the book card and handles delete action", () => {
  /**
   * Feature: BookCard component
   *
   * Scenario: A user deletes a book
   *   Given the book card is rendered with a book title "Test Book"
   *   When the user clicks the delete button
   *   Then the onDelete event should be triggered with the correct book ID
   */

  const mockOnDelete = vi.fn();
  const book = {
    id: 1,
    title: "Test Book",
    author: "Test Author",
    cover_image: "test.jpg",
  };

  // Given the book card is rendered
  render(<BookCard book={book} onDelete={mockOnDelete} />);

  // When the user clicks the delete button
  fireEvent.click(screen.getByText(/delete/i));

  // Then the onDelete event should be triggered with the correct book ID
  expect(mockOnDelete).toHaveBeenCalledWith(1);
});
