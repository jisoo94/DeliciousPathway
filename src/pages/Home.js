import React from "react";
import Carousels from "../components/Carousels/Carousels";
import Email from "../components/Email/Email";

const Home = () => {
  return (
    <div className="mainHome">
      <Carousels showCarousel={true} />
      <Carousels showCarousel={false} />
      <Email />
    </div>
  );
};

export default Home;
