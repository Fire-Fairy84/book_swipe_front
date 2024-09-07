import React from "react";
import Layout from "../layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
import Swipe from "../pages/swipe/Swipe";
import BookDetail from "../pages/BookDetail";
import Match from "../pages/Match";
import UserProfile from "../pages/UserProfile";
import Profile from "../pages/profile/Profile";
import LoginForm from "../components/login/LoginForm";
import RegisterForm from "../components/register/RegisterForm";
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
        element: <LoginForm />,
      },
      {
        path: "/register",
        element: <RegisterForm />,
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
        path: "/profile",
        element: <Profile />,
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
