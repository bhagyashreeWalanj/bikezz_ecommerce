"use client";
import React from "react";
import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }: any) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`}
      // Redirected here after successful payments
      successUrl={`${process.env.NEXT_PUBLIC_URL}/stripe/success`}
      // Redirected here when you click back on Stripe Checkout
      cancelUrl={`${process.env.NEXT_PUBLIC_URL}/stripe/error`}
      language="en-US"
      currency="EUR"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
