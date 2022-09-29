import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import PhoneDetails from "./pages/PhoneDetails";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <HomePage />
        <Routes>
          <Route path="/:id" element={<PhoneDetails />} />
        </Routes>
        <br />
        <br />
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
