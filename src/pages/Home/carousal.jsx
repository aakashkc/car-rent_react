import React from 'react'
// Import css files
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import imgfirst from '../../assets/all-images/slider-img/slider-1.jpg';
import imgsec from '../../assets/all-images/slider-img/slider-2.jpg';
import imgthird from '../../assets/all-images/slider-img/slider-3.jpg';
import Slider from 'react-slick';
import { Link, } from "react-router-dom";



function Carousal() {

  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const SlideImage = [
    {
      id: 1,
      image: imgfirst,
    },
    {
      id: 2,

      image: imgsec,
    },
    {
      id: 3,

      image: imgthird,
    },
  ];


  return (



    <Slider {...settings} className="">
      {SlideImage.map((item, index) => {
        return (
          <div className="w-full  h-screen md:h-[650px]  ">


            <div className="h-full  w-full bg-cover bg-center flex  items-center" key={index} style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 13, 107, 0.5), rgba(0, 13, 107, 0.5)), url(${item.image})  ` }}>
              <div className='flex flex-col justify-start space-y-5  p-3 md:ml-24 '>

                <h4 className='text-white text-2xl font-normal'>For Rent $70 Per Day</h4>
                <h1 className='text-white font-semibold md:font-bold text-[24px] md:text-5xl overflow-y-hidden tracking-normal'> Reserve Now and Get 50% Off</h1>
              

              <button className='py-2 px-4 text-base bg-white max-w-max rounded-md font-bold hover:text-primary '><Link to="/cars"> Reserve Now</Link></button>
              
              </div>


              
              </div>
            </div>

        )
      })}
    </Slider>
     

  )
}

export default Carousal
