"use client";

import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import React, { useState, useEffect } from "react";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Bike from "./Bike";

const BikeCategories = ({ bikes }: any) => {
  const [category, setCategory] = useState("all");
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [price, setPrice] = useState(900);

  useEffect(() => {
    const filtered = bikes.filter((bike: any) => {
      const categoryMatch =
        category === "all"
          ? bikes
          : bike.categories.some((item: any) => item.name === category);
      const priceMatch = bike.price <= price;

      return categoryMatch && priceMatch;
    });

    setFilteredBikes(filtered);
  }, [category, price, bikes]);

  // const handleResetBtn = () => {
  //   setCategory("all");
  //   setPrice(900);
  // };

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* sidebar */}
          <aside className=" w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue={category}
              onValueChange={(value) => setCategory(value)}
              className="flex flex-col gap-6 mb-12"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="road" id="road" />
                <Label htmlFor="road">Road</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="professional" id="professional" />
                <Label htmlFor="professional">Professional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="extreme" id="extreme" />
                <Label htmlFor="extreme">Extreme</Label>
              </div>
            </RadioGroup>

            {/* price slider */}
            <div className="max-w-56 ">
              <div className="text-lg mb-4 font-medium">
                Max Price :{" "}
                <span className="text-primary font-semibold ml-2">{price}</span>
                <span className="ml-2">
                  {filteredBikes.length > 1
                    ? `${filteredBikes.length} items `
                    : filteredBikes.length === 0
                    ? `${filteredBikes.length} items`
                    : `${filteredBikes.length} item`}
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={(val: any) => setPrice(val)}
              />
            </div>
            {/* <div>
              <button
                className="btn btn-primary w-7 h-10 mt-5"
                onClick={() => handleResetBtn()}
              >
                Reset
              </button>
            </div> */}
          </aside>
          {/* bike list */}
          <div className="w-full xl:w-[1050px] ml-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {filteredBikes.length === 0
                ? "No Data Found"
                : filteredBikes.map((bike: any) => {
                    return (
                      <div key={bike.id}>
                        <Bike bike={bike} />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeCategories;
