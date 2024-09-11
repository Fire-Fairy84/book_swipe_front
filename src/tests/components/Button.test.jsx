import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/button/Button";

test("renders the button and triggers onClick event", () => {
  /**
   * Feature: Button component
   *
   * Scenario: A user clicks the button
   *   Given the button is rendered with text "Submit"
   *   When the user clicks the button
   *   Then the onClick event should be triggered
   */

  const mockOnClick = vi.fn();

  // Given the button is rendered with text "Submit"
  render(<Button text="Submit" onClick={mockOnClick} />);

  // When the user clicks the button
  fireEvent.click(screen.getByText(/Submit/i));

  // Then the onClick event should be triggered
  expect(mockOnClick).toHaveBeenCalledTimes(1);
});
