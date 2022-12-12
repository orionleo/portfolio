import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Test.scss"

import { images } from "../constants";
const Test = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const data = [{imgUrl:images.about01,name:'a'},{imgUrl:images.about02,name:'b'},{imgUrl:images.about03,name:'c'},{imgUrl:images.about04,name:'d'}]
  return (
    <div>
      <h2>Custom Arrows</h2>
      <Slider {...settings}>
        {data.map((ele)=>(
          <>
          <img src={ele.imgUrl} alt="testimonial" />
              <p className="p-text">{ele.name}</p>
                <h4 className="bold-text">{ele.name}</h4>
                <h5 className="p-text">{ele.name}</h5>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default Test