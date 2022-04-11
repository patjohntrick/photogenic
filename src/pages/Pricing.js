import React, { useState } from "react";
import First from "../components/pricing/First";
import Second from "../components/pricing/Second";

const Pricing = () => {
  const [pricing, setPricing] = useState(false);
  return (
    <div>
      <First />
      <Second pricing={pricing} setPricing={setPricing} />
    </div>
  );
};

export default Pricing;
