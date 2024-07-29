'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 5000);

  //   return () => clearInterval(interval);
  // });

  return (
    <div className='h-[calc(100vh-100px)] overflow-hidden'>
      <div
        className='w-max h-full flex transistion-all ease-in-out duration-1000'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            className={`${slide.bg} flex flex-col w-screen h-full gap-16 xl:flex-row`}
            key={index}
          >
            {/* text conatiner */}
            <div className='h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center'>
              <h2 className='text-xl lg:text-3xl 2xl:text-5xl'>
                {slide.description}
              </h2>
              <h1 className='text-5xl lg:text-6xl 2xl:text-8xl font-semibold'>
                {slide.title}
              </h1>
              <Link
                href={slide.url}
                className='rounded-md bg-black text-white py-3 px-4'
              >
                SHOP NOW
              </Link>
            </div>
            {/* image container */}
            <div className='relative h-1/2 xl:h-full xl:w-1/2'>
              <Image
                src={slide.img}
                alt=''
                fill
                sizes='100%'
                className='object-cover object-top'
              />
            </div>
          </div>
        ))}
      </div>
      <div className='absolute m-auto left-1/2 bottom-8 flex gap-4'>
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              currentSlide === index ? 'scale-150' : ''
            }`}
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index && (
              <div className='w-[6px] h-[6px] rounded-full bg-gray-600'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
