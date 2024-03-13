import React from "react";
import Carousels from "../components/Carousels/Carousels";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div className="mainHome">
      <Carousels showCarousel={true} />
      <Carousels showCarousel={false} />
      <Contact />
    </div>
  );
};

export default Home;
