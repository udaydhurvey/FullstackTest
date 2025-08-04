import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./page/login";
import Hero from "./components/Hero";
import Signup from "./page/SignUp";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./page/UserDashBoard";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Toaster/>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
