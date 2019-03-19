import React from "react";
import News from "./News";

const Hero = () => {
  return (
    //   .hero height is defined in stles.css
    <div className="hero flex flex-col justify-center text-center align-middle">
      <h3 className="font-light tracking-wide">Makoto Dejima</h3>
      <h2 className="font-light my-4">Designer / Front-End Developer</h2>
      {/* <News /> */}
    </div>
  );
};

export default Hero;
