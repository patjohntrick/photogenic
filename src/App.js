import React from "react";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Gallery from "./pages/Gallery.js";

function App() {
  return (
    <div className="App font-heebo">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
