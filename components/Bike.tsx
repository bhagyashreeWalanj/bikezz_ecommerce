"use client";

import React, { useState } from "react";

// import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye } from "react-icons/cg";

import { CgShoppingBag } from "react-icons/cg";
import AddToCartBtn from "./cart/AddToCartBtn";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IBike } from "@/types/Product";

interface BikeComponentProps {
  bike: IBike;
}
const Bike: React.FC<BikeComponentProps> = ({ bike }) => {
  const [like, setLike] = useState(false);
  const popularBikes = bike.categories.find(
    (item: any) => item.name === "popular"
  );
  const handleLikeBtn = () => {
    setLike(!like);
  };

  return (
    <div className="group">
      <div className="border dark:bg-[#f8f8ff] h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-accent/5  w-full h-full group-hover:bg-accent/10 transition-all duration-300 flex justify-center items-center">
          {popularBikes && (
            <>
              <div className="absolute top-8 left-8 bg-primary text-white px-3 text-sm uppercase font-medium">
                Popular{" "}
              </div>
            </>
          )}
          <Image src={bike.imgpath} width={240} height={147} alt="" priority />
        </div>

        {/* btn group  */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            id={bike.id}
            btnStyles="btn-primary btn-icon"
            icon={<CgShoppingBag />}
            name={bike.name}
            currency={"EUR"}
            description={bike.description}
            imgpath={bike.imgpath}
            price={bike.price}
            price_id={bike.price_id}
          />
          <Link href={`/product/${bike.slug}`}>
            <button className="grid justify-center items-center  w-[50px] h-[50px] px-8 text-2xl bg-black/65 hover:bg-black/85">
              <CgEye className="text-white" />
            </button>
          </Link>
        </div>

        {/* add to favourite btn */}
        <div className="absolute top-8 right-8 flex justify-center items-center cursor-pointer ">
          {like ? (
            <button
              className="grid justify-center items-center text-2xl"
              onClick={() => handleLikeBtn()}
            >
              <FaHeart className="text-2xl cursor-pointer text-primary" />
            </button>
          ) : (
            <>
              <button
                className="grid justify-center items-center text-2xl"
                onClick={() => handleLikeBtn()}
              >
                <FaRegHeart className="text-2xl text-black" />
              </button>
            </>
          )}
        </div>
      </div>
      <h5 className="text-gray-400 font-semibold mb-2">
        {bike.categories[0].name}
      </h5>
      <h4 className="mb-1">{bike.name}</h4>
      <div className="text-lg font-bold text-primary">€{bike.price}</div>
    </div>
  );
};

export default Bike;
