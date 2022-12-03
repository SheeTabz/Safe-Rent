import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination} from "swiper";
function Carousel() { 
  return (
    <>
    <Swiper
        spaceBetween={5}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true
        }}
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper flex items-center"
    >
        <SwiperSlide className=''>
            <img
                className=" px-5 w-[500px] h-76"
                src="http://wp.hostlin.com/zagreb/images/resource/car.png"
                alt="image slide 1"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className=" w-[500px] h-76"
                src="http://wp.hostlin.com/zagreb/images/resource/car.png"
                alt="image slide 2"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                className=" w-[500px] h-76"
                src="http://wp.hostlin.com/zagreb/images/resource/car.png"
                alt="image slide 3"
            />
        </SwiperSlide>
    </Swiper>
</>


  )
}

export default Carousel