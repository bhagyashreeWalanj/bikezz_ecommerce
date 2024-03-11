"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// required modules
import { Pagination } from "swiper/modules";
import Bike from "./Bike";
import { IBike, IBikesMain } from "@/types/Product";

const PopularBikesCarousel = ({ bikes }: IBikesMain) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="popular-bike-slider mb-8"
    >
      {bikes &&
        bikes.map((bike: IBike) => {
          return (
            <SwiperSlide key={bike.id}>
              <Bike bike={bike} />
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default PopularBikesCarousel;
