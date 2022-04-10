import React, { useState } from "react";
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
import Masonry from "react-masonry-css";
import TenSection from "../components/gallery/TenSection";
import ElevenSection from "../components/gallery/ElevenSection";
import TwelveSection from "../components/gallery/TwelveSection";
import TherteenSection from "../components/gallery/TherteenSection";
import FourthteenSection from "../components/gallery/FourthteenSection";
import FifthteenSection from "../components/gallery/FifthteenSection";
import SixteenSection from "../components/gallery/SixteenSection";
import SeventeenSection from "../components/gallery/SeventeenSection";
import EighteenSection from "../components/gallery/EighteenSection";
import NineteenSection from "../components/gallery/NineteenSection";

const Gallery = () => {
  const [layer, setLayer] = useState(0);

  const handleAddLayer = () => {
    setLayer((layer) => layer + 1);
  };
  const handleResetLayer = () => {
    setLayer((layer) => (layer = 0));
  };
  console.log(layer);
  const breakPoints = {
    default: 5,
    1024: 4,
    768: 2,
    500: 1,
  };
  return (
    <div>
      <Masonry className=" flex pt-[10vh] " breakpointCols={breakPoints}>
        <FirstSection />
        {/* <SecondSection /> */}
        <First />
        <Second />
        <Third />
        <Fourth />
        <FifthSection />
        <SixSection />
        <SevenSection />
        <EightSection />
        <NineSection />
        <TenSection layer={layer} />
        <ElevenSection layer={layer} />
        <TwelveSection layer={layer} />
        <TherteenSection layer={layer} />
        <FourthteenSection layer={layer} />
        <FifthteenSection layer={layer} />
        <SixteenSection layer={layer} />
        <SeventeenSection layer={layer} />
        <EighteenSection layer={layer} />
        <NineteenSection layer={layer} />
      </Masonry>
      <div
        className={layer < 2 ? "div flex place-content-center my-2" : "hidden"}
      >
        <button
          className=" bg-black text-white uppercase px-4 py-2 text-sm font-semibold "
          onClick={handleAddLayer}
        >
          show more
        </button>
      </div>
      <div
        className={layer > 1 ? "div flex place-content-center my-2" : "hidden"}
      >
        <button
          className=" bg-black text-white uppercase px-4 py-2 text-sm font-semibold "
          onClick={handleResetLayer}
        >
          show less
        </button>
      </div>
    </div>
  );
};

export default Gallery;
