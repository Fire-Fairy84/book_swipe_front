import React from "react";
import Layout from "../layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Swipe from "../pages/swipe/Swipe";
import Messages from "../pages/messages/Messages";
import Profile from "../pages/profile/Profile";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/register/RegisterForm";
import Logout from "../components/logout/Logout";
import Favorites from "../pages/favorites/Favorites";
import MySettings from "../pages/mySettings/MySettings";
import BookShelf from "../pages/bookshelf/BookShelf";
import AddBook from "../pages/addbook/AddBook";
import PersonalInfo from "../pages/PersonalInfo";
import ProtectedRoute from "../router/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/swipe",
        element: (
          <ProtectedRoute>
            <Swipe />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/favorites",
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ),
      },
      {
        path: "/messages",
        element: (
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        ),
      },
      {
        path: "/mysettings",
        element: (
          <ProtectedRoute>
            <MySettings />
          </ProtectedRoute>
        ),
      },
      {
        path: "/bookshelf",
        element: (
          <ProtectedRoute>
            <BookShelf />
          </ProtectedRoute>
        ),
      },
      {
        path: "/addbook",
        element: (
          <ProtectedRoute>
            <AddBook />
          </ProtectedRoute>
        ),
      },
      {
        path: "/personalinfo",
        element: (
          <ProtectedRoute>
            <PersonalInfo />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
