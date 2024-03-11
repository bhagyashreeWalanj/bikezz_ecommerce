"use client";

import Link from "next/link";
import React, { useState } from "react";
import PopularBikesCarousel from "./PopularBikesCarousel";
import { mockdata } from "./mockdata/mockdata";

const PopularBikes = () => {
  // console.log("mockdata:", mockdata);
  //const [bikeData, setBikeData] = useState<IProductProp[]>(mockdata);

  // const getData = async () => {
  //   const query: string = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)]{
  //     _id,
  //     name,
  //     description,
  //     images,
  //     price,
  //     price_id,
  //     "slug": slug.current,
  //     "categories": categories[]->{
  //       name
  //     }
  //   }`;
  //   const data: any = await client.fetch(query);
  //   console.log("Fetched Data:", data);
  //   setBikeData(data);
  // };
  // useLayoutEffect(() => {
  //   getData(); // Fetch data on initial render only
  // }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="text-center mb-[30px]">
          The World's Premium Brands In One Destination
        </p>
        <PopularBikesCarousel bikes={mockdata} />
        <Link href="/our-bikes">
          <button className="btn btn-primary mx-auto">See all bikes</button>
        </Link>
      </div>
    </section>
  );
};

export default PopularBikes;
