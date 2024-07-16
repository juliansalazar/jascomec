import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function SimpleSlider() {
  var settings = {
    centerMode: true,
    centerPadding: "100px",
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    
  };
  return (
    <Slider {...settings}>
      <div>
        <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/04/48/50/00585a3568a0a7d.jpg" alt="First slide" />
      </div>
      <div>
        <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/04/48/50/00585a3568a0a7d.jpg" alt="Second slide" />
      </div>
      <div>
        <img src="https://png.pngtree.com/thumb_back/fh260/back_pic/04/48/50/00585a3568a0a7d.jpg" alt="Third slide" />
      </div>
    </Slider>
  );
}