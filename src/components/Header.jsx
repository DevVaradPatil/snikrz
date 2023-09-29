import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import { NextArrow, PrevArrow } from "./Arrows";
import banner1 from "../assets/banner1-transformed.png";
import { motion } from "framer-motion";


const Header = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "10%", // Adjust this value to control the space between cards
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    easing: "ease-in-out",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "20%", // Adjust this value for the desired card width
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
          arrows: false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "5%",
          arrows: false
        },
      },
    ],
  };

  return (
    <div className="mt-5">
      <Slider {...settings}>
        
        <CarouselCard
          clr="1"
          title="lead the way"
          subtitle="Are you ready to"
          description="Luxury meets ultimate sitting comfort"
          pic={banner1}
        />
        <CarouselCard
          clr="2"
          title="explore the world"
          subtitle="Adventure awaits"
          description="Discover new horizons with our premium travel gear"
          pic={banner1}
        />
        <CarouselCard
          clr="3"
          title="find your style"
          subtitle="Express yourself"
          description="Elevate your fashion game with our latest collection"
          pic={banner1}
        />
      </Slider>
    </div>
  );
};

export default Header;
