"use client";

import React, { useState } from "react";
import { MdDiscount } from "react-icons/md";
import { Input } from "../ui/input";

const AddPromotion = () => {
  const [promoCode, setPromoCode] = useState(false);

  const handlePromoCode = (e: any) => {
    e.preventDefault();
    setPromoCode(true);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full mb-5 ">
      <div className="flex items-start w-full gap-3 text-center">
        <MdDiscount />
        <h3 className="text-sm">Add Discount Code</h3>
      </div>
      <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5 mt-3">
        <Input placeholder="Enter Promotion code" className="rounded-none" />
        <button
          className="btn w-full xl:max-w-[50px] h-10 btn-primary"
          onClick={handlePromoCode}
        >
          {promoCode ? "Applied" : "Apply"}
        </button>
      </form>
    </div>
  );
};

export default AddPromotion;
