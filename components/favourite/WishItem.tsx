import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";
import { useWishlist } from "@/context/WishlistContext";

const WishItem = ({ item }: any) => {
  const { removeFromWishlist } = useWishlist();

  const handleRemoveFromWishList = () => {
    removeFromWishlist(item.id);
  };
  return (
    <div>
      <div className="w-full max-w-sm overflow-hidden bg-white  shadow-lg dark:shadow-red-900 mb-16">
        <div className=" top-0 left-0 right-0 bottom-0 flex justify-end items-center gap-[10px] transition-all duration-300">
          <button
            className=" grid justify-center items-center w-[5px] h-[40px] px-8 text-2xl bg-white/65"
            onClick={handleRemoveFromWishList}
          >
            <RxCross2 className="dark:text-black" />
          </button>
        </div>
        <div className="m-5">
          <Image
            className="object-cover object-center w-full"
            src={item.imgpath}
            alt="avatar"
            priority
            width={500}
            height={500}
          />
        </div>

        <div className="flex items-center px-6 py-3 bg-primary">
          <h1 className="mx-3 text-lg font-semibold  text-white">
            {item.name}
          </h1>
        </div>

        <div className="px-6 py-4">
          <p className="py-2 text-gray-700 dark:text-black ">
            {`${item.description.slice(0, 100)}...`}
          </p>

          <div className="flex items-center mt-4 text-gray-700 dark:text-black">
            <h1 className="px-2 text-lg">€ {item.price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishItem;
