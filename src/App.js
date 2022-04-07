import React from "react";
import FirstSection from "./components/FirstSection.js";
import SecondSection from "./components/SecondSection.js";
import ThirdSection from "./components/ThirdSection.js";
import Navigation from "./components/Navigation.js";
import FourthSection from "./components/FourthSection.js";
import FifthSection from "./components/FifthSection.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App font-heebo">
      <Navigation />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}

export default App;
