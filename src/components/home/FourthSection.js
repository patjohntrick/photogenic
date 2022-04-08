import React from "react";
import FirstContent from "./FourthSectionContent/FirstContent.js";
import FourthContent from "./FourthSectionContent/FourthContent.js";
import SecondContent from "./FourthSectionContent/SecondContent.js";
import ThirdContent from "./FourthSectionContent/ThirdContent.js";

const FourthSection = () => {
  return (
    <section className=" md:grid md:grid-cols-2 xl:grid-cols-4">
      <FirstContent />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
    </section>
  );
};

export default FourthSection;
