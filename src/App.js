import React from "react";
import FirstSection from "./components/FirstSection.js";
import SecondSection from "./components/SecondSection.js";
import ThirdSection from "./components/ThirdSection.js";
import Navigation from "./components/Navigation.js";
import FourthSection from "./components/FourthSection.js";

function App() {
  return (
    <div className="App font-heebo">
      <Navigation />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default App;
