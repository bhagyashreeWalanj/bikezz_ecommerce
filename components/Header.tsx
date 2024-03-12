"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import CartSideBar from "./cart/CartSideBar";
import { CgShoppingBag } from "react-icons/cg";
import { useShoppingCart } from "use-shopping-cart";
import ThemeToggler from "./theme/ThemeToggler";
import { usePathname } from "next/navigation";
import { Bike } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { useWishlist } from "@/context/WishlistContext";

const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  const [header, setHeader] = useState<boolean>(false);
  const pathname = usePathname();
  const { wishlist } = useWishlist();

  useEffect(() => {
    function handleScroll() {
      const currentPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setHeader(currentPosition > 50);
    }

    window.addEventListener("scroll", handleScroll);

    // Clean up listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-8 dark:bg-transparent shadow-lg dark:shadow-red-900"
      } sticky top-0 z-40 transition-all ${pathname === "/" && "bg-white"}`}
    >
      {/*  className="bg-white shadow-lg sticky top-0 py-8 z-40 dark:bg-slate-900 dark:shadow-slate-500"> */}

      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="hover:text-current">
          <h1 className="text-[26px] flex">
            <Bike />
            <span className="text-primary">B</span>
            <span className="text-black dark:text-white">ikezz.</span>
          </h1>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav containerStyles="flex gap-[36px]" />
          {/* wishlist */}
          <div className="relative cursor-pointer">
            <Link href={"/wishlist"}>
              <FaHeart className="text-2xl text-black dark:text-white dark:hover:text-primary hover:text-primary" />
              <div className="bg-primary w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
                {wishlist && wishlist.length ? wishlist.length : "0"}
              </div>
            </Link>
          </div>
          {/* shopping bag */}
          <div
            className="relative cursor-pointer"
            onClick={() => handleCartClick()}
          >
            <CgShoppingBag className="text-2xl" />
            <div className="bg-primary w-[18px] h-[18px] absolute -right-1 -bottom-1 rounded-full text-white flex items-center justify-center text-sm font-medium">
              {cartCount}
            </div>
          </div>
          <ThemeToggler />
          <CartSideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
