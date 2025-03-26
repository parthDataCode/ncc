import React from "react";
import OurPride from "./OurPride";
import TheArchitects from "./TheArchitects";

const ImpPeople = () => {
  return (
    <div className="flex flex-col md:flex-row items-center space-evenly sm:px-8 md:px-24 bg-white">
      <OurPride />
      <TheArchitects />
    </div>
  );
};

export default ImpPeople;
