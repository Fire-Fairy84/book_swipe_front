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
import Match from "../pages/Match";
import PersonalInfo from "../pages/PersonalInfo";
import BookDetail from "../pages/BookDetail";
import ProtectedRoute from "../router/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />, // Ruta pública
      },
      {
        path: "/login",
        element: <LoginForm />, // Ruta pública
      },
      {
        path: "/register",
        element: <RegisterForm />, // Ruta pública
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
        ), // Ruta protegida
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ), // Ruta protegida
      },
      {
        path: "/favorites",
        element: (
          <ProtectedRoute>
            <Favorites />
          </ProtectedRoute>
        ), // Ruta protegida
      },
      {
        path: "/messages",
        element: (
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        ), // Ruta protegida
      },
      {
        path: "/mysettings",
        element: (
          <ProtectedRoute>
            <MySettings />
          </ProtectedRoute>
        ), // Ruta protegida
      },
      {
        path: "/match",
        element: (
          <ProtectedRoute>
            <Match />
          </ProtectedRoute>
        ), // Ruta protegida
      },
      {
        path: "/book/:id",
        element: (
          <ProtectedRoute>
            <BookDetail />
          </ProtectedRoute>
        ), // Ruta protegida
      },
      {
        path: "/personalinfo",
        element: (
          <ProtectedRoute>
            <PersonalInfo />
          </ProtectedRoute>
        ), // Ruta protegida
      },
    ],
  },
]);
