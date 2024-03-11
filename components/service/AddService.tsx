"use client";

import { IService } from "@/types/Service";
import React from "react";

const AddService = ({ header, description, icon }: IService) => {
  return (
    <>
      <div className="flex xl:flex-col flex-col xl:items-center xl:justify-center">
        <div className="mb-4">{icon}</div>
        <h2 className="text-black dark:text-white uppercase text-2xl">
          {header}
        </h2>
        <p className="capitalize text-slate-500 mb-3">{description}</p>
      </div>
    </>
  );
};

export default AddService;
