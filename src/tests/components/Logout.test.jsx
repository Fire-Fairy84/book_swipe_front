import { render, waitFor } from "@testing-library/react";
import Logout from "../../components/logout/Logout";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

vi.mock("axios");

test("logs out and clears session", async () => {
  /**
   * Feature: Logout component
   *
   * Scenario: A user logs out
   *   Given the user is logged in
   *   When the logout process is initiated
   *   Then the session should be cleared and the user should be redirected
   */

  localStorage.setItem("token", "fakeToken");
  localStorage.setItem("user_id", "1");

  axios.post.mockResolvedValue({});

  // Given the user is logged in
  render(
    <BrowserRouter>
      <Logout />
    </BrowserRouter>
  );

  // Then the session should be cleared
  await waitFor(() => {
    expect(localStorage.length).toBe(0);
  });
});
