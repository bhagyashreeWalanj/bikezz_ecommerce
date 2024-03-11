"use client";

import React from "react";
import Herobike from "./../public/assets_bikezz/bike3.png";
import Image from "next/image";
import AddToCartBtn from "./cart/AddToCartBtn";
import { mockdata } from "./mockdata/mockdata";

const PopularModelHero = () => {
  const royce = mockdata.find((item) => item.name === "Royce union");

  return (
    <section className="pt-20 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* image */}
          <div
            className="h-[460px] xl:w-[600px] xl:h-[540px]
              flex justify-center items-center"
          >
            <Image
              src={Herobike}
              alt="Royce union"
              priority
              width={650}
              height={550}
              quality={100}
              className="bg-transparent"
            />
          </div>
          {/* description */}
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <div className="flex flex-col gap-6 items-start">
              <div className=" flex gap-2 items-center mb-2 bg-primary text-white px-3 pt-1 text-center font-bold rounded-xl text-[16px] uppercase ">
                Popular
              </div>
              <div>
                <h5 className="uppercase tracking-[0.8rem]">Royce union</h5>
                <h1 className="font-bold text-6xl">Cruiser Go! Step Over</h1>
                <p className="text-2xl font-semibold">€129</p>
              </div>
              <p>
                Our range of bicycles for men combines cutting-edge technology
                with sleek aesthetics, offering a variety of options to suit
                different riding styles and preferences. Whether you're an avid
                road cyclist, a mountain biking enthusiast, a commuter
                navigating city streets, or...
              </p>
              <div>
                <AddToCartBtn
                  id={""}
                  btnStyles="btn btn-primary "
                  name={"Royce union"}
                  text="Add To Cart"
                  currency={"EUR"}
                  // description={bike.description}
                  // images={bike.images}
                  imgpath={"/assets_bikezz/bike3.png"}
                  price={129}
                  price_id={"price_1OtA2sKnZdxKrYh3hnsilPRh"}
                />
              </div>
            </div>
            {/* info */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularModelHero;
