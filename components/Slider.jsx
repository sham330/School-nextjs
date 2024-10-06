"use client";
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'

import React, {useState} from "react";

export const Slider = () => {
    const slides =[
        {
          src:'/assets/a.jpg'
        },
        {
          src:'/assets/b.jpg'
        },
        {
          src:'/assets/c.jpg'
        },
        {
          src:'/assets/d.jpg'
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      const   prevSlide = () => {
        const inFirstSlide = currentIndex === 0;
        const newIndex = inFirstSlide ? slides.length - 1 : currentIndex-1;
        setCurrentIndex(newIndex);
      };
      const nextSlide = () => {
        const inLastSlide = currentIndex ===slides.length-1;
        const newIndex = inLastSlide ? 0: currentIndex+1;
        setCurrentIndex(newIndex);
      };

  return (<div>
  <div className="max-w-[1400px] h-[300px]  xl:h-[500px] w-full m-auto   relative  ">
    <div style={{backgroundImage: `url(${slides[currentIndex].src})`}} className="  w-full h-full  bg-center bg-cover duration-500"></div>

  </div>
  <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5  text-2xl   rounded-full p-2 bg-black/20 text-white cursor-pointer'>
    <BsChevronCompactLeft onClick={prevSlide} size={30} />      </div>
    <div className='block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'><BsChevronCompactRight onClick={nextSlide} size={30}/></div>
</div>
  )
}
