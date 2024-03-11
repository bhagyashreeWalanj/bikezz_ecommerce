"use client";

import React from "react";
import wheel from "./../public/assets_bikezz/big-will.png";
import Image from "next/image";

const RotatingWheel = () => {
  return (
    <div className="container mx-auto">
      <div className="hidden xl:flex xl:-mr-50 -mr-52 right-0 z-99 mt-[500px] absolute">
        <Image
          src={wheel}
          priority
          sizes="500"
          alt=""
          className="w-full h-full object-cover animate-spin infinite ease-linear"
          quality={100}
        />
      </div>
    </div>
  );
};

export default RotatingWheel;
