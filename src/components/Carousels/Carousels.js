import { React, useState, useEffect } from "react";
import "./carousels.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../assets/data/foodData";
import travelData from "../../assets/data/travelData";

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} className="carousel-image" />
    {/* <p>{image.label}</p> */}
  </div>
));

const renderTravelSlides = travelData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} className="carousel-image" />
    {/* <p>{image.label}</p> */}
  </div>
));

const Carousels = (props) => {
  const { showCarousel } = props;
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="carousel-main">
      <Carousel
        showArrows={true}
        showStatus={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={
          showCarousel ? imageData[currentIndex] : travelData[currentIndex]
        }
        onChange={handleChange}
        // centerMode={true}
        className="carousel-contents"
      >
        {showCarousel ? renderSlides : renderTravelSlides}
      </Carousel>
    </div>
  );
};

export default Carousels;
