import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Register from "./page/Register";
import Navbar from "./components/Navbar";
import Login from "./page/login";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
