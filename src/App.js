import React from "react";
import FirstSection from "./components/FirstSection.js";
import SecondSection from "./components/SecondSection.js";
import Navigation from "./components/Navigation.js";

function App() {
  return (
    <div className="App">
      <Navigation />
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default App;
