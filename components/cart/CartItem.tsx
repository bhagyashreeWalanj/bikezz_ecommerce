"use client";

import Image from "next/image";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const CartItem = ({ item }: any) => {
  const { removeItem, incrementItem, decrementItem } = useShoppingCart();

  return (
    <div className="flex w-full justify-between mb-4 items-center h-[120px] border-b">
      {/* image */}
      <div className="w-[110px] h-[110px] relative">
        <Image
          src={item.imgpath}
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
          <h5>{item.name}</h5>
          <button onClick={() => removeItem(item.id)}>
            <MdCancel className="text-sm" />
          </button>
        </div>

        {/* increment , decrement , item price */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button onClick={() => decrementItem(item.id)}>
              <FaMinus className="text-[10px]" />
            </button>
            <div className="font-semibold">{item.quantity}</div>
            <button onClick={() => incrementItem(item.id)}>
              <FaPlus className="text-[10px]" />
            </button>
          </div>
          <div className="font-semibold text-balance text-right">
            €{item.price * item.quantity}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
