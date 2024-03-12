"use client";

import React, { useState, useLayoutEffect } from "react";
// import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "@/components/cart/AddToCartBtn";
import { FaRegStar } from "react-icons/fa";

import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";
import { CgShoppingBag } from "react-icons/cg";
import { mockdata } from "@/components/mockdata/mockdata";
import Review from "@/components/reviews/Review";
import { IBike, IBikesMain } from "@/types/Product";
import BackToHomeBtn from "@/components/common/BackToHomeBtn";

interface IProps {
  params: {
    slug: string;
  };
}

const ProductDetails = ({ params }: IProps) => {
  const [bikeData, setBikeData] = useState<IBike | null>(null);
  const getData = (bike: any) => {
    const data: any = mockdata.find((item) => item.slug === bike.slug);
    setBikeData(data);
  };
  useLayoutEffect(() => {
    if (params && params.slug) {
      getData(params);
    }
  }, [params]);

  // const getData = async (slug: any) => {
  //   const query: string = `*[_type == 'product' && slug.current == '${slug}'][0] {
  //     _id,
  //     images,
  //     price,
  //     price_id,
  //     name,
  //     description,
  //     "slug":slug.current,
  //     "category": categories->{name}
  //   }`;

  //   const data = await client.fetch(query);

  //   setBikeData(data);
  // };
  // useLayoutEffect(() => {
  //   if (params && params.slug) {
  //     getData(params.slug); // Fetch data on initial render only
  //   } // Fetch data on initial render only
  // }, []);

  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        {bikeData && bikeData.imgpath && (
          <div className="flex flex-col xl:flex-row gap-14" key={bikeData.id}>
            {/* img  */}
            <div
              className="xl:flex-1 h-[460px] bg-secondary/5 dark:bg-[#f8f8ff] xl:w-[700px] xl:h-[540px]
              flex justify-center items-center"
            >
              <Image
                src={bikeData.imgpath}
                alt=""
                priority
                width={473}
                height={290}
              />
            </div>

            {/* text */}
            <div className="flex-1 flex flex-col justify-center items-start gap-10">
              <BackToHomeBtn containerStyle="flex items-start" />
              <div className="flex flex-col gap-6 items-start">
                <div>
                  <h3 className="text-4xl">{bikeData.name}</h3>
                  <p className="text-lg font-semibold">€{bikeData.price}</p>
                </div>
                <p>{bikeData.description}</p>
                <AddToCartBtn
                  text="Add To Cart"
                  btnStyles="btn btn-primary"
                  id={bikeData.id}
                  icon={<CgShoppingBag className="flex ml-3" />}
                  name={bikeData.name}
                  currency={"EUR"}
                  description={bikeData.description}
                  price={bikeData.price}
                  price_id={bikeData.price_id}
                  imgpath={bikeData.imgpath}
                />
              </div>
              {/* info */}

              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <PackageCheck size={20} className="text-primary" />
                  <p>Free Shipping on orders over €100 </p>
                </div>
                <div className="flex gap-2">
                  <RefreshCw size={20} className="text-primary" />
                  <p>Free Returns for 30 days </p>
                </div>
                <div className="flex gap-2">
                  <Bike size={20} className="text-primary" />
                  <p>
                    The bicycles are partially assembled and benefit from
                    transport insurance{" "}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Clock size={20} className="text-primary" />
                  <p>Fast Delivery</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* customer review */}
        <div className="flex  xl:flex-col justify-center items-center mt-10 gap-14">
          <h2>Customer Reviews</h2>
          <div className="flex flex-row mx-auto px-3 w-[550px] justify-between items-center ">
            <div>
              <div className="flex flex-row mb-2">
                {[...Array(5)].map((_, i: number) => {
                  return <FaRegStar key={i} className="mx-1" />;
                })}
              </div>

              <span>Be the first to write a review</span>
            </div>
            <div>
              <button className="btn btn-primary">Write a Review</button>
            </div>
          </div>
          {bikeData?.reviews && <Review reviews={bikeData.reviews} />}
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
