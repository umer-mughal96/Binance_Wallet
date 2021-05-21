import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarouselSlider = () => {
  return (
    <OwlCarousel items={4}  className="owl-theme" loop={true} margin={10} nav>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
      <div className="item">
        <img src="./asstes/images/header-image.jpg" />
      </div>
    </OwlCarousel>
  );
};

export default OwlCarouselSlider;
