"use client";
import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";
import CheckoutBtn from "./CheckoutBtn";
import { MdOutlineShoppingCart } from "react-icons/md";

import AddPromotion from "./AddPromotion";

const CartSideBar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice = 0,
  } = useShoppingCart();

  //shouldDisplayCart
  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-12">
            My Shopping Cart ({cartCount})
          </SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className="flex flex-col justify-center items-center w-full h-[760px]">
              <MdOutlineShoppingCart className="text-primary dark:text-white w-16 h-16" />
              <h5 className="text-black/50 dark:text-white">
                Your Cart is empty
              </h5>
            </div>
          ) : (
            <>
              <ScrollArea className="h-[65vh] xl:h-[64vbh] pr-4 mb-4">
                {cartDetails &&
                  Object.entries(cartDetails).map(([key, value]) => {
                    return <CartItem item={value} key={key} />;
                  })}
              </ScrollArea>
              {/* promotion code  */}
              <AddPromotion />

              {/* checkout btn */}
              <div>
                <div className="flex justify-between font-bold text-lg">
                  <div className="uppercase mb-5 ">Total</div>
                  <div>€{Math.round(totalPrice)}</div>
                </div>
                <CheckoutBtn />
              </div>
            </>
          )}
        </>
      </SheetContent>
    </Sheet>
  );
};

export default CartSideBar;
