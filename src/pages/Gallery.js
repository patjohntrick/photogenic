import React from "react";
import FirstSection from "../components/gallery/FirstSection";
import First from "../components/home/FourthSectionContent/FirstContent";
import Second from "../components/home/FourthSectionContent/SecondContent";
import Third from "../components/home/FourthSectionContent/ThirdContent";
import Fourth from "../components/home/FourthSectionContent/FourthContent";
import FifthSection from "../components/gallery/FifthSection";
import SixSection from "../components/gallery/SixSection";
import SevenSection from "../components/gallery/SevenSection";
import EightSection from "../components/gallery/EightSection";
import NineSection from "../components/gallery/NineSection";

const Gallery = () => {
  return (
    <div>
      <FirstSection />
      {/* <SecondSection /> */}
      <div className="div">
        <First />
        <Second />
        <Third />
        <Fourth />
        <FifthSection />
        <SixSection />
        <SevenSection />
        <EightSection />
        <NineSection />
      </div>
    </div>
  );
};

export default Gallery;
