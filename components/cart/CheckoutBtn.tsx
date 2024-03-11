"use client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const CheckoutBtn = () => {
  const { redirectToCheckout, clearCart } = useShoppingCart();

  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <Link href="/stripe">
    <button className="btn btn-primary w-full" onClick={handleCheckout}>
      Proceed To Checkout
    </button>
    // </Link>
  );
};

export default CheckoutBtn;
