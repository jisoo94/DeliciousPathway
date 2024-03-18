import React from "react";
import "./home.css";
import Carousels from "../components/Carousels/Carousels";
import Contact from "../components/Contact/Contact";
import Weather from "../components/Weather/Weather";

const Home = () => {
  return (
    <div className="mainHome">
      <Carousels showCarousel={true} />
      <Carousels showCarousel={false} />
      <div className="subHome">
        <Contact />
        <Weather />
      </div>
    </div>
  );
};

export default Home;
