"use client";

import React, { useEffect, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import BackToHomeBtn from "@/components/common/BackToHomeBtn";

const SuccessPage = () => {
  const { clearCart, totalPrice, cartDetails } = useShoppingCart();
  const [orderDetails, setOrderDetails] = useState<any>();

  useEffect(() => {
    if (cartDetails) setOrderDetails(cartDetails);
  }, []);

  return (
    <section>
      <div className="pt-12 pb-24 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <BackToHomeBtn
            containerStyle="flex justify-start"
            handleOnClick={() => clearCart()}
          />

          <div className="relative pb-9 text-center">
            <h2 className="text-6xl xl:text-10xl leading-normal font-heading font-medium text-center">
              Thanks for order
            </h2>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-screen border-b border-black border-opacity-5"></div>
          </div>
          <div className="sm:flex sm:justify-center sm:items-center p-8 xl:p-10 mb-8  border-b border-black border-opacity-10">
            <FaCheckCircle
              className="mb-6 sm:mb-0 mx-auto sm:ml-0 sm:mr-0 text-green-600"
              size={40}
            />

            <h3 className="sm:ml-10 text-lg md:text-xl font-heading font-medium text-center md:text-left">
              Payment completed successfully!
            </h3>
          </div>
          <div className="md:flex md:flex-wrap">
            <div className="w-full md:w-6/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 md:pr-7 xl:pr-24 xl:pl-32 mb-14 md:mb-0">
              <div className="bg-white rounded-3xl">
                <p className="sm:pl-7 mb-11 text-gray-400 font-medium">
                  What you ordered:
                </p>
                {orderDetails &&
                  Object.keys(orderDetails).map((key, index) => {
                    const product = orderDetails[key];
                    return (
                      <div className="flex flex-col" key={index}>
                        <div className="sm:flex sm:items-center pb-7 mb-7 border-b border-black border-opacity-5">
                          <div className="w-[110px] h-[110px] relative sm:pl-7 sm:mb-0 sm:mr-12 mb-6 mx-auto sm:ml-0">
                            <Image
                              src={product.imgpath}
                              fill
                              priority
                              sizes="(max-width: 110px) 110px, 110px"
                              className="object-contain"
                              alt=""
                            />
                          </div>
                          <div>
                            <label className="inline-block mb-1 text-lg  font-heading font-medium">
                              {product.name}
                            </label>
                            <div className="flex flex-wrap">
                              <p className="text-sm font-medium">
                                <span>Qty:</span>
                                <span className="ml-2 text-gray-400">
                                  {product.quantity}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-1 justify-end">
                            <span className="flex items-end text-xl ">
                              <span className="font-semibold">€</span>
                              <span className="font-semibold">
                                {product.price}
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                <p className="sm:pl-7 leading-loose text-gray-400 font-medium">
                  Payment method: Mastercard
                </p>
                <p className="sm:pl-7 leading-loose text-gray-400 font-medium">
                  N.B Products marked (+) are non-returnable
                </p>
              </div>
            </div>
            <div className="md:pl-7 w-full md:w-6/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12">
              <div className="pt-11 pb-11 rounded-3xl bg-primary">
                <div className="border-b border-opacity-20">
                  <div className="px-10 pb-7">
                    <h3 className="mb-5 text-3xl text-white font-heading font-medium">
                      Total
                    </h3>
                    <p className="flex items-center justify-between leading-8 font-heading font-medium">
                      <span className="text-white text-opacity-70">
                        Subtotal
                      </span>
                      <span className="flex items-center text-xl text-white">
                        <span className="mr-3 text-base">€</span>
                        <span>{totalPrice}</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="px-10 pt-5 mb-7">
                  <div className="pb-5 border-b border-opacity-30">
                    <p className="flex items-center justify-between leading-8 font-heading font-medium">
                      <span className="text-white">Total</span>
                      <span className="flex items-center text-xl text-white">
                        <span className="mr-3 text-base">€</span>
                        <span>{totalPrice}</span>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="px-10">
                  <a
                    className="block py-5 px-10 w-full text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                    href="#"
                  >
                    Download invoice
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
{
  /*  <section className="py-72">
    //   <div className="container mx-auto">
    //     <h3 className="text-center mb-4">
    //       Your Payment was successful! Thank You!
    //     </h3>
    //     <Link href="/">
    //       <button className="btn btn-black mx-auto">Back to home</button>
    //     </Link>
    //   </div>
    // </section> */
}
