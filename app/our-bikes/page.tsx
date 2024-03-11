"use client";
import React, { useState, useLayoutEffect } from "react";
// import { client } from "../lib/sanity";
import BikeCategories from "@/components/BikeCategories";
import { mockdata } from "@/components/mockdata/mockdata";

const OurBikes = () => {
  return (
    <div>
      <BikeCategories bikes={mockdata} />
    </div>
  );
};

export default OurBikes;
