"use client";
import slider1 from "../../public/images/slider_img/slider1.jpg";
import slider2 from "../../public/images/slider_img/slider2.jpg";
import slider3 from "../../public/images/slider_img/slider3.jpg";
import slider4 from "../../public/images/slider_img/slider4.jpg";
import slider5 from "../../public/images/slider_img/slider5.jpg";
import slider6 from "../../public/images/slider_img/slider6.jpg";
import slider7 from "../../public/images/slider_img/slider7.jpg";
import slider8 from "../../public/images/slider_img/slider8.jpg";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const SliderImages = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
];

export default function Slider() {
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img-two'>
      <a
        href='https://www.freepik.com/free-vector/abstract-cover-with-smooth-lines_1435131.htm#page=3&query=orange%20background&position=4&from_view=search&track=ais'
        className='hidden'
      >
        Image by kotkoaon Freepik
      </a>

     
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='md:max-w-[50%] mx-auto my-6 rounded-lg'
      >
        {SliderImages.map((slide, index) => {
          return (
            <SwiperSlide key={index} className='rounded-lg max-w-[45%]'>
              <Image
                src={slide}
                alt='food'
                width={360}
                height={430}
                className='rounded-lg'
              />
            </SwiperSlide>
          );
        })}
        <div className='slider-controler'>
          <div className='swiper-button-prev text-orange-400'></div>
          <div className='swiper-button-next '></div>
          <div className='swiper-pagination'></div>
        </div>
      </Swiper>
      <h2 className='text-2xl font-bold text-orange-400 text-left '>
        Trending food
      </h2>
    </div>
  );
}
