import React from "react";
import "./home.css";
import Carousels from "../components/Carousels/Carousels";
import Contact from "../components/Contact/Contact";
import Weather from "../components/Weather/Weather";

const Home = () => {
  return (
    <div className="mainHome">
      <h1>맛집 탐방</h1>
      <Carousels showCarousel={true} />
      <h1>여행지 탐방</h1>
      <Carousels showCarousel={false} />
      <div className="subHome">
        <Contact />
        <Weather />
      </div>
    </div>
  );
};

export default Home;
