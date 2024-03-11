import Image from "next/image";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const mockdata = [
  {
    name: "Radon Vaillant Disc 8.0",
    imgpath: "/assets_bikezz/4.png",
    images: [
      {
        _type: "image",
        _key: "97431515817b",
        asset: {
          _ref: "image-b00ff2f55339dc5497ba5bf2a49a722f34ee1a31-580x356-png",
          _type: "reference",
        },
      },
    ],
    description:
      "electronic groupset raises the riding comfort to a new level. The Rival eTap AXS groupset with innovative 12-speed technology, 10-36 cassette on the rear axle and 48/35 crank ratio will give you beautiful hours in the mountains and on flat roads as well. A wider range and gear ratio variety is hardly possible and on top you get fast battery change plus a clean look for free. With the Mavic Ksyrium 30 Disc system wheelset and the 25mm wide Continental Grand Sport Race tires, the air molecule destroyer also has adequate shoes with non-slip soling! On your marks, get set, VAILLANT DISC 8.0!",
    price: 269.99,
    price_id: null,
    slug: "radon-vaillant-disc-8-0",
    categories: [
      {
        name: "extreme",
      },
      {
        name: "popular",
      },
    ],
    _id: "e20a167d-adb5-44d1-9db2-96e1252cb0ae",
    reviews: [
      {
        id: 1,
        name: "Carlos D.",
        rating: 4,
        review:
          "Light quality is superb, and the dimming feature works like a charm. Makes for a cozy atmosphere in the evenings. A bit pricey, but worth it.",
        createdDt: "13/02/2024",
      },
    ],
  },
  {
    name: "Radon Vaillant Disc 8.0",
    imgpath: "/assets_bikezz/4.png",
    images: [
      {
        _type: "image",
        _key: "97431515817b",
        asset: {
          _ref: "image-b00ff2f55339dc5497ba5bf2a49a722f34ee1a31-580x356-png",
          _type: "reference",
        },
      },
    ],
    description:
      "electronic groupset raises the riding comfort to a new level. The Rival eTap AXS groupset with innovative 12-speed technology, 10-36 cassette on the rear axle and 48/35 crank ratio will give you beautiful hours in the mountains and on flat roads as well. A wider range and gear ratio variety is hardly possible and on top you get fast battery change plus a clean look for free. With the Mavic Ksyrium 30 Disc system wheelset and the 25mm wide Continental Grand Sport Race tires, the air molecule destroyer also has adequate shoes with non-slip soling! On your marks, get set, VAILLANT DISC 8.0!",
    price: 269.99,
    price_id: null,
    slug: "radon-vaillant-disc-8-0",
    categories: [
      {
        name: "extreme",
      },
      {
        name: "popular",
      },
    ],
    _id: "e20a167d-adb5-44d1-9db2-96e1252cb0ae",
    reviews: [
      {
        id: 1,
        name: "Carlos D.",
        rating: 4,
        review:
          "Light quality is superb, and the dimming feature works like a charm. Makes for a cozy atmosphere in the evenings. A bit pricey, but worth it.",
        createdDt: "13/02/2024",
      },
    ],
  },
];

const OrderSummary = () => {
  return (
    <div>
      <div className="w-full mx-auto p-8">
        {mockdata &&
          mockdata.map((data: any, index: number) => {
            return (
              <>
                <div
                  className="flex w-full justify-between mb-4 items-center h-[120px] border-b"
                  key={index}
                >
                  {/* image */}
                  <div className="w-[110px] h-[110px] relative">
                    <Image
                      src={data.imgpath}
                      fill
                      priority
                      sizes="(max-width: 110px) 110px, 110px"
                      className="object-contain"
                      alt=""
                    />
                  </div>
                  {/* name, price , quantity, removeBtn */}
                  <div className="w-full max-w-[180px] flex flex-col justify-center gap-4">
                    <div className="flex items-center justify-between">
                      <h5 className="text-black dark:text-white">
                        {data.name}
                      </h5>
                      <button>
                        <MdCancel className="text-sm" />
                      </button>
                    </div>

                    {/* increment , decrement , item price */}
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <div className="font-semibold">1</div>
                      </div>
                      <div className="font-semibold text-balance text-right text-black dark:text-white">
                        €{data.price}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default OrderSummary;
