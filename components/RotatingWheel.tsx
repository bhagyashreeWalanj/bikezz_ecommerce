"use client";

import React from "react";
import wheel from "./../public/assets_bikezz/big-will.png";
import Image from "next/image";

interface IProp {
  containerStyles: string;
}

const RotatingWheel = ({ containerStyles }: IProp) => {
  return (
    <div className="container mx-auto">
      <div
        className={`${containerStyles} hidden xl:flex  z-99 mt-[500px] absolute backdrop-blur-lg`}
      >
        <Image
          src={wheel}
          priority
          sizes="500"
          alt=""
          className="w-full h-full object-cover spin infinite ease-linear"
          quality={100}
        />
      </div>
    </div>
  );
};

export default RotatingWheel;
