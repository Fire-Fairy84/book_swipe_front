import React from "react";
import Layout from "../layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Swipe from "../pages/Swipe";
import BookDetail from "../pages/BookDetail";
import Match from "../pages/Match";
import UserProfile from "../pages/UserProfile";
import Account from "../pages/Account";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Favorites from "../pages/Favorites";
import PersonalInfo from "../pages/PersonalInfo";

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
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/swipe",
        element: <Swipe />,
      },
      {
        path: "/match",
        element: <Match />,
      },
      {
        path: "/book/:id",
        element: <BookDetail />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/personalinfo",
        element: <PersonalInfo />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/userprofile",
        element: <UserProfile />,
      },
    ],
  },
]);
