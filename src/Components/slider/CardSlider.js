import React from "react";
import Slider from "react-slick";
import "../../styles/slick.css";
import { products } from "../demodata/list";
import BasicCard from "../card/BasicCard";

export default function CardSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    // arrows:false,
    // autoplay: true,
    // speed: 20,
    // autoplaySpeed: 20,
    // cssEase: "linear",

    // Add slider responsive media query
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,

          // autoplay: true,
          // speed: 20000,
          // autoplaySpeed: 20,
          // cssEase: "linear",
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 912,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    // Custome Arrows
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div>
        <h1>Welcome</h1>
        {/* Add Arrow NAvigations */}
        {/* <button className="previous">PREV</button>
        <button className="next">NEXT</button> */}
        <Slider {...settings}>
          {products.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <BasicCard item={item} />
              </React.Fragment>
            );
          })}
        </Slider>
        {/* <BasicCard /> */}
      </div>
    </>
  );
}
