"use client";

import React from "react";
import ContactForm from "@/components/checkout/ContactForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import { useRouter } from "next/router";

const Checkout = ({ cartData }: any) => {
  return (
    <>
      <section className="text-gray-600 pb-10">
        <div className="container px-5 py-24 mx-auto flex ">
          <div className="md:w-3/5 md:pl-6 w-72 mt-5">
            <h3 className="text-left text-black dark:text-white">
              Order summary
            </h3>
            <OrderSummary />
          </div>

          {/* contact details */}
          <div className="md:w-3/5 md:pl-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
