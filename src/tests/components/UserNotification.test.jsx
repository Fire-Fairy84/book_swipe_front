import { render, screen } from "@testing-library/react";
import UserNotification from "../../components/userNotification/UserNotification";

test("displays the notification message correctly", () => {
  /**
   * Feature: UserNotification component
   *
   * Scenario: A user sees a notification
   *   Given a success notification is displayed with the message "Success!"
   *   Then the notification should be visible with the correct message
   */

  // Given a success notification is displayed
  render(<UserNotification message="Success!" success={true} show={true} />);

  // Then the notification should be visible with the correct message
  expect(screen.getByText(/Success!/i)).toBeInTheDocument();
});
