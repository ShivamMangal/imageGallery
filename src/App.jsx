import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Gallery";
import "./styles.css";
import Home from "./comonents/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
