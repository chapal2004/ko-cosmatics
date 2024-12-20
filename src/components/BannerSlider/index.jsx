'use client';

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



export const BannerSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="banner-slider w-[100%]" 
      >
        
      <SwiperSlide>
        <div className="item w-[100%] relative flex 
        items-center pl-[100px]" style={{background: `url(/slide1.png)`}}>
          <div className="container">
          <div className="info w-[50%] d-flex flex-col gap-4 mr-auto mb-52 duration-3000">
              <h2 className="text-red-500 text-4xl lg:text-8xl mb-4">Eye Liner</h2>
              <h3><span className="text-blue-500 text-2xl lg:text-4xl">Make You</span>
              <span className="text-blue-400 text-2xl lg:text-4xl">Gorgeous</span></h3>
          </div>
          </div>
        </div>  
      </SwiperSlide>

      <SwiperSlide>
        <div className="item w-[100%] relative flex 
        items-center pl-[100px]" style={{background: `url(/slide2.png)`}}>
          <div className="container">  
          <div className="info w-[50%] d-flex flex-col gap-4 ml-auto mb-52 duration-4000">
              <h2 className="text-blue-600 text-4xl lg:text-7xl mb-4">Body and Skin Fit</h2>
              <h3><span className="text-red-500 text-2xl lg:text-4xl">Fress Every Day </span>
              <span className="text-yellow-600 text-2xl lg:text-4xl">Like Nature</span></h3>
          </div>
          </div>
        </div>  
      </SwiperSlide>

      <SwiperSlide>
        <div className="item w-[100%] relative flex 
        items-center pl-[100px]" style={{background: `url(/slide3.png)`}}>
          <div className="container">
          <div className="info w-[50%] d-flex flex-col gap-4 mr-auto mb-52 duration-4000">
              <h2 className="text-red-500 text-4xl lg:text-8xl mb-5">SunsCream</h2>
              <h3><span className="text-blue-500 text-2xl lg:text-4xl">Fress Every Day </span>
              <span className="text-blue-400 text-2xl lg:text-4xl">Like Nature</span></h3>
          </div>
          </div>
        </div>  
      </SwiperSlide>

      <SwiperSlide>
        <div className="item w-[100%] relative flex 
        items-center pl-[100px]" style={{background: `url(/slide4.png)`}}>
          <div className="container">  
          <div className="info w-[50%] d-flex flex-col gap-4 ml-auto mb-52 duration-4000">
              <h2 className="text-blue-600 text-4xl lg:text-8xl mb-5">Hair Salution</h2>
              <h3><span className="text-red-500 text-2xl lg:text-4xl">Fress Every Day </span>
              <span className="text-yellow-600 text-2xl lg:text-4xl">Like Nature</span></h3>
          </div>
          </div>
        </div>  
      </SwiperSlide>

      <SwiperSlide>
        <div className="item w-[100%] relative flex 
        items-center pl-[100px]" style={{background: `url(/slide-5.png)`}}>
          <div className="container">
          <div className="info w-[50%] d-flex flex-col gap-4 mr-auto mb-52 duration-4000">
              <h2 className="text-red-500 text-4xl lg:text-8xl mb-4">Body and Skin Fit</h2>
              <h3><span className="text-blue-500 text-2xl lg:text-4xl">Fress Every Day </span>
              <span className="text-blue-400 text-2xl lg:text-4xl">Like Nature</span></h3>
          </div>
          </div>
        </div>  
      </SwiperSlide>

      <SwiperSlide>
        <div className="item w-[100%] relative flex 
        items-center pl-[100px]" style={{background: `url(/slide6.png)`}}>
          <div className="container">  
          <div className="info w-[50%] d-flex flex-col gap-4 ml-auto mb-52 duration-4000">
              <h2 className="text-blue-600 text-4xl lg:text-8xl mb-4">Body and Skin Fit</h2>
              <h3><span className="text-red-500 text-2xl lg:text-4xl">Fress Every Day </span>
              <span className="text-yellow-600 text-2xl lg:text-4xl">Like Nature</span></h3>
          </div>
          </div>
        </div>  
      </SwiperSlide>


      </Swiper>
    </>
  );
}

