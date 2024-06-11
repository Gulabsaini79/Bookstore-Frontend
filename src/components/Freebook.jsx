import React from 'react'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from './Cards';
import list from "../../public/list.json"

function Freebook() {
    const filterData = list.filter((data) =>data.category === "Free");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
  <div>
  <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4" >
    <div>
    <h1 className="font-semibold text-xl pd-2">Free offered courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ab id. Amet obcaecati dolor nostrum? Sapiente eveniet ut nemo placeat adipisci rerum excepturi, aliquid enim. Sunt voluptatibus ipsa cum quasi?</p>
    </div>
    
    <div>
    <Slider {...settings}>
      {filterData?.map((item) => (
        <Cards item={item} key={item.id} />
      ))}
      </Slider>
    </div>
    </div>
</div>
  );
}
export default Freebook;