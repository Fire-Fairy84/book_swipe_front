import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Swipe from "../pages/Swipe";
import BookDetail from "../pages/BookDetail";
import Match from "../pages/Match";
import UserProfile from "../pages/UserProfile";
import Account from "../pages/Account";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar"; // Importar el componente Navbar

function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/swipe" element={<Swipe />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/match/:id" element={<Match />} />
          <Route path="/user/:id" element={<UserProfile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Navbar /> {/* Navbar visible en todas las rutas */}
      </div>
    </Router>
  );
}

export default AppRouter;
