"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import bicycle from "./../public/assets_bikezz/bike1.png";
import wheel from "./../public/assets_bikezz/big-will.png";

import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// required modules
import { Autoplay, Navigation } from "swiper/modules";
import { MdDiscount } from "react-icons/md";

const slides = Array(9)
  .fill(9)
  .map((_, index) => (
    <SwiperSlide key={index}>
      <h1 className="text-[26px]">
        <span className="text-primary">B</span>
        <span className="text-black dark:text-white">icycle.</span>
      </h1>
    </SwiperSlide>
  ));

const Hero = () => {
  return (
    <section className="py-48 md:py-0 md:h-[820px] relative overflow-hidden bg-white/5">
      <div className="container mx-auto xl:mr-20">
        <div className="flex items-center justify-between">
          {/* text */}
          <div className="w-full xl:w-[580px] md:h-[820px] flex flex-col justify-center items-start ">
            <div className=" flex gap-2 items-center mb-2 bg-primary text-white px-3 pt-1 text-center font-bold rounded-xl text-[16px] uppercase ">
              <MdDiscount />
              New Collection
            </div>
            <h1 className="text-center xl:text-left mb-6 mx-auto xl:mx-0">
              The bicycle <span>revolution</span>
            </h1>
            <h3 className="text-gray-700 dark:text-white mx-auto text-center xl:text-left xl:mx-0">
              {" "}
              Where <span>Joyful</span> Cycling Begins
            </h3>
            <p className="mb-10 text-lg max-w-[508px] mx-auto text-center xl:text-left xl:mx-0">
              From sleek road bikes built for speed to rugged mountain bikes
              designed for off-road adventures, our slider celebrates the
              diversity of cycling disciplines.
            </p>

            {/* btn */}
            <div className="flex items-center gap-4 mx-auto xl:mx-0">
              <Link href={"/our-bikes"} className="mx-auto md:mx-0">
                <button className="btn btn-black">Shop Now</button>
              </Link>
              <Link href={"/our-bikes"} className="mx-auto md:mx-0">
                <button className="btn btn-primary">Our Shop</button>
              </Link>
            </div>

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 800,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                960: { slidesPerView: 3 },
                1440: { slidesPerView: 3 },
              }}
              modules={[Autoplay, Navigation]}
              navigation={true}
              className=" mb-8 mt-8 w-[500px] gap-6"
            >
              {slides}
            </Swiper>
          </div>
          {/* image */}
          <div className="hidden xl:flex xl:ml-10 -m-28">
            <div className="relative">
              <Image
                src={bicycle}
                width={765}
                style={{ width: "auto", height: "auto" }}
                height={480}
                alt=""
                className="z-10"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
