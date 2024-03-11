"use client";

import { PackageCheck, Headset, ShieldCheck } from "lucide-react";
import React from "react";
import AddService from "./AddService";

const Service = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row md:flex-row w-full xl:w-[1250px] mt-10 gap-8 justify-between items-center mx-auto">
          {/* delivery */}
          <AddService
            icon={<PackageCheck className="text-primary  w-14 h-14" />}
            header="Fast and free delivery"
            description="Free delivery for all orders over €100"
          />

          {/* customer support */}
          <div>
            <AddService
              icon={<Headset className="text-primary w-14 h-14" />}
              header="24/7 Customer Support"
              description="Friendly customer support 24/7"
            />
          </div>
          {/* moneyback */}
          <div>
            <AddService
              icon={<ShieldCheck className="text-primary w-14 h-14" />}
              header="money back guarantee"
              description="Money return policy within 30 days"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
