import React from "react";
import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Gallery from "./pages/Gallery.js";
import Pricing from "./pages/Pricing.js";
import Contact from "./pages/Contact.js";

function App() {
  return (
    <div className="App font-heebo">
      <Navigation />
      <Routes>
        <Route path="/photogenic" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
