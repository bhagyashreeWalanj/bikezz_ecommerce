"use client";

import Link from "next/link";
import React from "react";
import { mockdata } from "../mockdata/mockdata";
import WishItem from "./WishItem";
import { useWishlist } from "@/context/WishlistContext";
import BackToHomeBtn from "../common/BackToHomeBtn";

const AddToFavourite = () => {
  const { wishlist } = useWishlist();
  return (
    <section className="min-h-[800px] py-10">
      <div className="container mx-auto">
        <BackToHomeBtn containerStyle="flex justify-start mb-10" />
        <div className="flex flex-col justify-center ">
          <h1 className="h1 text-4xl">Wishlist</h1>
          <h3>Everything in one place</h3>
          <p className="w-[550px] mt-2">
            Keep track of what you like and share products to get a second
            opinion.
          </p>
        </div>
        {/* <Bike bike={mockdata[0]} /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-8">
          {wishlist &&
            wishlist.map((item: any, index: number) => {
              const product = mockdata.find((data) => data.id === item);
              return (
                <div key={index}>
                  <WishItem item={product} />
                </div>
              );
            })}
          {wishlist && wishlist.length <= 0 ? (
            <div>
              <div className="flex justify-center items-center mx-auto mb-10">
                <Link href="/our-bikes">
                  <button className="bg-primary dark:hover:bg-white dark:hover:text-black text-white font-bold py-2 px-4 rounded absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default AddToFavourite;
